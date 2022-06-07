window.addEventListener('scroll', onScroll)

onScroll()
function onScroll() {
  showNavOnScroll()
  showBackToTopButtonOnScroll()

  activateMenuAtCurrentSection(home)
  activateMenuAtCurrentSection(services)
  activateMenuAtCurrentSection(about)
  activateMenuAtCurrentSection(contact)
}

function activateMenuAtCurrentSection(section) {
  //linha alvo
  const targetLine = scrollY + innerHeight / 2

  //verificar se a seção passou da linha. Quais dados vou precisar?
  //topo da seção
  const sectionTop = section.offsetTop
  //altura da seção
  const sectionHeight = section.offsetHeight
  //topo da seção chegou ou ultrapassou a linha alvo
  const sectionTopReachOrPassedTargetLine = targetLine >= sectionTop
  //informações dos dados e lógica
  console.log('Topo da seção chegou ou passou da linha?', sectionTopReachOrPassedTargetLine)

  //verificar se a base está abaixo da linha alvo. Quais dados precisarei?
  // seção termina aonde?
  const sectionEndsAt = sectionTop + sectionHeight

  //Final da seção passou da linha alvo?
  const sectionEndPassedTargetLine = sectionEndsAt <= targetLine

  console.log('Fundo da seção passou da linha?', sectionEndPassedTargetLine)

  //limites da seção
  const sectionBoundaries = sectionTopReachOrPassedTargetLine && !sectionEndPassedTargetLine

  const sectionId = section.getAttribute('id')
  const menuElement = document .querySelector(`.menu a[href*=${sectionId}]`)

  menuElement.classList.remove('active')
  if (sectionBoundaries) {
    menuElement.classList.add('active')
  }
}

function showNavOnScroll() {
  let navigation = document.querySelector("nav")
  if (scrollY > 0) {
    navigation.classList.add('scroll')
  } else {
    navigation.classList.remove('scroll')
  }
}

function showBackToTopButtonOnScroll() {
  if (scrollY > 550) {
    backToTopButton.classList.add('show')
  } else {
    backToTopButton.classList.remove('show')
  }
}

function openMenu() {
  document.body.classList.add('menu-expanded')
}

function closeMenu() {
  document.body.classList.remove('menu-expanded')
}

ScrollReveal({
  origin: 'top',
  distance: '30px',
  duration: 700,
}).reveal(`
#home, 
#home img, 
#home .stats, 
#services, 
#services header, 
#services .card
#about,
#about header,
#about .content`)



