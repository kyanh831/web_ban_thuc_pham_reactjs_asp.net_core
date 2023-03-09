using System;
using System.Collections.Generic;

// Code scaffolded by EF Core assumes nullable reference types (NRTs) are not used or disabled.
// If you have enabled NRTs for your project, then un-comment the following line:
// #nullable disable

namespace WebAPI.Models
{
    public partial class Hoadon
    {
        public Guid MaHoaDon { get; set; }
        public Guid MaPhieuDatHang { get; set; }
        public byte? TrangThai { get; set; }
        public int MaNguoiDung { get; set; }

        public virtual TaiKhoan MaNguoiDungNavigation { get; set; }
        public virtual PhieuDatHang MaPhieuDatHangNavigation { get; set; }
    }
}
