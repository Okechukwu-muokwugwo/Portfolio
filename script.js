/*
-------------------------------------------
Toggle function for the Overlay Mobile menu
-------------------------------------------
*/

const mobileMenu = document.getElementById('mobile-menu');

function showMobileMenu() {
  if (mobileMenu.style.display === 'none') {
    mobileMenu.style.display = 'block';
  }
}
showMobileMenu();

function exitMobileMenu() {
  mobileMenu.style.display = 'none';
}
exitMobileMenu();

/*
------------------------------
Data Object stored in an Array
------------------------------
*/

const worksData = [
  {
    id: 1,
    title: 'Capstone',
    info: {
      client: 'AspireAfrik',
      role: 'Front End Dev',
      year: 2022,
    },
    screenshot: {
      screenshotMobile: './images/aspire-mobile.png',
      screenshotDesktop: './images/aspire-desktop.png',
    },
    description: {
      descMobile: 'In this project, I designed a website for AspireAfrik International Ltd as a leading IT firma in web development and with the latest technologies available in the industry. It highlights various programs they offer and resource persons for the session.',
      descDesktop: 'In this project, I designed a website for AspireAfrik International Ltd as a leading IT firma in web development and with the latest technologies available in the industry. It highlights various programs they offer and resource persons for the session.',
      descPopup: 'In this project, I designed a website for AspireAfrik International Ltd as a leading IT firma in web development and with the latest technologies available in the industry. It highlights various programs they offer and resource persons for the session.',
    },
    skills: ['html', 'css', 'javascript'],
    liveLink: 'https://okechukwu-muokwugwo.github.io/Capstone-html-css-Js/',
    sourceLink: 'https://github.co/Okechukwu-muokwugwo/capstone-hmtl-css-js.git',
  },

  {
    id: 2,
    title: 'To-Do List',
    info: {
      client: 'Daily Routine',
      role: 'Back End Dev',
      year: 2022,
    },
    screenshot: {
      screenshotMobile: './images/todolist.png',
      screenshotDesktop: './images/todolist.png',
    },
    description: {
      descMobile: 'This is a simple HTML To Do tasks. The user will also be able to mark task completion by selecting the corresponding checkbox. The updated tasks list is stored in local storage.',
      descPopup: 'This is a simple HTML To Do tasks. The user will also be able to mark task completion by selecting the corresponding checkbox. The updated tasks list is stored in local storage.',
    },
    skills: ['html', 'css', 'javascript'],
    liveLink: 'https://okechukwu-muokwugwo.github.io/ToDoList/dist/',
    sourceLink: 'https://github.com/Okechukwu-muokwugwo/ToDoList.git',
  },
  {
    id: 3,
    title: 'Facebook 360',
    info: {
      client: 'FACEBOOK',
      role: 'Full stack Dev',
      year: 2015,
    },
    screenshot: {
      screenshotMobile: './images/snapshot-mobile3.svg',
      screenshotDesktop: './images/snapshot-desktop3.svg',
    },
    description: {
      descMobile: 'his is a simple HTML To Do tasks. The user will also be able to mark task completion by selecting the corresponding checkbox. The updated tasks list is stored in local storage.',
      descPopup: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry.",
    },
    skills: ['html', 'css', 'Ruby'],
    liveLink: '#',
    sourceLink: '#',
  },

  {
    id: 4,
    title: 'Uber Navigation',
    info: {
      client: 'Uber',
      role: 'Lead Developer',
      year: 2018,
    },
    screenshot: {
      screenshotMobile: './images/snapshot-mobile4.svg',
      screenshotDesktop: './images/snapshot-desktop4.svg',
    },
    description: {
      descMobile: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
      descDesktop: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
      descPopup: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry.",
    },
    skills: ['html', 'css', 'Ruby', 'javascript'],
    liveLink: '#',
    sourceLink: '#',
  },
];

/*
  ------------------------------------------------
  Using map() to iterate through  project Data
  ------------------------------------------------
  */
const myPortfolio = document.querySelector('.works-wrapper');
const displayWorksData = worksData.map((works, index) => `<div class="card1-container">
<div class="image-holder">
  <div class="mobile">
   <img 
   src=${works.screenshot.screenshotMobile} 
   alt="tonic mobile snapshoot"
   class="">
  </div>
  <div class="desktop">
   <img 
   src=${works.screenshot.screenshotDesktop} 
   alt="tonic desktop snapshoot">
  </div>
</div>
<div class="category-a">
   <h1 class="project-title">${works.title}</h1>
   <div class="project-desc">
      <p class="client">${works.info.client}</p>
      <img src="./images/counter.svg" alt="counter">
      <p class="role">${works.info.role}</p>
      <img src="./images/counter.svg" alt="another counter">
      <p class="year">${works.info.year}</p>
   </div>
   <p class="read-msg">${works.description.descMobile}</p>
   <ul class="tech-tags">
      <li><button class="html-btn">${works.skills[0]}</button></li>
      <li><button class="css-btn">${works.skills[1]}</button></li>
      <li><button class="javascript-btn">${works.skills[2]}</button></li>
   </ul>
   <button class="see-project-btn" id=${index}>See Project</button>
</div>
</div>`).join('');

myPortfolio.innerHTML = displayWorksData;

const popUpWindow = worksData.map((works) => `<div class="popup-container" id="popup">
<div class="popup-holder">
   <div class="close-popup">
      <h1 class="work
      -title">${works.title}</h1>
      <img src="./images/cancel.svg" onclick="closePopUpWindow()" alt="close popup dialog" id="close">
   </div>
   <div class="project-desc">
      <p class="client">${works.info.client}</p>
      <img src="./images/counter.svg" alt="counter">
      <p class="role">${works.info.role}</p>
      <img src="./images/counter.svg" alt="another counter">
      <p class="year">${works.info.year}</p>
   </div>
   <div class="image-holder">
   <div class="mobile">
   <img 
   src=${works.screenshot.screenshotMobile} 
   alt="tonic mobile snapshoot">
  </div>
  <div class="desktop">
   <img 
   src=${works.screenshot.screenshotDesktop} 
   alt="tonic desktop snapshoot">
  </div>
   </div>
   <div class="bottom-block">
      <p class="read-desc">${works.description.descPopup}</p>
      <div>
         <div class="tech-tags">
            <button class="html-btn">${works.skills[0]}</button>
            <button class="css-btn">${works.skills[1]}</button>
            <button class="javascript-btn">${works.skills[2]}</button>
         </div>
         <div class="live-btn">
            <a href=${works.liveLink}><img src="./images/see-live-btn.svg" alt="see live button" class="see-live"></a>
            <a href=${works.sourceLink}><img src="./images/see-source-btn.svg" alt="see source button" class="see-source"></a>
         </div>
      </div>
   </div>
</div>
</div>`);

const modal = document.getElementById('popup');
modal.innerHTML = popUpWindow;
function closePopUpWindow() {
  modal.style.display = 'none';
}
closePopUpWindow();

// function to display the popup Window

const seeProject1 = document.getElementById('0');
const seeProject2 = document.getElementById('1');
const seeProject3 = document.getElementById('2');
const seeProject4 = document.getElementById('3');

function openPopUp() {
  if (modal.style.display === 'none') {
    const e = Number(this.id);
    modal.innerHTML = popUpWindow[e];
    modal.style.display = 'block';
  } else {
    modal.style.display = 'none';
  }
}

seeProject1.onclick = openPopUp;
seeProject2.onclick = openPopUp;
seeProject3.onclick = openPopUp;
seeProject4.onclick = openPopUp;

/*
------------------------------------
Check E-mail Validity for Lowercase
====================================
*/
const submitForm = document.querySelector('#contact-form');
const enterEmail = document.querySelector('#mail');
const invalidMsg = document.querySelector('.error-msg');

// adding eventlistener to Get in touch button
submitForm.addEventListener('submit', (event) => {
  if (enterEmail.value !== enterEmail.value.toLowerCase()) {
    event.preventDefault();
    // then display error message
    invalidMsg.classList.add('.error-msg');
    invalidMsg.innerHTML = 'Please enter your email in lowercase, try again!';
  } else {
    invalidMsg.textContent = '';
  }
});
