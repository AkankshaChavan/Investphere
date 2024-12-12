$(document).ready(function () {
    $('.menu-toggle').click(function () {
        $('.nav-links').toggleClass('show');
    });

    // $('.nav-links a').click(function () {
    //     $('.nav-links').removeClass('show');
    // });
});

$(document).ready(function () {
    $(".dropdown-toggle").click(function (e) {
        if ($(this).siblings(".dropdown-menu").length > 0) {
            e.preventDefault();
            $(this).siblings(".show").toggleClass();
        }
    });

    $(".menu-toggle").click(function () {
        $("#nav-links").toggleClass("show");
    });

    $(document).click(function (event) {
        if (!$(event.target).closest(".nav-links, .menu-toggle").length) {
            $(".dropdown-menu").slideUp();
        }
    });
});




$(document).ready(function () {
    $(".dropdown-toggle").click(function (e) {
        if ($(this).siblings(".dropdown-menu").length > 0) {
            e.preventDefault();
            $(this).siblings(".dropdown-menu").slideToggle();
        }
    });

});


const form = document.getElementById("formValidation");

const carRegistration = document.getElementById("carRegistration");
const mobileNumber = document.getElementById("mobileNumber");
const emailAddress = document.getElementById("emailAddress");

const carRegistrationError = document.getElementById("carRegistrationError");
const mobileNumberError = document.getElementById("mobileNumberError");
const emailAddressError = document.getElementById("emailAddressError");

form.addEventListener("submit", (e) => {
    e.preventDefault();
    let isValid = true;

    const carRegPattern = /^[A-Z]{2}\d{2}[A-Z]{3}$|^[A-Z]{3}\d{4}$/;
    if (!carRegPattern.test(carRegistration.value.trim())) {
        carRegistrationError.textContent = "Enter a valid car registration (e.g., AB12CDE or ABC1234).";
        isValid = false;
    } else {
        carRegistrationError.textContent = "";
    }

    const mobilePattern = /^\d{10}$/;
    if (!mobilePattern.test(mobileNumber.value.trim())) {
        mobileNumberError.textContent = "Enter a valid 10-digit mobile number.";
        isValid = false;
    } else {
        mobileNumberError.textContent = "";
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(emailAddress.value.trim())) {
        emailAddressError.textContent = "Enter a valid email address.";
        isValid = false;
    } else {
        emailAddressError.textContent = "";
    }

    if (isValid) {
        alert("Form submitted successfully!");
        form.reset();
    }
});

carRegistration.addEventListener("input", () => {
    if (carRegistration.value.trim().match(/^[A-Z]{2}\d{2}[A-Z]{3}$|^[A-Z]{3}\d{4}$/)) {
        carRegistrationError.textContent = "";
    }
});

mobileNumber.addEventListener("input", () => {
    if (mobileNumber.value.trim().match(/^\d{10}$/)) {
        mobileNumberError.textContent = "";
    }
});

emailAddress.addEventListener("input", () => {
    if (emailAddress.value.trim().match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
        emailAddressError.textContent = "";
    }
});



// const question = document.querySelector(".question");
// const answer = document.querySelector(".answer");

// question.addEventListener("click", ()=>{
//     answer.classList.toggle(".show")
// });


 const accordions = document.querySelectorAll('.question');

 accordions.forEach(acc => {
     acc.addEventListener('click', function() {
         const answer = this.nextElementSibling;

         answer.style.display = answer.style.display === 'block' ? 'none' : 'block';
     });

     const answer = acc.nextElementSibling;
     answer.style.display = 'block';
 });


$(document).ready(function () {
    $('.slider').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        dots: false,
        arrows: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });
});


$(document).ready(function () {
    $('#tabs-nav li:first-child').addClass('active');
    $('.tab-content').hide();
    $('.tab-content:first').show();

    $('#tabs-nav li').click(function () {
        $('#tabs-nav li').removeClass('active');
        $(this).addClass('active');
        $('.tab-content').hide();

        var activeTab = $(this).find('a').attr('href');
        $(activeTab).fadeIn();
        return false;
    });

});