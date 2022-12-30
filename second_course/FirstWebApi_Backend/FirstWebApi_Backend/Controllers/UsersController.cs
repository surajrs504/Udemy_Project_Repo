using FirstWebApi_Backend.Data;
using FirstWebApi_Backend.Entity;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace FirstWebApi_Backend.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class UsersController:BaseApiController
    {
        private readonly DataContext data;

        public UsersController(DataContext d)
        {
            data = d;
        }

        [Authorize]
        [HttpGet("user")]
        public ActionResult<IEnumerable<UserEntity>> GetUser()
        {
            /*var users = data.users.ToList();
            return users;*/
            // return NotFound();

            /*UserEntity u = new UserEntity("uraj");
            data.users.Add(u);
            data.SaveChanges();*/

            return data.users.ToList();
        }

        [HttpGet("users")]
        public ActionResult<IEnumerable<UserEntity>> GetUsers()
        {

            return data.users.ToList();
        }

        [HttpGet("{id}")]
        public ActionResult<UserEntity> GetmUser(int id)
        {
            var a = data.users.Find(id);
            return a;
        }

       
        //[HttpGet("{name}")]
        [Route("hello/{name}")]
        public void addUser(string name)
        {
            /*var users = data.users.ToList();
            return users;*/
            // return NotFound();
            UserEntity u = new UserEntity(name);
            data.users.Add(u);
            data.SaveChanges();

            
        }


    }
}
