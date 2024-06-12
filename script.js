// script.js
function adjustLayout() {
    const elementsContainer = document.querySelector('.elements-container');
    const fullScreenSection = document.querySelector('.full-screen-section');
    const landingImage = document.querySelector('.landing-image');

    const sectionWidth = fullScreenSection.offsetWidth;
    const sectionHeight = fullScreenSection.offsetHeight;

    // Calculate scale based on viewport size
    const scale = Math.min(sectionWidth / 1920, sectionHeight / 1080);
    
    elementsContainer.style.transform = `scale(${scale})`;

    // Ensure landing image covers the viewport
    landingImage.style.width = `${sectionWidth}px`;
    landingImage.style.height = `${sectionHeight}px`;

    // Center the elements container
    elementsContainer.style.left = `${(sectionWidth - elementsContainer.offsetWidth * scale) / 2}px`;
    elementsContainer.style.top = `${(sectionHeight - elementsContainer.offsetHeight * scale) / 2}px`;
}

window.addEventListener('resize', adjustLayout);
window.addEventListener('load', adjustLayout);
