// script.js
function adjustLayout() {
    const layeredContainer = document.querySelector('.layered-container');
    const elementsContainer = document.querySelector('.elements-container');
    const fullScreenSection = document.querySelector('.full-screen-section');

    const sectionWidth = fullScreenSection.offsetWidth;
    const sectionHeight = fullScreenSection.offsetHeight;

    const containerWidth = elementsContainer.offsetWidth;
    const containerHeight = elementsContainer.offsetHeight;

    const scale = Math.min(sectionWidth / containerWidth, sectionHeight / containerHeight);

    elementsContainer.style.transform = `scale(${scale})`;
    elementsContainer.style.transformOrigin = 'top left';

    // Center the elements container
    const left = (sectionWidth - containerWidth * scale) / 2;
    const top = (sectionHeight - containerHeight * scale) / 2;

    elementsContainer.style.left = `${left}px`;
    elementsContainer.style.top = `${top}px`;
}

window.addEventListener('resize', adjustLayout);
window.addEventListener('load', adjustLayout);
