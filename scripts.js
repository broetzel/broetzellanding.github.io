// script.js
function adjustLayout() {
    const elementsContainer = document.querySelector('.elements-container');
    const fullScreenSection = document.querySelector('.full-screen-section');

    const sectionWidth = fullScreenSection.offsetWidth;
    const sectionHeight = fullScreenSection.offsetHeight;

    // Center the elements container
    elementsContainer.style.position = 'absolute';
    elementsContainer.style.left = `${(sectionWidth - elementsContainer.offsetWidth) / 2}px`;
    elementsContainer.style.top = `${(sectionHeight - elementsContainer.offsetHeight) / 2}px`;
}

window.addEventListener('resize', adjustLayout);
window.addEventListener('load', adjustLayout);
