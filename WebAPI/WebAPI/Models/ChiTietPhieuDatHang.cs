using System;
using System.Collections.Generic;

// Code scaffolded by EF Core assumes nullable reference types (NRTs) are not used or disabled.
// If you have enabled NRTs for your project, then un-comment the following line:
// #nullable disable

namespace WebAPI.Models
{
    public partial class ChiTietPhieuDatHang
    {
        public ChiTietPhieuDatHang()
        {
            DanhGia = new HashSet<DanhGia>();
        }

        public Guid MaPhieuDatHang { get; set; }
        public int MaThongTinSanPham { get; set; }
        public int? SoLuongDat { get; set; }
        public int? DonGiaBan { get; set; }

        public virtual PhieuDatHang MaPhieuDatHangNavigation { get; set; }
        public virtual ThongTinSanPham MaThongTinSanPhamNavigation { get; set; }
        public virtual ICollection<DanhGia> DanhGia { get; set; }
    }
}
