using FirstWebApi_Backend.Data;
using FirstWebApi_Backend.Entity;
using FirstWebApi_Backend.DTO;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Cryptography;
using System.Text;
using System.Threading.Tasks;

using Microsoft.EntityFrameworkCore;
using FirstWebApi_Backend.Interface;

namespace FirstWebApi_Backend.Controllers
{
    public class AccountController :BaseApiController
    {
        private readonly DataContext data;

        private readonly ITokenService _tokenService;
       
        public AccountController(DataContext d, ITokenService tokenService)
        {
            _tokenService = tokenService;
            data = d;
        }

        [HttpPost("register")]
        public async Task<ActionResult<UserDto>> Register(RegisterDto rd)
        {
            if(await UserExist(rd.username)) return BadRequest("Username is taken");
            using var hmac = new HMACSHA512();

            var user = new UserEntity
            { 
                Name=rd.username, 
                PasswordHash=hmac.ComputeHash(Encoding.UTF8.GetBytes(rd.password)),
                PasswordSalt=hmac.Key

            };
            data.users.Add(user);
            await data.SaveChangesAsync();
            return new UserDto
            {
                Username = user.Name,
                Token = _tokenService.CreateToken(user)

            };
        }

        [HttpPost("login")]
        public async Task<ActionResult<UserDto>> Login(LoginDto ld)
        {
            var user = await data.users.SingleOrDefaultAsync(x => x.Name == ld.username);

            if (user == null) return Unauthorized("invalid username");

           using var hmac = new HMACSHA512(user.PasswordSalt);

            var computedhash = hmac.ComputeHash(Encoding.UTF8.GetBytes(ld.password));

            for(int i=0; i < computedhash.Length; i++)
            {
                if (computedhash[i] != user.PasswordHash[i]) return Unauthorized("invalid password");
            }
            return new UserDto
            {
                Username = user.Name,
                Token = _tokenService.CreateToken(user)

            };
        }
        private async Task<bool> UserExist(string username){
                return await data.users.AnyAsync(x=>x.Name==username.ToLower());
        }

    }

    
}
