using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.Options;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using WebAPI.Helpers;
using WebAPI.Models;
using WebAPI.Tools;

namespace WebAPI.Controllers.UserControllers
{
    [Route("api/[controller]")]
    [ApiController]
    [Authorize(Roles = "0")]

    public class NguoiDungsController : ControllerBase
    {
        private readonly QL_BanHang_Online_v4Context _context;
        private readonly IConfiguration _configuration;
        private readonly AppSettings _appSettings;
        private  NBCFAlgorithm _NBCF;

        public NguoiDungsController(QL_BanHang_Online_v4Context context,
            IOptions<AppSettings> appSettings
            )
        {
            _context = context;
            _appSettings = appSettings.Value;
        }

        [HttpGet("{id:int}")]
        public async Task<JsonResult> GetById(int id)
        {

            var user = await _context.TaiKhoan.Select(
                x => new
                {
                    x.AnhDaiDien,
                    x.MaNguoiDung,
                    x.HoTenNguoiDung,
                    x.Email,
                    x.Sdt,
                    x.DiaChi
                }
                ).Where(x => x.MaNguoiDung == id).FirstOrDefaultAsync();

            if (user == null)
            {
                return new JsonResult(new { errorCode = 1, messges = "user not exist" });
            }

            return new JsonResult(new { errorCode = 0, messges = "ok", user });
        }

        [Route("image")]
        [HttpPost]
        public async Task<JsonResult> UploadImgAsync(TaiKhoan taiKhoan)
        {
            try
            {
                //String anh = taiKhoan.AnhDaiDien.Split('/').LastOrDefault();

                var user = await _context.TaiKhoan.FindAsync(taiKhoan.MaNguoiDung);
                user.AnhDaiDien = taiKhoan.AnhDaiDien;
                _context.SaveChanges();
            }
            catch
            {
                return new JsonResult(new { errorCode = 1, messges = "can't upload img" });
            }
            return new JsonResult(new { errorCode = 0, messges = "ok" });

        }

        // get new oder
        [Route("new-order")]
        [HttpGet("id")]
        public async Task<JsonResult> NewOrder(int id)
        {
            var phieuDatHang = await _context.PhieuDatHang.Where(x => x.MaNguoiDung == id).Select(
                x => new
                {
                    x.MaPhieuDatHang,
                    x.MaNguoiDung,
                    x.NguoiNhan,
                    x.DiaChi,
                    x.DonViGiaoHang,
                    x.GhiChu,
                    x.TongTien,
                    x.TrangThai,
                    x.TinhTrangDonHang,
                    x.NgayLap,
                    x.Sdt,
                    
                }
                ).OrderByDescending(x=>x.NgayLap).FirstOrDefaultAsync();
            if(phieuDatHang == null)
            {
                return new JsonResult(new { errorCode = 1, messges = "user dont have order"});

            }
            var list = await _context.ChiTietPhieuDatHang
                .Where(x => x.MaPhieuDatHang == phieuDatHang.MaPhieuDatHang)
                .Select(x => new
                {
                    DuongDan = x.MaThongTinSanPhamNavigation.MaSpNavigation.HinhAnhSanPham.Select(t=>t.DuongDan).FirstOrDefault(),
                    TenSp = x.MaThongTinSanPhamNavigation.MaSpNavigation.TenSp,
                    TieuDe = x.MaThongTinSanPhamNavigation.MaSpNavigation.TieuDe,
                    MaSp = x.MaThongTinSanPhamNavigation.MaSp,
                    x.MaThongTinSanPhamNavigation.TenThuocTinh,
                    x.SoLuongDat,
                })
                .ToListAsync();
            return new JsonResult(new { errorCode = 0, messges = "ok",phieuDatHang,list});
        }

        // get 5 order
        [Route("orders")]
        [HttpGet("id")]
        public async Task<JsonResult> GetOrders(int id)
        {
            var phieuDatHangs = await _context.PhieuDatHang.Where(x => x.MaNguoiDung == id).Select(
                x => new
                {
                    x.MaPhieuDatHang,
                    x.MaNguoiDung,
                    x.TongTien,
                    x.TrangThai,
                    x.TinhTrangDonHang,
                    x.NgayLap,
                }
                ).OrderByDescending(x => x.NgayLap).Skip(0).Take(5).ToListAsync();
            
            return new JsonResult(new { errorCode = 0, messges = "ok", phieuDatHangs });
        }

        //product have been bought 
        [Route("product-bought")]
        [HttpGet]
        public async Task<JsonResult> GetProductBought(int maSp, int maNg)
        {
            var thongtinSanPhams = await _context.ChiTietPhieuDatHang
                        .Where(x => x.MaThongTinSanPhamNavigation.MaSp == maSp)
                        .Where(x => x.MaPhieuDatHangNavigation.MaNguoiDung == maNg)
                        .Select(o => new
                        {
                            o.MaThongTinSanPham,
                            o.MaThongTinSanPhamNavigation.TenThuocTinh,
                        }).Distinct()
                   .ToListAsync();
            var maPhieuDatHang = await _context.ChiTietPhieuDatHang
                        .Where(x => x.MaThongTinSanPhamNavigation.MaSp == maSp)
                        .Where(x => x.MaPhieuDatHangNavigation.MaNguoiDung == maNg)
                        .Select(o => o.MaPhieuDatHang).Distinct().FirstOrDefaultAsync();
            return new JsonResult(new { errorCode = 0, messges = "ok", thongtinSanPhams,maPhieuDatHang });
        }

        //review rating 
        [Route("review")]
        [HttpPost]
        public async Task<JsonResult> RatingProduct(DanhGia danhGia)
        {
            
            if(danhGia.MaNguoiDung == null || danhGia.MaPhieuDatHang ==null || danhGia.MaThongTinSanPham == null)
            {
                return new JsonResult(new { errorCode = 2, messges = "not correct params" });
            }
            try
            {
                await _context.DanhGia.AddAsync(danhGia);
                await _context.SaveChangesAsync();
                return new JsonResult(new { errorCode = 0, messges = "ok" });
            }
            catch
            {
                return new JsonResult(new { errorCode = 1, messges = "not correct params" });
            }
        }
        //NBCF 
        [Route("NBCF")]
        [HttpGet]
        public async Task<JsonResult> NBCF(int  id)
        {
            _NBCF = new NBCFAlgorithm();
            
           
            try
            {
                List<ProductRecommend> recommends = await _NBCF.GetListProductRecommend(id);
                recommends = recommends.Where(x=>x.ScoreRatingPrediction>0).OrderByDescending(x => x.ScoreRatingPrediction).Take(5).ToList();
                
                foreach(ProductRecommend i in recommends)
                {
                    foreach(HinhAnhSanPham j in _context.HinhAnhSanPham)
                    {
                        if(i.MaSp == j.MaSp)
                        {
                            i.DuongDan = j.DuongDan;
                        }
                    }
                }
                
                return new JsonResult(new { errorCode = 0, messges = "ok",recommends });
            }
            catch
            {
                return new JsonResult(new { errorCode = 1, messges = "not correct params" });
            }
        }

    }

}
