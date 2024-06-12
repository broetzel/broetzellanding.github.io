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
    const scaledWidth = elementsContainer.offsetWidth * scale;
    const scaledHeight = elementsContainer.offsetHeight * scale;

    elementsContainer.style.left = `${(sectionWidth - scaledWidth) / 2}px`;
    elementsContainer.style.top = `${(sectionHeight - scaledHeight) / 2}px`;

    console.log('Elements container dimensions after scaling:', scaledWidth, scaledHeight);
    console.log('Elements container position:', elementsContainer.style.left, elementsContainer.style.top);

    // Force repaint
    elementsContainer.style.display = 'none';
    elementsContainer.offsetHeight; // trigger reflow
    elementsContainer.style.display = 'flex';
}

// Ensure the function runs after all elements are loaded
window.addEventListener('load', () => {
    setTimeout(adjustLayout, 100);
});

window.addEventListener('resize', adjustLayout);
