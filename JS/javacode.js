 // Track the toggle state
  let isActive = false;

  // Get elements
  const box = document.getElementById('intmenu');
  const btn = document.getElementById('menu');

  // Click event
  btn.addEventListener('click', function () {
    if (!isActive) {
      // First click action
      document.getElementById('intmenu').style.display = "block"
    } else {
      // Second click reverses the action
      document.getElementById('intmenu').style.display = "none"
    }
    // Flip the state
    isActive = !isActive;
  });