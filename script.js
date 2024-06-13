// script.js
function adjustLayout() {
    const fullScreenSection = document.querySelector('.full-screen-section');
    const combinedContainer = document.querySelector('.combined-container');

    const sectionWidth = fullScreenSection.offsetWidth;
    const sectionHeight = fullScreenSection.offsetHeight;

    // Calculate scale based on viewport size
    const scale = Math.min(sectionWidth / 1920, sectionHeight / 1080);

    console.log('Viewport dimensions:', sectionWidth, sectionHeight);
    console.log('Calculated scale:', scale);

    // Scale the combined container
    combinedContainer.style.transform = `scale(${scale})`;

    console.log('Combined container position:', combinedContainer.style.left, combinedContainer.style.top);
}

// Ensure the function runs after all elements are loaded
window.addEventListener('load', () => {
    setTimeout(adjustLayout, 100);
});

window.addEventListener('resize', adjustLayout);
