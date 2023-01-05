using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using API.Extensions;

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

        public  DateOnly DateOfBirth{get; set;}

        public string KnownAs {get; set;}

        public DateTime Created {get; set;}=DateTime.UtcNow;

        public DateTime LastActive{get; set;}=DateTime.UtcNow;

        public string Gender { get; set;}

        public string Introduction {get; set;}

        public string LookingFor { get; set;}

        public string Interests { get; set;}

        public string  City{ get; set;}

        public string Country{get; set;}

        public List<Photo> Photo{get; set;}= new List<Photo>();

        // public int GetAge(){
        //         return DateOfBirth.CalculateAge();
        // }
    }
}
