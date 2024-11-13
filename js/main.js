const mobileNavToggle = document.querySelector(".mobile-nav-toggle")
const mobileSearchToggle = document.querySelector(".mobile-search-toggle")
const navbarNav = document.querySelector(".navbar-nav")
const dropdownToggles = document.querySelectorAll(".has-dropdown")
const mobileSearchbarWrapper = document.querySelector(".mobile-search-wrapper")
const searchBtn = document.querySelector(".search-wrapper")
const searchContainer = document.querySelector(".searchbar-container-wrapper")

searchBtn.addEventListener('click', () => {
    if (searchContainer.classList.contains("show")) {
        searchContainer.classList.remove("show")
    } else {
        searchContainer.classList.add("show")
    }
})

mobileNavToggle.addEventListener('click', () => {
    if (navbarNav.classList.contains("show")) {
        navbarNav.classList.remove("show")
        mobileNavToggle.querySelector("img").src = "./images/icons/menu.svg"
    } else {
        navbarNav.classList.add("show")
        mobileNavToggle.querySelector("img").src = "./images/icons/menu-close.svg"
    }

    if (mobileSearchbarWrapper.classList.contains("show")) {
        mobileSearchbarWrapper.classList.remove("show")
        mobileSearchToggle.querySelector("img").src = "./images/icons/search-dark.svg"
    }
})

mobileSearchToggle.addEventListener('click', () => {
    if (mobileSearchbarWrapper.classList.contains("show")) {
        mobileSearchbarWrapper.classList.remove("show")
        mobileSearchToggle.querySelector("img").src = "./images/icons/search-dark.svg"
    } else {
        mobileSearchbarWrapper.classList.add("show")
        mobileSearchToggle.querySelector("img").src = "./images/icons/menu-close.svg"
    }

    if (navbarNav.classList.contains("show")) {
        navbarNav.classList.remove("show")
        mobileNavToggle.querySelector("img").src = "./images/icons/menu.svg"
    }
})

dropdownToggles.forEach(button => {
    button.addEventListener('click', e => {
        e.preventDefault()
        e.stopPropagation()
        const dropdown = e.target.querySelector(".dropdown")
        if (dropdown) {
            if (dropdown.classList.contains("show")) {
                dropdown.classList.remove("show")
                button.classList.remove("active")
            } else {
                button.classList.add("active")
                dropdown.classList.add("show")
            }
        }
    })
})

