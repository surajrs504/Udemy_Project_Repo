using API.DTO;
using API.Interface;
using AutoMapper;
using FirstWebApi_Backend.Data;
using FirstWebApi_Backend.Entity;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Claims;
using System.Threading.Tasks;

namespace FirstWebApi_Backend.Controllers
{
   [Authorize]
    public class UsersController:BaseApiController
    {
       private readonly IUserRepository _userRepository;
       private readonly IMapper _mapper;
       public UsersController(IUserRepository data, IMapper mapper){
        _userRepository=data;
        _mapper=mapper;
       }

        
        [HttpGet("user")]
        public async Task<ActionResult<IEnumerable<MemberDto>>> GetUser()
        {
            /*var users = data.users.ToList();
            return users;*/
          //   return NotFound();

            /*UserEntity u = new UserEntity("uraj");
            data.users.Add(u);
            data.SaveChanges();*/

            var users= await _userRepository.GetMembersAsync();

           
            return Ok( users);
        }

        [HttpGet("{username}")]  
        public async Task<ActionResult<MemberDto>> GetUser(string username)
        {

           

           return await _userRepository.GetMemberAsync(username);
        }

        // [HttpGet("{id}")]
        // public ActionResult<UserEntity> GetmUser(int id)
        // {
        //     var a = data.users.Find(id);
        //     return a;
        // }

       
        //[HttpGet("{name}")]
        // [Route("hello/{name}")]
        // public void addUser(string name)
        // {
        //     /*var users = data.users.ToList();
        //     return users;*/
        //     // return NotFound();
        //     UserEntity u = new UserEntity(name);
        //     data.users.Add(u);
        //     data.SaveChanges();

            
        // }


      [HttpPut]
      public async Task<ActionResult> UpdateUser(MemberUpdateDto mem){
        var username= User.FindFirst(ClaimTypes.NameIdentifier)?.Value;
        var user=await _userRepository.GetUserByUsernameAsync(username);
        if(user==null) return NotFound();
          Console.WriteLine("user got");
      var hi=  _mapper.Map(mem,user);
 Console.WriteLine(hi);
        if( await _userRepository.SaveAllAsync()) return NoContent();

        return BadRequest("Failed to update userddd");

      }



    }
}
