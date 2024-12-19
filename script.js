document.addEventListener('keydown', (event) => {
    // Check if both 'Shift' and 'A' keys are pressed
    if (event.shiftKey && event.key === 'A') {
      console.log('Shift + A pressed!');
    }
  });
  