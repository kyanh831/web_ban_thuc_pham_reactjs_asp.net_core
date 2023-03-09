using System;
using System.Collections.Generic;

// Code scaffolded by EF Core assumes nullable reference types (NRTs) are not used or disabled.
// If you have enabled NRTs for your project, then un-comment the following line:
// #nullable disable

namespace WebAPI.Models
{
    public partial class ThongTinSanPham
    {
        public ThongTinSanPham()
        {
            ChiTietKm = new HashSet<ChiTietKm>();
            ChiTietPhieuDatHang = new HashSet<ChiTietPhieuDatHang>();
            PhieuNhapHang = new HashSet<PhieuNhapHang>();
        }

        public int MaThongTinSanPham { get; set; }
        public int MaSp { get; set; }
        public DateTime? NgayCapNhat { get; set; }
        public string TenThuocTinh { get; set; }
        public int? SoLuong { get; set; }
        public int? DonGiaKm { get; set; }
        public int? DonGiaGoc { get; set; }
        public int? DonGiaBan { get; set; }
        public int? DonGiaNhap { get; set; }
        public string DonViTinh { get; set; }

        public virtual SanPham MaSpNavigation { get; set; }
        public virtual ICollection<ChiTietKm> ChiTietKm { get; set; }
        public virtual ICollection<ChiTietPhieuDatHang> ChiTietPhieuDatHang { get; set; }
        public virtual ICollection<PhieuNhapHang> PhieuNhapHang { get; set; }
    }
}
