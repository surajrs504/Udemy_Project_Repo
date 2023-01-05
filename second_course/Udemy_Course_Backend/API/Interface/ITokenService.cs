using FirstWebApi_Backend.Entity;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace FirstWebApi_Backend.Interface
{
   public interface ITokenService
    {
        string CreateToken(UserEntity user);
    }
}
