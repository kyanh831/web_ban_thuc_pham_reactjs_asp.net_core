using System;
using System.Collections.Generic;
using System.Text.Json.Serialization;


namespace WebAPI.Models
{
    public partial class TaiKhoan
    {
        public TaiKhoan()
        {
            BinhLuanBlog = new HashSet<BinhLuanBlog>();
            BinhLuanSp = new HashSet<BinhLuanSp>();
            ChiTietBaiViet = new HashSet<ChiTietBaiViet>();
            DanhGia = new HashSet<DanhGia>();
            Hoadon = new HashSet<Hoadon>();
            Chat = new HashSet<Chat>();
            PhieuDatHang = new HashSet<PhieuDatHang>();
            SpyeuThich = new HashSet<SpyeuThich>();
        }
        public int MaNguoiDung { get; set; }
        public string HoTenNguoiDung { get; set; }
        public string Sdt { get; set; }
        [JsonIgnore]
        public string MatKhauDangNhap { get; set; }
        public string Email { get; set; }
        public string AnhDaiDien { get; set; }
        public byte? TrangThai { get; set; }
        public byte? Quyen { get; set; }
        public string DiaChi { get; set; }


        public virtual ICollection<BinhLuanBlog> BinhLuanBlog { get; set; }
        public virtual ICollection<BinhLuanSp> BinhLuanSp { get; set; }
        public virtual ICollection<ChiTietBaiViet> ChiTietBaiViet { get; set; }
        public virtual ICollection<DanhGia> DanhGia { get; set; }
        public virtual ICollection<Hoadon> Hoadon { get; set; }
        public virtual ICollection<Chat> Chat { get; set; }
        public virtual ICollection<PhieuDatHang> PhieuDatHang { get; set; }
        public virtual ICollection<SpyeuThich> SpyeuThich { get; set; }
    }
}
