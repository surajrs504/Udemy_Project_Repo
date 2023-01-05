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
    public class BuggyController:BaseApiController
    {
        private readonly DataContext _context;

        public BuggyController(DataContext data)
        {
            this._context = data;
        }
        [Authorize]
        [HttpGet("auth")]
        public ActionResult<string> GetSecret() // send 401 unauthroized
        {
            return "secret text";
        }

        [HttpGet("not-found")]
        public ActionResult<UserEntity> GetNotFound() // sends 404 not found
        {
            var thing = _context.users.Find(-1);
            if (thing == null) 
                return NotFound();
            return thing;
        }


        [HttpGet("server-error")]
        public ActionResult<string> GetServerError() // gives 500 internal server error
        {
          
                var thing = _context.users.Find(-1);

                var thingToReturn = thing.ToString();

                return thingToReturn;
            
            
               
            

        }

        [HttpGet("bad-request")]        // sends bad request
        public ActionResult<string> GetBadRequest()
        {

            return BadRequest("This is not a Good request");

        }

    }
}
