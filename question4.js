// Question 4: React Dynamic To-Do List
import React, { useState, useEffect } from "react";

function TodoApp() {
    const [tasks, setTasks] = useState(() => {
        return JSON.parse(localStorage.getItem("tasks")) || [];
    });
    const [filter, setFilter] = useState("all");

    useEffect(() => {
        localStorage.setItem("tasks", JSON.stringify(tasks));
    }, [tasks]);

    function addTask(text) {
        setTasks([...tasks, { text, completed: false }]);
    }

    function toggleTask(index) {
        const newTasks = tasks.map((task, i) =>
            i === index ? { ...task, completed: !task.completed } : task
        );
        setTasks(newTasks);
    }

    function deleteTask(index) {
        setTasks(tasks.filter((_, i) => i !== index));
    }

    function filterTasks() {
        return tasks.filter(task => 
            filter === "all" ? true : 
            filter === "completed" ? task.completed : 
            !task.completed
        );
    }

    return (
        <div>
            <h1>To-Do List</h1>
            <input
                type="text"
                onKeyDown={(e) => {
                    if (e.key === "Enter" && e.target.value.trim()) {
                        addTask(e.target.value.trim());
                        e.target.value = "";
                    }
                }}
                placeholder="Add a task"
            />
            <div>
                <button onClick={() => setFilter("all")}>All</button>
                <button onClick={() => setFilter("completed")}>Completed</button>
                <button onClick={() => setFilter("pending")}>Pending</button>
            </div>
            <ul>
                {filterTasks().map((task, index) => (
                    <li key={index} style={{ textDecoration: task.completed ? "line-through" : "none" }}>
                        {task.text}
                        <button onClick={() => toggleTask(index)}>✔</button>
                        <button onClick={() => deleteTask(index)}>❌</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default TodoApp;
