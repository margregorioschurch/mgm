function disableAutoplay() { 
tsParticles.load({
    id: "tsparticles",
    options: {"autoPlay":false}
});
};

function enableAutoplay() { 
    tsParticles.load({
        id: "tsparticles",
        options: {"autoPlay":true,"background":{"color":{"value":"transparent"},"image":"","position":"","repeat":"","size":"","opacity":0},"backgroundMask":{"composite":"destination-out","cover":{"color":{"value":"#fff"},"opacity":1},"enable":false},"defaultThemes":{},"delay":0,"fullScreen":{"enable":true,"zIndex":0},"detectRetina":true,"duration":0,"fpsLimit":120,"interactivity":{"detectsOn":"window","events":{"onClick":{"enable":false,"mode":[]},"onDiv":{"selectors":[],"enable":false,"mode":[],"type":"circle"},"onHover":{"enable":true,"mode":"repulse","parallax":{"enable":false,"force":2,"smooth":10}},"resize":{"delay":0.5,"enable":true}},"modes":{"trail":{"delay":1,"pauseOnStop":false,"quantity":1},"attract":{"distance":200,"duration":0.4,"easing":"ease-out-quad","factor":1,"maxSpeed":50,"speed":1},"bounce":{"distance":200},"bubble":{"distance":200,"duration":0.4,"mix":false},"connect":{"distance":80,"links":{"opacity":0.5},"radius":60},"grab":{"distance":100,"links":{"blink":false,"consent":false,"opacity":1}},"push":{"default":true,"groups":[],"quantity":4},"remove":{"quantity":2},"repulse":{"distance":200,"duration":0.4,"factor":100,"speed":1,"maxSpeed":50,"easing":"ease-out-quad","divs":{"distance":200,"duration":0.4,"factor":100,"speed":1,"maxSpeed":50,"easing":"ease-out-quad","selectors":[]}},"slow":{"factor":3,"radius":200},"light":{"area":{"gradient":{"start":{"value":"#ffffff"},"stop":{"value":"#000000"}},"radius":1000},"shadow":{"color":{"value":"#000000"},"length":2000}}}},"manualParticles":[],"particles":{"bounce":{"horizontal":{"random":{"enable":false,"minimumValue":0.1},"value":1},"vertical":{"random":{"enable":false,"minimumValue":0.1},"value":1}},"collisions":{"absorb":{"speed":2},"bounce":{"horizontal":{"random":{"enable":false,"minimumValue":0.1},"value":1},"vertical":{"random":{"enable":false,"minimumValue":0.1},"value":1}},"enable":false,"maxSpeed":50,"mode":"bounce","overlap":{"enable":true,"retries":0}},"color":{"value":"#ff0000","animation":{"h":{"count":0,"enable":false,"offset":0,"speed":1,"delay":0,"decay":0,"sync":true},"s":{"count":0,"enable":false,"offset":0,"speed":1,"delay":0,"decay":0,"sync":true},"l":{"count":0,"enable":false,"offset":0,"speed":1,"delay":0,"decay":0,"sync":true}}},"groups":{},"move":{"angle":{"offset":0,"value":90},"attract":{"distance":200,"enable":false,"rotate":{"x":3000,"y":3000}},"center":{"x":50,"y":50,"mode":"percent","radius":0},"decay":0,"distance":{},"direction":"none","drift":0,"enable":true,"gravity":{"acceleration":9.81,"enable":false,"inverse":false,"maxSpeed":50},"path":{"clamp":true,"delay":{"random":{"enable":false,"minimumValue":0},"value":0},"enable":false,"options":{}},"outModes":{"default":"out","bottom":"out","left":"out","right":"out","top":"out"},"random":false,"size":false,"speed":2,"spin":{"acceleration":0,"enable":false},"straight":false,"trail":{"enable":false,"length":10,"fill":{}},"vibrate":false,"warp":false},"number":{"density":{"enable":true,"width":1920,"height":1080},"limit":0,"value":80},"opacity":{"random":{"enable":false,"minimumValue":0.1},"value":{"min":0.1,"max":0.5},"animation":{"count":0,"enable":true,"speed":3,"decay":0,"delay":0,"sync":false,"mode":"auto","startValue":"random","destroy":"none"}},"reduceDuplicates":false,"shadow":{"blur":0,"color":{"value":"#000"},"enable":false,"offset":{"x":0,"y":0}},"shape":{"close":true,"fill":true,"options":{},"type":"circle"},"size":{"random":{"enable":false,"minimumValue":1},"value":{"min":0.1,"max":5},"animation":{"count":0,"enable":true,"speed":20,"decay":0,"delay":0,"sync":false,"mode":"auto","startValue":"random","destroy":"none"}},"stroke":{"width":0},"zIndex":{"random":{"enable":false,"minimumValue":0},"value":0,"opacityRate":1,"sizeRate":1,"velocityRate":1},"destroy":{"bounds":{},"mode":"none","split":{"count":1,"factor":{"random":{"enable":false,"minimumValue":0},"value":3},"rate":{"random":{"enable":false,"minimumValue":0},"value":{"min":4,"max":9}},"sizeOffset":true}},"roll":{"darken":{"enable":false,"value":0},"enable":false,"enlighten":{"enable":true,"value":1},"mode":"vertical","speed":25},"tilt":{"random":{"enable":false,"minimumValue":0},"value":0,"animation":{"enable":false,"speed":0,"decay":0,"sync":false},"direction":"clockwise","enable":false},"twinkle":{"lines":{"enable":false,"frequency":0.005,"opacity":1,"color":{"value":"#ff0000"}},"particles":{"enable":true,"frequency":0.05,"opacity":1,"color":{"value":"#ffff00"}}},"wobble":{"distance":5,"enable":false,"speed":{"angle":50,"move":10}},"life":{"count":0,"delay":{"random":{"enable":false,"minimumValue":0},"value":0,"sync":false},"duration":{"random":{"enable":false,"minimumValue":0.0001},"value":0,"sync":false}},"rotate":{"random":{"enable":false,"minimumValue":0},"value":0,"animation":{"enable":false,"speed":0,"decay":0,"sync":false},"direction":"clockwise","path":false},"orbit":{"animation":{"count":0,"enable":false,"speed":1,"decay":0,"delay":0,"sync":false},"enable":false,"opacity":1,"rotation":{"random":{"enable":false,"minimumValue":0},"value":45},"width":1},"links":{"blink":false,"color":{"value":"#ffffff"},"consent":false,"distance":150,"enable":true,"frequency":1,"opacity":0.4,"shadow":{"blur":5,"color":{"value":"#000"},"enable":false},"triangles":{"enable":false,"frequency":1},"width":1,"warp":false},"repulse":{"random":{"enable":false,"minimumValue":0},"value":0,"enabled":false,"distance":1,"duration":1,"factor":1,"speed":1}},"pauseOnBlur":true,"pauseOnOutsideViewport":true,"responsive":[],"smooth":false,"style":{},"themes":[],"zLayers":100,"motion":{"disable":false,"reduce":{"factor":4,"value":true}}}
    });
};

document.addEventListener('DOMContentLoaded', function () {
  var checkbox = document.querySelector('input[type="checkbox"]');

  checkbox.addEventListener('change', function () {
    if (checkbox.checked) {
      enableAutoplay();
      console.log('Checked');
    } else {
      disableAutoplay();
      console.log('Not checked');
    }
  });
});
// Debug script.js
var h = document.getElementById("tsparticles")
  , i = performance.timing;
window.addEventListener("load", function() {
    console.log("\n> MGM, Thottapuzha is successfully loaded in", Math.round(i.loadEventEnd - i.responseEnd) / 1e11, "sec."),
    window.setTimeout( () => {
        h.style.display = "none"
    }
    , 1e3)
}, a());
var b = new Date
  , c = b.toLocaleString();
const d = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth
  , e = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
console.log(">", navigator.userAgent, "\n>", c, "\nResolution :", d, "*", e);
let f = document.cookie;
function g() {
    navigator.geolocation ? navigator.geolocation.getCurrentPosition(k, j) : console.error("Geolocation is not supported by this browser.")
}
function j(a) {
    let b;
    switch (a.code) {
    case a.PERMISSION_DENIED:
        b = "User denied the request for Geolocation.";
        break;
    case a.POSITION_UNAVAILABLE:
        b = "Location information is unavailable.";
        break;
    case a.TIMEOUT:
        b = "The request to get user location timed out.";
        break;
    case a.UNKNOWN_ERROR:
    default:
        b = "An unknown error occurred."
    }
    console.error("Error occurred: " + b)
}
function k(a) {
    var b = a.coords.latitude
      , c = a.coords.longitude;
    console.log("> User-location %c\nLatitude: " + b + "\nLongitude: " + c, "background:#000;color:#16d900;border-radius:3px")
}
console.log("> Cookie-Enabled:", navigator.cookieEnabled, "\n", f),
g();
// Dark Theme script.js
document.addEventListener('DOMContentLoaded', function () {
  const darkModeToggle = document.getElementById('darkModeToggle');

  // Check the saved theme in localStorage
  const savedMode = localStorage.getItem('darkMode');
  const isDarkMode = savedMode ? JSON.parse(savedMode) : false; // Default to false if no saved mode

  // Set initial mode based on the saved preference
  setDarkMode(isDarkMode);

  // Set the initial state of the checkbox
  if (darkModeToggle) {
    darkModeToggle.checked = isDarkMode;

    // Toggle dark mode when the checkbox is clicked
    darkModeToggle.addEventListener('change', function () {
      const newMode = darkModeToggle.checked;
      setDarkMode(newMode);

      // Save the preference in localStorage
      localStorage.setItem('darkMode', JSON.stringify(newMode));
    });
  }
});

function setDarkMode(isDarkMode) {
  const body = document.body;

  // Apply the dark mode or light mode class to the body element
  body.classList.toggle('dark-mode', isDarkMode);
  body.classList.toggle('light-mode', !isDarkMode);

  // Apply dark mode to other containers if necessary
  const allContainers = document.querySelectorAll('.container, .header, .footer'); // Adjust based on your needs
  allContainers.forEach(container => {
    container.classList.toggle('dark-mode', isDarkMode);
  });
}


//const countEl=document.getElementById("CounterVisitor");function updateVisitCount(){fetch("https://api.countapi.xyz/update/mgm/visits/?amount=1").then(t=>t.json()).then(t=>{countEl.innerHTML=t.value})}updateVisitCount();
