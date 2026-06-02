using Microsoft.AspNetCore.Mvc;
using Backend.Models;

namespace Backend.Controllers;

[ApiController]
[Route("api/[controller]")]
public class TasksController : ControllerBase
{
    private static List<TaskItem> tasks = new();

    private static int nextId = 1;

    [HttpGet]
    public IActionResult Get()
    {
        return Ok(tasks);
    }

    [HttpPost]
    public IActionResult Create(TaskItem task)
    {
        task.Id = nextId++;

        tasks.Add(task);

        return Ok(task);
    }

    [HttpPut("{id}")]
    public IActionResult ToggleCompleted(int id)
    {
        var task = tasks.FirstOrDefault(t => t.Id == id);

        if (task == null)
        {
            return NotFound();
        }

        task.Completed = !task.Completed;

        return Ok(task);
    }

    [HttpDelete("{id}")]
    public IActionResult Delete(int id)
    {
        var task = tasks.FirstOrDefault(t => t.Id == id);

        if (task == null)
        {
            return NotFound();
        }

        tasks.Remove(task);

        return NoContent();
    }
}