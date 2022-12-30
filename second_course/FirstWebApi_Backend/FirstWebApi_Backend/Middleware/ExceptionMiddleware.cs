using FirstWebApi_Backend.Errors;
using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.Hosting;
using Microsoft.Extensions.Logging;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Text.Json;
using System.Threading.Tasks;

namespace FirstWebApi_Backend.Middleware
{
    public class ExceptionMiddleware
    {
        private readonly RequestDelegate _next;
        private readonly ILogger<ExceptionMiddleware> _logger;
        private readonly IHostEnvironment _env;
        public ExceptionMiddleware(RequestDelegate next, ILogger<ExceptionMiddleware> logger, IHostEnvironment env)
        {
            _next = next;
            _logger = logger;
            _env = env;

        }

        public async Task InvokeAsync(HttpContext context)
        {
            try
            {
                await _next(context); // if there is any exception this will throw
            }
            catch(Exception ex)
            {
                _logger.LogError(ex, ex.Message); // logs the exception along with exception msg
                context.Response.ContentType = "application/json"; //api controllers do this by default but since its a midleware it has to mentioned seperatly

                context.Response.StatusCode = (int)HttpStatusCode.InternalServerError; //return 500 casted to integer

                var response = _env.IsDevelopment() ? new ApiException(context.Response.StatusCode, ex.Message, ex.StackTrace?.ToString()) : new ApiException(context.Response.StatusCode, ex.Message,"Internal Server Error");
                // club all those to response and use the ternary operator(?) to check wether the envirnment is in developement or not 

                var option = new JsonSerializerOptions{ PropertyNamingPolicy = JsonNamingPolicy.CamelCase };

            }
        }

    }
}
