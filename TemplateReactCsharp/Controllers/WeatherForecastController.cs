using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Logging;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using TemplateReactCsharp.DB;
using TemplateReactCsharp.DB.Models;

namespace TemplateReactCsharp.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class WeatherForecastController : ControllerBase
    {
        private readonly ILogger<WeatherForecastController> _logger;
        private readonly DBContext _context;

        public WeatherForecastController(
            ILogger<WeatherForecastController> logger,
            DBContext context
            )
        {
            _logger = logger;
            _context = context;
        }

        [HttpGet]
        public async Task<IEnumerable<WeatherForecast>> Get()
        {
            return await _context.WeatherForecastes.ToListAsync();
        }
    }
}
