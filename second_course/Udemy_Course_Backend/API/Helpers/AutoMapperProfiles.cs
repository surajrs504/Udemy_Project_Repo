using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using API.DTO;
using API.Extensions;
using AutoMapper;
using FirstWebApi_Backend.Entity;

namespace API.Helpers
{
    public class AutoMapperProfiles:Profile
    {
        public AutoMapperProfiles(){
            CreateMap<UserEntity,MemberDto>()
            .ForMember(dest=>dest.PhotoUrl,
             opt=>opt.MapFrom(src=>src.Photo.FirstOrDefault(x=>x.IsMain).Url)).ForMember(dest=>dest.age, opt=> opt.MapFrom(src=>src.DateOfBirth.CalculateAge()));
            CreateMap<Photo,PhotoDto>();

            CreateMap<MemberUpdateDto,UserEntity>();
        }
    }
}