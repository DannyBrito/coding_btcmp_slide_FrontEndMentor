const PREV_BUTTON = document.querySelector('.prevButton')
const NEXT_BUTTON = document.querySelector('.nextButton')

const AUTH_IMG = document.querySelector('.authorImage')
const AUTH_NAME = document.querySelector('.authorName')
const AUTH_TITLE = document.querySelector('.authorTitle')
const QUOTE = document.querySelector('.quote')
DATA = [
    {
        src: '/images/image-tanya.jpg',
        name: 'Tanya Sinclair',
        title: 'UX Engineer',
        quote: `“ I’ve been interested in coding for a while but never taken the jump, until now. 
        I couldn’t recommend this course enough. I’m now in the job of my dreams and so 
        excited about the future. ”`
    },
    {
        src: '/images/image-john.jpg',
        name: 'John Tarkpor',
        title: 'Junior Front-end Developer',
        quote: `“ If you want to lay the best foundation possible I’d recommend taking this course. 
        The depth the instructors go into is incredible. I now feel so confident about 
        starting up as a professional developer. ”`
    },
]
let currentIndex = 0
// initalize card by data
document.addEventListener('DOMContentLoaded', ()=>{
    changeUserTestimonial(currentIndex)
})

PREV_BUTTON.addEventListener('click', () => handleClickPanel('prev'))
NEXT_BUTTON.addEventListener('click', () => handleClickPanel('next'))

const changeUserTestimonial = index =>{
    AUTH_IMG.src = DATA[index].src
    AUTH_NAME.textContent = DATA[index].name 
    AUTH_TITLE.textContent = DATA[index].title
    QUOTE.textContent = DATA[index].quote
}

const handleClickPanel = action =>{
    if(action === "prev")currentIndex = currentIndex === 0 ? DATA.length - 1 : currentIndex - 1
    else currentIndex = currentIndex === DATA.length - 1 ? 0 : currentIndex + 1
    changeUserTestimonial(currentIndex)
    console.log('here')
}