using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using FirstWebApi_Backend.Entity;
using Microsoft.EntityFrameworkCore;

namespace FirstWebApi_Backend.Data
{
    public class DataContext : DbContext
    {
        public DataContext(DbContextOptions options):base(options)
        {

        }

        public DbSet<UserEntity> users { get; set; }
    }
}
