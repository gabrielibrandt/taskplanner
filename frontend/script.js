const API = "http://localhost:5000/api/tasks";

async function loadTasks() {

    const response = await fetch(API);

    const tasks = await response.json();

    document.getElementById(
        "totalTasks"
    ).textContent = `Total: ${tasks.length} tarefas`;

    const list = document.getElementById("taskList");

    list.innerHTML = "";

    if(tasks.length === 0){

        list.innerHTML = `
            <p class="empty-message">
                Nenhuma tarefa cadastrada.
            </p>
        `;

        return;
    }

    tasks.forEach(task => {

        const card = document.createElement("div");

        card.classList.add("task-card");

        card.innerHTML = `
            <div class="task-info">

                <span class="
                    task-title
                    ${task.completed ? "completed" : ""}
                ">
                    ${task.title}
                </span>

                <span class="task-duration">
                    ⏱ ${task.duration}
                </span>

            </div>

            <div class="actions">

                <button
                    class="complete-btn"
                    onclick="toggleTask(${task.id})">

                    ${task.completed
                        ? "Desfazer"
                        : "Concluir"}

                </button>

                <button
                    class="delete-btn"
                    onclick="deleteTask(${task.id})">

                    Excluir

                </button>

            </div>
        `;

        list.appendChild(card);
    });
}

async function addTask() {

    const task = document
        .getElementById("task")
        .value
        .trim();

    const duration = document
        .getElementById("duration")
        .value
        .trim();

    if(!task || !duration){

        alert("Preencha todos os campos.");

        return;
    }

    await fetch(API,{
        method:"POST",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify({
            title: task,
            duration: duration,
            completed: false
        })
    });

    document.getElementById("task").value = "";
    document.getElementById("duration").value = "";

    loadTasks();
}

async function toggleTask(id){

    await fetch(`${API}/${id}`,{
        method:"PUT"
    });

    loadTasks();
}

async function deleteTask(id){

    await fetch(`${API}/${id}`,{
        method:"DELETE"
    });

    loadTasks();
}

document
    .getElementById("themeBtn")
    .addEventListener("click", () => {

        document.body.classList.toggle("dark");

});

loadTasks();