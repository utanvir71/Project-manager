// js/script.js

document.addEventListener('DOMContentLoaded', function() {
    fetchProjects(); // Fetch projects when page loads

    function fetchProjects() {
        fetch('php/projects.php')
            .then(response => response.json())
            .then(data => {
                displayProjects(data);
            })
            .catch(error => {
                console.error('Error fetching projects:', error);
            });
    }

    function displayProjects(projects) {
        var projectList = document.getElementById('projectList');
        projectList.innerHTML = '';

        projects.forEach(function(project) {
            var projectCard = document.createElement('div');
            projectCard.classList.add('project-card');
            projectCard.innerHTML = `
                <h3>${project.name}</h3>
                <p>${project.description}</p>
                <button onclick="fetchTasks(${project.id})">View Tasks</button>
            `;
            projectList.appendChild(projectCard);
        });
    }

    function fetchTasks(projectId) {
        fetch('php/tasks.php?projectId=' + projectId)
            .then(response => response.json())
            .then(data => {
                displayTasks(data);
            })
            .catch(error => {
                console.error('Error fetching tasks:', error);
            });
    }

    function displayTasks(tasks) {
        var taskList = document.getElementById('taskList');
        taskList.innerHTML = '';

        tasks.forEach(function(task) {
            var taskCard = document.createElement('div');
            taskCard.classList.add('task-card');
            taskCard.innerHTML = `
                <h4>${task.name}</h4>
                <p>${task.description}</p>
                <p>Status: ${task.status}</p>
            `;
            taskList.appendChild(taskCard);
        });
    }

    function logout() {
        fetch('php/logout.php')
            .then(response => {
                if (response.ok) {
                    window.location.href = 'login.html'; // Redirect to login page
                } else {
                    console.error('Logout failed');
                }
            })
            .catch(error => {
                console.error('Error:', error);
            });
    }
});
