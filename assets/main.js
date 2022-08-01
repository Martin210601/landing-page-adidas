const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document)
var lastScrolltop = 0
const navbar = $('.navbar')
const category = $$('.generation')
const modal = $('.category')
const boxBars = $('.box-bars')
const modalLeft = $('.myModal')
const backIcon = $('.header-back')
const Underline = $('.border-bottom')
const choiceGender = $$('.body-choice-gender-item')
const arrowRight = $('.arrow-right-icon')
const navigationRight = $('.body-choice-navigation-right')
const navigationLeft = $('.body-choice-navigation-left')
const sliderItem = $('.slider-item')
window.addEventListener('scroll', function () {
    var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    if (scrollTop > lastScrolltop && scrollTop > 80) {
        navbar.style.top = '-130px'
        modal.style.display = 'none'
        modal.style.top = '100px'
    } else {
        navbar.style.position = 'fixed'
        navbar.style.top = "-8px"
    }
    lastScrolltop = scrollTop

})
categoryArr = [...category]
categoryArr.map((tag) => {
    var classModal = tag.classList
    tag.addEventListener('mouseover', event => {
        modal.style.top = '112px'
        modal.style.display = 'block'
        classModal.add('active')
    })
    tag.addEventListener('mouseout', event => {
        modal.style.display = 'none'
        modal.style.top = '100px'
        classModal.remove('active')

    })
})
modal.addEventListener('mouseover', event => {
    modal.style.top = '112px'
    modal.style.display = 'block'
})
modal.addEventListener('mouseout', event => {
    modal.style.top = '100px'
    modal.style.display = 'none'
})

boxBars.addEventListener('click', event => {
    modalLeft.style.transform = 'translateX(0)'
})
backIcon.addEventListener('click', event => {
    modalLeft.style.transform = 'translateX(-100%)'
})


// choice gender

const choiceArr = [...choiceGender]
for (let i = 0; i < choiceArr.length; i++) {
    choiceArr[i].addEventListener('click', event => {
        const current = $('.active-choice')
        current.classList.remove('active-choice')
        choiceArr[i].classList.add('active-choice')
        if (i == 0) {
            arrowRight.style.order = '1'
        }
        if (i == 1) {
            arrowRight.style.order = '2'
        }
        if (i == 2) {
            arrowRight.style.order = '3'
        }
    })
}

const width = sliderItem.offsetWidth
const slideWidth = width / 2
navigationRight.addEventListener('click', function (event) {
    sliderItem.scrollBy(slideWidth, 0)
});
navigationLeft.addEventListener('click', function (event) {
    sliderItem.scrollBy(-slideWidth, 0)
});