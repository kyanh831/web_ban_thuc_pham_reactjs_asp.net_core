using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using WebAPI.Models;

namespace WebAPI.Tools
{
    public class NBCFAlgorithm
    {
        private List<int> ListUserID;
        private List<int> ListProductID;
        private double[,] OriginalUtilityMatrix;
        private double[,] NormalizedUtilityMatrix;
        private double[,] ItemSimilarityMatrix;

        private readonly QL_BanHang_Online_v4Context _context = new QL_BanHang_Online_v4Context();

        public NBCFAlgorithm()
        {
            ListUserID = _context.TaiKhoan.Select(x => x.MaNguoiDung).ToList();
            ListProductID = _context.ThongTinSanPham.Select(x => x.MaThongTinSanPham).ToList();
            OriginalUtilityMatrix = new double[ListProductID.Count(), ListUserID.Count() + 1];
            NormalizedUtilityMatrix = new double[ListProductID.Count(), ListUserID.Count()];
            ItemSimilarityMatrix = new double[ListProductID.Count(), ListProductID.Count()];
            SetDefaultValueForArray(OriginalUtilityMatrix);
            SetDefaultValueForArray(NormalizedUtilityMatrix);
        }


        private void SetDefaultValueForArray(double[,] arr)
        {
            for (int i = 0; i < arr.GetLength(0); i++)
            {
                for (int j = 0; j < arr.GetLength(1); j++)
                {
                    arr[i, j] = 0;
                }
            }
        }
        public void GetOriginalUtilityMatrix()
        {
            int row = 0;
            foreach (var productID in ListProductID)
            {
                var ListUserEvaluation = _context.DanhGia.Where(x => x.MaThongTinSanPham == productID).ToList();
                foreach (var user in ListUserEvaluation)
                {
                    var index = ListUserID.IndexOf(user.MaNguoiDung);
                    OriginalUtilityMatrix[row, index] = user.DiemDanhGia.Value;
                }
                var average = ListUserEvaluation.Sum(x => x.DiemDanhGia) * 1.0 / ListUserEvaluation.Count();
                OriginalUtilityMatrix[row, OriginalUtilityMatrix.GetLength(1) - 1] = (double)average;
                row++;
            }
        }
        public void StartNormalizedUtilityMatrix()
        {
            for (int i = 0; i < OriginalUtilityMatrix.GetLength(0); i++)
            {
                for (int j = 0; j < OriginalUtilityMatrix.GetLength(1) - 1; j++)
                {
                    if (OriginalUtilityMatrix[i, j] != 0)
                    {
                        NormalizedUtilityMatrix[i, j] = OriginalUtilityMatrix[i, j] - OriginalUtilityMatrix[i, OriginalUtilityMatrix.GetLength(1) - 1];
                    }
                }
            }
        }
        private double CosineSimilarity(double[] p1, double[] p2)
        {
            double lengthP1 = LengthVector(p1);
            double lengthP2 = LengthVector(p2);
            double scalar = CalScalar(p1, p2);
            return scalar / (lengthP1 * lengthP2);
        }
        private double LengthVector(double[] p)
        {
            double result = 0;
            for (int i = 0; i < p.Length; i++)
            {
                result += Math.Pow(p[i], 2);
            }
            return Math.Sqrt(result);
        }
        private double CalScalar(double[] p1, double[] p2)
        {
            double result = 0;
            for (int i = 0; i < p1.Length; i++)
            {
                result += p1[i] * p2[i];
            }
            return result;
        }
        private double[] GetRow(double[,] p, int row)
        {
            double[] result = new double[p.GetLength(1)];
            for (int i = 0; i < p.GetLength(1); i++)
            {
                result[i] = p[row, i];
            }
            return result;
        }
        private double[] GetColumn(double[,] p, int col)
        {
            double[] result = new double[p.GetLength(0)];
            for (int i = 0; i < p.GetLength(0); i++)
            {
                result[i] = p[i, col];
            }
            return result;
        }
        public void StartCalItemSimilarityMatrix()
        {
            var amountItem = ListProductID.Count();
            for (int i = 0; i < amountItem; i++)
            {
                var row = GetRow(NormalizedUtilityMatrix, i);
                for (int j = 0; j < amountItem; j++)
                {
                    if (i == j)
                    {
                        ItemSimilarityMatrix[i, j] = 1;
                    }
                    else
                    {
                        ItemSimilarityMatrix[i, j] = CosineSimilarity(row, GetRow(NormalizedUtilityMatrix, j));
                    }
                }
            }
        }
        public double RatingPrediction(double[] p, int col)
        {
            double numerator = 0;
            double denominator = 0;
            for (int i = 0; i < p.Length; i++)
            {
                if (p[i] != 0)
                {
                    numerator += p[i] * ItemSimilarityMatrix[i, col];
                    denominator += Math.Abs(ItemSimilarityMatrix[i, col]);
                }
            }
            return numerator / denominator;
        }
        public async Task<List<ProductRecommend>> GetListProductRecommend(int userID)
        {
            GetOriginalUtilityMatrix();
            StartNormalizedUtilityMatrix();
            StartCalItemSimilarityMatrix();
            var col = ListUserID.IndexOf(userID);
            var ListItem = GetColumn(NormalizedUtilityMatrix, col);
            for (int i = 0; i < ListItem.Length; i++)
            {
                if (ListItem[i] == 0)
                {
                    ListItem[i] = RatingPrediction(ListItem, i);
                }
            }
            List<ProductRecommend> ListProductRecommend = new List<ProductRecommend>();
            for (int i = 0; i < ListItem.Length; i++)
            {
                ListItem[i] += OriginalUtilityMatrix[i, OriginalUtilityMatrix.GetLength(1) - 1];
                ListProductRecommend.Add(new ProductRecommend(ListProductID[i]) { ProductID = ListProductID[i], ScoreRatingPrediction = ListItem[i] });
            }
            return ListProductRecommend;
        }
    }
}
