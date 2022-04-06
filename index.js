const scrollToTag = (element) => {
  if(element === 'contact'){
    console.log(element)
    document.getElementById(element).scrollIntoView(false)
  } else if(element === 'top') {
    console.log(element)
    document.getElementById(element).scrollIntoView()
  } else {
    console.log(element)
    document.getElementById(element).scrollIntoView()
    window.scrollBy(0, -75)
  }
}

const navButtons = document.querySelectorAll('header button')

navButtons.forEach(button => {
  button.addEventListener('click', (event) => {
    event.preventDefault()

    scrollToTag(button.value)
  })
})