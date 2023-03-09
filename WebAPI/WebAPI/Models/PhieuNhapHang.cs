using System;
using System.Collections.Generic;

// Code scaffolded by EF Core assumes nullable reference types (NRTs) are not used or disabled.
// If you have enabled NRTs for your project, then un-comment the following line:
// #nullable disable

namespace WebAPI.Models
{
    public partial class PhieuNhapHang
    {
        public int MaPhieuNhap { get; set; }
        public int MaThongTinSanPham { get; set; }
        public int? SoLuongNhap { get; set; }
        public DateTime? NgayNhap { get; set; }
        public int? DonGiaNhap { get; set; }

        public virtual ThongTinSanPham MaThongTinSanPhamNavigation { get; set; }
    }
}
