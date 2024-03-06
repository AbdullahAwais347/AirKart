
// Function to observe and handle scrolling for sec-2-div-1
function observeSec2Div1() {
  const targetElement = document.querySelector('.sec-2-div-1 p');
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        targetElement.classList.add('visible');
      } else {
        targetElement.classList.remove('visible');
      }
    });
  });
  observer.observe(targetElement);

  function handleScroll() {
    const bounding = targetElement.getBoundingClientRect();
    const percentVisible = (bounding.top >= 0 ? Math.min(bounding.height, window.innerHeight - bounding.top) : (bounding.bottom < window.innerHeight ? bounding.height : window.innerHeight)) / bounding.height * 100;
    if (percentVisible < 80) {
      targetElement.classList.remove('visible');
    }
  }
  window.addEventListener('scroll', handleScroll);
}

// Call the function to observe sec-2-div-1
observeSec2Div1();







// Function to observe sec-3-div-1
function observeSec3Div1() {
  const targetElement1 = document.querySelector('.sec-3-div-1');
  const observer1 = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        targetElement1.classList.add('visible');
      } else {
        targetElement1.classList.remove('visible');
      }
    });
  });
  observer1.observe(targetElement1);
}

// Call the function to observe sec-3-div-1
observeSec3Div1();

// window.addEventListener('DOMContentLoaded', function () {
//   const items = container.querySelectorAll('.sec-3-div-5');

//   // Function to toggle overflow property based on number of items
//   function toggleOverflow() {
//     const containerWidth = container.getBoundingClientRect().width;
//     const totalItemsWidth = Array.from(items).reduce((acc, item) => acc + item.offsetWidth, 0);

//     container.style.overflowX = totalItemsWidth > containerWidth ? 'scroll' : 'auto';
//   }

//   // Call the toggleOverflow function when the DOM content is loaded
//   toggleOverflow();

//   // Update overflow property whenever the window is resized
//   window.addEventListener('resize', toggleOverflow);
// });
function applyHoverEffectOnScroll_1(elementSelector) {
  document.addEventListener("DOMContentLoaded", function () {
    window.addEventListener("scroll", function () {
      var element = document.querySelector(elementSelector);
      var position = element.getBoundingClientRect();

      // If the element is in the viewport
      if (position.top >= 0 && position.bottom <= window.innerHeight) {
        element.querySelector('.p1').style.marginLeft = "20px";
        element.querySelector('.p2').style.marginLeft = "20px";
        element.querySelector('.p2').style.marginTop = "10px";
      } else {
        element.querySelector('.p1').style.marginLeft = "";
        element.querySelector('.p2').style.marginLeft = "";
        element.querySelector('.p2').style.marginTop = "";
      }
    });
  });
}

// Call the function with the selector of the element you want to apply the effect to
applyHoverEffectOnScroll_1('.sec-4-div-2');

function applyHoverEffectOnScroll_2(elementSelector, initialMargin, finalMargin) {
  document.addEventListener("DOMContentLoaded", function () {
    window.addEventListener("scroll", function () {
      var element = document.querySelector(elementSelector);
      var position = element.getBoundingClientRect();

      // If the element is in the viewport
      if (position.top >= 0 && position.bottom <= window.innerHeight) {
        element.style.marginLeft = finalMargin;
      } else {
        element.style.marginLeft = initialMargin;
      }
    });
  });
}

applyHoverEffectOnScroll_2('.sec-4-div-3 ul', '350px', '80px');




function applyHoverEffectOnScroll_3(elementSelector, initialMargin, finalMargin) {
  document.addEventListener("DOMContentLoaded", function () {
    window.addEventListener("scroll", function () {
      var element = document.querySelector(elementSelector);
      var position = element.getBoundingClientRect();

      // Calculate the middle of the viewport
      var viewportMiddle = window.innerHeight / 2;

      // Calculate the middle of the element
      var elementMiddle = (position.top + position.bottom) / 2;

      // Define a threshold (e.g., 100px) for when the element starts approaching the middle
      var threshold = 100;

      // If the element is within the threshold of the middle portion of the viewport
      if (elementMiddle >= viewportMiddle - (position.height / 2) - threshold && elementMiddle <= viewportMiddle + (position.height / 2) + threshold) {
        element.style.marginLeft = finalMargin;
      } else {
        element.style.marginLeft = initialMargin;
      }
    });
  });
}
applyHoverEffectOnScroll_3('.sec-4-div-4', '20px', '80px');



function applyTransitionOnScroll(sourceSelector, targetSelector, initialMargin, finalMargin) {
  document.addEventListener("DOMContentLoaded", function () {
    window.addEventListener("scroll", function () {
      var sourceElement = document.querySelector(sourceSelector);
      var targetElement = document.querySelector(targetSelector);
      var position = sourceElement.getBoundingClientRect();

      // If the source element is in the viewport
      if (position.top >= 0 && position.bottom <= window.innerHeight) {
        targetElement.style.marginLeft = finalMargin;
      } else {
        targetElement.style.marginLeft = initialMargin;
      }
    });
  });
}
function applyHoverEffectOnScroll_4(elementSelector) {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('hover-effect');
      } else {
        entry.target.classList.remove('hover-effect');
      }
    });
  });
  const targetElement = document.querySelector(elementSelector);
  observer.observe(targetElement);
}
applyHoverEffectOnScroll_4('.sec-5-video-div');


function applyTransitionOnScroll(elementSelectors) {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('transition-effect');
      } else {
        entry.target.classList.remove('transition-effect');
      }
    });
  });

  elementSelectors.forEach(selector => {
    const targetElement = document.querySelector(selector);
    observer.observe(targetElement);
  });
}
applyTransitionOnScroll(['.sec-5-div-2 .p1', '.sec-5-div-2 .p2']);

document.addEventListener("DOMContentLoaded", function () {
  function checkFooterDivVisibility() {
    const footerDiv = document.querySelector(".sec-6-div-1 .p1");
    const footerDivPosition = footerDiv.getBoundingClientRect().top;

    if (footerDivPosition < window.innerHeight) {
      footerDiv.classList.add("show");
    } else {
      footerDiv.classList.remove("show");
    }
  }

  function handleScroll() {
    checkFooterDivVisibility();
  }

  window.addEventListener("scroll", handleScroll);
});

document.addEventListener("DOMContentLoaded", function () {
  function checkFooterDivVisibility() {
    const footerDiv = document.querySelector(".sec-6-div-1 .p2");
    const footerDivPosition = footerDiv.getBoundingClientRect().top;

    if (footerDivPosition < window.innerHeight) {
      footerDiv.classList.add("show");
    } else {
      footerDiv.classList.remove("show");
    }
  }

  function handleScroll() {
    checkFooterDivVisibility();
  }

  window.addEventListener("scroll", handleScroll);
});



// Footer
document.addEventListener("DOMContentLoaded", function () {
  function checkFooterDivVisibility(footerDivId) {
    const footerDiv = document.getElementById(footerDivId);
    const footerDivPosition = footerDiv.getBoundingClientRect().top;

    if (footerDivPosition < window.innerHeight) {
      footerDiv.classList.add("show");
    } else {
      footerDiv.classList.remove("show");
    }
  }

  function handleScroll() {
    checkFooterDivVisibility("footer-div-2");
    checkFooterDivVisibility("footer-div-5");
  }

  window.addEventListener("scroll", handleScroll);
});


function openTab(tabName) {
  var i, tabcontent, tablinks;
  console.log("OpenTab function... ")
  tabcontent = document.getElementsByClassName("sec-4-div-4");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].classList.remove("active");
  }
  document.getElementById(tabName).style.display = "block";
  var activeTab = document.querySelector('.tablinks');
  activeTab.classList.add(":active");
}









function initializeSwiper() {
  var swiper = new Swiper(".swiper-1", {
    slidesPerView: 1,
    centeredSlides: true,
    loop: true,
    // autoplay: {
    //   delay: 2500, 
    //   disableOnInteraction: false,
    // },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
}

initializeSwiper();

var swiper2 = new Swiper(".swiper-2", {
  slidesPerView: 2,
  slidesPerGroup: 2,
  navigation: {
    nextEl: ".swiper-button-next-2",
    prevEl: ".swiper-button-prev-2",
  },
});

var swiper3 = new Swiper(".swiper-3", {
  slidesPerView: 5,
  // slidesPerGroup: 2, 
  navigation: {
    nextEl: ".swiper-button-next-3",
    prevEl: ".swiper-button-prev-3",
  },
  // breakpoints: {
  //   // When the viewport width is 767px or smaller
  //   767: {
  //     slidesPerView: 3,
  //   },
  // },
});

var swiper4 = new Swiper(".swiper-4", {
  slidesPerView: 5,
  // slidesPerGroup: 2, 
  navigation: {
    nextEl: ".swiper-button-next-4",
    prevEl: ".swiper-button-prev-4",
  },
});
var swiper5 = new Swiper(".swiper-5", {
  slidesPerView: 5,
  // slidesPerGroup: 2, 
  navigation: {
    nextEl: ".swiper-button-next-5",
    prevEl: ".swiper-button-prev-5",
  },
});