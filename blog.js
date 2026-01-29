// Theme toggle functionality
const themeToggle = document.getElementById('theme-toggle');
const htmlElement = document.documentElement;

// Check for saved theme preference or default to 'light' mode
const currentTheme = localStorage.getItem('theme') || 'light';
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

// Get blog post ID from URL
const urlParams = new URLSearchParams(window.location.search);
const postId = urlParams.get('id');

// Find and display the blog post
const post = posts.find(p => p.id === postId);
const postContent = document.getElementById('blog-post-content');

if (post) {
    postContent.innerHTML = `
        <h1>${post.title}</h1>
        <time class="blog-date">${post.date}</time>
        <article>
            <p>${post.content}</p>
        </article>
    `;
} else {
    postContent.innerHTML = `
        <div class="loading-message">
            <p>Blog yazısı tapılmadı.</p>
        </div>
    `;
}
