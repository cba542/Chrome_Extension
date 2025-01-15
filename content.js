// Create floating window
const floatingWindow = document.createElement('div');
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
    const range = selection.getRangeAt(0);
    const rect = range.getBoundingClientRect();
    
    floatingWindow.style.display = 'block';
    floatingWindow.style.top = `${rect.bottom + window.scrollY}px`;
    floatingWindow.style.left = `${rect.left + window.scrollX}px`;
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
