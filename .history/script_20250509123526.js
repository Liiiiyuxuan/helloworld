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

footer class="mt-16 pt-8 border-t border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-400 text-sm flex flex-col md:flex-row items-center justify-between"
