// script.js
function adjustLayout() {
    const elementsContainer = document.querySelector('.elements-container');
    const fullScreenSection = document.querySelector('.full-screen-section');
    const landingImage = document.querySelector('.landing-image');

    const sectionWidth = fullScreenSection.offsetWidth;
    const sectionHeight = fullScreenSection.offsetHeight;

    // Calculate scale based on viewport size
    const scale = Math.min(sectionWidth / 1920, sectionHeight / 1080);

    console.log('Viewport dimensions:', sectionWidth, sectionHeight);
    console.log('Calculated scale:', scale);

    elementsContainer.style.transform = `scale(${scale})`;

    // Ensure landing image covers the viewport
    landingImage.style.width = `${sectionWidth}px`;
    landingImage.style.height = `${sectionHeight}px`;

    // Center the elements container
    elementsContainer.style.left = `${(sectionWidth - elementsContainer.offsetWidth * scale) / 2}px`;
    elementsContainer.style.top = `${(sectionHeight - elementsContainer.offsetHeight * scale) / 2}px`;

    console.log('Elements container dimensions after scaling:', elementsContainer.offsetWidth * scale, elementsContainer.offsetHeight * scale);
    console.log('Elements container position:', elementsContainer.style.left, elementsContainer.style.top);
}

// Ensure the function runs after all elements are loaded
window.addEventListener('load', () => {
    setTimeout(adjustLayout, 100);
});

window.addEventListener('resize', adjustLayout);
