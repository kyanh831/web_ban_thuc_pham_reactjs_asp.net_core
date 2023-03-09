using CloudinaryDotNet;
using CloudinaryDotNet.Actions;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;
using WebAPI.Models;

namespace WebAPI.Controllers.AdminControllers
{
    [Route("api/[controller]")]
    [ApiController]
    [Authorize(Roles = "1,2")]
    public class AdminSanPhamsController : ControllerBase
    {
        private readonly QL_BanHang_Online_v4Context _context;

        public AdminSanPhamsController(QL_BanHang_Online_v4Context context)
        {
            _context = context;
        }
        //get all product
        [Route("page")]
        [HttpGet("numb")]
        public async Task<JsonResult> GetProductByPage(int numb)
        {
            double numberOfPage;
            double total = await _context.SanPham.CountAsync();
            int numberProductInPage = 10;


            if (Math.Round(total / numberProductInPage) == 0)
            {
                numberOfPage = 1;
            }
            else
            {

                numberOfPage = Math.Ceiling(total / numberProductInPage);
            }

            if (numb < 1 || numb > numberOfPage)
            {
                return new JsonResult(new { errorCode = 1, messges = "Not exist page number" });
            }

            var product = await _context.SanPham.Select(
                x => new
                {
                    x.MaSp,
                    x.TenSp,
                    x.TrangThai,
                    tt = x.ThongTinSanPham.Select(t => new {
                        t.MaThongTinSanPham,
                        t.TenThuocTinh,
                        t.SoLuong,                     
                       }),
                       tongsl=x.ThongTinSanPham.Sum(x=>x.SoLuong),
                    x.HinhAnhSanPham.FirstOrDefault().DuongDan,
                }).OrderByDescending(x => x.MaSp).Skip((numb - 1) * numberProductInPage).Take(numberProductInPage).ToListAsync();
            return new JsonResult(new { errorCode = 0, messges = "Success", product, numberOfPage });
        }

        //create new product
        [Route("Create")]
        [HttpPost]
        public async Task<JsonResult> CreatProduct(SanPham product)
        {
            try
            {
                _context.SanPham.Add(product);
                await _context.SaveChangesAsync();
            }
            catch
            {
                return new JsonResult(new { errorCode = 1, messges = "Can't create product"});
            }

            return new JsonResult(new { errorCode = 0, messges = "ok", product });
        }

        //get all category
        [Route("category")]
        [HttpGet]
        public async Task<JsonResult> GetCateGory()
        {
            

            var category = await _context.LoaiSanPham.ToListAsync();
            return new JsonResult(new { errorCode = 0, messges = "Success", category});
        }

        [Route("category")]
        [HttpPost]
        public async Task<JsonResult> AddCateGory(LoaiSanPham loaiSanPham)
        {
            await _context.LoaiSanPham.AddAsync(loaiSanPham);
            await _context.SaveChangesAsync();
            return new JsonResult(new { errorCode = 0, messges = "Success"});
        }

        //get product by id
        [HttpGet("{id}")]
        public async Task<JsonResult> GetProductById(int id)
        {
            var product = await _context.SanPham.FindAsync(id);

            if (product == null)
            {
                return new JsonResult(new { errorCode = 1, messges = "Not found product" });
            }
            return new JsonResult(new { errorCode = 0, messges = "ok", product });
        }
        private bool SanPhamExists(int id)
        {
            return _context.SanPham.Any(e => e.MaSp == id);
        }

        //edit product
        [HttpPut("{id}")]
        public async Task<JsonResult> PutSanPham(int id, SanPham product)
        {
            if (id != product.MaSp)
            {
                return new JsonResult(new { errorCode = 1, messges = "Not found product" });
            }

            _context.Entry(product).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!SanPhamExists(id))
                {
                    return new JsonResult(new { errorCode = 1, messges = "Not found product" });
                }
                else
                {
                    throw;
                }
            }

            return new JsonResult(new { errorCode = 0, messges = "ok", product });
        }

        //get options
        [Route("options")]
        [HttpGet("id")]
        public async Task<JsonResult> GetOptions(int id)
        {
            var options = await _context.ThongTinSanPham.Where(x=>x.MaSp==id).ToListAsync();
            if (options == null)
            {
                return new JsonResult(new { errorCode = 1, messges = "Product not have options yet" });
            }
            return new JsonResult(new { errorCode = 0, messges = "Success", options });
        }

        //add options
        [Route("options")]
        [HttpPost]
        public async Task<JsonResult> CreatOption(ThongTinSanPham thongTinSanPham)
        {
            try
            {
                _context.ThongTinSanPham.Add(thongTinSanPham);
                await _context.SaveChangesAsync();
            }
            catch
            {
                return new JsonResult(new { errorCode = 1, messges = "Can't create option!" });
            }

            return new JsonResult(new { errorCode = 0, messges = "ok"});
        }

        

        //get images
        [Route("images")]
        [HttpGet("id")]
        public async Task<JsonResult> GetImgs(int id)
        {
            var imgs = await _context.HinhAnhSanPham.Where(x => x.MaSp == id).ToListAsync();
            if (imgs == null)
            {
                return new JsonResult(new { errorCode = 1, messges = "Product not have imgs yet" });
            }
            return new JsonResult(new { errorCode = 0, messges = "Success", imgs });
        }

        //upload images
        [Route("images")]
        [HttpPost]
        public  JsonResult UploadImg(HinhAnhSanPham hinhAnhSanPham)
        {
            try
            {
                hinhAnhSanPham.DuongDan = hinhAnhSanPham.DuongDan.Split('/').LastOrDefault();
                _context.HinhAnhSanPham.Add(hinhAnhSanPham);
                _context.SaveChanges();
            }
            catch
            {
                return new JsonResult(new { errorCode = 1, messges = "can't insert img" });
            }
            return new JsonResult(new { errorCode = 0, messges = "ok" });

        }


        //delete 
        [HttpDelete("{id}")]
        public async Task<JsonResult> DeleteSanPham(int id)
        {
            var product = await _context.SanPham.FindAsync(id);
            
            if (product == null)
            {
                return new JsonResult(new { errorCode = 1, messges = "Not found product" });
            }
            var options = await _context.ThongTinSanPham.Where(x => x.MaSp == id).ToListAsync();
            var imgs = await _context.HinhAnhSanPham.Where(x => x.MaSp == id).ToListAsync();

            foreach(ThongTinSanPham t in options)
            {
                _context.ThongTinSanPham.Remove(t);
            }
            foreach (HinhAnhSanPham h in imgs)
            {
                _context.HinhAnhSanPham.Remove(h);
            }
            _context.SanPham.Remove(product);
            await _context.SaveChangesAsync();

            return new JsonResult(new { errorCode = 0, messges = "ok" });
        }

        //delete image
        [Route("image")]
        [HttpDelete("maHinh")]
        public async Task<JsonResult> DeleteImage(int maHinh)
        {
            var img = await _context.HinhAnhSanPham.FindAsync(maHinh);

            if (img == null)
            {
                return new JsonResult(new { errorCode = 1, messges = "Not found img" });
            }

            _context.HinhAnhSanPham.Remove(img);
            await _context.SaveChangesAsync();

            return new JsonResult(new { errorCode = 0, messges = "ok" });
        }


    }
}
