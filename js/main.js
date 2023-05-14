const lists = document.querySelectorAll(".headerListItem");
const lists2 = document.querySelectorAll(".headerListItem2");
const openNav = document.getElementById("openNav");
const closeNav = document.getElementById("closeNav");
const themeToggler = document.querySelectorAll("#themeToggle");
const header = document.querySelector("header");
const heroBg = document.getElementById("heroBg");


window.addEventListener("resize", () => {
  if(window.innerWidth > 860){
    document.querySelector(".nav__menu-wrapper").style.zIndex = "-9999";
    document.querySelector(".nav__menu-wrapper").style.right = "-150%";
    document.querySelector(".nav__menu-wrapper").style.backdropFilter = "brightness(100%)";
    document.querySelector(".nav__menu").style.right = "-150%";
  };
})
window.addEventListener("scroll", () => {
  if(pageYOffset > 80){
    header.classList.add('shrink')
  } else {
    header.classList.remove("shrink");
  }
});
themeToggler.forEach((toggle) => {
  toggle.addEventListener("click", () => {
    document.body.classList.toggle("dark")
    if(document.body.classList.contains("dark")){
      heroBg.getAttribute('src') = 'assets/images/home/dark.svg';
      toggle.innerHTML = `
      <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M10.5 0.645996C10.8797 0.645996 11.1875 0.9538 11.1875 1.3335V2.25016C11.1875 2.62986 10.8797 2.93766 10.5 2.93766C10.1203 2.93766 9.8125 2.62986 9.8125 2.25016V1.3335C9.8125 0.9538 10.1203 0.645996 10.5 0.645996Z" fill="white"/>
  <path d="M10.5 5.22933C7.589 5.22933 5.22917 7.58916 5.22917 10.5002C5.22917 13.4112 7.589 15.771 10.5 15.771C13.411 15.771 15.7708 13.4112 15.7708 10.5002C15.7708 7.58916 13.411 5.22933 10.5 5.22933Z" fill="white"/>
  <path d="M4.50434 3.53224C4.23585 3.26375 3.80055 3.26375 3.53206 3.53224C3.26358 3.80072 3.26358 4.23602 3.53206 4.50451L4.18025 5.15269C4.44873 5.42117 4.88403 5.42117 5.15252 5.15269C5.421 4.8842 5.421 4.4489 5.15252 4.18042L4.50434 3.53224Z" fill="white"/>
  <path d="M20.3542 10.5002C20.3542 10.8799 20.0464 11.1877 19.6667 11.1877H18.75C18.3703 11.1877 18.0625 10.8799 18.0625 10.5002C18.0625 10.1205 18.3703 9.81266 18.75 9.81266H19.6667C20.0464 9.81266 20.3542 10.1205 20.3542 10.5002Z" fill="white"/>
  <path d="M17.4679 4.5045C17.7364 4.23601 17.7364 3.80071 17.4679 3.53223C17.1994 3.26374 16.7641 3.26374 16.4957 3.53223L15.8475 4.18041C15.579 4.44889 15.579 4.88419 15.8475 5.15268C16.116 5.42117 16.5513 5.42117 16.8197 5.15268L17.4679 4.5045Z" fill="white"/>
  <path d="M10.5 18.0627C10.8797 18.0627 11.1875 18.3705 11.1875 18.7502V19.6668C11.1875 20.0465 10.8797 20.3543 10.5 20.3543C10.1203 20.3543 9.8125 20.0465 9.8125 19.6668V18.7502C9.8125 18.3705 10.1203 18.0627 10.5 18.0627Z" fill="white"/>
  <path d="M16.8198 15.8476C16.5513 15.5792 16.116 15.5792 15.8475 15.8476C15.579 16.1161 15.579 16.5514 15.8475 16.8199L16.4957 17.4681C16.7642 17.7366 17.1995 17.7366 17.468 17.4681C17.7365 17.1996 17.7365 16.7643 17.468 16.4958L16.8198 15.8476Z" fill="white"/>
  <path d="M2.9375 10.5002C2.9375 10.8799 2.6297 11.1877 2.25 11.1877H1.33333C0.953637 11.1877 0.645833 10.8799 0.645833 10.5002C0.645833 10.1205 0.953637 9.81266 1.33333 9.81266H2.25C2.6297 9.81266 2.9375 10.1205 2.9375 10.5002Z" fill="white"/>
  <path d="M5.15246 16.8199C5.42094 16.5514 5.42094 16.1161 5.15246 15.8476C4.88397 15.5792 4.44867 15.5792 4.18018 15.8476L3.532 16.4958C3.26352 16.7643 3.26352 17.1996 3.532 17.4681C3.80049 17.7366 4.23579 17.7366 4.50427 17.4681L5.15246 16.8199Z" fill="white"/>
  </svg>
  `;
    } else {
      heroBg.getAttribute('src') = 'assets/images/home/bg-hero-illustration.1d0afd66.svg.svg';
      toggle.innerHTML = `
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M8 0.208328C3.69678 0.208328 0.208336 3.69678 0.208336 7.99999C0.208336 12.3032 3.69678 15.7917 8 15.7917C12.0495 15.7917 15.377 12.7028 15.7558 8.75234C15.7734 8.56848 15.679 8.39201 15.5162 8.3047C15.3534 8.21739 15.1542 8.23632 15.0107 8.3527C14.2227 8.99215 13.2192 9.37499 12.125 9.37499C9.5937 9.37499 7.54167 7.32297 7.54167 4.79166C7.54167 3.28823 8.26506 1.95388 9.38471 1.11736C9.53275 1.00675 9.59988 0.818062 9.55498 0.638806C9.51007 0.459551 9.36191 0.324797 9.17921 0.297047C8.7944 0.238598 8.40059 0.208328 8 0.208328Z" fill="#555555"/>
  </svg>
  `;
    }
  });
});

openNav.addEventListener("click", () => {
  document.querySelector(".nav__menu-wrapper").style.zIndex = "9999999999";
  document.querySelector(".nav__menu-wrapper").style.left = "0";
  document.querySelector(".nav__menu-wrapper").style.backdropFilter =
    "brightness(50%)";
  document.querySelector(".nav__menu").style.right = "0%";
});
closeNav.addEventListener("click", () => {
  document.querySelector(".nav__menu-wrapper").style.zIndex = "-9999";
  document.querySelector(".nav__menu-wrapper").style.right = "-150%";
  document.querySelector(".nav__menu-wrapper").style.backdropFilter =
    "brightness(100%)";
  document.querySelector(".nav__menu").style.right = "-150%";
});

lists.forEach((list) => {
  list.addEventListener("click", () => {
    lists.forEach(list2 => {
      list2.classList.remove("open")
    })
    list.classList.add("open")
  })
})
lists2.forEach(list => {
  list.addEventListener("click", () => {
    lists2.forEach(list2 => {
      list2.classList.remove("open")
    })
    list.classList.add("open")
  })
})

const videoOne = document.getElementById("review-videoOne");
const videoTwo = document.getElementById("review-videoTwo");
const videoThree = document.getElementById("review-videoThree");
const videoFour = document.getElementById("review-videoFour");
const buttonVideoOne = document.getElementById("buttonVideoOne");
const buttonVideoTwo = document.getElementById("buttonVideoTwo");
const buttonVideoThree = document.getElementById("buttonVideoThree");
const buttonVideoFour = document.getElementById("buttonVideoFour");

buttonVideoOne.addEventListener("click", () => {
  if (videoOne.paused) {
    videoOne.play();
  } else {
    videoOne.pause();
  }
});
buttonVideoTwo.addEventListener("click", () => {
  if (videoTwo.paused) {
    videoTwo.play();
  } else {
    videoTwo.pause();
  }
});
buttonVideoThree.addEventListener("click", () => {
  if (videoThree.paused) {
    videoThree.play();
  } else {
    videoThree.pause();
  }
});
buttonVideoFour.addEventListener("click", () => {
  if (videoFour.paused) {
    videoFour.play();
  } else {
    videoFour.pause();
  }
});
