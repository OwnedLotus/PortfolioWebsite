using System.ComponentModel.DataAnnotations;

namespace PortfolioWebsiteProj.Models;

public class User
{
  [Key]
  [Required]
  public int Id { get; set; }
  [Required]
  public string Name { get; set; }
  [Required]
  public string UserName { get; set; }
  [Required]
  public string Password { get; set; }
  
  public User()
  {
      
  }
  
  public User(string name, string username, string password)
  {
      Name = name;
      UserName = username;
      Password = password;
  }
  
}