using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace WebAPI.Models
{
    public class Review
    {
        QL_BanHang_Online_v4Context _context = new QL_BanHang_Online_v4Context();

        public int MaThongTinSanPham { get;  set; }
        public int MaNguoiDung { get; set; }
        public Guid MaPhieuDatHang { get; set; }
        public string HoTenNguoiDung { get; set; }
        public string AnhDaiDien { get; set; }
        public string NoiDung { get; set; }
        public DateTime? ThoiGian { get; set; }
        public double? DiemDanhGia { get; set; }

        public Review()
        {
        }

        public Review(int maThongTinSanPham, int maNguoiDung, Guid maPhieuDatHang, string hoTenNguoiDung, string anhDaiDien, string noiDung, DateTime? thoiGian, double? diemDanhGia)
        {
            MaThongTinSanPham = maThongTinSanPham;
            MaNguoiDung = maNguoiDung;
            MaPhieuDatHang = maPhieuDatHang;
            HoTenNguoiDung = hoTenNguoiDung;
            AnhDaiDien = anhDaiDien;
            NoiDung = noiDung;
            ThoiGian = thoiGian;
            DiemDanhGia = diemDanhGia;
        }
    }
}
