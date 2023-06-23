console.log("Hello! Welcome to my UX Portfolio");
function menuToggle() {
  var x = document.getElementById("myNavtoggle");
  if (x.className === "navtoggle") {
    x.className += " responsive";
  } else {
    x.className = "navtoggle";
  }
}

// Function to check if an element is in the viewport
function isInViewport(element) {
  var rect = element.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

// Function to handle scroll and touch events
function handleScroll() {
  var workItems = document.querySelectorAll('.work-item');
  
  for (var i = 0; i < workItems.length; i++) {
    if (isInViewport(workItems[i])) {
      workItems[i].classList.add('show');
    }
  }
}

// Event listeners for scroll and touch events
window.addEventListener('scroll', handleScroll);
window.addEventListener('touchmove', handleScroll);