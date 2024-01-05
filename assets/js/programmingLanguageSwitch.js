// Set the language preference in localStorage and update the displayed content immediately
function setLanguagePreference(language, pagePath) {
    // Set language preference in localStorage
    localStorage.setItem('languagePreference_' + pagePath, language);
    // Update the displayed content based on the selected language
    showContent(language, pagePath);
}

// Get the language preference from localStorage
function getLanguagePreference(pagePath) {
    return localStorage.getItem('languagePreference_' + pagePath);
}

// Show the content based on the selected language
function showContent(language, pagePath) {
    // Map each language to its corresponding content element
    var contentMap = {
        'cpp': 'cppContent',
        'csharp': 'csharpContent',
        'python': 'pythonContent'
    };

    // Iterate over each language in the contentMap
    Object.keys(contentMap).forEach(function (key) {
        // Get the content element based on the language
        var contentElement = document.getElementById(contentMap[key]);

        // Check if the content element exists
        if (contentElement) {
            // Set the display property based on whether it's the selected language
            contentElement.style.display = (language === key) ? 'block' : 'none';
        }
    });

    // Log a message indicating the switch to the specified language
    console.log(`Switching to ${language} content`);
}

// Perform actions after the DOM has fully loaded
document.addEventListener('DOMContentLoaded', function () {
    // Get the current page path
    var pagePath = window.location.pathname;
    console.log('Page Path:', pagePath);

    // Retrieve the saved language preference from localStorage
    var savedLanguage = getLanguagePreference(pagePath);
    console.log('Saved Language:', savedLanguage);

    // If a language preference is saved, update the displayed content
    if (savedLanguage) {
        showContent(savedLanguage, pagePath);
    }
});

// Set the language preference and update the displayed content on button click
function setLanguageAndShowContent(language) {
    // Get the current page path
    var pagePath = window.location.pathname;
    // Set the language preference in localStorage and update the displayed content
    setLanguagePreference(language, pagePath);
}