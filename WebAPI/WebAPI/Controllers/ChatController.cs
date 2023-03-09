using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using WebAPI.Models;

namespace WebAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    [Authorize(Roles = "1,2,0")]
    public class ChatController : ControllerBase
    {
        private readonly QL_BanHang_Online_v4Context _context;

        public ChatController(QL_BanHang_Online_v4Context context)
        {
            _context = context;
        }
        [Route("user")]
        [HttpGet("id")]
        public async Task<JsonResult> GetChat(int id)
        {
            
            var messages = await  _context.Chat
                .Where(x => x.MaNguoiDung == id).Select(x=> new { 
                x.MaChat,
                x.Admin,
                x.MaNguoiDungNavigation.HoTenNguoiDung,
                x.NoiDung,
                x.ThoiGian,
                x.DaDoc,
                }).Take(500).OrderBy(x=>x.ThoiGian).ToArrayAsync();
            if (messages == null)
            {
                return  new JsonResult(new { errorCode = 1, messges = "Not found messages" });
            }
            
            return new JsonResult(new { errorCode = 0, messges = "ok", messages });
        }



        // post chat
        [HttpPost]
        public async Task<JsonResult> PostChat(Chat chat)
        {
            _context.Chat.Add(chat);
            await _context.SaveChangesAsync();

            return new JsonResult(new { errorCode = 0, messges = "ok" });
        }
        //get list user chat 
        [Route("users")]
        [HttpGet]
        public async Task<JsonResult> GetUsersChat()
        {
            var getTimeNow = DateTime.Now;
            var usersChat = await _context.TaiKhoan
                .Select(x => new {
                    x.MaNguoiDung,
                    x.HoTenNguoiDung,
                    x.AnhDaiDien,
                    chatFirts = x.Chat.Select(x=> new
                    {
                        x.NoiDung,
                        x.ThoiGian,
                        x.DaDoc,
                        time = ((int)(getTimeNow - x.ThoiGian.GetValueOrDefault()).TotalMinutes),       
                    }).OrderBy(x=>x.ThoiGian).LastOrDefault(),
                }).Take(100).ToArrayAsync();
            if (usersChat == null)
            {
                return new JsonResult(new { errorCode = 1, messges = "Not found messages" });
            }

            return new JsonResult(new { errorCode = 0, messges = "ok", usersChat });
        }

        //get count new mess
        [Route("count")]
        [HttpGet]
        public async Task<JsonResult> CountNewMess()
        {
            var getTimeNow = DateTime.Now;
            var usersChat = await _context.TaiKhoan
                .Select(x => new {
                    x.MaNguoiDung,
                    x.HoTenNguoiDung,
                    x.AnhDaiDien,
                    chatFirts = x.Chat.Select(x => new
                    {
                        x.NoiDung,
                        x.ThoiGian,
                        x.DaDoc,
                        time = ((int)(getTimeNow - x.ThoiGian.GetValueOrDefault()).TotalMinutes),
                    }).OrderBy(x => x.ThoiGian).LastOrDefault(),
                }).Where(x => x.chatFirts.DaDoc == false).ToArrayAsync();
            if (usersChat == null)
            {
                return new JsonResult(new { errorCode = 1, messges = "Not found messages" });
            }

            return new JsonResult(new { errorCode = 0, messges = "ok", usersChat });
        }

        // update is read
        [Route("status-mess")]
        [HttpGet("id")]
        public async Task<JsonResult> UpdateIsRead(int id)
        {

            var lstUsers = await _context.Chat.Where(x => x.MaNguoiDung == id && x.DaDoc==false).ToArrayAsync();
            if (lstUsers == null)
            {
                return new JsonResult(new { errorCode = 1, messges = "Not found messages" });
            }
            foreach(Chat m in lstUsers)
            {
                m.DaDoc = true;
                await _context.SaveChangesAsync();
            }
            return new JsonResult(new { errorCode = 0, messges = "ok"});
        }
    }
}
