using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.Options;
using Microsoft.IdentityModel.Tokens;
using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Security.Claims;
using System.Security.Cryptography;
using System.Text;
using System.Threading.Tasks;
using WebAPI.Helpers;
using WebAPI.Models;

namespace WebAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class LoginController : ControllerBase
    {
        private readonly QL_BanHang_Online_v4Context _context;
        private readonly IConfiguration _configuration;
        private readonly AppSettings _appSettings;
        public LoginController(QL_BanHang_Online_v4Context context,
          IOptions<AppSettings> appSettings
          )
        {
            _context = context;
            _appSettings = appSettings.Value;
        }

        [HttpPost]
        public async Task<JsonResult> Login(LoginVM loginVM)
        {
            string password = GetMD5(loginVM.MatKhauDangNhap);

            var user = await _context.TaiKhoan
                .SingleOrDefaultAsync(kh => kh.Email == loginVM.Email && kh.MatKhauDangNhap == password);
            if (user == null)
            {
                return new JsonResult(new { errorCode = 1, messges = "Wrong password" });
            }

            //generate token
            var claims = new Claim[]
            {
                new Claim(ClaimTypes.Name, user.HoTenNguoiDung ),
                new Claim(ClaimTypes.Email, user.Email ),
                new Claim("id", user.MaNguoiDung.ToString() ),
                new Claim(ClaimTypes.Role, user.Quyen.ToString() ),
            };

            var tokenHandler = new JwtSecurityTokenHandler();
            var key = Encoding.ASCII.GetBytes(_appSettings.Secret);
            var tokenDescriptor = new SecurityTokenDescriptor
            {
                Subject = new ClaimsIdentity(claims),
                Expires = DateTime.UtcNow.AddDays(10),
                SigningCredentials = new SigningCredentials(new SymmetricSecurityKey(key), SecurityAlgorithms.HmacSha256Signature)
            };
            var token = tokenHandler.CreateToken(tokenDescriptor);

            return new JsonResult(new
            {
                errorCode = 0,
                messges = "login",
                user = new
                {
                    user.MaNguoiDung,
                    user.HoTenNguoiDung,
                    user.Email,
                    user.Sdt,
                    user.AnhDaiDien,
                    user.Quyen,
                    Token = tokenHandler.WriteToken(token)
                }
            });

        }
        [Route("Register")]
        [HttpPost]
        public async Task<JsonResult> Register(TaiKhoan taiKhoan)
        {
            var exist = _context.TaiKhoan.Where(x => x.Email == taiKhoan.Email.ToLower()).SingleOrDefault();
            if(exist != null)
                return new JsonResult(new { errorCode = 1, messges = "user exist!" });
            try
            {
                taiKhoan.MatKhauDangNhap = GetMD5(taiKhoan.MatKhauDangNhap.ToString());
                _context.TaiKhoan.Add(taiKhoan);
                await _context.SaveChangesAsync();
            }
            catch
            {
                return new JsonResult(new { errorCode = 1, messges = "user exist!" });
            }
            return new JsonResult(new { errorCode = 0, messges = "ok", taiKhoan });
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
