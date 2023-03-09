using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using WebAPI.Models;
using WebAPI.Tools;

namespace WebAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class SanPhamsController : ControllerBase
    {
        private readonly QL_BanHang_Online_v4Context _context;

        public SanPhamsController(QL_BanHang_Online_v4Context context)
        {
            _context = context;
        }

        [HttpGet]
        public async Task<JsonResult> GetSanPham()
        {
            var product = await _context.SanPham.Select(
                x => new
                {
                    x.MaSp,
                    x.TenSp,
                    x.TieuDe,
                    tt = x.ThongTinSanPham.Select(t => new
                    {
                        t.MaThongTinSanPham,
                        t.SoLuong,
                        t.TenThuocTinh,
                        t.DonGiaBan,
                        t.DonGiaKm,
                        km = t.ChiTietKm.Select(k => new { k.MaKmNavigation.MaKm, k.MaKmNavigation.PhanTramKm })
                    }),
                    x.HinhAnhSanPham.FirstOrDefault().DuongDan,
                    x.MaLoaiSpNavigation.TenLoaiSp,
                }).ToListAsync();
            return new JsonResult(new { errorCode = 0, messges = "Success", product });
        }

        [HttpGet("{id}")]
        public async Task<JsonResult> GetSanPham(int id)
        {
            var product = await _context.SanPham.Select(
                x => new
                {
                    x.MaSp,
                    x.TenSp,
                    x.MoTa,
                    x.XuatXu,
                    x.ThuongHieu,
                    x.HanDung,
                    x.TuKhoa,
                    tt = x.ThongTinSanPham.Select(t => new
                    {
                        t.MaThongTinSanPham,
                        t.SoLuong,
                        t.TenThuocTinh,
                        t.DonGiaBan,
                        t.DonGiaKm,
                        km = t.ChiTietKm.Select(k => new { k.MaKmNavigation.MaKm, k.MaKmNavigation.PhanTramKm })
                    }),
                    hinh = x.HinhAnhSanPham.Select(h => new { h.MaHinh, h.DuongDan }),
                    x.MaLoaiSpNavigation.TenLoaiSp,
                }).FirstOrDefaultAsync(x => x.MaSp == id);
            if (product == null)
            {
                return new JsonResult(new { errorCode = 1, messges = "Not found product" });
            }
            return new JsonResult(new { errorCode = 0, messges = "ok", product });
        }

        [Route("search")]
        [HttpGet("name")]
        public async Task<JsonResult> SearchProductByName(string name)
        {
            var product = await _context.SanPham
                .Where(x => x.TenSp.Contains(name)).Take(4)
                .Select(x => new
                {
                    x.TenSp,
                    x.MaSp,
                    x.TieuDe,
                    x.HinhAnhSanPham.FirstOrDefault().DuongDan,
                    x.ThongTinSanPham.FirstOrDefault().DonGiaKm,
                    x.ThongTinSanPham.FirstOrDefault().DonGiaBan
                }).ToArrayAsync();
            if (product == null)
            {
                return new JsonResult(new { errorCode = 1, messges = "Not found product" });
            }

            return new JsonResult(new { errorCode = 0, messges = "ok", product });
        }

        private bool SanPhamExists(int id)
        {
            return _context.SanPham.Any(e => e.MaSp == id);
        }
        
        [Route("images")]
        [HttpGet("id")]
        //get images product
        public async Task<JsonResult> GetImagesProduct(int id)
        {
            var images = await _context.HinhAnhSanPham
                .Where(x => x.MaSp == id)
                .Select(x => x.DuongDan).ToListAsync();
            return new JsonResult(new { errorCode = 0, messges = "Success", images });
        }
        
        //get product by page
        [Route("page")]
        [HttpGet("numb")]
        public async Task<JsonResult> GetProductByPage(int numb)
        {

            double numberOfPage;
            double total = await _context.SanPham.CountAsync();
            int numberProductInPage = 9;


            if (Math.Round(total / numberProductInPage) == 0)
            {
                numberOfPage = 1;
            }
            else
            {

                numberOfPage = Math.Ceiling(total / numberProductInPage);
            }

            if (numb < 1 || numb > numberOfPage)
            {
                return new JsonResult(new { errorCode = 1, messges = "Not exist page number" });
            }

            var product = await _context.SanPham.Select(
                x => new
                {
                    x.MaSp,
                    x.TenSp,
                    x.TieuDe,
                    tt = x.ThongTinSanPham.Select(t => new
                    {
                        t.MaThongTinSanPham,
                        t.SoLuong,
                        t.TenThuocTinh,
                        t.DonGiaBan,
                        t.DonGiaKm,
                        km = t.ChiTietKm.Select(k => new { k.MaKmNavigation.MaKm, k.MaKmNavigation.PhanTramKm })
                    }),
                    x.HinhAnhSanPham.FirstOrDefault().DuongDan,
                    x.MaLoaiSpNavigation.TenLoaiSp,
                }).Skip((numb - 1) * numberProductInPage).Take(numberProductInPage).ToListAsync();
            return new JsonResult(new { errorCode = 0, messges = "Success", product, numberOfPage });
        }

        //get product by new
        [Route("new")]
        [HttpGet]
        public async Task<JsonResult> GetProductByNew()
        {


            var product = await _context.SanPham.Select(
                x => new
                {
                    x.MaSp,
                    x.TenSp,
                    x.TieuDe,
                    tt = x.ThongTinSanPham.Select(t => new
                    {
                        t.MaThongTinSanPham,
                        t.SoLuong,
                        t.TenThuocTinh,
                        t.DonGiaBan,
                        t.DonGiaKm,
                        km = t.ChiTietKm.Select(k => new { k.MaKmNavigation.MaKm, k.MaKmNavigation.PhanTramKm })
                    }),
                    x.HinhAnhSanPham.FirstOrDefault().DuongDan,
                    x.MaLoaiSpNavigation.TenLoaiSp,
                }).OrderByDescending(x => x.MaSp).Take(10).ToListAsync();
            return new JsonResult(new { errorCode = 0, messges = "Success", product });
        }
        
        //get product by promotion
        [Route("promotion")]
        [HttpGet]
        public async Task<JsonResult> GetProductByPromotion()
        {
            var product = await _context.SanPham
                .Where(t=>t.ThongTinSanPham.Any(t=>t.ChiTietKm.Count()!=0))
                .Select(
                x => new
                {
                    x.MaSp,
                    x.TenSp,
                    x.TieuDe,
                    tt = x.ThongTinSanPham
                    .Where(t=>t.ChiTietKm.Count() !=0)
                    .Select(t => new
                    {
                        t.MaThongTinSanPham,
                        t.DonGiaBan,
                        t.DonGiaKm,
                        km = t.ChiTietKm.Select(k => new { k.MaKmNavigation.MaKm, k.MaKmNavigation.PhanTramKm })
                    }),
                    x.HinhAnhSanPham.FirstOrDefault().DuongDan,
                    x.MaLoaiSpNavigation.TenLoaiSp,
                }).Take(10).ToListAsync();
            return  new JsonResult(new { errorCode = 0, messges = "Success" , product });
        }

        //get product by categoryId
        [Route("category")]
        [HttpGet("cate")]
        public async Task<JsonResult> GetProductByCategoryId(int cate)
        {

                if(cate == 0)
            {
                var product = await _context.SanPham
                .Select(
                x => new
                {
                    x.MaSp,
                    x.TenSp,
                    x.TieuDe,
                    tt = x.ThongTinSanPham.Select(t => new
                    {
                        t.MaThongTinSanPham,
                        t.SoLuong,
                        t.TenThuocTinh,
                        t.DonGiaBan,
                        t.DonGiaKm,
                        km = t.ChiTietKm.Select(k => new { k.MaKmNavigation.MaKm, k.MaKmNavigation.PhanTramKm })
                    }),
                    x.HinhAnhSanPham.FirstOrDefault().DuongDan,
                    x.MaLoaiSpNavigation.TenLoaiSp,
                }).Take(8).ToListAsync();
                return new JsonResult(new { errorCode = 0, messges = "Success", product });

            }
            else
            {
                var product = await _context.SanPham
                .Where(x => x.MaLoaiSp == cate)
                .Select(
                x => new
                {
                    x.MaSp,
                    x.TenSp,
                    x.TieuDe,
                    tt = x.ThongTinSanPham.Select(t => new
                    {
                        t.MaThongTinSanPham,
                        t.SoLuong,
                        t.TenThuocTinh,
                        t.DonGiaBan,
                        t.DonGiaKm,
                        km = t.ChiTietKm.Select(k => new { k.MaKmNavigation.MaKm, k.MaKmNavigation.PhanTramKm })
                    }),
                    x.HinhAnhSanPham.FirstOrDefault().DuongDan,
                    x.MaLoaiSpNavigation.TenLoaiSp,
                }).Take(10).ToListAsync();
                return new JsonResult(new { errorCode = 0, messges = "Success", product });

            }


        }

        // product like
        [Route("like-product")]
        [HttpPost]
        public async Task<JsonResult> LikeProduct(SpyeuThich s)
        {
            var productLike = await _context.SpyeuThich.Where(x => x.MaSp == s.MaSp && x.MaNguoiDung == s.MaNguoiDung).SingleOrDefaultAsync();

            if (productLike == null)
            {
                await _context.SpyeuThich.AddAsync(s);
                await _context.SaveChangesAsync();
                return new JsonResult(new { errorCode = 0, messges = "add like", state = 1 });

            }
            else
            {
                _context.SpyeuThich.Remove(productLike);
                await _context.SaveChangesAsync();
                return new JsonResult(new { errorCode = 0, messges = "remove like", state = 0 });
            }
        }
        
        //load product like
        [Route("like-product")]
        [HttpGet]
        public async Task<JsonResult> LoadLikeProduct(int id)
        {
            var productLike = await _context.SpyeuThich.Where(x => x.MaNguoiDung == id).ToArrayAsync();

            return new JsonResult(new { errorCode = 0, messges = "ok", productLike });


        }
        
        //product relate
        [Route("relate")]
        [HttpGet("id")]
        public async Task<JsonResult> GetProductRelate(int id)
        {
            var product = await _context.SanPham.FindAsync(id);

            if (product == null)
            {
                return new JsonResult(new { errorCode = 1, messges = "Not found product" });
            }
            else
            {
                var listRelate = await _context.SanPham
                    .Where(x => x.MaLoaiSp == product.MaLoaiSp)
                    .Select(x => new{
                                        x.MaSp,
                                        x.TenSp,
                                        x.TieuDe,
                                        tt = x.ThongTinSanPham.Select(t => new
                                        {
                                            t.MaThongTinSanPham,
                                            t.SoLuong,
                                            t.TenThuocTinh,
                                            t.DonGiaBan,
                                            t.DonGiaKm,
                                            km = t.ChiTietKm.Select(k => new { k.MaKmNavigation.MaKm, k.MaKmNavigation.PhanTramKm })
                                        }),
                                        x.HinhAnhSanPham.FirstOrDefault().DuongDan,
                                        x.MaLoaiSpNavigation.TenLoaiSp,}).Take(10).ToListAsync();
                if (listRelate == null)
                {
                    return new JsonResult(new { errorCode = 1, messges = "Not found product" });
                }
                return new JsonResult(new { errorCode = 0, messges = "ok", listRelate });

            }
        }

        //get comment
        [Route("comments")]
        [HttpGet("id")]
        public async Task<JsonResult> GetComment(int id)
        {
            var comments = await _context.BinhLuanSp
                .Where(x => x.MaSp == id).Take(5)
                .Select(
                x => new
                {
                    x.MaNguoiDungNavigation.HoTenNguoiDung,
                    x.MaNguoiDungNavigation.AnhDaiDien,
                    x.NoiDung,
                    x.ThoiGian,
                    x.LuotThich,
                }).ToListAsync();
            return new JsonResult(new { errorCode = 0, messges = "Success", comments });
        }

        // comment product
        [Route("comments")]
        [HttpPost]
        public async Task<JsonResult> CommentProduct(BinhLuanSp bl)
        {
             _context.BinhLuanSp.Add(bl);
            await _context.SaveChangesAsync();
            return new JsonResult(new { errorCode = 0, messges = "Success" });
        }

        //get review rating 
        [Route("reviews")]
        [HttpGet("id")]
        public async Task<JsonResult> GetRatingProduct(int id)
        {
            var product = _context.SanPham.Find(id);
            if (product == null)
                return new JsonResult(new { errorCode = 1, messges = "product not exist" });

            List<int> tt = _context.ThongTinSanPham.Where(x => x.MaSp == product.MaSp).Select(x => x.MaThongTinSanPham).ToList();



            var reviews1 =  _context.DanhGia
                .Select(x => new
                {
                    x.MaPhieuDatHang,
                    x.MaNguoiDung,
                    x.MaNguoiDungNavigation.HoTenNguoiDung,
                    x.MaNguoiDungNavigation.AnhDaiDien,
                    x.NoiDung,
                    x.ThoiGian,
                    x.DiemDanhGia,
                    x.MaThongTinSanPham,
                }).ToList();

            List<Review> reviews = new List<Review>();
            foreach(int i in tt)
            {
                foreach(var j in reviews1)
                {
                    if(i == j.MaThongTinSanPham)
                    {
                        Review r = new Review();
                        r.MaThongTinSanPham = j.MaThongTinSanPham;
                        r.MaNguoiDung = j.MaNguoiDung;
                        r.MaPhieuDatHang = j.MaPhieuDatHang;
                        r.HoTenNguoiDung = j.HoTenNguoiDung;
                        r.AnhDaiDien = j.AnhDaiDien;
                        r.NoiDung = j.NoiDung;
                        r.ThoiGian = j.ThoiGian;
                        r.DiemDanhGia = j.DiemDanhGia;
                        reviews.Add(r);
                    }
                }
            }

            return new JsonResult(new { errorCode = 0, messges = "ok", reviews });
        }





        //get 
        [Route("test")]
        [HttpGet]
        public async Task<JsonResult> getApriori(int id)
        {
            AprioriAlgorithm apriori = new AprioriAlgorithm();
            apriori.AddOder(_context.PhieuDatHang.ToList(), _context.ChiTietPhieuDatHang.ToList());
            List<Oder> lstOder = await apriori.getList();
            var lstC1 = await apriori.getListC1(lstOder);
            return new JsonResult(new { errorCode = 0, messges = "Success", lstOder,lstC1 });
        }



         [HttpPost]
        public async Task<JsonResult> PostSanPham(SanPham product)
        {
            _context.SanPham.Add(product);
            await _context.SaveChangesAsync();

            return new JsonResult(new { errorCode = 0, messges = "ok", product });
        }

        
    
    }
}
