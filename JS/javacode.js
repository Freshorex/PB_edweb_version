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

 // Track the toggle state
  let isActive2 = false;

// Get elements
  const epbox = document.getElementById('ep-box');
  const epbtn = document.getElementById('ep-btn');

  // Click event
  epbtn.addEventListener('click', function () {
    if (!isActive2) {
      // First click action
      document.getElementById('ep-box').style.display = "block"
    } else {
      // Second click reverses the action
      document.getElementById('ep-box').style.display = "none"
    }
    // Flip the state
    isActive2 = !isActive2;
  });





