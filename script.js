document.addEventListener('DOMContentLoaded', () => {
    // Sample data for competitions
    const competitions = [
        {
        id: 1,
        title: "Stock Market Prediction Challenge",
        prize: "$5,000 + Internship Opportunity",
        entryFee: "$10",
        participants: 1850,
        timeLeft: "3 days",
        category: "Trading",
        imageUrl: "images/trading.jpg.jfif",
        organization: "WallStreet Analytics"
    },
    {
        id: 2,
        title: "AI Trading Algorithm Competition",
        prize: "$3,000 + Job Interview",
        entryFee: "$8",
        participants: 1250,
        timeLeft: "5 days",
        category: "Trading",
        imageUrl: "images/trading2.jpg.jpg",
        organization: "Quantum Capital"
    },
    {
        id: 3,
        title: "CodeCraft Challenge 2025",
        prize: "$2,500 + Certificate",
        entryFee: "Free",
        participants: 2500,
        timeLeft: "1 week",
        category: "Coding",
        imageUrl: "images/coding.jpg",
        organization: "CodeMasters Academy"
    },
    {
        id: 4,
        title: "Project Management Challenge",
        prize: "$4,000 + Project Manager Certificate",
        entryFee: "$5",
        participants: 950,
        timeLeft: "4 days",
        category: "Project",
        imageUrl: "images/project.jpg.png",
        organization: "ProjectPro Solutions"
    },
    {
        id: 5,
        title: "Tech Company Hiring Challenge",
        prize: "Job Interview + Relocation Package",
        entryFee: "Free",
        participants: 1500,
        timeLeft: "2 days",
        category: "Hiring Challenge",
        imageUrl: "images/hiring.jpg",
        organization: "TechInnovate Corp"
    },
    {
        id: 6,
        title: "International Math Olympiad",
        prize: "$3,500 + Scholarship",
        entryFee: "$10",
        participants: 750,
        timeLeft: "1 week",
        category: "Math Olympiad",
        imageUrl: "images/math.jpg",
        organization: "MathGenius Institute"
    },
    {
        id: 7,
        title: "Sports Event Prediction",
        prize: "$2,000 + Free Subscription",
        entryFee: "$7",
        participants: 1200,
        timeLeft: "3 days",
        category: "Prediction Challenge",
        imageUrl: "images/sports.jpg",
        organization: "SportsPredict Pro"
    },
    {
        id: 8,
        title: "Web Development Challenge",
        prize: "$1,500 + Certificate",
        entryFee: "$5",
        participants: 1800,
        timeLeft: "5 days",
        category: "Coding",
        imageUrl: "images/webdev.jpg",
        organization: "DevCraft Studios"
    },
    {
        id: 9,
        title: "Project Budget Optimization",
        prize: "$3,000 + Professional Certification",
        entryFee: "$8",
        participants: 1000,
        timeLeft: "4 days",
        category: "Project",
        imageUrl: "images/budget.jpg",
        organization: "FinancePro Solutions"
    },
    {
        id: 10,
        title: "Data Science Hiring Challenge",
        prize: "Job Interview + Training",
        entryFee: "Free",
        participants: 1600,
        timeLeft: "3 days",
        category: "Hiring Challenge",
        imageUrl: "images/datascience.jpg",
        organization: "DataInnovate Corp"
    },
    {
        id: 11,
        title: "Math Puzzle Challenge",
        prize: "$2,000 + Math Scholarship",
        entryFee: "$6",
        participants: 800,
        timeLeft: "1 week",
        category: "Math Olympiad",
        imageUrl: "images/puzzle.jpg",
        organization: "MathPuzzle Academy"
    },
    {
        id: 12,
        title: "Weather Prediction Competition",
        prize: "$1,500 + Research Grant",
        entryFee: "$5",
        participants: 1100,
        timeLeft: "4 days",
        category: "Prediction Challenge",
        imageUrl: "images/weather prediction competiton.jfif", // Corrected filename
        organization: "ClimatePredict Labs"
    },
    {
        id: 13,
        title: "Advanced Calculus Challenge",
        prize: "$1,800 + Medal",
        entryFee: "$7",
        participants: 650,
        timeLeft: "6 days",
        category: "Math Olympiad",
        imageUrl: "images/advanced calculus challenge.jfif", // Corrected filename
        organization: "Global Math Society"
    },
    {
        id: 14,
        title: "World Cup Cricket Predictor",
        prize: "$1,200 + Signed Bat",
        entryFee: "$5",
        participants: 2100,
        timeLeft: "2 days",
        category: "Prediction Challenge",
        imageUrl: "images/world cup cricket predictor.jfif", // Corrected filename
        organization: "CricketStats Central"
    },
    {
        id: 15,
        title: "Python Automation Contest",
        prize: "$2,200 + Internship",
        entryFee: "Free",
        participants: 1900,
        timeLeft: "8 days",
        category: "Coding",
        imageUrl: "images/python automation contest.jfif", // Corrected filename
        organization: "PyPros Inc."
    },
    {
        id: 16,
        title: "Responsive Portfolio Design",
        prize: "$2,800 + Design Software",
        entryFee: "$10",
        participants: 1350,
        timeLeft: "10 days",
        category: "Project",
        imageUrl: "images/resposive portfolio design.jfif", // Corrected filename (note typo in original file)
        organization: "PixelPerfect Studios"
    },
    {
        id: 17,
        title: "Cyber Security Capture The Flag",
        prize: "$4,500 + Security Tools",
        entryFee: "$15",
        participants: 850,
        timeLeft: "6 days",
        category: "Coding", // Assuming CTF falls under Coding or a new category
        imageUrl: "images/cyber security capture the flag.jfif", // Corrected filename
        organization: "SecureNet Labs"
    },
    {
        id: 18,
        title: "Mobile App UI/UX Design Contest",
        prize: "$3,200 + Design Software Suite",
        entryFee: "$10",
        participants: 1150,
        timeLeft: "9 days",
        category: "Project", // Assuming UI/UX design is a project
        imageUrl: "images/mobile app uiux design contest.jfif", // Corrected filename
        organization: "AppFlow Designs"
    },
    {
        id: 19,
        title: "Financial Modeling World Cup",
        prize: "$6,000 + Analyst Role Interview",
        entryFee: "$20",
        participants: 600,
        timeLeft: "12 days",
        category: "Trading", // Assuming financial modeling fits here
            imageUrl: "images/financial modeling world cup.jfif", // Corrected filename
            organization: "Global Finance Institute"
        },
        { // New Hiring Challenge 1
            id: 20,
            title: "Software Engineer Hiring Test",
            prize: "Full-time Role + Benefits",
            entryFee: "Free",
            participants: 2100,
            timeLeft: "5 days",
            category: "Hiring Challenge",
            imageUrl: "images/software engineering hiring test.jfif", 
            organization: "Innovate Solutions Ltd."
        },
        { // New Hiring Challenge 2
            id: 21,
            title: "Backend Developer Recruitment Drive",
            prize: "Job Offer + Signing Bonus",
            entryFee: "Free",
            participants: 1750,
            timeLeft: "7 days",
            category: "Hiring Challenge",
            imageUrl: "images/backend developer recruitment drive.png", 
            organization: "TechGiant Corp."
        }
    ];

// Sample data for categories
const categories = [
    { name: "Trading", icon: "fas fa-chart-line" },
    { name: "Coding", icon: "fas fa-code" },
    { name: "Project", icon: "fas fa-tasks" },
    { name: "Hiring Challenge", icon: "fas fa-briefcase" },
    { name: "Math Olympiad", icon: "fas fa-calculator" },
    { name: "Prediction Challenge", icon: "fas fa-crystal-ball" }
];

// Function to generate fake participant names
function generateFakeName() {
    const firstNames = ["John", "Sarah", "Michael", "Emily", "Robert", "Jessica", "David", "Rachel", "James", "Jennifer"];
    const lastNames = ["Smith", "Johnson", "Chen", "Davis", "Wilson", "Brown", "Taylor", "Anderson", "Thomas", "Jackson"];
    return `${firstNames[Math.floor(Math.random() * firstNames.length)]} ${lastNames[Math.floor(Math.random() * lastNames.length)]}`;
}

// Function to create competition cards
function createCompetitionCard(competition) {
    // Removed prize splitting logic, will display the full prize string directly
    
    return `
        <div class="col-md-6 col-lg-3 mb-4 competition-grid-item">
            <div class="competition-card">
                <img src="${competition.imageUrl}" alt="${competition.title}">
                <div class="competition-card-body">
                    <h3>${competition.title}</h3>
                    <div class="prize-amount">
                        <span class="prize-label">Prize: </span>${competition.prize} 
                    </div>
                    <p>Entry Fee: ${competition.entryFee}</p>
                    <p class="participants-count">${competition.participants} Participants</p>
                    <p>Time Left: ${competition.timeLeft}</p>
                    <p class="text-muted"><i class="fas fa-building"></i> Hosted by: ${competition.organization}</p>
                    <button class="btn btn-primary">Join Competition</button>
                </div>
            </div>
        </div>
    `;
}

// Function to create category cards
function createCategoryCard(category) {
    return `
        <div class="col-md-4 mb-4">
            <div class="category-card bg-light">
                <i class="${category.icon} fa-3x mb-3"></i>
                <h3>${category.name}</h3>
                <p>${Math.floor(Math.random() * 1000) + 500} Active Competitions</p>
            </div>
        </div>
    `;
}

// Function to filter competitions by category or criteria
function filterCompetitions(filterCriteria) {
    const competitionGrid = document.getElementById('competition-grid');
    competitionGrid.innerHTML = ''; // Clear existing cards

    let filteredCompetitions = [];

    if (filterCriteria === 'all') {
        filteredCompetitions = competitions;
    } else if (filterCriteria === 'free') {
        // Special case for Free Challenges
        filteredCompetitions = competitions.filter(comp => comp.entryFee.toLowerCase() === 'free');
    } else {
        // Filter by category name (case-insensitive)
        filteredCompetitions = competitions.filter(comp => comp.category.toLowerCase() === filterCriteria.toLowerCase());
    }

    if (filteredCompetitions.length === 0) {
        competitionGrid.innerHTML = '<p class="text-center w-100">No competitions found for this category.</p>';
    } else {
        filteredCompetitions.forEach(competition => {
            competitionGrid.innerHTML += createCompetitionCard(competition);
        });
    }
}

// Initialize competitions
filterCompetitions('all');

// Initialize categories
const categoryGrid = document.getElementById('category-grid');
categories.forEach(category => {
    categoryGrid.innerHTML += createCategoryCard(category);
});

// Add search functionality
const searchInput = document.querySelector('.search-bar input');
searchInput.addEventListener('input', (e) => {
    const searchTerm = e.target.value.toLowerCase();
    const competitionCards = document.querySelectorAll('.competition-card');
    
    competitionCards.forEach(card => {
        const title = card.querySelector('h3').textContent.toLowerCase();
        if (title.includes(searchTerm)) {
            card.style.display = '';
        } else {
            card.style.display = 'none';
        }
    });
});

// Map href values to category names or filter criteria
const categoryMap = {
    '#all': 'all',
    '#free': 'free', // Special criteria
    '#trading': 'Trading',
    '#coding': 'Coding',
    '#project': 'Project',
    '#hiring': 'Hiring Challenge',
    '#math': 'Math Olympiad',
    '#prediction': 'Prediction Challenge'
};

// Add event listeners for sidebar navigation links
document.querySelectorAll('.sidebar-nav a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const href = this.getAttribute('href');
        const filterCriteria = categoryMap[href]; // Get the correct category name or criteria

        if (filterCriteria) {
            filterCompetitions(filterCriteria);

            // Update active state in sidebar
            document.querySelectorAll('.sidebar-nav .nav-item').forEach(item => {
                item.classList.remove('active');
            });
            this.closest('.nav-item').classList.add('active');
        } else {
            console.warn(`No category mapping found for href: ${href}`);
        }
    });
});

    // Mobile sidebar toggle
    const navbarToggler = document.querySelector('.navbar-toggler');
    if (navbarToggler) { // Add null check for safety
        navbarToggler.addEventListener('click', () => {
            const sidebar = document.querySelector('.sidebar');
            if (sidebar) { // Add null check for safety
                sidebar.classList.toggle('active');
            }
        });
    }
}); // Close DOMContentLoaded listener
