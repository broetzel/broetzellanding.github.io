// script.js
function adjustLayout() {
    const fullScreenSection = document.querySelector('.full-screen-section');
    const landingImageContainer = document.querySelector('.landing-image-container');
    const elementsContainer = document.querySelector('.elements-container');

    const sectionWidth = fullScreenSection.offsetWidth;
    const sectionHeight = fullScreenSection.offsetHeight;

    // Calculate scale based on viewport size and reduce by 25%
    const scale = Math.min(sectionWidth / 1920, sectionHeight / 1080) * 0.75;

    console.log('Viewport dimensions:', sectionWidth, sectionHeight);
    console.log('Calculated scale:', scale);

    // Scale and position the elements container
    elementsContainer.style.transform = `translate(-5%, -30%) scale(${scale})`; // Adjusted left position

    // Ensure landing image container covers the viewport
    landingImageContainer.style.width = `${sectionWidth}px`;
    landingImageContainer.style.height = `${sectionHeight}px`;

    console.log('Elements container position:', elementsContainer.style.left, elementsContainer.style.top);
}

// Ensure the function runs after all elements are loaded
window.addEventListener('load', () => {
    setTimeout(adjustLayout, 100);
});

window.addEventListener('resize', adjustLayout);
