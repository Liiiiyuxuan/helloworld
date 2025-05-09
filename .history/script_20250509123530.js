document.addEventListener('DOMContentLoaded', () => {
    const copyDiscord = document.getElementById('copy-discord');

    copyDiscord.addEventListener('click', async (evt) => {
        evt.preventDefault();
        const discordTag = 'Liiiiyuxuan';

        try {
            await navigator.clipboard.writeText(discordTag);
            copyDiscord.textContent = 'copied!';
            setTimeout(() => {
                copyDiscord.textContent = 'discord';
            }, 2000);
        } catch (err) {
            console.error('Copy failed:', err);
        }
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const copyEmail = document.getElementById('copy-email');

    copyEmail.addEventListener('click', async (evt) => {
        evt.preventDefault();
        const emailTag = 'e228li@uwaterloo.ca';

        try {
            await navigator.clipboard.writeText(emailTag);
            copyEmail.textContent = 'copied!';
            setTimeout(() => {
                copyEmail.textContent = 'email';
            }, 2000);
        } catch (err) {
            console.error('Copy failed:', err);
        }
    });
});

// script.js

document.addEventListener('DOMContentLoaded', () => {
    const toggle = document.getElementById('theme-toggle');
    if (
      localStorage.theme === 'dark' ||
      (!('theme' in localStorage) &&
        window.matchMedia('(prefers-color-scheme: dark)').matches)
    ) {
      document.documentElement.classList.add('dark');
      toggle.textContent = '☀️';
    }
  
    toggle.addEventListener('click', () => {
      const isDark = document.documentElement.classList.toggle('dark');
      localStorage.theme = isDark ? 'dark' : 'light';
      toggle.textContent = isDark ? '☀️' : '🌙';
    });
  });
  
