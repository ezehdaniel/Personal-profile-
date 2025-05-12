$(document).ready(function() {
    $(window).scroll(function() {
        if ($(this).scrollTop() > 20) {  // Corrected here
            $('.navbar').addClass("sticky");
        } else {
            $('.navbar').removeClass("sticky");
        }
        if ($(this).scrollTop() > 500) {
            $('.scroll-up-btn').addClass("show");
        }else {
            $('.scroll-up-btn').removeClass("show");
        }
    });
    // slide-up script
    $('.scroll-up-btn').click(function() {
        $('html').animate({scrollTop: 0});
    });
    // toggle menu/navbar script
    $('.menu-btn').click(function() {
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });

    // typing animation script
    var typed = new Typed(".typing", {
        strings: [" Analytic Engineer","Web Developer", "Softare Engineer", "Data Engineer", "Data Analyst", "Youtuber"], 
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });
    var typed = new Typed(".typing-2", {
        strings: ["Analytic Engineer", "Web Developer", "Softare Engineer", "Data Engineer", "Data Analyst", "Youtuber"],
        typeSpeed: 100, 
        backSpeed: 60,
        loop: true
    });
    // owl carousel
    // owl carousel script

    owl = $('.owl-carousel').owlCarousel({
        margin: 20,
        loop: true,
        //autoplay: true,
        autoplayTimeout: 2000,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 1,
                nav: false
            },
            600: {
                items: 2,
                nav: false
            },
            1000: {
                items: 3,
                nav: false
            }
        }
    });
});
// Contact form submission handling
// Using FormSubmit.co for form handling
// Ensure you have the correct form ID and endpoint
// You can replace the email with your own email address
document.addEventListener("DOMContentLoaded", function () {
  const contactForm = document.getElementById("contact-form");
  const successMessage = document.getElementById("success-message");
  const errorMessage = document.getElementById("error-message");
  const submitBtn = document.getElementById("submit-btn");

  contactForm.addEventListener("submit", function (e) {
    e.preventDefault();

    // Update button while sending
    submitBtn.disabled = true;
    submitBtn.innerText = "Sending...";

    const formData = new FormData(contactForm);

    fetch("https://formsubmit.co/ajax/ezehdaniel01@gmail.com", {
      method: "POST",
      body: formData,
    })
      .then((response) => {
        if (!response.ok) throw new Error("Failed to send");
        return response.json();
      })
      .then((data) => {
        if (data.success) {
          successMessage.style.display = "block";
          errorMessage.style.display = "none";
          contactForm.reset();
        } else {
          throw new Error("Submission failed");
        }
      })
      .catch((error) => {
        errorMessage.style.display = "block";
        successMessage.style.display = "none";
      })
      .finally(() => {
        submitBtn.disabled = false;
        submitBtn.innerText = "Send";
      });
  });
});
