using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Cryptography;
using System.Text;
using System.Text.Json;
using System.Threading.Tasks;
using FirstWebApi_Backend.Data;
using FirstWebApi_Backend.Entity;
using Microsoft.EntityFrameworkCore;

namespace API.Data
{
    public class Seed
    {
        public static async Task SeedUsers(DataContext context){
         if(await context.users.AnyAsync()) return;
         
            var userData= await File.ReadAllTextAsync("Data/UserSeedData.json");

            var options= new JsonSerializerOptions{PropertyNameCaseInsensitive=true};

                var user= JsonSerializer.Deserialize<List<UserEntity>>(userData);

                foreach(var u in user){
                    using var hmac= new HMACSHA512();
                    u.Name=u.Name.ToLower();
                    u.PasswordHash=hmac.ComputeHash(Encoding.UTF8.GetBytes("password"));
                    u.PasswordSalt=hmac.Key;

                    context.users.Add(u);

                }

                await context.SaveChangesAsync();
        }
    }
}