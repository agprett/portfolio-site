let languages = [
  {
    name: 'Javascript',
    img: '<i class="devicon-javascript-plain colored language-pic"></i>'
  },
  {
    name: 'React',
    img: '<i class="devicon-react-original colored language-pic"></i>'
  },
  {
    name: 'Redux',
    img: '<i class="devicon-redux-original colored language-pic"></i>'
  },
  {
    name: 'HTML',
    img: '<i class="devicon-html5-plain colored language-pic"></i>'
  },
  {
    name: 'CSS',
    img: '<i class="devicon-css3-plain colored language-pic"></i>'
  },
  {
    name: 'Node',
    img: '<i class="devicon-nodejs-plain colored language-pic"></i>'
  },
  {
    name: 'Python',
    img: '<i class="devicon-python-plain colored language-pic"></i>'
  },
  {
    name: 'PostgreSQL',
    img: '<i class="devicon-postgresql-plain colored language-pic"></i>'
  },
  {
    name: 'Linux',
    img: '<i class="devicon-linux-plain colored language-pic"></i>'
  }
]

let education = [
  {
    school: 'BYU-Idaho',
    graduated: 'In Progress',
    award: 'Computer Science Degree',
    addedNotes: []
  },
  {
    school: 'Devmountain',
    graduated: 'May, 2020',
    award: 'Full Stack Web Development Certificate',
    addedNotes: ['Transitioned mid-course to a fully remote learning environment', 'Solo and group work experience']
  }
]

let experience = [
  {
    position: 'Mentor',
    company: 'Devmountain',
    start: 'November 2021',
    end: 'Present',
    descriptions: ['Teach new programmers the foundational principles of coding', 'Work with instructors and curriculum planners to ensure students are taught foundational principles in the most efficient and successful way', 'Plan and provide additional support for students as they learn this new skill set']
  },
  {
    position: 'Skilled Facilities Maintenance Technician',
    company: 'Walmart',
    start: 'December 2020',
    end: 'October 2021',
    descriptions: ['Maintain, diagnose issues, and perform maintenance on facilities, fixtures and equipment', 'Utilize knowledge in multiple craft skills including: plumbing, electrical, carpentry, material handling equipment, and food equipment', 'Manage work orders and routine maintenance schedules by completing and providing required written and electronic information']
  }
]

let projects = [
  {
    title: 'Dragonmasters',
    img: 'imgs/encounters.png',
    desc: 'This site is a work-in-progress Dungeon and Dragons site. I coded a good amount so my friends could use a beta version and I am going back now to start a organized and planned version that follows solid coding principles. You can follow the progress and additions from the trello board or github!',
    languages: 'React, Axios, Node, Express, PostgreSQL',
    links: [
      {
        link: 'https://trello.com/invite/b/92gHsvbB/ATTI2b9da9185422a49dd103eab06447d858ABA8FA1F/dragonmaster',
        name: 'Trello Board'
      },
      {
        link: 'https://github.com/agprett/dragonmasters',
        name: 'Github Repo'
      }
    ]
  },
  {
    title: 'Lemonade Truck',
    img: 'imgs/lemonade-site.png',
    desc: 'This site is a mock site for a fake lemonade truck business. It has a description of the business, a booking feature and a place to see and leave reviews!',
    languages: 'Javascript, Axios, HTML/CSS, Node, Express, PostgreSQL',
    links: [
      {
        link: 'https://lemonade-truck.herokuapp.com/',
        name: 'Hosted Site'
      },
      {
        link: 'https://github.com/agprett/lemonade-site',
        name: 'Github Repo'
      }
    ]
  }
]

const languagesDisplay = document.getElementById('languages-display')

languagesDisplay.innerHTML = ''

languages.forEach(language => {
  const languageDisp = document.createElement('div')

  languageDisp.classList.add('language-display')

  languageDisp.innerHTML = `
  ${language.img}
  <p>${language.name}</p>`

  languagesDisplay.appendChild(languageDisp)
})


const educationSection = document.getElementById('education')

education.forEach(edu => {
  const eduDisplay = document.createElement('div')

  eduDisplay.classList.add('education-display')

  const h3 = document.createElement('h3')
  h3.innerHTML = `${edu.school}, Graduated: ${edu.graduated}`

  const p = document.createElement('p')
  p.classList.add('education-award')
  p.innerHTML = edu.award

  const ul = document.createElement('ul')

  edu.addedNotes.forEach(note => {
    const li = document.createElement('li')

    li.innerHTML = note

    ul.appendChild(li)
  })

  eduDisplay.appendChild(h3)
  eduDisplay.appendChild(p)
  eduDisplay.appendChild(ul)

  
  educationSection.appendChild(eduDisplay)
  
  eduDisplay.style.height = `${eduDisplay.clientHeight + 10}px`
})


const experienceSection = document.getElementById('experience')

experience.forEach(exp => {
  const expDisplay = document.createElement('div')

  expDisplay.classList.add('education-display')

  const h3 = document.createElement('h3')
  h3.innerHTML = exp.position

  const p = document.createElement('p')
  p.classList.add('education-award')
  p.innerHTML = `${exp.company}, ${exp.start} - ${exp.end}`

  const ul = document.createElement('ul')

  exp.descriptions.forEach(desc => {
    const li = document.createElement('li')

    li.innerHTML = desc

    ul.appendChild(li)
  })

  expDisplay.appendChild(h3)
  expDisplay.appendChild(p)
  expDisplay.appendChild(ul)

  
  experienceSection.appendChild(expDisplay)
  
  expDisplay.style.height = `${expDisplay.clientHeight + 10}px`
})


const projectsSection = document.getElementById('projects-display')

projects.forEach(proj => {
  const project = document.createElement('div')

  project.classList.add('project')

  const title = document.createElement('h3')
  title.classList.add('project-title')
  title.textContent = proj.title

  const img = document.createElement('img')
  img.src = proj.img
  img.alt = 'site-picture'
  img.classList.add('project-pics')

  const desc = document.createElement('p')
  desc.textContent = proj.desc
  desc.classList.add('project-desc')

  const languages = document.createElement('p')
  languages.textContent = proj.languages
  
  const projectLinks = document.createElement('div')
  projectLinks.classList.add('project-links')
  proj.links.forEach(li => {
    const link = document.createElement('a')
    
    link.href = li.link
    link.classList.add('link-btn')
    link.target = '_blank'
    link.textContent = li.name
    
    projectLinks.appendChild(link)
  });

  project.appendChild(title)
  project.appendChild(img)
  project.appendChild(desc)
  project.appendChild(languages)
  project.appendChild(projectLinks)

  projectsSection.appendChild(project)
})


const navButtons = document.querySelectorAll('nav button')

const scrollToTag = (element) => {
  if(element === 'contact'){
    document.getElementById(element).scrollIntoView({block: 'end', behavior: 'smooth'})
  } else if(element === 'top') {
    document.getElementById(element).scrollIntoView({behavior: 'smooth'})
  } else {
    window.scrollTo({
      top: document.getElementById(element).getBoundingClientRect().top + window.pageYOffset - 85,
      behavior: 'smooth'})
  }
}

navButtons.forEach(button => {
  button.addEventListener('click', (event) => {
    event.preventDefault()

    scrollToTag(button.value)
  })
})