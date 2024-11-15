const mobileNavToggle = document.querySelector(".mobile-nav-toggle")
const mobileSearchToggle = document.querySelector(".mobile-search-toggle")
const navbarNav = document.querySelector(".navbar-nav")
const dropdownToggles = document.querySelectorAll(".has-dropdown")
const mobileSearchbarWrapper = document.querySelector(".mobile-search-wrapper")
const searchBtn = document.querySelector(".search-wrapper")
const searchContainer = document.querySelector(".searchbar-container-wrapper")
const offcanvas = document.querySelector('.offcanvas');
const backdrop = document.querySelector('.offcanvas-backdrop');
const formContent = document.querySelector('.form-content');
const thankYouContent = document.querySelector('.thank-you-content');
const contactFormOpenBtn = document.querySelector('#contact-form-button')

contactFormOpenBtn.addEventListener('click', e => {
    e.preventDefault()
    openOffcanvas()
})

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

function toggleAccordion(index) {
    const items = document.querySelectorAll('.accordion-item');
    // const content = items[index].querySelector('.accordion-content');

    const currentItem = items[index]
    // Toggle the display of the clicked section
    if (currentItem.classList.contains("expanded")) {
        currentItem.classList.remove("expanded")
    } else {
        currentItem.classList.add("expanded")
    }
}

const tabLinks = document.querySelectorAll('.tab-slider-section .tab-link')
tabLinks.forEach(tabLink => {
    tabLink.addEventListener('click', e => {
        openTab(e, tabLink.dataset.tab)
    })
})

function openTab(event, tabId) {



    // Hide all tab content
    const tabContent = document.querySelectorAll(".tab-pane");
    tabContent.forEach(tab => tab.classList.remove("active"));

    // Remove the active class from all tab links
    const tabLinks = document.querySelectorAll(".tab-link");
    tabLinks.forEach(link => link.classList.remove("active"));

    // Show the current tab content and add the active class to the clicked tab link
    document.getElementById(tabId).classList.add("active");
    event.currentTarget.classList.add("active");

}


$(document).ready(function () {
    $('.tab-header-slider').slick({
        slidesToShow: 6,
        slidesToScroll: 1,
        infinite: false,
        arrows: true,
        dots: false,
        prevArrow: '<button class="tabheaderslider-prev"><img src="./images/icons/tablink-slider-arrow-right.svg" alt="Previous"></button>',
        nextArrow: '<button class="tabheaderslider-next"><img src="./images/icons/tablink-slider-arrow-right.svg" alt="Next"></button>',
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
    });

    const sliderOptions = {
        slidesToShow: 4,
        slidesToScroll: 1,
        infinite: false,
        arrows: true,
        dots: true,
        prevArrow: '<button class="tabslider-prev"><img src="./images/icons/tabslider-arrow-right.svg" alt="Previous"></button>',
        nextArrow: '<button class="tabslider-next"><img src="./images/icons/tabslider-arrow-right.svg" alt="Next"></button>',
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

    $(`#tab1 .slider`).slick(sliderOptions)
    $(`.bottom-slider`).slick({
        slidesToShow: 6,
        slidesToScroll: 1,
        infinite: false,
        arrows: true,
        dots: false,
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
    })

    $("[data-fancybox]").fancybox({
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


});


function openOffcanvas() {
    offcanvas.classList.add('show');
    backdrop.classList.add('show');
    document.body.style.overflow = 'hidden';
    // Reset form state when opening
    showForm();
}

function closeOffcanvas() {
    offcanvas.classList.remove('show');
    backdrop.classList.remove('show');
    document.body.style.overflow = '';
}

function showForm() {
    formContent.classList.remove('hide');
    thankYouContent.classList.add('hide');
    document.getElementById('requestForm').reset();
}

function showThankYou() {
    formContent.classList.add('hide');
    thankYouContent.classList.remove('hide');
}

function handleSubmit(event) {
    event.preventDefault();
    showThankYou();
}

// Close offcanvas when clicking backdrop
backdrop.addEventListener('click', closeOffcanvas);

// Close offcanvas when pressing Escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && offcanvas.classList.contains('show')) {
        closeOffcanvas();
    }
});

// Prevent closing when clicking inside offcanvas
offcanvas.addEventListener('click', (e) => {
    e.stopPropagation();
});

