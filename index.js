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
    name: 'D3',
    img: '<i class="devicon-d3js-plain colored language-pic"></i>'
  },
  {
    name: 'Node',
    img: '<i class="devicon-nodejs-plain colored language-pic"></i>'
  },
  {
    name: 'PostgreSQL',
    img: '<i class="devicon-postgresql-plain colored language-pic"></i>'
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

let experience = [
  {
    position: 'Foundations Mentor',
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

const brokenSite = document.getElementById('broken-site')

brokenSite.addEventListener('click', (event) => {
  event.preventDefault()
  alert(`I'm very sorry, but with some recent security updates I did, the site is no longer functioning. I am working hard to get it back up and running. Please refer to the Github repo if you want a look at what I've been doing!`)
})