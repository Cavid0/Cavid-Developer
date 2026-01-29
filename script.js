// Theme toggle functionality
const themeToggle = document.getElementById('theme-toggle');
const htmlElement = document.documentElement;

// Default dark mode - users can switch to light if they want
const currentTheme = localStorage.getItem('theme') || 'dark';
if (currentTheme === 'dark') {
    htmlElement.classList.add('dark');
}

themeToggle.addEventListener('click', () => {
    htmlElement.classList.toggle('dark');
    const theme = htmlElement.classList.contains('dark') ? 'dark' : 'light';
    localStorage.setItem('theme', theme);
});

// Blog posts data
const posts = [
    {
        id: "1",
        title: "Mənim İlk Blog Postum",
        content: "Bu, Next.js ilə yaradılmış ilk blog postumdur. Çox sürətlidir!",
        date: "2024-05-20"
    },
    {
        id: "2",
        title: "React və Next.js Öyrənirəm",
        content: "React komponentləri və Next.js routing sistemi ilə işləmək çox maraqlıdır.",
        date: "2024-05-21"
    },
    {
        id: "3",
        title: "Texnologiya Dünyası",
        content: "Proqramlaşdırma dünyasında yeniliklər bitmir.",
        date: "2024-05-22"
    }
];

// Fetch GitHub repositories
async function fetchGitHubRepos() {
    const reposContainer = document.getElementById('github-repos');
    
    try {
        const response = await fetch('https://api.github.com/users/Cavid0/repos?sort=updated&per_page=6');
        const repos = await response.json();
        
        if (repos.length > 0) {
            reposContainer.innerHTML = repos.map(repo => `
                <a href="${repo.html_url}" target="_blank" class="repo-card">
                    <div class="repo-card-header">
                        <div class="repo-icon-wrapper">
                            <svg class="repo-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <polyline points="16 18 22 12 16 6"></polyline>
                                <polyline points="8 6 2 12 8 18"></polyline>
                            </svg>
                        </div>
                        <svg class="repo-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <line x1="5" y1="12" x2="19" y2="12"></line>
                            <polyline points="12 5 19 12 12 19"></polyline>
                        </svg>
                    </div>
                    <h3 class="repo-title">${repo.name}</h3>
                    <p class="repo-description">${repo.description || 'Təsvir əlavə edilməyib.'}</p>
                    <div class="repo-footer">
                        <span class="repo-language">
                            <span class="language-dot"></span>
                            ${repo.language || 'Code'}
                        </span>
                        <span>⭐ ${repo.stargazers_count}</span>
                    </div>
                </a>
            `).join('');
        } else {
            reposContainer.innerHTML = `
                <div class="loading-message">
                    <div style="display: inline-block; padding: 1rem; border-radius: 50%; background: var(--muted); margin-bottom: 1rem;">
                        <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor" style="color: var(--muted-foreground);">
                            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                        </svg>
                    </div>
                    <p>Repozitoriyalar yüklənmədi.</p>
                </div>
            `;
        }
    } catch (error) {
        reposContainer.innerHTML = `
            <div class="loading-message">
                <p>Repozitoriyalar yüklənərkən xəta baş verdi.</p>
            </div>
        `;
    }
}

// Load GitHub repos when page loads
if (document.getElementById('github-repos')) {
    fetchGitHubRepos();
}

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});
