document.addEventListener('DOMContentLoaded', () => {
    const copyBtn = document.getElementById('copy-btn');

    copyBtn.addEventListener('click', async () => {
        const textToCopy = 'This is the message you want to copy';
        try {
            await navigator.clipboard.writeText(textToCopy);
            copyBtn.textContent = 'Copied!';
            setTimeout(() => {
                copyBtn.textContent = 'Copy message';
            }, 2000);
        } catch (err) {
            console.error('Copy failed:', err);
        }
    });
});
