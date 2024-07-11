// JavaScript for image slider
const slides = document.querySelectorAll('.slide');
const slideTexts = document.querySelectorAll('.slide-text');
let currentSlide = 0;

// Function to initialize slider
function initSlider() {
    if (slides.length > 0 && slideTexts.length > 0) {
        slides[currentSlide].classList.add('active');
        slideTexts[currentSlide].classList.add('active');
    }
}

// Function to move to next slide
function nextSlide() {
    if (slides.length > 0 && slideTexts.length > 0) {
        slides[currentSlide].classList.remove('active');
        slideTexts[currentSlide].classList.remove('active');
        currentSlide = (currentSlide + 1) % slides.length;
        slides[currentSlide].classList.add('active');
        slideTexts[currentSlide].classList.add('active');
    }
}

// Function to move to previous slide
function prevSlide() {
    if (slides.length > 0 && slideTexts.length > 0) {
        slides[currentSlide].classList.remove('active');
        slideTexts[currentSlide].classList.remove('active');
        currentSlide = (currentSlide - 1 + slides.length) % slides.length;
        slides[currentSlide].classList.add('active');
        slideTexts[currentSlide].classList.add('active');
    }
}

// Event listeners for next and previous buttons
document.querySelector('.next')?.addEventListener('click', nextSlide);
document.querySelector('.prev')?.addEventListener('click', prevSlide);

// Initialize the slider
initSlider();

// JavaScript for animations and interactions
const sectionDetails = document.querySelectorAll('.detail-item');

// Function to animate details on scroll
function animateDetails() {
    sectionDetails.forEach((detail, index) => {
        const detailPosition = detail.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.3;

        if (detailPosition < screenPosition) {
            detail.classList.add('animate__animated', 'animate__fadeInUp');
        } else {
            detail.classList.remove('animate__animated', 'animate__fadeInUp');
        }
    });
}

// Event listener for scroll animation
window.addEventListener('scroll', animateDetails);

// Initialize animation on page load
animateDetails();

// JavaScript for banner slideshow
const banner = document.getElementById('banner');
const images = [
    'path/to/banner1.jpg',
    'path/to/banner2.jpg',
    'path/to/banner3.jpg'
]; // Các đường dẫn của hình ảnh trong banner
const texts = [
    { title: 'Khám phá thác K50', description: 'Trải nghiệm chuyến trekking đầy thú vị' },
    { title: 'Cảnh đẹp thiên nhiên', description: 'Khám phá vẻ đẹp hoang sơ của thiên nhiên' },
    { title: 'Chuyến đi hè', description: 'Điểm đến lý tưởng cho kỳ nghỉ hè của bạn' }
]; // Các nội dung overlay tương ứng với từng hình ảnh

let currentIndex = 0;
const totalImages = images.length;

function slideBanner() {
    if (banner) {
        currentIndex = (currentIndex + 1) % totalImages;
        banner.style.backgroundImage = `url('${images[currentIndex]}')`;
        banner.querySelector('.banner-text h2').textContent = texts[currentIndex].title;
        banner.querySelector('.banner-text p').textContent = texts[currentIndex].description;
    }
}

// Start banner slideshow
setInterval(slideBanner, 5000); // Thay đổi 5000 để điều chỉnh thời gian chuyển đổi giữa các hình ảnh

// Form
document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('openFormBtn')?.addEventListener('click', function() {
        document.getElementById('formPopup').style.display = 'block';
    });

    document.getElementById('closeFormBtn')?.addEventListener('click', function() {
        document.getElementById('formPopup').style.display = 'none';
    });
});

function openForm() {
    document.getElementById("myForm").style.display = "block";
}

function closeForm() {
    document.getElementById("myForm").style.display = "none";
}

// Schedule----------------------------------------------------------------

const imagess = [
    'thinh1.jpg',
    'thinh2.jpg',
    'thinh3.jpg'
];
let currentIndex1 = 0;

document.getElementById('prev-btn')?.addEventListener('click', function() {
    currentIndex1 = (currentIndex1 > 0) ? currentIndex1 - 1 : imagess.length - 1;
    document.getElementById('gallery-image').src = imagess[currentIndex1];
});

document.getElementById('next-btn')?.addEventListener('click', function() {
    currentIndex1 = (currentIndex1 < imagess.length - 1) ? currentIndex1 + 1 : 0;
    document.getElementById('gallery-image').src = imagess[currentIndex1];
});

document.getElementById('schedule-btn')?.addEventListener('click', function() {
    alert('Lịch trình sẽ sớm được cập nhật.');
});

document.getElementById('book-tour-btn')?.addEventListener('click', function() {
    alert('Đặt tour thành công.');
});

// elementor.js

document.addEventListener("DOMContentLoaded", function() {
    const tabs = document.querySelectorAll('.tab-link');
    const contents = document.querySelectorAll('.tab-content');

    tabs.forEach(tab => {
        tab.addEventListener('click', function() {
            const tabId = this.getAttribute('data-tab');

            tabs.forEach(t => t.classList.remove('active'));
            contents.forEach(content => content.classList.remove('active'));

            this.classList.add('active');
            document.getElementById(tabId).classList.add('active');
        });
    });

    // Set the first tab and content as active by default
    if (tabs.length > 0) {
        tabs[0].classList.add('active');
        contents[0].classList.add('active');
    }
});
// Trekking

document.addEventListener("DOMContentLoaded", function() {
    const prev = document.querySelector('.prev');
    const next = document.querySelector('.next');
    const carouselInner = document.querySelector('.carousel-inner');
    let index = 0;

    function showItem(index) {
        const items = document.querySelectorAll('.carousel-item');
        if (index >= items.length) {
            index = 0;
        } else if (index < 0) {
            index = items.length - 1;
        }
        carouselInner.style.transform = `translateX(-${index * 100}%)`;
    }

    prev.addEventListener('click', () => {
        index--;
        showItem(index);
    });

    next.addEventListener('click', () => {
        index++;
        showItem(index);
    });

    showItem(index);
});

document.addEventListener("DOMContentLoaded", function() {
    const bookButtons = document.querySelectorAll(".book-tour");
    const forms = document.querySelectorAll(".booking-form");
    const closeButtons = document.querySelectorAll(".close-form");

    bookButtons.forEach((button, index) => {
        button.addEventListener("click", function() {
            toggleForm(forms[index]);
        });
    });

    closeButtons.forEach((closeButton, index) => {
        closeButton.addEventListener("click", function() {
            toggleForm(forms[index]);
        });
    });

    function toggleForm(form) {
        // Kiểm tra trạng thái hiển thị của form
        if (form.style.display === "block") {
            form.style.display = "none"; // Đóng form nếu đã mở
        } else {
            // Hiển thị form
            closeAllForms(); // Đóng tất cả các form khác
            form.style.display = "block";
        }
    }

    function closeAllForms() {
        forms.forEach(form => {
            form.style.display = "none"; // Đóng tất cả các form
        });
    }
});
// message-contact-icon
const menubarBtn = document.querySelector('.header-top i')
    menubarBtn.addEventListener("click", function(){
    document.querySelector('.header-top ul').classList.toggle('active')


})

function toggleContactOptions() {
    var options = document.getElementById('contact-options');
    if (options.classList.contains('show')) {
        options.classList.remove('show');
    } else {
        options.classList.add('show');
    }
}