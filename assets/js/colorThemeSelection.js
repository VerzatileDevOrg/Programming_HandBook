// Get the stored theme when the page loads
document.addEventListener('DOMContentLoaded', (event) => {
    const storedTheme = localStorage.getItem('theme');
    if (storedTheme) {
        jtd.setTheme(storedTheme);
        // Set the button icon and aria-label based on the stored theme
        toggleDarkMode.textContent = storedTheme === 'dark' ? '🌞' : '🌜';
        toggleDarkMode.setAttribute('aria-label', storedTheme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode');
    }
});

const toggleDarkMode = document.querySelector('.js-toggle-dark-mode');

// Set the initial font size
toggleDarkMode.style.fontSize = '1.5em';

toggleDarkMode.addEventListener('click', function() {
    if (jtd.getTheme() === 'dark') {
        jtd.setTheme('light');
        toggleDarkMode.textContent = '🌜';
        toggleDarkMode.setAttribute('aria-label', 'Switch to dark mode');
        // Store the theme in localStorage
        localStorage.setItem('theme', 'light');
    } else {
        jtd.setTheme('dark');
        toggleDarkMode.textContent = '🌞';
        toggleDarkMode.setAttribute('aria-label', 'Switch to light mode');
        // Store the theme in localStorage
        localStorage.setItem('theme', 'dark');
    }
});