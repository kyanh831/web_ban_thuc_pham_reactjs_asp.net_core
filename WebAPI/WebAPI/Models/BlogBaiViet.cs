using System;
using System.Collections.Generic;

// Code scaffolded by EF Core assumes nullable reference types (NRTs) are not used or disabled.
// If you have enabled NRTs for your project, then un-comment the following line:
// #nullable disable

namespace WebAPI.Models
{
    public partial class BlogBaiViet
    {
        public BlogBaiViet()
        {
            AnhBlog = new HashSet<AnhBlog>();
            BinhLuanBlog = new HashSet<BinhLuanBlog>();
            ChiTietBaiViet = new HashSet<ChiTietBaiViet>();
        }

        public int MaBaiViet { get; set; }
        public int MaChuDe { get; set; }
        public string TieuDe { get; set; }
        public string TenBaiViet { get; set; }
        public string NoiDung { get; set; }
        public string TuKhoa { get; set; }
        public byte? TrangThai { get; set; }
        public int? LuotThich { get; set; }
        public DateTime? NgayTao { get; set; }

        public virtual ChuDeBaiViet MaChuDeNavigation { get; set; }
        public virtual ICollection<AnhBlog> AnhBlog { get; set; }
        public virtual ICollection<BinhLuanBlog> BinhLuanBlog { get; set; }
        public virtual ICollection<ChiTietBaiViet> ChiTietBaiViet { get; set; }
    }
}
