using System;
using System.Collections.Generic;

// Code scaffolded by EF Core assumes nullable reference types (NRTs) are not used or disabled.
// If you have enabled NRTs for your project, then un-comment the following line:
// #nullable disable

namespace WebAPI.Models
{
    public partial class BinhLuanBlog
    {
        public int MaNguoiDung { get; set; }
        public int MaBaiViet { get; set; }
        public DateTime? ThoiGian { get; set; }
        public string NoiDung { get; set; }
        public int? LuotThich { get; set; }

        public virtual BlogBaiViet MaBaiVietNavigation { get; set; }
        public virtual TaiKhoan MaNguoiDungNavigation { get; set; }
    }
}
