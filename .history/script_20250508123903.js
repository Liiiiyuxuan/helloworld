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

    copyemail.addEventListener('click', async (evt) => {
        evt.preventDefault();
        const emailTag = 'Liiiiyuxuan';

        try {
            await navigator.clipboard.writeText(emailTag);
            copyemail.textContent = 'copied!';
            setTimeout(() => {
                copyemail.textContent = 'email';
            }, 2000);
        } catch (err) {
            console.error('Copy failed:', err);
        }
    });
});
