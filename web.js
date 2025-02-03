const tasks = {
    "Sunday": [
        { time: "5:30-6:00am", task: "Brush teeth, take a shower", completed: false },
        { time: "6:30-7:00am", task: "Worship time with family", completed: false },
        { time: "7:00-7:30am", task: "Breakfast", completed: false },
        { time: "7:30-8:00am", task: "Bible time", completed: false },
        { time: "8:00-12:00pm", task: "Help siblings with school", completed: false },
        { time: "12:00-1:00pm", task: "Lunch", completed: false },
        { time: "1:00-2:00pm", task: "TV", completed: false },
        { time: "2:00-3:00pm", task: "Bible time", completed: false },
        { time: "3:00-5:00pm", task: "Errands", completed: false },
        { time: "5:00-6:30pm", task: "Dinner", completed: false },
        { time: "6:30-7:00pm", task: "Worship", completed: false },
        { time: "7:00-8:00pm", task: "Shower", completed: false },
        { time: "8:00-9:30pm", task: "Bible time", completed: false },
        { time: "9:30-10:00pm", task: "Get ready for bed", completed: false }
    ]
};

const daySelect = document.getElementById("daySelect");
const taskList = document.getElementById("taskList");

// Populate day selection
document.addEventListener("DOMContentLoaded", () => {
    Object.keys(tasks).forEach(day => {
        const option = document.createElement("option");
        option.value = day;
        option.textContent = day;
        daySelect.appendChild(option);
    });
    loadTasks();
});

// Load tasks for selected day
daySelect.addEventListener("change", loadTasks);

function loadTasks() {
    taskList.innerHTML = "";
    const selectedDay = daySelect.value;
    if (tasks[selectedDay]) {
        tasks[selectedDay].forEach((task, index) => {
            const li = document.createElement("li");
            li.textContent = `${task.time}: ${task.task}`;
            const button = document.createElement("button");
            button.textContent = task.completed ? "✔️ Completed" : "Mark as Done";
            button.addEventListener("click", () => completeTask(selectedDay, index, button));
            li.appendChild(button);
            taskList.appendChild(li);
        });
    }
}

function completeTask(day, index, button) {
    tasks[day][index].completed = true;
    button.textContent = "✔️ Completed";
    button.disabled = true;
    alert("You earned a butterfly! 🦋");
}