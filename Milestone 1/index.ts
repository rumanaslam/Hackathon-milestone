const toogleButton = document.getElementById('toggle-experience-btn')as HTMLButtonElement
const skills = document.getElementById('skills-section')as HTMLElement

toogleButton.addEventListener('click',()=>{
    if(skills.style.display ==='none'){
        skills.style.display='block'
    }else {
        skills.style.display='none'
    }
});