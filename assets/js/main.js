//Loads the page from the start when refreshed
if (history.scrollRestoration) {
  history.scrollRestoration = "manual";
} else {
  window.onbeforeunload = function () {
    window.scrollTo(0, 0);
  };
}

// Sticky Navigation Function
let navbar = document.getElementById("navbar-home");

$(window).scroll(function () {
  // Get the complete hight of window
  let oTop = $(".nav-view").offset().top - window.innerHeight;
  if ($(window).scrollTop() > oTop) {
    navbar.classList.remove("sticky-remove");
    navbar.classList.add("sticky-add");
  } else {
    navbar.classList.replace("sticky-add", "sticky-remove");
  }
});

//Light + Dark Mode
const toggle = document.getElementById("toggle");
let mode = document.getElementById("html");
let icon = document.getElementById("ball");
let darkMode = localStorage.getItem("darkMode");

const enableDarkMode = () => {
  if (mode.classList.contains("light")) {
    mode.classList.remove("light");
    mode.classList.add("dark");

    icon.classList.remove("bi-sun-fill");
    icon.classList.add("bi-moon-fill");

    localStorage.setItem("darkMode", "enabled");
  }
};

const disableDarkMode = () => {
  if (mode.classList.contains("dark")) {
    mode.classList.remove("dark");
    mode.classList.add("light");

    icon.classList.remove("bi-moon-fill");
    icon.classList.add("bi-sun-fill");

    localStorage.setItem("darkMode", null);
  }
};

if (darkMode === "enabled") {
  enableDarkMode();
}

toggle.addEventListener("change", () => {
  darkMode = localStorage.getItem("darkMode");
  if (darkMode !== "enabled") {
    enableDarkMode();
  } else {
    disableDarkMode();
  }
});

// Statistics Counter Animation
let nCount = (selector) => {
  $(selector).each(function () {
    $(this).animate(
      {
        Counter: $(this).text(),
      },
      {
        // A string or a number determining how long the animation will run.
        duration: 2500,
        // A string indicating which easing function to use for the transition.
        easing: "swing",
        /**
         * A function to be called for each animated property of each animated element.
         * This function provides an opportunity to modify the Tween object to change the value of the property before it is set.
         **/
        step: function (value) {
          $(this).text(Math.ceil(value));
        },
      }
    );
  });
};

let a = 0;
$(window).scroll(function () {
  // The .offset() method allows us to retrieve the current position of an element relative to the document
  let oTop = $(".numbers").offset().top - window.innerHeight;
  if (a == 0 && $(window).scrollTop() >= oTop) {
    a++;
    nCount(".rect > h1");
  }
});
