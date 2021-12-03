namespace PortfolioWebsiteProj.Models;

public class Bug
{
  [Key]
  [Required]
  public int BugId { get; set; }
  [Required]
  public string Title { get; set; }
  
  public string? Description { get; set; }
  public DateTime DateEntered { get; set; }
  
  
  public Bug()
  {
      DateEntered = DateTime.Now;
  }

  public Bug(string title, string description)
  {
      Title = title;
      Description = description;
  }
  
  
  

  
  
}