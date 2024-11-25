const mobileNavToggle = document.querySelector(".skt-mobile-nav-toggle")
const mobileSearchToggle = document.querySelector(".skt-mobile-search-toggle")
const navbarNav = document.querySelector(".skt-navbar-nav")
const dropdownToggles = document.querySelectorAll(".skt-has-dropdown")
const mobileSearchbarWrapper = document.querySelector(".skt-mobile-search-wrapper")
const searchBtn = document.querySelector(".skt-search-wrapper")
const searchContainer = document.querySelector(".skt-searchbar-container-wrapper")
const offcanvas = document.querySelector('.skt-offcanvas');
const backdrop = document.querySelector('.skt-offcanvas-backdrop');
const formContent = document.querySelector('.skt-form-content');
const thankYouContent = document.querySelector('.skt-thank-you-content');
const contactFormOpenBtn = document.querySelector('#skt-contact-form-button')
const closeCanvasBtn = document.querySelector(".skt-offcanvas-close")
const contactForm = document.querySelector("#requestForm")

contactForm.addEventListener('submit', e => {
    e.preventDefault();
    showThankYou();
})

closeCanvasBtn.addEventListener('click', e => {
    e.preventDefault()
    closeOffcanvas()
})

contactFormOpenBtn.addEventListener('click', e => {
    e.preventDefault()
    openOffcanvas()
})


searchBtn.addEventListener('click', () => {
    if (searchContainer.classList.contains("skt-show")) {
        searchContainer.classList.remove("skt-show")
        searchContainer.ariaHidden = true
        searchBtn.ariaExpanded = false
    } else {
        searchBtn.ariaExpanded = true
        searchContainer.ariaHidden = false
        searchContainer.classList.add("skt-show")
    }
})

document.addEventListener('click', e => {
    if (searchContainer.classList.contains("skt-show") && !searchBtn.contains(e.target) && !searchContainer.contains(e.target)) {
        searchContainer.classList.remove("skt-show")
    }
})


mobileNavToggle.addEventListener('click', () => {
    if (navbarNav.classList.contains("skt-show")) {
        navbarNav.classList.remove("skt-show")
        mobileNavToggle.querySelector("img").src = "./images/icons/menu.svg"
    } else {
        navbarNav.classList.add("skt-show")
        mobileNavToggle.querySelector("img").src = "./images/icons/menu-close.svg"
    }
})

mobileSearchToggle.addEventListener('click', () => {
    if (mobileSearchbarWrapper.classList.contains("skt-show")) {
        mobileSearchbarWrapper.classList.remove("skt-show")
        mobileSearchToggle.querySelector("img").src = "./images/icons/search-dark.svg"
    } else {
        mobileSearchbarWrapper.classList.add("skt-show")
        mobileSearchToggle.querySelector("img").src = "./images/icons/menu-close.svg"
    }
})

dropdownToggles.forEach(button => {
    button.addEventListener('click', e => {
        e.preventDefault()
        e.stopPropagation()
        const dropdown = e.target.querySelector(".skt-dropdown")
        if (dropdown) {
            if (dropdown.classList.contains("skt-show")) {
                dropdown.classList.remove("skt-show")
                button.classList.remove("skt-active")
            } else {
                button.classList.add("skt-active")
                dropdown.classList.add("skt-show")
            }
        }
    })
})


setupAccordion()
function setupAccordion() {
    const items = document.querySelectorAll('.skt-accordion-item');
    items.forEach((accordionItem, index) => {
        accordionItem.querySelector('.skt-accordion-header').addEventListener('click', () => toggleAccordion(index));
    })
}

function toggleAccordion(index) {
    const items = document.querySelectorAll('.skt-accordion-item');
    // const content = items[index].querySelector('.accordion-content');

    const currentItem = items[index]
    // Toggle the display of the clicked section
    if (currentItem.classList.contains("skt-expanded")) {
        currentItem.classList.remove("skt-expanded")
    } else {
        currentItem.classList.add("skt-expanded")
    }
}

const tabLinks = document.querySelectorAll('.skt-tab-slider-section .skt-tab-link')
tabLinks.forEach(tabLink => {
    tabLink.addEventListener('click', e => {
        openTab(e, tabLink.dataset.tab)
    })
})

function openTab(event, tabId) {

    // Hide all tab content
    const tabContent = document.querySelectorAll(".skt-tab-pane");
    tabContent.forEach(tab => tab.classList.remove("skt-active"));

    // Remove the active class from all tab links
    const tabLinks = document.querySelectorAll(".skt-tab-link");
    tabLinks.forEach(link => link.classList.remove("skt-active"));

    // Show the current tab content and add the active class to the clicked tab link
    document.getElementById(tabId).classList.add("skt-active");
    event.currentTarget.classList.add("skt-active");


}


$(document).ready(function () {
    $('.skt-tab-header-slider').slick({
        slidesToShow: 6,
        slidesToScroll: 1,
        infinite: false,
        arrows: true,
        dots: false,
        prevArrow: '<button class="skt-tabheaderslider-prev"><img src="./images/icons/tablink-slider-arrow-right.svg" alt="Previous"></button>',
        nextArrow: '<button class="skt-tabheaderslider-next"><img src="./images/icons/tablink-slider-arrow-right.svg" alt="Next"></button>',
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 2,
                }
            }
        ]
    });

    const sliderOptions = {
        slidesToShow: 4,
        slidesToScroll: 1,
        infinite: false,
        arrows: true,
        dots: true,
        prevArrow: '<button class="skt-tabslider-prev"><img src="./images/icons/tabslider-arrow-right.svg" alt="Previous"></button>',
        nextArrow: '<button class="skt-tabslider-next"><img src="./images/icons/tabslider-arrow-right.svg" alt="Next"></button>',
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    }

    $(".skt-slider").slick(sliderOptions)

    $(`.skt-bottom-slider`).slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        infinite: true,
        arrows: true,
        dots: false,
        prevArrow: '<button class="skt-bottom-slider-prev"><img src="./images/icons/tabslider-arrow-right.svg" alt="Previous"></button>',
        nextArrow: '<button class="skt-bottom-slider-next"><img src="./images/icons/tabslider-arrow-right.svg" alt="Next"></button>',
        responsive: [
            {
                breakpoint: 1400,
                settings: {
                    slidesToShow: 4,
                }
            },
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    })

});

Fancybox.bind("[data-fancybox]", {
    buttons: [
        "close"
    ],
    youtube: {
        controls: 1,
        showinfo: 0
    },
    vimeo: {
        color: "f00"
    }

});



function openOffcanvas() {
    offcanvas.classList.add('skt-show');
    backdrop.classList.add('skt-show');
    document.body.style.overflow = 'hidden';
    // Reset form state when opening
    showForm();
}

function closeOffcanvas() {
    offcanvas.classList.remove('skt-show');
    backdrop.classList.remove('skt-show');
    document.body.style.overflow = '';
}

function showForm() {
    formContent.classList.remove('skt-hide');
    thankYouContent.classList.add('skt-hide');
    document.getElementById('requestForm').reset();
}

function showThankYou() {
    formContent.classList.add('skt-hide');
    thankYouContent.classList.remove('skt-hide');
}

// Close offcanvas when clicking backdrop
backdrop.addEventListener('click', closeOffcanvas);

// Close offcanvas when pressing Escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && offcanvas.classList.contains('skt-show')) {
        closeOffcanvas();
    }
});

// Prevent closing when clicking inside offcanvas
offcanvas.addEventListener('click', (e) => {
    e.stopPropagation();
});

