using System;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using WebAPI.Models;
using Newtonsoft.Json.Serialization;
using System.Security.Cryptography;
using System.Text;
using System.IdentityModel.Tokens.Jwt;
using Microsoft.IdentityModel.Tokens;
using System.Security.Claims;
using WebAPI.Helpers;
using Microsoft.Extensions.Options;
using Microsoft.AspNetCore.Authorization;

namespace WebAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    [Authorize(Roles ="1,2")]
    public class TaiKhoansController : ControllerBase
    {
        private readonly QL_BanHang_Online_v4Context _context;
        private readonly AppSettings _appSettings;

        //IConfiguration configuration
        public TaiKhoansController(QL_BanHang_Online_v4Context context,
            IOptions<AppSettings> appSettings
            )
        {
            _context = context;
            _appSettings = appSettings.Value;
        }
        [Route("page")]
        [HttpGet("numb")]
        public async Task<JsonResult> GetUserByPage(int numb)
        {

            double numberOfPage;
            double total = await _context.TaiKhoan.CountAsync();
            int numberProductInPage = 10;


            if (Math.Round(total / numberProductInPage) == 0)
            {
                numberOfPage = 1;
            }
            else
            {

                numberOfPage = Math.Round(total / numberProductInPage);
            }

            if (numb < 1 || numb > numberOfPage)
            {
                return new JsonResult(new { errorCode = 1, messges = "Not exist page number" });
            }

            var users = await _context.TaiKhoan.Select(
                x => new
                {
                    x.MaNguoiDung,
                    x.HoTenNguoiDung,
                    x.AnhDaiDien,
                    x.Sdt,
                    x.TrangThai,
                    x.Quyen,
                    x.Email,
                }).Skip((numb - 1) * numberProductInPage).Take(numberProductInPage).ToListAsync();
            return new JsonResult(new { errorCode = 0, messges = "Success", users, numberOfPage });
        }
        [HttpGet("{id:int}")]
        public async Task<JsonResult> GetById(int id)
        {

            var user = await _context.TaiKhoan.FindAsync(id);

            if (user == null)
            {
                return new JsonResult(new { errorCode = 1, messges = "user not exist" });
            }

            return new JsonResult(new { errorCode = 0, messges = "ok",user });
        }

        [HttpPut("{id}")]
        public async Task<JsonResult> Edit(int id, TaiKhoan taiKhoan)
        {
            if (id != taiKhoan.MaNguoiDung)
            {
                return new JsonResult(new { errorCode = 1, messges = "user not exist!" });
            }

            _context.Entry(taiKhoan).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!TaiKhoanExists(id))
                {
                    return new JsonResult(new { errorCode = 1, messges = "user not exist!" });
                }
                else
                {
                    throw;
                }
            }

            return new JsonResult(new { errorCode = 0, messges = "ok" });
        }
        [HttpPost("Add")]
        public async Task<JsonResult> Add(TaiKhoan taiKhoan)
        {
            try
            {
                GetMD5(taiKhoan.MatKhauDangNhap.ToString());
                _context.TaiKhoan.Add(taiKhoan);
                await _context.SaveChangesAsync();
            }
            catch
            {
                return new JsonResult(new { errorCode = 1, messges = "user exist!" });
            }
            return new JsonResult(new { errorCode = 0, messges = "ok", taiKhoan });
        } 
        [HttpDelete("{id}")]
        public async Task<JsonResult> Delete(int id)
        {
            var taiKhoan = await _context.TaiKhoan.FindAsync(id);
            if (taiKhoan == null)
            {
                return new JsonResult(new { errorCode = 1, messges = "user not exist!" });
            }
            _context.TaiKhoan.Remove(taiKhoan);
            await _context.SaveChangesAsync();

            return new JsonResult(new { errorCode = 0, messges = "ok" });
        }

        private bool TaiKhoanExists(int id)
        {
            return _context.TaiKhoan.Any(e => e.MaNguoiDung == id);
        }

        public static string GetMD5(string str)
        {
            MD5 md5 = new MD5CryptoServiceProvider();
            byte[] fromData = Encoding.UTF8.GetBytes(str);
            byte[] targetData = md5.ComputeHash(fromData);
            string byte2String = null;

            for (int i = 0; i < targetData.Length; i++)
            {
                byte2String += targetData[i].ToString("x2");

            }
            return byte2String;
        }
    }
}
