let languages = [
  {
    name: "Javascript",
    img: '<i class="devicon-javascript-plain colored language-pic"></i>',
  },
  {
    name: "React",
    img: '<i class="devicon-react-original colored language-pic"></i>',
  },
  {
    name: "Redux",
    img: '<i class="devicon-redux-original colored language-pic"></i>',
  },
  {
    name: "HTML",
    img: '<i class="devicon-html5-plain colored language-pic"></i>',
  },
  {
    name: "CSS",
    img: '<i class="devicon-css3-plain colored language-pic"></i>',
  },
  {
    name: "Node",
    img: '<i class="devicon-nodejs-plain colored language-pic"></i>',
  },
  {
    name: "Python",
    img: '<i class="devicon-python-plain colored language-pic"></i>',
  },
  {
    name: "PostgreSQL",
    img: '<i class="devicon-postgresql-plain colored language-pic"></i>',
  },
  {
    name: "Linux",
    img: '<i class="devicon-linux-plain language-pic"></i>',
  },
];

let experience = [
  {
    position: "Assistant Instructor",
    company: "Devmountain",
    start: "November 2021",
    end: "June 2024",
    descriptions: [
      "Delivered comprehensive instruction to over 150 students on foundational coding principles, including full-stack development, database management, and design principles",
      "Taught key languages, libraries, and technologies, including HTML, CSS, JavaScript, PostgreSQL, React, Redux, Sequelize, Node.js, Git, and GitHub",
      "Collaborated with instructors and curriculum developers to optimize teaching methods, tailor support strategies, and improve student learning outcomes, increasing graduation rates by 10%"
    ],
  },
  {
    position: "Skilled Facilities Maintenance Technician",
    company: "Walmart",
    start: "December 2020",
    end: "October 2021",
    descriptions: [
      "Oversaw and resolved issues related to facilities, fixtures, and equipment through routine maintenance and diagnostics",
      "Managed and completed 20-45 maintenance tasks across 4 different locations weekly, ensuring minimal downtime and enhanced operational efficiency",
      "Applied expertise in plumbing, electrical work, carpentry, material handling equipment, and food service equipment to address diverse maintenance needs",
      "Efficiently managed and prioritized work orders, ensuring timely and effective completion of routine maintenance tasks, reducing maintenance costs by 13%",
    ],
  },
];

let education = [
  {
    school: "Devmountain",
    graduated: "Graduation: May, 2020",
    award: "Full Stack Web Development Certificate",
    addedNotes: [
      "Learned the basics of planning, development and testing of web applications using React and Express",
      "Transitioned mid-course to a fully remote learning environment",
      "Solo and group work experience",
    ],
  },
];

let projects = [
  {
    title: "Dragonmasters",
    img: "imgs/encounters.png",
    desc: "This site is a work-in-progress Dungeon and Dragons site. I coded a good amount so my friends could use a beta version and I am going back now to start a organized and planned version that follows solid coding principles. You can follow the progress and additions from the trello board or github!",
    languages: ["React", "Axios", "Node", "Express", "PostgreSQL"],
    links: [
      {
        link: "https://dragonmasterscodex.com",
        name: "Hosted Site"
      },
      {
        link: "https://trello.com/invite/b/92gHsvbB/ATTI2b9da9185422a49dd103eab06447d858ABA8FA1F/dragonmaster",
        name: "Trello Board",
      },
      {
        link: "https://github.com/agprett/dragonmasters",
        name: "Github Repo",
      },
    ],
  },
  {
    title: "Bank Game",
    img: "imgs/bank-game.png",
    desc: "This web app is used to track the score for a game called bank. The instructions for the game are linked in the github repo. This static site uses React for the base and Bootstrap for styling. The app uses redux to track player information and state for all the other data. This was a fun mini-project I did because after playing the game I thought it would be fun to figure out how to best track and store scores throughout the different aspects of the game!",
    languages: ["React", "Bootstrap", "Redux", "React-Router"],
    links: [
      {
        link: "https://bank-game-rakf1t4pu-agpretts-projects.vercel.app/",
        name: "Hosted Site",
      },
      {
        link: "https://github.com/agprett/bank-game",
        name: "Github Repo",
      },
    ],
  },
  {
    title: "Lemonade Truck",
    img: "imgs/lemonade-site.png",
    desc: "This site is a mock site for a fake lemonade truck business. I created it as a side project for a group project I was working on for a business class I was taking. I wanted to make a site using only javascript, html and css for the front end. I used an express server for the backend and a postgres database. It has a description of the business, a booking feature and a place to see and leave reviews!",
    languages: [
      "Javascript",
      "Axios",
      "HTML/CSS",
      "Node",
      "Express",
      "PostgreSQL",
    ],
    links: [
      {
        link: "https://lemonade-truck.herokuapp.com/",
        name: "Hosted Site",
      },
      {
        link: "https://github.com/agprett/lemonade-site",
        name: "Github Repo",
      },
    ],
  },
];

let nums = ["One", "Two", "Three", "Four", "Five"];

const educationSection = document.getElementById("education-items");

education.forEach((edu, i) => {
  const eduDisplay = document.createElement("div");
  eduDisplay.classList.add("accordion-item", "mb-2", "pe-0");

  const h2 = document.createElement("h2");
  h2.classList.add("accordion-header");

  const headerBtn = document.createElement("button");
  headerBtn.classList.add(
    "accordion-button",
    "collapsed",
    "d-flex",
    "justify-content-between"
  );
  headerBtn.type = "button";
  headerBtn.setAttribute("data-bs-toggle", "collapse");
  headerBtn.setAttribute("data-bs-target", `#flush-edu-collapse${i}`);
  headerBtn.setAttribute("aria-expanded", "false");
  headerBtn.setAttribute("aria-controls", `flush-edu-collapse${i}`);
  if (edu.graduated.includes("Expected")) {
    headerBtn.innerHTML = `<p class='m-0'>${edu.school} - ${edu.award}, In Progress</p>`;
  } else {
    headerBtn.innerHTML = `<p class='m-0'>${edu.school} - ${edu.award}</p>`;
  }

  h2.appendChild(headerBtn);

  const accordionBodyWrap = document.createElement("div");
  accordionBodyWrap.id = `flush-edu-collapse${i}`;
  accordionBodyWrap.classList.add("accordion-collapse", "collapse");
  accordionBodyWrap.setAttribute("data-bs-parent", "#education-items");

  const accordionBody = document.createElement("div");
  accordionBody.classList.add("accordion-body");

  const p = document.createElement("p");
  p.classList.add("education-award");
  p.innerHTML = `${edu.graduated}`;

  const ul = document.createElement("ul");

  edu.addedNotes.forEach((note) => {
    const li = document.createElement("li");

    li.innerHTML = note;

    ul.appendChild(li);
  });

  accordionBody.appendChild(p);
  accordionBody.appendChild(ul);

  accordionBodyWrap.appendChild(accordionBody);

  eduDisplay.appendChild(h2);
  eduDisplay.appendChild(accordionBodyWrap);

  educationSection.appendChild(eduDisplay);
});

const experienceSection = document.getElementById("experience-items");

experience.forEach((exp, i) => {
  const expDisplay = document.createElement("div");
  expDisplay.classList.add("accordion-item", "mb-2", "pe-0");

  const h2 = document.createElement("h2");
  h2.classList.add("accordion-header");

  const headerBtn = document.createElement("button");
  headerBtn.classList.add(
    "accordion-button",
    "collapsed",
    "d-flex",
    "justify-content-between"
  );
  headerBtn.type = "button";
  headerBtn.setAttribute("data-bs-toggle", "collapse");
  headerBtn.setAttribute("data-bs-target", `#flush-exp-collapse${i}`);
  headerBtn.setAttribute("aria-expanded", "false");
  headerBtn.setAttribute("aria-controls", `flush-exp-collapse${i}`);
  headerBtn.innerHTML = `${exp.position} - ${exp.company}`;

  h2.appendChild(headerBtn);

  const accordionBodyWrap = document.createElement("div");
  accordionBodyWrap.id = `flush-exp-collapse${i}`;
  accordionBodyWrap.classList.add("accordion-collapse", "collapse");
  accordionBodyWrap.setAttribute("data-bs-parent", "#experience-items");

  const accordionBody = document.createElement("div");
  accordionBody.classList.add("accordion-body");

  const p = document.createElement("p");
  p.classList.add("education-award");
  p.innerHTML = `${exp.start} - ${exp.end}`;

  const ul = document.createElement("ul");

  exp.descriptions.forEach((desc) => {
    const li = document.createElement("li");

    li.innerHTML = desc;

    ul.appendChild(li);
  });

  accordionBody.appendChild(p);
  accordionBody.appendChild(ul);

  accordionBodyWrap.appendChild(accordionBody);

  expDisplay.appendChild(h2);
  expDisplay.appendChild(accordionBodyWrap);

  experienceSection.appendChild(expDisplay);
});

const languagesDisplay = document.getElementById("languages-display");

languagesDisplay.innerHTML = "";

languages.forEach((language) => {
  const languageDisp = document.createElement("div");

  languageDisp.classList.add(
    "col",
    "d-flex",
    "flex-column",
    "justify-content-center",
    "align-items-center",
    "my-3"
  );

  languageDisp.innerHTML = `
  ${language.img}
  <h4>${language.name}</h4>`;

  languagesDisplay.appendChild(languageDisp);
});

const projectsSection = document.getElementById("projects-display");

projects.forEach((proj, i) => {
  const project = document.createElement("div");

  const inDiv = document.querySelector(".carousel-indicators");
  const indicator = document.createElement("button");
  indicator["type"] = "button";
  indicator.setAttribute("data-bs-target", "#carouselProjects");
  indicator.setAttribute("data-bs-slide-to", `${i}`);
  indicator.setAttribute("aria-label", `Slide ${i + 1}`);

  project.classList.add(
    "project",
    "carousel-item",
    "card",
    "p-0",
    "container-fluid"
  );
  if (i === 0) {
    project.classList.add("active");
    indicator.classList.add("active");
    indicator.setAttribute("aria-current", "true");
  }

  inDiv.appendChild(indicator);

  const img = document.createElement("img");
  img.src = proj.img;
  img.alt = "site-picture";
  img.classList.add("card-img-top", 'project-img');

  project.appendChild(img);

  const cardBody = document.createElement("div");
  cardBody.classList.add("card-body", "p-3");

  const title = document.createElement("h3");
  title.classList.add("card-title");
  title.textContent = proj.title;

  const desc = document.createElement("p");
  desc.textContent = proj.desc;
  desc.classList.add("card-text");

  cardBody.appendChild(title);
  cardBody.appendChild(desc);

  const languageBody = document.createElement("div");
  languageBody.classList.add(
    "card-links",
    "card-body",
    "border-top",
    "row",
    "row-cols-auto",
    "justify-content-evenly",
    "m-0"
  );

  proj.languages.forEach((language) => {
    const tag = document.createElement("p");
    tag.classList.add("col", "text-center", "m-1", "project-languages");
    tag.innerText = language;

    languageBody.appendChild(tag);
  });

  const linkBody = document.createElement("div");
  linkBody.classList.add("card-links", "card-body", "border-top", "row", "m-0");

  proj.links.forEach((li) => {
    const link = document.createElement("a");

    link.href = li.link;
    link.classList.add("card-links", "col", "text-center");
    link.target = "_blank";
    link.textContent = li.name;

    linkBody.appendChild(link);
  });

  project.appendChild(cardBody);
  project.appendChild(languageBody);
  project.appendChild(linkBody);

  projectsSection.appendChild(project);
});