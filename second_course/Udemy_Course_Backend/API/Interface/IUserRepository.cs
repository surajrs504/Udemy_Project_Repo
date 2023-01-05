using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using API.DTO;
using FirstWebApi_Backend.Entity;

namespace API.Interface
{
    public interface IUserRepository
    {
        void Update(UserEntity user);
        Task<bool> SaveAllAsync();

        Task<IEnumerable<UserEntity>> GetUsersAsync();

        Task<UserEntity> GetUserByIdAsync(int id);

        Task<UserEntity> GetUserByUsernameAsync(string username);

        Task<IEnumerable<MemberDto>>  GetMembersAsync();

        Task<MemberDto> GetMemberAsync(string username);  
    }
}