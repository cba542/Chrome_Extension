// Create floating window
const floatingWindow = document.createElement('div');
floatingWindow.id = 'myExtensionPopup';
floatingWindow.style.position = 'absolute';
floatingWindow.style.zIndex = '999999';
floatingWindow.style.backgroundColor = 'white';
floatingWindow.style.border = '1px solid #ccc';
floatingWindow.style.padding = '5px';
floatingWindow.style.boxShadow = '0 2px 5px rgba(0,0,0,0.2)';
floatingWindow.style.display = 'none';

// Add click me button
const clickMeButton = document.createElement('button');
clickMeButton.textContent = 'Click Me';
clickMeButton.style.margin = '0';
clickMeButton.style.padding = '3px 8px';
clickMeButton.style.fontSize = '12px';

clickMeButton.addEventListener('click', () => {
  const selectedText = window.getSelection().toString();
  alert(`You selected: ${selectedText}`);
});

floatingWindow.appendChild(clickMeButton);
document.body.appendChild(floatingWindow);

// Show floating window when text is selected
document.addEventListener('mouseup', (e) => {
  const selection = window.getSelection();
  if (selection.toString().trim() !== '') {
    showPopup();
  } else {
    floatingWindow.style.display = 'none';
  }
});

// Hide floating window when clicking outside
document.addEventListener('mousedown', (e) => {
  if (!floatingWindow.contains(e.target)) {
    floatingWindow.style.display = 'none';
  }
});

function showPopup() {
    const selection = window.getSelection();
    const range = selection.getRangeAt(0);
    const rect = range.getBoundingClientRect();
    
    // Get the selected element's position relative to the viewport
    const selectedElement = range.startContainer.parentElement;
    const elementRect = selectedElement.getBoundingClientRect();
    
    // Calculate position relative to the document
    const scrollX = window.pageXOffset || document.documentElement.scrollLeft;
    const scrollY = window.pageYOffset || document.documentElement.scrollTop;
    
    // Use the floatingWindow directly instead of getElementById
    floatingWindow.style.position = 'fixed'; // Change to fixed positioning
    floatingWindow.style.left = `${elementRect.left}px`;
    floatingWindow.style.top = `${elementRect.bottom + 5}px`; // 5px offset
    floatingWindow.style.display = 'block';
    
    // Ensure popup stays within viewport
    const viewportWidth = window.innerWidth;
    const viewportHeight = window.innerHeight;
    
    if (parseFloat(floatingWindow.style.left) + floatingWindow.offsetWidth > viewportWidth) {
        floatingWindow.style.left = `${viewportWidth - floatingWindow.offsetWidth - 10}px`;
    }
    
    if (parseFloat(floatingWindow.style.top) + floatingWindow.offsetHeight > viewportHeight) {
        floatingWindow.style.top = `${elementRect.top - floatingWindow.offsetHeight - 5}px`;
    }
}
