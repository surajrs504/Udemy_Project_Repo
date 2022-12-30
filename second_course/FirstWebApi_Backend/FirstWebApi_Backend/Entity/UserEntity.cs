using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace FirstWebApi_Backend.Entity
{
    public class UserEntity
    {
        /*  public UserEntity( string Name, byte[] ph, byte[] ps)
          {

              this.Name = Name;
              this.PasswordHash = ph;
              this.PasswordSalt = ps;

          }*/
        public UserEntity(string Name)
        {

            this.Name = Name;
           

        }

        public UserEntity()
        {

        }
        public int Id { get; set; }
        public string Name { get; set; }

        public byte[] PasswordHash { get; set; }

        public byte[] PasswordSalt { get; set; }
    }
}
