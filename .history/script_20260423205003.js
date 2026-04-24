const root = document.documentElement;
const themeToggle = document.getElementById('theme-toggle');

function setTheme(theme) {
    root.classList.toggle('dark', theme === 'dark');
    localStorage.setItem('theme', theme);
    if (themeToggle) themeToggle.textContent = theme === 'dark' ? '☀️' : '🌙';
}

const savedTheme = localStorage.getItem('theme');
const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
setTheme(savedTheme || (prefersDark ? 'dark' : 'light'));

themeToggle?.addEventListener('click', () => {
    setTheme(root.classList.contains('dark') ? 'light' : 'dark');
});

document.querySelectorAll('[data-copy]').forEach((button) => {
    const defaultText = button.dataset.default || button.textContent.trim();
    button.textContent = defaultText;

    button.addEventListener('click', async () => {
        try {
            await navigator.clipboard.writeText(button.dataset.copy);
            button.textContent = 'copied!';
        } catch {
            button.textContent = 'copy failed';
        }

        window.setTimeout(() => {
            button.textContent = defaultText;
        }, 1600);
    });
});