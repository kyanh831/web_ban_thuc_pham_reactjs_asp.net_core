using System;
using System.Collections.Generic;

// Code scaffolded by EF Core assumes nullable reference types (NRTs) are not used or disabled.
// If you have enabled NRTs for your project, then un-comment the following line:
// #nullable disable

namespace WebAPI.Models
{
    public partial class AnhBlog
    {
        public int IdAnh { get; set; }
        public string DuongDan { get; set; }
        public int MaBaiViet { get; set; }

        public virtual BlogBaiViet MaBaiVietNavigation { get; set; }
    }
}
