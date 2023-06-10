console.log("Hello, welcome to my UX portfolio, A quick shoutout to my UX mentor, Ardie, who helped me learn how to build this website.");
function menuToggle() {
    var x = document.getElementById('myNavtoggle');
    if (x.className === 'navtoggle') {
      x.className += ' responsive';
    } else {
      x.className = 'navtoggle';
    }
  }