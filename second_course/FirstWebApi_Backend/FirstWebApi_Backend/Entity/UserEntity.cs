using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace FirstWebApi_Backend.Entity
{
    public class UserEntity
    {
        public UserEntity( string name)
        {
            
            this.Name = name;
        }
        public int Id { get; set; }
        public string Name { get; set; }
    }
}
