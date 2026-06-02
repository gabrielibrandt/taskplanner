namespace Backend.Models;

public class TaskItem
{
    public int Id { get; set; }

    public string Title { get; set; } = "";

    public string Duration { get; set; } = "";

    public bool Completed { get; set; }
}