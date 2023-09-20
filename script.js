"use strict";

// Add event on element
const addEventOnElem = function (elem, type, callback) {
  if (elem.length > 1) {
    for (let i = 0; i < elem.length; i++) {
      elem[i].addEventListener(type, callback);
    }
  } else {
    elem.addEventListener(type, callback);
  }
};

// Navbar Toggle
const navbar = document.querySelector("[data-navbar]");
const navToggler = document.querySelector("[data-nav-toggler]");
const navLinks = document.querySelectorAll("[data-nav-link]");

const toggleNavbar = () => navbar.classList.toggle("active");

addEventOnElem(navToggler, "click", toggleNavbar);

const closeNavbar = () => navbar.classList.remove("active");

addEventOnElem(navLinks, "click", closeNavbar);

// Header active when scroll down to 100px
const header = document.querySelector("[data-header]");

const headerActive = function () {
  if (window.scrollY > 100) {
    header.classList.add("active");
    console.log(header.classList);
  } else {
    header.classList.remove("active");
  }
};

addEventOnElem(window, "scroll", headerActive);


// Youtube for Calendar*************************************************************
// const date = new Date();

// const renderCalendar = () => {
//   date.setDate(1);

//   const monthDays = document.querySelector(".days-youtube");

//   const lastDay = new Date(
//     date.getFullYear(),
//     date.getMonth() + 1,
//     0
//   ).getDate();

//   const prevLastDay = new Date(
//     date.getFullYear(),
//     date.getMonth(),
//     0
//   ).getDate();

//   const firstDayIndex = date.getDay();

//   const lastDayIndex = new Date(
//     date.getFullYear(),
//     date.getMonth() + 1,
//     0
//   ).getDay();

//   const nextDays = 7 - lastDayIndex - 1;

//   const months = [
//     "January",
//     "February",
//     "March",
//     "April",
//     "May",
//     "June",
//     "July",
//     "August",
//     "September",
//     "October",
//     "November",
//     "December",
//   ];

//   document.querySelector(".date-youtube h1").innerHTML = months[date.getMonth()];

//   document.querySelector(".date-youtube p").innerHTML = new Date().toDateString();

//   let days = "";

//   for (let x = firstDayIndex; x > 0; x--) {
//     days += `<div class="prev-date">${prevLastDay - x + 1}</div>`;
//   }

//   for (let i = 1; i <= lastDay; i++) {
//     if (
//       i === new Date().getDate() &&
//       date.getMonth() === new Date().getMonth()
//     ) {
//       days += `<div class="today">${i}</div>`;
//     } else {
//       days += `<div>${i}</div>`;
//     }
//   }

//   for (let j = 1; j <= nextDays; j++) {
//     days += `<div class="next-date">${j}</div>`;
//     monthDays.innerHTML = days;
//   }
// };

// document.querySelector(".prev").addEventListener("click", () => {
//   date.setMonth(date.getMonth() - 1);
//   renderCalendar();
// });

// document.querySelector(".next").addEventListener("click", () => {
//   date.setMonth(date.getMonth() + 1);
//   renderCalendar();
// });

// renderCalendar();
// document.addEventListener("DOMContentLoaded", () => {
//   const currentDate = new Date();
//   let selectedDate = new Date();

//   const weekdays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
//   const months = [
//     "January", "February", "March", "April", "May", "June",
//     "July", "August", "September", "October", "November", "December"
//   ];

//   const renderCalendar = () => {
//     const currentYear = selectedDate.getFullYear();
//     const currentMonth = selectedDate.getMonth();
//     const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
    
//     const firstDayIndex = new Date(currentYear, currentMonth, 1).getDay();

//     const monthText = `${months[currentMonth]} ${currentYear}`;
//     document.querySelector(".date-youtube h1").textContent = monthText;

//     const weekdaysContainer = document.querySelector(".weekdays-youtube");
//     weekdaysContainer.innerHTML = weekdays.map(day => `<div>${day}</div>`).join("");

//     const daysContainer = document.querySelector(".days-youtube");
//     daysContainer.innerHTML = "";

//     for (let i = 0; i < firstDayIndex; i++) {
//       daysContainer.innerHTML += `<div class="prev-date"></div>`;
//     }

//     for (let i = 1; i <= daysInMonth; i++) {
//       const isToday = i === currentDate.getDate() && currentMonth === currentDate.getMonth();
//       const isSelected = i === selectedDate.getDate();
//       const dayClass = isToday ? "today" : isSelected ? "selected" : "";

//       daysContainer.innerHTML += `<div class="day ${dayClass}" data-day="${i}">${i}</div>`;
//     }
//   };

//   const selectDate = (dayElement) => {
//     const day = parseInt(dayElement.dataset.day);
//     selectedDate = new Date(selectedDate.getFullYear(), selectedDate.getMonth(), day);
//     renderCalendar();
//   };

//   document.querySelector(".prev").addEventListener("click", () => {
//     selectedDate.setMonth(selectedDate.getMonth() - 1);
//     renderCalendar();
//   });

//   document.querySelector(".next").addEventListener("click", () => {
//     selectedDate.setMonth(selectedDate.getMonth() + 1);
//     renderCalendar();
//   });

//   document.querySelector(".days-youtube").addEventListener("click", (event) => {
//     const dayElement = event.target.closest(".day");
//     if (dayElement) {
//       selectDate(dayElement);
//     }
//   });

//   renderCalendar();
// });
// document.addEventListener("DOMContentLoaded", () => {
//   const currentDate = new Date();
//   let selectedDate = new Date();

//   const weekdays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
//   const months = [
//     "January", "February", "March", "April", "May", "June",
//     "July", "August", "September", "October", "November", "December"
//   ];

//   const renderCalendar = () => {
//     const currentYear = selectedDate.getFullYear();
//     const currentMonth = selectedDate.getMonth();
//     const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
    
//     const firstDayIndex = new Date(currentYear, currentMonth, 1).getDay();

//     const monthText = `${months[currentMonth]} ${currentYear}`;
//     document.querySelector(".date-youtube h1").textContent = monthText;

//     const weekdaysContainer = document.querySelector(".weekdays-youtube");
//     weekdaysContainer.innerHTML = weekdays.map(day => `<div>${day}</div>`).join("");

//     const daysContainer = document.querySelector(".days-youtube");
//     daysContainer.innerHTML = "";

//     for (let i = 0; i < firstDayIndex; i++) {
//       daysContainer.innerHTML += `<div class="prev-date"></div>`;
//     }

//     for (let i = 1; i <= daysInMonth; i++) {
//       const isToday = i === currentDate.getDate() && currentMonth === currentDate.getMonth();
//       const isSelected = i === selectedDate.getDate();
//       const dayClass = isToday ? "today" : isSelected ? "selected" : "";

//       daysContainer.innerHTML += `<div class="day ${dayClass}" data-day="${i}">${i}</div>`;
//     }
    
//     const selectedDateText = `${months[currentMonth]} ${selectedDate.getDate()}, ${currentYear}`;
//     document.querySelector(".date-youtube p").textContent = selectedDateText;
//   };

//   const selectDate = (dayElement) => {
//     const day = parseInt(dayElement.dataset.day);
//     selectedDate = new Date(selectedDate.getFullYear(), selectedDate.getMonth(), day);
//     renderCalendar();
//   };

//   document.querySelector(".prev").addEventListener("click", () => {
//     selectedDate.setMonth(selectedDate.getMonth() - 1);
//     renderCalendar();
//   });

//   document.querySelector(".next").addEventListener("click", () => {
//     selectedDate.setMonth(selectedDate.getMonth() + 1);
//     renderCalendar();
//   });
//   renderCalendar();
// });
document.addEventListener("DOMContentLoaded", () => {
  const currentDate = new Date();
  let selectedDate = new Date();

  const events = []
  const weekdays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const months = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];

  const renderCalendar = () => {
    const currentYear = selectedDate.getFullYear();
    const currentMonth = selectedDate.getMonth();
    const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
    
    const firstDayIndex = new Date(currentYear, currentMonth, 1).getDay();

    const monthText = `${months[currentMonth]} ${currentYear}`;
    document.querySelector(".date-youtube h1").textContent = monthText;

    const weekdaysContainer = document.querySelector(".weekdays-youtube");
    weekdaysContainer.innerHTML = weekdays.map(day => `<div>${day}</div>`).join("");

    const daysContainer = document.querySelector(".days-youtube");
    daysContainer.innerHTML = "";

    for (let i = 0; i < firstDayIndex; i++) {
      daysContainer.innerHTML += `<div class="prev-date"></div>`;
    }

    for (let i = 1; i <= daysInMonth; i++) {
      const isToday = i === currentDate.getDate() && currentMonth === currentDate.getMonth();
      const isSelected = i === selectedDate.getDate();
      const dayClass = isToday ? "today" : isSelected ? "selected" : "";
  
      // Find events for the current date
      const eventsForDate = events.filter(event => {
        const eventDate = new Date(event.date);
        return eventDate.getDate() === i && eventDate.getMonth() === currentMonth && eventDate.getFullYear() === currentYear;
      });
  
      // Create an event div if events are present
      const eventDiv = eventsForDate.length > 0
        ? `<div class="event">${eventsForDate.map(event => event.title).join("<br>")}</div>`
        : "";
  
      const dayElement = document.createElement("div");
      dayElement.className = `day ${dayClass}`;
      dayElement.dataset.day = i;
      dayElement.innerHTML = `
        <span class="day-number">${i}</span>
        ${eventDiv}
      `;
  
      // Add a click event listener to each day element
      dayElement.addEventListener("click", () => {
        selectDate(dayElement);
      });
  
      daysContainer.appendChild(dayElement);
    }
    
    const selectedDateText = `${months[currentMonth]} ${selectedDate.getDate()}, ${currentYear}`;
    document.querySelector(".date-youtube p").textContent = selectedDateText;
    
  };


  const selectDate = (dayElement) => {
    const day = parseInt(dayElement.dataset.day);
    selectedDate = new Date(selectedDate.getFullYear(), selectedDate.getMonth(), day);
    renderCalendar();
  
    // Remove existing selected class from all day elements
    const allDayElements = document.querySelectorAll(".day");
    allDayElements.forEach(element => {
      element.classList.remove("selected");
    });
  
    // Add selected class to the clicked day element
    dayElement.classList.add("selected");
  };

  document.querySelector(".prev").addEventListener("click", () => {
    selectedDate.setMonth(selectedDate.getMonth() - 1);
    renderCalendar();
  });

  document.querySelector(".next").addEventListener("click", () => {
    selectedDate.setMonth(selectedDate.getMonth() + 1);
    renderCalendar();
  });

  const addEvent = () => {
    const eventTitle = document.getElementById("eventTitle").value;
    if (eventTitle) {
      events.push({
        date: new Date(selectedDate.getFullYear(), selectedDate.getMonth(), selectedDate.getDate()),
        title: eventTitle
      });
      renderCalendar();
    }
  };

  renderCalendar();
  document.getElementById("addEventButton").addEventListener("click", addEvent);
});

// const daysContainer = document.querySelector(".days-youtube");
// daysContainer.addEventListener("click", (event) => {
//   const clickedDay = event.target.textContent;
//   if (clickedDay !== "") {
//     const selectedDate = new Date(date.getFullYear(), date.getMonth(), parseInt(clickedDay));
//     document.getElementById("eventDate").textContent = selectedDate.toDateString();
//     openModal();
//   }
// });

// // ... Rest of the JavaScript code ...

// // Function to show the modal
// function openModal() {
//   const modal = document.getElementById("eventModal");
//   modal.style.display = "block";
// }

// // Close modal when close button is clicked
// document.getElementById("closeModal").addEventListener("click", () => {
//   closeModal();
// });

// // Close modal when clicking outside of the modal
// window.addEventListener("click", (event) => {
//   const modal = document.getElementById("eventModal");
//   if (event.target === modal) {
//     closeModal();
//   }
// });

// // Close modal function
// function closeModal() {
//   const modal = document.getElementById("eventModal");
//   modal.style.display = "none";
// }

// ... Rest of the JavaScript code ...





// *****************************************************End of Calendar Script**********************************************


// Beginning of Slideshow for Gee's Medical Clinic's page*******************************************************************
const sectionElement = document.getElementById('medical-home');

const backgroundImages = [
    './assets/images/image.png',
    './assets/images/GeesMKEWellnessClinic.png',
    './assets/images/medical-enhanced.jpg'
];

let currentImageIndex = 0;

async function changeBackgroundImage() {
    sectionElement.style.backgroundImage = `url(${backgroundImages[currentImageIndex]})`;  //This code wasn't working before because it and an extra single quotation in there.

    currentImageIndex = (currentImageIndex + 1) % backgroundImages.length;
}

// Call the function initially
changeBackgroundImage();

// Call the function every 3 seconds (3000 milliseconds)
setInterval(changeBackgroundImage, 4000);
// ending of Slideshow for Gee's Medical Clinic's page*******************************************************************

// Beginning of Slideshow for Our Team's page*******************************************************************
const sectionElement1 = document.getElementById('team-home');

const backgroundImages1 = [
    './assets/images/allBarbers.jpg',
    './assets/images/barber-cover1.jpg',
    './assets/images/barber-cover2.jpg',
    './assets/images/barber-cover3.jpg',
    './assets/images/barber-cover4.jpg'
];

let currentImageIndex1 = 0;

async function changeBackgroundImage1() {
    sectionElement1.style.backgroundImage = `url(${backgroundImages1[currentImageIndex1]})`;  //This code wasn't working before because it and an extra single quotation in there.

    currentImageIndex1 = (currentImageIndex1 + 1) % backgroundImages1.length;
}

// Call the function initially
changeBackgroundImage1();

// Call the function every 3 seconds (3000 milliseconds)
setInterval(changeBackgroundImage1, 4000);
// ending of Slideshow for Gee's "Our Team" page*******************************************************************

// Beginning of Slideshow for "Contact Gee" page*******************************************************************
const sectionElement2 = document.getElementById('contact-home');

const backgroundImages2 = [
    './assets/images/Gee-contact1.png',
    './assets/images/Gee-contact2.jpg',
    './assets/images/Gee-contact3.png'
];

let currentImageIndex2 = 0;

async function changeBackgroundImage2() {
    sectionElement2.style.backgroundImage = `url(${backgroundImages2[currentImageIndex2]})`;  //This code wasn't working before because it and an extra single quotation in there.

    currentImageIndex2 = (currentImageIndex2 + 1) % backgroundImages2.length;
}

// Call the function initially
changeBackgroundImage2();

// Call the function every 3 seconds (3000 milliseconds)
setInterval(changeBackgroundImage2, 4000);
// ending of Slideshow for "Contact Gee" page*******************************************************************

// section for partnership
$(document).ready(function() {
  $('.partners-logos').slick({
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1500,
    arrows: false,
    dots: false,
    pauseOnHover: false,
    responsive: [{
      breakpoint: 768,
      settings: {
        slidesToShow: 4
      }
    }, {
        breakpoint: 520,
        settings: {
          slidesToShow: 3
        }
    }]
  });
});

let menubar = document.querySelector("#menubar");
let mynav = document.querySelector(".navbar");
menubar.onlcick = () => {
  menubar.classList.toggle("fa-times");
  mynav.classList.toggle('active')
};