

$(document).ready(function () {
  const nameele = $('#name');
  const emailele = $('#email');
  const subjectele = $('#subject');
  const messageele = $('#message');

  const nameerror = $('#nameerror');
  const emailerror = $('#mailerror');
  const subjecterror = $('#subjecterror');
  const messageerror = $('#messageerror');



  const namePattern = new RegExp("^[A-Za-z ]{2,50}$")
  const emailPattern = new RegExp("^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$");

nameele.keyup(validateName).blur(validateName);
emailele.keyup(validateEmail).blur(validateEmail);
subjectele.keyup(validateSubject).blur(validateSubject);
messageele.keyup(validateMessage).blur(validateMessage);


  $('#contact-form').submit(function (e) {
    e.preventDefault();

    const b1 = validateName();
    const b2 = validateEmail();
    const b3 = validateSubject();
    const b4 = validateMessage();

    if (b1 && b2 && b3 && b4) {
      $('#success').text('Your message has been sent. Thank you!');
      $('#contact-form')[0].reset();

      setTimeout(() => {
        $('#success').text('');
      }, 3000);
    }
  });

  function validateName() {
    const name = nameele.val().trim();
    if (name === '') {
      nameerror.text('Name is required');
      nameele.addClass('error-input');
      return false;
    } else if (!namePattern.test(name)) {
      nameerror.text('Name must be 2–50 characters long and contain only letters and spaces');
      nameele.addClass('error-input');
      return false;
    } else {
      nameerror.text('');
      nameele.removeClass('error-input');
      return true;
    }
  }

  function validateEmail() {
    const email = emailele.val().trim();
    if (email === '') {
      emailerror.text('Email is required');
      emailele.addClass('error-input');
      return false;
    } else if (!emailPattern.test(email)) {
      emailerror.text('Please enter a valid email');
      emailele.addClass('error-input');
      return false;
    } else {
      emailerror.text('');
      emailele.removeClass('error-input');
      return true;
    }
  }

  function validateSubject() {
    const subject = subjectele.val().trim();
    if (subject === '') {
      subjecterror.text('Subject is required');
      subjectele.addClass('error-input');
      return false;
    } else {
      subjecterror.text('');
      subjectele.removeClass('error-input');
      return true;
    }
  }

  function validateMessage() {
    const message = messageele.val().trim();
    if (message === '') {
      messageerror.text('Message is required');
      messageele.addClass('error-input');
      return false;
    } else {
      messageerror.text('');
      messageele.removeClass('error-input');
      return true;
    }
  }
});



// Typing animation for the header
document.addEventListener("DOMContentLoaded", function() {
  const typingInput = document.getElementById("typing-input");
  const roles = ["Web Developer", "Data Scientist", "ML Engineer", "Problem Solver"];
  let roleIndex = 0;
  let charIndex = 0;
  let isDeleting = false;
  let typingDelay = 200;
  let erasingDelay = 100;
  let newTextDelay = 2000;

  function typeEffect() {
    const currentRole = roles[roleIndex];
    
    if (isDeleting) {
      typingInput.value = currentRole.substring(0, charIndex - 1);
      charIndex--;
      typingDelay = erasingDelay;
    } else {
      typingInput.value = currentRole.substring(0, charIndex + 1);
      charIndex++;
      typingDelay = 200;
    }

    if (!isDeleting && charIndex === currentRole.length) {
      isDeleting = true;
      typingDelay = newTextDelay;
    } else if (isDeleting && charIndex === 0) {
      isDeleting = false;
      roleIndex = (roleIndex + 1) % roles.length;
    }

    setTimeout(typeEffect, typingDelay);
  }

  typeEffect();

  // Smooth scrolling for navigation links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      
      const targetId = this.getAttribute('href');
      const targetElement = document.querySelector(targetId);
      
      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop,
          behavior: 'smooth'
        });
        
        // Update active class on menu items
        document.querySelectorAll('.nav-menu li').forEach(item => {
          item.classList.remove('active');
        });
        this.parentElement.classList.add('active');
      }
    });
  });
});

  window.addEventListener("scroll", function () {
    const stickyNavbar = document.getElementById("stickyNavbar");
    const scrollY = window.scrollY;

    if (scrollY > 100) {
      // Show sticky navbar
      stickyNavbar.classList.remove("hidden");
    } else {
      // Hide sticky navbar
      stickyNavbar.classList.add("hidden");
    }
  });


  const projectSlides = [
    {
      images: [
        { imagepath: "./Resources/bot1.jpg", imagecap: "Architecture" },
        { imagepath: "./Resources/bot2.jpg", imagecap: "SM VITA UI" },
        { imagepath: "./Resources/bot3.jpg", imagecap: "Question and Answers" },
      ]
    },
    {
      images: [
        { imagepath: "./Resources/aud1.jpg", imagecap: "Audio Classification UI" },
        { imagepath: "./Resources/aud2.jpg", imagecap: "Model Training" },
        { imagepath: "./Resources/aud3.jpg", imagecap: "MFCC Spectrogram" },

      ]
    },
    {
      images: [
        { imagepath: "./Resources/todo_login.png", imagecap: "To-Do Login" },
        { imagepath: "./Resources/todo_page.png", imagecap: "Task Detail View" },
      ]
    }
  ];

  let currentProjectIndex = 0;
  let currentSlideIndex = 0;

  const modal = document.getElementById("slideshowModal");
  const slideshowImage = document.getElementById("slideshowImage");
  const caption = document.getElementById("caption");

  function showSlide(index) {
    const project = projectSlides[currentProjectIndex];
    const slide = project.images[index];
    slideshowImage.src = slide.imagepath;
    caption.textContent = slide.imagecap;
  }

  function openSlideshow(projectIndex) {
    currentProjectIndex = projectIndex;
    currentSlideIndex = 0;
    modal.style.display = "block";
    showSlide(currentSlideIndex);
  }

  function closeModal() {
    modal.style.display = "none";
  }

  function nextSlide() {
    const slides = projectSlides[currentProjectIndex].images;
    currentSlideIndex = (currentSlideIndex + 1) % slides.length;
    showSlide(currentSlideIndex);
  }

  function prevSlide() {
    const slides = projectSlides[currentProjectIndex].images;
    currentSlideIndex = (currentSlideIndex - 1 + slides.length) % slides.length;
    showSlide(currentSlideIndex);
  }

  // Optional: Close on outside click
  window.onclick = function(event) {
    if (event.target == modal) {
      closeModal();
    }
  };

  window.onload = function () {
  const certificates = [
    {
      imagepath: "./Resources/AWS Cert.png",
      imagecap: "AWS Cloud Practitioner"
    },
    {
      imagepath: "./Resources/UdemyCert.jpg",
      imagecap: "Python Certification"
    },
  ];

  let currentIndex = 0;

  const certImg = document.getElementById("certImage");
  const certCap = document.getElementById("certCaption");

  function showCertificate(index) {
    certImg.src = certificates[index].imagepath;
    certCap.textContent = certificates[index].imagecap;
  }

  function nextSlide() {
    currentIndex = (currentIndex + 1) % certificates.length;
    showCertificate(currentIndex);
  }

  function previousSlide() {
    currentIndex = (currentIndex - 1 + certificates.length) % certificates.length;
    showCertificate(currentIndex);
  }

  // Auto-sliding every 3 seconds
  setInterval(nextSlide, 3000);

  // Initial load
  showCertificate(currentIndex);

  // Assign functions to global scope for HTML `onclick`
  window.nextSlide = nextSlide;
  window.previousSlide = previousSlide;
};

  window.addEventListener('DOMContentLoaded', () => {
    const progressBars = document.querySelectorAll('.progress-bar');
    progressBars.forEach(bar => {
      const value = bar.getAttribute('data-progress');
      bar.style.width = value + '%';
    });
  });

  window.onscroll = function () {
    let btn = document.getElementById("backToTop");
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
      btn.style.display = "block";
    } else {
      btn.style.display = "none";
    }
  };

  // Scroll to top when clicked
  document.getElementById("backToTop").addEventListener("click", function () {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  
  
