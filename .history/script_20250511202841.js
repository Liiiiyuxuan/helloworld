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
                copyEmail.textContent = 'Email: e228li[at]uwaterloo[dot]ca';
            }, 2000);
        } catch (err) {
            console.error('Copy failed:', err);
        }
    });
});

// dark mode

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

document.addEventListener('DOMContentLoaded', () => {
    const toggle = document.getElementById('theme-toggle');

    // initialize state
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    if (localStorage.theme === 'dark' || (!('theme' in localStorage) && prefersDark)) {
        document.documentElement.classList.add('dark');
        toggle.checked = true;
    }

    // sync on toggle
    toggle.addEventListener('change', () => {
        const isDark = toggle.checked;
        document.documentElement.classList.toggle('dark', isDark);
        localStorage.theme = isDark ? 'dark' : 'light';
    });
});

// course heading change 

document.addEventListener('DOMContentLoaded', () => {
    // 1. Grab the element
    const heading = document.getElementById('courses-heading');

    // 2. Define the set of Tailwind font classes you want to cycle through.
    //    By default Tailwind has 'font-sans', 'font-serif', 'font-mono',
    //    plus your custom 'font-hand'.
    const fonts = ['font-hand', 'font-serif', 'font-pacifico', ];

    // 3. Every N milliseconds, pick a new font and swap it in.
    const intervalMs = 750; // change every 5 seconds
    setInterval(() => {
        // find which one is currently applied
        const current = fonts.find(f => heading.classList.contains(f));
    
        // build a list of the other choices
        const choices = fonts.filter(f => f !== current);
    
        // pick one at random
        const next = choices[Math.floor(Math.random() * choices.length)];
    
        // swap classes
        if (current) {
            heading.classList.replace(current, next);
        } else {
            heading.classList.add(next);
        }
    }, intervalMs);
});
