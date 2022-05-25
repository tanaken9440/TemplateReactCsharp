using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Design;
using Microsoft.Extensions.Configuration;
using TemplateReactCsharp.DB.Models;
using System.IO;

namespace TemplateReactCsharp.DB
{
    /// <summary>
    /// 以下のコマンドを使用して、既存データベースからモデルを自動生成する
    /// dotnet ef dbcontext scaffold "<接続文字列>" <プロバイダー名> --output-dir Models --context-dir . --context DBContext --namespace TemplateReactCsharp.DB.Models
    /// https://docs.microsoft.com/ja-jp/ef/core/managing-schemas/scaffolding?tabs=dotnet-core-cli
    /// </summary>
    public class DBContext : DbContext
    {
        public DBContext(DbContextOptions<DBContext> options) : base(options) { }

        public DbSet<WeatherForecast> WeatherForecastes { get; set; }
    }

    public class DesignTimeDbContextFactory : IDesignTimeDbContextFactory<DBContext>
    {
        public DBContext CreateDbContext(string[] args)
        {
            IConfigurationRoot configuration = new ConfigurationBuilder()
                .SetBasePath(Directory.GetCurrentDirectory())
                .AddJsonFile(@$"{Directory.GetCurrentDirectory()}/../TemplateReactCsharp/appsettings.json")
                .Build();
            var builder = new DbContextOptionsBuilder<DBContext>();
            var connectionString = configuration.GetConnectionString("Sqlite");
            builder.UseSqlite(connectionString);
            return new DBContext(builder.Options);
        }
    }
}
