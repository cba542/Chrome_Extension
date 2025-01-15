// Create floating window
const floatingWindow = document.createElement('div');
floatingWindow.style.position = 'fixed';
floatingWindow.style.zIndex = '999999';
floatingWindow.style.backgroundColor = 'white';
floatingWindow.style.border = '1px solid #ccc';
floatingWindow.style.padding = '5px';
floatingWindow.style.boxShadow = '0 2px 5px rgba(0,0,0,0.2)';
floatingWindow.style.display = 'none';
floatingWindow.style.top = '0';
floatingWindow.style.left = '0';

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
    const range = selection.getRangeAt(0);
    const rect = range.getBoundingClientRect();
    console.log('Selection rect:', rect);
    
    // Calculate window position relative to selection
    const windowWidth = 120; // Approximate width of floating window
    const windowHeight = 40; // Approximate height of floating window
    const offset = 5; // Offset from selection
    
    let top = rect.bottom + offset;
    let left = rect.left;
    
    // Adjust position if window would go off screen
    if (left + windowWidth > window.innerWidth) {
      left = rect.right - windowWidth - offset;
    }
    if (top + windowHeight > window.innerHeight) {
      top = rect.top - windowHeight - offset;
    }
    
    floatingWindow.style.display = 'block';
    floatingWindow.style.top = `${top}px`;
    floatingWindow.style.left = `${left}px`;
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
