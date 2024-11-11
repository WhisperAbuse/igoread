const style = document.createElement('link');
style.rel = 'stylesheet';
style.href = chrome.runtime.getURL('read_mode.css');
document.head.appendChild(style);

const elementsToRemove = ['nav', 'aside', 'footer', '.ad', '.sidebar'];

elementsToRemove.forEach((selector) => {
  document.querySelector(selector).forEach((el) => el.remove());
});

const mainContent = document.querySelector('main') || document.body;
mainContent.style.maxWidth = '600px';
mainContent.style.margin = '0 auto';
