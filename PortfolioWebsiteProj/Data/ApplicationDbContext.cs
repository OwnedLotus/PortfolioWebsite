using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using PortfolioWebsiteProj.Models;

namespace PortfolioWebsiteProj.Data
{
    public class ApplicationDbContext : IdentityDbContext
    {
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options)
            : base(options)
        {
        }
        public DbSet<PortfolioWebsiteProj.Models.Bug> Bug { get; set; }
    }
}