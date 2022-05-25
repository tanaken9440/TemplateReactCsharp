using System;
using System.Linq;
using TemplateReactCsharp.DB;
using TemplateReactCsharp.DB.Models;

namespace TemplateReactCsharp.Data
{
    public class DataSeeder
    {
        private static readonly string[] Summaries = new[]
        {
            "Freezing", "Bracing", "Chilly", "Cool", "Mild", "Warm", "Balmy", "Hot", "Sweltering", "Scorching"
        };

        public static void Initialize(DBContext context)
        {
            if (!context.WeatherForecastes.Any())
            {
                var rng = new Random();
                context.WeatherForecastes.UpdateRange(Enumerable.Range(1, 5)
                    .Select(index => new WeatherForecast
                    {
                        Date = DateTime.Now.AddDays(index),
                        TemperatureC = rng.Next(-20, 55),
                        Summary = Summaries[rng.Next(Summaries.Length)]
                    }));
                context.SaveChanges();
            }
        }
    }
}
