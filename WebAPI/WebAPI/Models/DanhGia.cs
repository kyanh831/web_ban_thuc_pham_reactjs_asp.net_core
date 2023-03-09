using System;
using System.Collections.Generic;

// Code scaffolded by EF Core assumes nullable reference types (NRTs) are not used or disabled.
// If you have enabled NRTs for your project, then un-comment the following line:
// #nullable disable

namespace WebAPI.Models
{
    public partial class DanhGia
    {
        public Guid MaPhieuDatHang { get; set; }
        public int MaThongTinSanPham { get; set; }
        public int MaNguoiDung { get; set; }
        public double? DiemDanhGia { get; set; }
        public DateTime? ThoiGian { get; set; }
        public string NoiDung { get; set; }
        public string HinhAnh { get; set; }
        public string Video { get; set; }

        public virtual ChiTietPhieuDatHang Ma { get; set; }
        public virtual TaiKhoan MaNguoiDungNavigation { get; set; }
    }
}
