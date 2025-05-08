/* reset */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

:root {
    --space: 1rem;
}

body {
    font-family: 'Merriweather', serif;
    color: #333;
    max-width: 800px;
    margin: auto;
    padding: calc(var(--space) * 4);
    line-height: 1.6;
}

header h1 {
    font-family: 'Caveat', cursive;
    font-size: 3rem;
    margin-bottom: calc(var(--space) * 2);
}

.subtitle {
    margin-bottom: calc(var(--space) * 1.5);
    text-transform: lowercase;
}

.work-experience {
    margin-top: calc(var(--space) * 4);
}

.work-experience h2 {
    font-family: 'Caveat', cursive;
    font-size: 2rem;
    margin-bottom: calc(var(--space) * 2);
    text-transform: lowercase;
}

.experience {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: calc(var(--space) * 3);
}

.details h3 {
    font-size: 1.5rem;
    margin-bottom: calc(var(--space) * 0.5);
    text-transform: lowercase;
}

.details p {
    margin-bottom: calc(var(--space) * 0.5);
    text-transform: lowercase;
}

.details .link a {
    color: #666;
    text-decoration: none;
    font-style: italic;
    margin-right: calc(var(--space) * 1);
}

.timeline {
    text-align: right;
}

.timeline span {
    display: block;
    color: #888;
    margin-bottom: calc(var(--space) * 1);
    font-size: 0.9rem;
    text-transform: lowercase;
}

.timeline img {
    width: 80px;
    height: auto;
}

/* responsive */
@media (max-width: 600px) {
    .experience {
        flex-direction: column;
        align-items: flex-start;
    }
    .timeline {
        margin-top: calc(var(--space) * 2);
        text-align: left;
    }
}
