// QUERY SELECTOR SNIPPET
const select = (selector, scope = document) => {
  return scope.querySelector(selector);
};
const selectAll = (selector, scope = document) => {
  return scope.querySelectorAll(selector);
};

// HERO PARALLAX EFFECT
window.addEventListener("scroll", () => {
  const heroSectionBg = document.querySelector(".hero-section-bg");
  heroSectionBg.style.transform = `translateY(${window.scrollY / 5}px)`;
});

// REVEALING ON SCROLL
const the_animation = selectAll(".reveal");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("active");
      }
      // else {
      //     entry.target.classList.remove('active')
      // }
    });
  },
  { threshold: 0.3 }
);

for (let i = 0; i < the_animation.length; i++) {
  const elements = the_animation[i];

  observer.observe(elements);
}

// CALCULATOR
const earnResult = select("#earnResult");
const monthsInput = select("#monthsInput");
const investInput = select("#investInput");
const monthsValue = select("#monthsValue");
const investValue = select("#investValue");
const rangeProgressLine = select(".range-progress-line.months");
const investRangeProgressLine = select(".range-progress-line.invest");
const sliderThumb = select(".slider-thumb.months");
const investSliderThumb = select(".slider-thumb.invest");

const calculateResult = () => {
  earnResult.innerText = Math.ceil(
    (monthsInput.value / 10) * investInput.value * 1.4
  );
  monthsValue.innerText = Math.ceil(monthsInput.value / 10);
  investValue.innerText = Math.ceil(investInput.value);

  const sliderMaxValue = monthsInput.getAttribute("max");
  const sliderCurrentValue = (monthsInput.value / sliderMaxValue) * 100 + "%";

  rangeProgressLine.style.width = sliderCurrentValue;
  sliderThumb.style.left = sliderCurrentValue;

  const investMaxValue = investInput.getAttribute("max");
  const investCurrentValue = (investInput.value / investMaxValue) * 100 + "%";

  investRangeProgressLine.style.width = investCurrentValue;
  investSliderThumb.style.left = investCurrentValue;

  console.log();
};

calculateResult();

monthsInput.addEventListener("input", () => {
  calculateResult();
});

investInput.addEventListener("input", () => {
  calculateResult();
});

// STATISTICS
const usersProfit = select("#usersProfit");
const usersActive = select("#usersActive");

const updateNumber = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const updateUsersProfit = () => {
  let initValue = 128567000;
  setInterval(() => {
    usersProfit.innerText = (initValue += updateNumber(8, 120)).toLocaleString(
      "en-US"
    );
  }, 2000);
};

const updateUsersActive = () => {
  let initValue = 77335;
  setInterval(() => {
    usersActive.innerText = (initValue += updateNumber(1, 5)).toLocaleString(
      "en-US"
    );
  }, 3800);
};

updateUsersProfit();
updateUsersActive();

// NAVIGATION
const scrollToElem = (elem) => {
  select(elem).scrollIntoView({ behavior: "smooth" });
};

// YEAR
selectAll(".year").forEach((el) => {
  el.innerText = new Date().getFullYear();
});

// MOBILE MENU
let menuUnderlay = select(".nav-underlay");
let menuOpenImg = select(".menu-btn-img");
let menuCloseImg = select(".menu-close-img");
let menuMobile = select(".mob-menu");

const menuOpening = () => {
  menuMobile.style.right = "0";
  menuUnderlay.classList.add("active");
};

const menuClosing = () => {
  menuMobile.style.right = "-100%";
  menuUnderlay.classList.remove("active");
};

menuOpenImg.addEventListener("click", () => {
  menuOpening();
});
menuCloseImg.addEventListener("click", () => {
  menuClosing();
});
menuUnderlay.addEventListener("click", () => {
  menuClosing();
});

// MODAL
const modalCall = selectAll(".modal-call");
const modalClose = select(".modal .close-btn");
const modal = select(".modal");
const modalContent = select(".modal-content");

function openModal() {
  modal.classList.add("active");
}

function closeModal() {
  if (modal.classList.contains("active")) {
    modal.classList.remove("active");
  }
}

modalCall.forEach((el) => el.addEventListener("click", openModal));
modalClose.addEventListener("click", closeModal);
modal.addEventListener("click", closeModal);
modalContent.addEventListener("click", (e) => e.stopPropagation());
