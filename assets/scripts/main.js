// Project data with placeholder information
const projects = [
    {
        id: 1,
        title: "Order Manager",
        description: "WinForms desktop application for order processing with Entity Framework Core and SQLite database integration.",
        image: "assets/images/OrderManager.png",
        technologies: ["C#", "WinForms", "Entity Framework Core", "SQLite", ".NET 10"],
        features: [
            "Windows Forms desktop interface",
            "SQLite database storage",
            "EF Core ORM integration",
            "Self-contained deployment"
        ],
        descriptionLong: "A desktop order management system built with .NET 10 and Windows Forms. Features Entity Framework Core for database operations with SQLite backend for local data storage. The application provides a complete solution for order processing, database management, and user interaction through an intuitive Windows interface.",
        github: "https://github.com/ownedlotus/OrderFiler"
    },
    {
        id: 2,
        title: "Near Earth Objects Visualization",
        description: "A C++ application that visualizes Near Earth Objects using Raylib, NASA API data, and real-time rendering.",
        image: "assets/images/Neos.png",
        technologies: ["C++", "Raylib", "API Integration", "Data Visualization"],
        features: [
            "Real-time NEO data fetching",
            "Interactive 3D visualization",
            "NASA API integration",
            "X11 graphics support"
        ],
        descriptionLong: "A visualization tool for Near Earth Objects (NEOs) that fetches real-time data from NASA's APIs and displays them in an interactive 3D environment. Built with C++ and Raylib, utilizing modern CMake build system with FetchContent for dependency management.",
        github: "https://github.com/ownedlotus/neows"
    },
    {
        id: 3,
        title: "AsteroidSharp",
        description: "Implementation of classic Asteroids game using C# and Raylib with collision detection, lives, and shooting mechanics.",
        image: "assets/images/Asteroids.png",
        technologies: ["C#", "Raylib", "Game Development"],
        features: [
            "Collision detection system",
            "Lives and scoring system",
            "Shooting mechanics with lockout",
            "Smooth game performance"
        ],
        descriptionLong: "My implementation of classic Asteroids arcade game using C# and Raylib library. The game features complete collision detection, a lives system, scoring, and shooting mechanics. Built using Raylib-CSharp implementation by MrScautHD.",
        github: "https://github.com/ownedlotus/AsteroidSharp"
    },
    {
        id: 4,
        title: "PongSharp",
        description: "Classic Pong game implementation in C# using Raylib, featuring smooth gameplay and responsive controls.",
        image: "assets/images/Pong.png",
        technologies: ["C#", "Raylib", "Game Development"],
        features: [
            "Classic Pong gameplay",
            "Smooth paddle controls",
            "Ball physics",
            "Score tracking"
        ],
        descriptionLong: "My implementation of the classic Pong game using C# and Raylib. This project demonstrates fundamental game development concepts including collision detection, player input handling, and game state management using the raylib-cs package.",
        github: "https://github.com/ownedlotus/PongSharp"
    },
    {
        id: 5,
        title: "Sudoku Project",
        description: "Complete Sudoku game implementation with Pygame featuring puzzle generation, solving, and user interaction.",
        image: "assets/images/Sudoku.png",
        technologies: ["Python", "Pygame", "Game Development", "Algorithms"],
        features: [
            "Interactive puzzle board",
            "Puzzle generation algorithms",
            "Number input validation",
            "Visual feedback system"
        ],
        descriptionLong: "A full-featured Sudoku game built with Python and Pygame. This project showcases my Python expertise through puzzle generation algorithms, solving capabilities, and an intuitive user interface for playing and interacting with Sudoku puzzles.",
        github: "https://github.com/ownedlotus/Sudoku-Project-4"
    }
];

// DOM Elements
const projectsGrid = document.getElementById('projectsGrid');
const modal = document.getElementById('projectModal');
const modalBody = document.getElementById('modalBody');
const closeModal = document.getElementById('closeModal');

// Initialize the portfolio
document.addEventListener('DOMContentLoaded', function() {
    renderProjects();
    setupModalListeners();
});

// Render project cards
function renderProjects() {
    projectsGrid.innerHTML = '';
    
    projects.forEach(project => {
        const projectCard = createProjectCard(project);
        projectsGrid.appendChild(projectCard);
    });
}

// Create a project card element
function createProjectCard(project) {
    const card = document.createElement('div');
    card.className = 'project-card';
    card.onclick = () => openProjectModal(project);
    
    card.innerHTML = `
        <img src="${project.image}" alt="${project.title}" class="project-image">
        <div class="project-content">
            <h3 class="project-title">${project.title}</h3>
            <p class="project-description">${project.description}</p>
            <div class="project-tech">
                ${project.technologies.map(tech => `<span class="tech-tag">${tech}</span>`).join('')}
            </div>
            <div class="project-links">
                <a href="${project.github}" class="project-link" onclick="event.stopPropagation()">View Code</a>
            </div>
        </div>
    `;
    
    return card;
}

// Open project modal
function openProjectModal(project) {
    modalBody.innerHTML = `
        <div class="modal-project">
            <img src="${project.image}" alt="${project.title}" class="modal-project-image">
            <div class="modal-project-header">
                <h2 class="modal-project-title">${project.title}</h2>
                <div class="modal-project-tech">
                    ${project.technologies.map(tech => `<span class="modal-tech-tag">${tech}</span>`).join('')}
                </div>
            </div>
            
            <div class="modal-project-section">
                <h3>Overview</h3>
                <p>${project.descriptionLong}</p>
            </div>
            
            <div class="modal-project-section">
                <h3>Key Features</h3>
                <ul>
                    ${project.features.map(feature => `<li>${feature}</li>`).join('')}
                </ul>
            </div>
            
            <div class="modal-project-links">
                <a href="${project.github}" class="modal-link" target="_blank">View Source Code</a>
            </div>
        </div>
    `;
    
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
}

// Setup modal event listeners
function setupModalListeners() {
    // Close modal when clicking the X
    closeModal.onclick = closeProjectModal;
    
    // Close modal when clicking outside the modal content
    window.onclick = function(event) {
        if (event.target == modal) {
            closeProjectModal();
        }
    };
    
    // Close modal with Escape key
    document.addEventListener('keydown', function(event) {
        if (event.key === 'Escape' && modal.style.display === 'block') {
            closeProjectModal();
        }
    });
}

// Close project modal
function closeProjectModal() {
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
}

// Add smooth scroll behavior
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});