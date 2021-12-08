namespace PortfolioWebsiteProj.Models;

public class Bug
{
    [Key]
    public int Id { get; set; }
    public string Title { get; set; }
    public string Description { get; set; }
    public bool IsResolved { get; set; }
    public DateTime Date { get; private set; }

    public Bug()
    {
        Date = DateTime.Today;
    }
}
