using System;
using System.Collections.Generic;

// Code scaffolded by EF Core assumes nullable reference types (NRTs) are not used or disabled.
// If you have enabled NRTs for your project, then un-comment the following line:
// #nullable disable

namespace WebAPI.Models
{
    public partial class SanPham
    {
        public SanPham()
        {
            BinhLuanSp = new HashSet<BinhLuanSp>();
            HinhAnhSanPham = new HashSet<HinhAnhSanPham>();
            SpyeuThich = new HashSet<SpyeuThich>();
            ThongTinSanPham = new HashSet<ThongTinSanPham>();
        }

        public int MaSp { get; set; }
        public int MaLoaiSp { get; set; }
        public string TenSp { get; set; }
        public string TieuDe { get; set; }
        public string MoTa { get; set; }
        public byte? TrangThai { get; set; }
        public byte? HanDung { get; set; }
        public string TuKhoa { get; set; }
        public string XuatXu { get; set; }
        public string ThuongHieu { get; set; }

        public virtual LoaiSanPham MaLoaiSpNavigation { get; set; }
        public virtual ICollection<BinhLuanSp> BinhLuanSp { get; set; }
        public virtual ICollection<HinhAnhSanPham> HinhAnhSanPham { get; set; }
        public virtual ICollection<SpyeuThich> SpyeuThich { get; set; }
        public virtual ICollection<ThongTinSanPham> ThongTinSanPham { get; set; }
    }
}
