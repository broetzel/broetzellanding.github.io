// script.js
function adjustLayout() {
    const layeredContainer = document.querySelector('.layered-container');
    const elementsContainer = document.querySelector('.elements-container');
    const fullScreenSection = document.querySelector('.full-screen-section');

    const sectionWidth = fullScreenSection.offsetWidth;
    const sectionHeight = fullScreenSection.offsetHeight;

    // Calculate scale based on viewport size
    const scale = Math.min(sectionWidth / 1920, sectionHeight / 1080);
    
    layeredContainer.style.transform = `scale(${scale})`;

    // Center the elements container
    const containerWidth = elementsContainer.offsetWidth * scale;
    const containerHeight = elementsContainer.offsetHeight * scale;

    const left = (sectionWidth - containerWidth) / 2;
    const top = (sectionHeight - containerHeight) / 2;

    elementsContainer.style.position = 'absolute';
    elementsContainer.style.left = `${left}px`;
    elementsContainer.style.top = `${top}px`;
}

window.addEventListener('resize', adjustLayout);
window.addEventListener('load', adjustLayout);
