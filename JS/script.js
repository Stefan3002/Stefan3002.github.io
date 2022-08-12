function hideSkillLists(){
    skillLists.forEach((list) => {
        if(!list.classList.contains('skill-list-visible'))
            list.style.display = 'none'
    })
}

//MENU
const sideMenu = document.querySelector(".side-menu")
const menuBtn = document.querySelector(".menu-btn")
const blur = document.querySelector(".blur")
const closeBtn = document.querySelector('.close-menu')

closeBtn.addEventListener('click', () => {
    sideMenu.classList.toggle('visible')
    blur.classList.toggle('blur-visible')
    // blur.style.height = document.body.scrollHeight.toString() + 'px'
    // console.log(document.body.scrollHeight.toString() + 'px')
})
blur.addEventListener('click', () => {
    if(blur.classList.contains('blur-visible')) {
        sideMenu.classList.toggle('visible')
        blur.classList.toggle('blur-visible')
    }
})

menuBtn.addEventListener("click", () => {
    sideMenu.classList.toggle('visible')
    blur.classList.toggle('blur-visible')
})
//SKILLS
const skillsHighs = document.querySelectorAll(".skills .highlights-text")
const skillLists = document.querySelectorAll(".skills-list")
hideSkillLists()
skillsHighs.forEach((skillHigh) => {
    skillHigh.addEventListener("mouseover", (event) => {
        const tg = event.target
        //Check if hover is not already on active element
        let stillActive = false
        skillLists.forEach((skillList) => {
            if (skillList.classList.contains(tg.classList) && skillList.classList.contains('skill-list-visible'))
                stillActive = true
        })
        //If not
        if(!stillActive)
        skillLists.forEach((skillList) => {
            if(skillList.classList.contains(tg.classList)) {
                skillList.style.display = 'flex'
                skillList.classList.add('skill-list-visible')
                hideSkillLists()
            }
            else
                skillList.classList.remove('skill-list-visible')
        })
    })
})
//PROJECTS

const imgPlaceHolder = document.querySelector('.projects .hero img')
const projectsHighs = document.querySelectorAll(".projects .aside .project")
projectsHighs.forEach((project) => {
    project.addEventListener('mouseover', () => {
        if(project.classList.contains('university'))
            imgPlaceHolder.src = '/Images/UnivSite.png'
        else
            if(project.classList.contains('sort'))
                imgPlaceHolder.src = '/Images/SortSite.png'
            else
                if(project.classList.contains('drone'))
                    imgPlaceHolder.src = '/Images/DroneSite.png'
                else
                    if(project.classList.contains('space'))
                        imgPlaceHolder.src = '/Images/SpaceSite.png'
                    else
                        if(project.classList.contains('tic-tac'))
                            imgPlaceHolder.src = '/Images/TicTacSite.png'
                        else
                            if(project.classList.contains('adventure'))
                                imgPlaceHolder.src = '/Images/AdventureSite.png'
    })
    project.addEventListener('mouseout', () => {
        imgPlaceHolder.src = '/Images/WorkSVG.svg'
    })
})

