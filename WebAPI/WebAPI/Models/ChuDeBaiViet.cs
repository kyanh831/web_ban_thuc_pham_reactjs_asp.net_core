using System;
using System.Collections.Generic;

// Code scaffolded by EF Core assumes nullable reference types (NRTs) are not used or disabled.
// If you have enabled NRTs for your project, then un-comment the following line:
// #nullable disable

namespace WebAPI.Models
{
    public partial class ChuDeBaiViet
    {
        public ChuDeBaiViet()
        {
            BlogBaiViet = new HashSet<BlogBaiViet>();
        }

        public int MaChuDe { get; set; }
        public string TenChuDe { get; set; }

        public virtual ICollection<BlogBaiViet> BlogBaiViet { get; set; }
    }
}
