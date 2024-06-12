// script.js
function adjustLayout() {
    const fullScreenSection = document.querySelector('.full-screen-section');
    const landingImageContainer = document.querySelector('.landing-image-container');
    const elementsContainer = document.querySelector('.elements-container');

    const sectionWidth = fullScreenSection.offsetWidth;
    const sectionHeight = fullScreenSection.offsetHeight;

    // Calculate scale based on viewport size
    const scale = Math.min(sectionWidth / 1920, sectionHeight / 1080);

    console.log('Viewport dimensions:', sectionWidth, sectionHeight);
    console.log('Calculated scale:', scale);

    // Scale the elements container
    elementsContainer.style.transform = `scale(${scale})`;

    // Center the landing image container and elements container
    const scaledWidth = elementsContainer.offsetWidth * scale;
    const scaledHeight = elementsContainer.offsetHeight * scale;

    elementsContainer.style.left = `${(sectionWidth - scaledWidth) / 2}px`;
    elementsContainer.style.top = `${(sectionHeight - scaledHeight) / 2}px`;

    landingImageContainer.style.width = `${sectionWidth}px`;
    landingImageContainer.style.height = `${sectionHeight}px`;

    console.log('Elements container dimensions after scaling:', scaledWidth, scaledHeight);
    console.log('Elements container position:', elementsContainer.style.left, elementsContainer.style.top);
}

// Ensure the function runs after all elements are loaded
window.addEventListener('load', () => {
    setTimeout(adjustLayout, 100);
});

window.addEventListener('resize', adjustLayout);
