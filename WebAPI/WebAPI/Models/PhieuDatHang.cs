using System;
using System.Collections.Generic;

// Code scaffolded by EF Core assumes nullable reference types (NRTs) are not used or disabled.
// If you have enabled NRTs for your project, then un-comment the following line:
// #nullable disable

namespace WebAPI.Models
{
    public partial class PhieuDatHang
    {
        public PhieuDatHang()
        {
            ChiTietPhieuDatHang = new HashSet<ChiTietPhieuDatHang>();
            Hoadon = new HashSet<Hoadon>();
        }

        public Guid MaPhieuDatHang { get; set; }
        public int MaNguoiDung { get; set; }
        public int? TongTien { get; set; }
        public bool? TrangThai { get; set; }
        public string NguoiNhan { get; set; }
        public string Sdt { get; set; }
        public string GhiChu { get; set; }
        public string DiaChi { get; set; }
        public DateTime? NgayLap { get; set; }
        public string TinhTrangDonHang { get; set; }
        public bool? HinhThucThanhToan { get; set; }
        public string DonViGiaoHang { get; set; }

        public virtual TaiKhoan MaNguoiDungNavigation { get; set; }
        public virtual ICollection<ChiTietPhieuDatHang> ChiTietPhieuDatHang { get; set; }
        public virtual ICollection<Hoadon> Hoadon { get; set; }
    }
}
