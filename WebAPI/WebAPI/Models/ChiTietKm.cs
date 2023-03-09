using System;
using System.Collections.Generic;

// Code scaffolded by EF Core assumes nullable reference types (NRTs) are not used or disabled.
// If you have enabled NRTs for your project, then un-comment the following line:
// #nullable disable

namespace WebAPI.Models
{
    public partial class ChiTietKm
    {
        public int MaKm { get; set; }
        public int MaThongTinSanPham { get; set; }
        public DateTime? NgayTao { get; set; }

        public virtual ChuongTrinhKhuyenMai MaKmNavigation { get; set; }
        public virtual ThongTinSanPham MaThongTinSanPhamNavigation { get; set; }
    }
}
