using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using API.DTO;
using API.Interface;
using AutoMapper;
using AutoMapper.QueryableExtensions;
using FirstWebApi_Backend.Data;
using FirstWebApi_Backend.Entity;
using Microsoft.EntityFrameworkCore;
namespace API.Data
{
    public class UserRepository : IUserRepository
    {
        private readonly DataContext context;
        private readonly IMapper _mapper;
        public UserRepository(DataContext data, IMapper mapper){
            this.context=data;
            _mapper=mapper;

        }



        public async Task<IEnumerable<MemberDto>> GetMembersAsync()
        {
             return await context.users
             .ProjectTo<MemberDto>(_mapper.ConfigurationProvider)
             .ToListAsync();
        }

         public async Task<MemberDto> GetMemberAsync(string username)
        {
           

            return await context.users
            .Where(x=>x.Name==username)
           .ProjectTo<MemberDto>(_mapper.ConfigurationProvider)
           .SingleOrDefaultAsync();
        }




        public async Task<UserEntity> GetUserByIdAsync(int id)
        {
           return await context.users.FindAsync(id);
        }

        public async Task<UserEntity> GetUserByUsernameAsync(string username)
        {
            return await context.users.Include(p=> p.Photo).SingleOrDefaultAsync(x=> x.Name==username);

        }

       

        public async Task<IEnumerable<UserEntity>> GetUsersAsync()
        {
            return await context.users.ToListAsync();
        }

        public async Task<bool> SaveAllAsync()
        {
            return await context.SaveChangesAsync()>0;
        }

        public void Update(UserEntity user)
        {
            context.Entry(user).State=EntityState.Modified;
        }
    }
}