function navFunction() {
    var topnav = document.getElementById("nav");
    if (topnav.className === "nav") {
      topnav.className += " responsive";
    } else {
      topnav.className = "nav";
    }
  }