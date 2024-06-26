document.addEventListener('DOMContentLoaded', (event) => {
    const aboutSection = document.querySelector('section:nth-of-type(1)');
    const toggleButton = document.createElement('button');
    toggleButton.textContent = 'Toggle About Me';
    document.body.insertBefore(toggleButton, aboutSection);

    toggleButton.addEventListener('click', () => {
        if (aboutSection.style.display === 'none') {
            aboutSection.style.display = 'block';
        } else {
            aboutSection.style.display = 'none';
        }
    });
});
