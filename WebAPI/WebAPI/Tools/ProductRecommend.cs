using System.Linq;
using WebAPI.Models;
namespace WebAPI.Tools
{
    public class ProductRecommend
    {
        QL_BanHang_Online_v4Context _context = new QL_BanHang_Online_v4Context();
        public int ProductID { get; internal set; }
        public double ScoreRatingPrediction { get; internal set; }
        public string TenSp { get; set; }
        public int MaSp { get; set; }
        public string TenThuocTinh { get; set; }
        public int? DonGiaKm { get; set; }

        public string DuongDan { get; set; }


        public ProductRecommend(int productID)
        {
            ProductID = productID;
            if(ScoreRatingPrediction != null)
            {
                var sanPham = _context.ThongTinSanPham.Where(x => x.MaThongTinSanPham == productID)
                .Select(x => new
                {
                    x.MaSpNavigation.TenSp,
                    x.MaSp,
                    x.TenThuocTinh,
                    x.DonGiaKm
                }).ToList();
                TenSp = sanPham.ElementAtOrDefault(0).TenSp;
                MaSp = sanPham.ElementAtOrDefault(0).MaSp;
                TenThuocTinh = sanPham.ElementAtOrDefault(0).TenThuocTinh;
                DonGiaKm = sanPham.ElementAtOrDefault(0).DonGiaKm;

                DuongDan = "";

            }

        }
    }
}