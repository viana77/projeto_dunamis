$(document).ready(function() {
  $('#mobile-btn').on('click', function () {
    $('#mobile-menu').toggleClass('active');
    $('#mobile-btn').find('i').toggleClass('fa-x');
  });

  const sections = $('section');
  const navItems = $('.nav-item');

  $(window).on('scroll', function(){
    const header = $('header');
    const scrollPosition = $(window).scrollTop() - header.outerHeight();

    let activeSectionIndex = 0;

    if (scrollPosition <= 0) {
      header.css('box-shadow', 'none');
    } else {
      header.css('box-shadow', '5px 1px 5px rgba(0, 0, 0, 0.1)');
    }

    sections.each(function(i) {
      const section = $(this);
      const sectionTop = section.offset().top - 96;
      const sectionBottom = sectionTop + section.outerHeight();

      if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
        activeSectionIndex = i;
        return false;
      }
    });

    navItems.removeClass('active')
    $(navItems[activeSectionIndex]).addClass('active');
  });

  ScrollReveal().reveal('#cta', {
    origin: 'left',
    duration: 2000,
    distance: '20%'
  });

  ScrollReveal().reveal('#about', {
    origin: 'left',
    duration: 2000,
    distance: '20%'
  });

  ScrollReveal().reveal('#agenda', {
    origin: 'left',
    duration: 2000,
    distance: '20%'
  });

  ScrollReveal().reveal('.date', {
    origin: 'left',
    duration: 2000,
    distance: '20%'
  });

  ScrollReveal().reveal('#section__container', {
    origin: 'left',
    duration: 2000,
    distance: '20%'
  });

  ScrollReveal().reveal('#banner', {
    origin: 'right',
    duration: 2000,
    distance: '20%'
  });

  ScrollReveal().reveal('#accordion', {
    origin: 'left',
    duration: 2000,
    distance: '20%'
  });
});

const questions = document.querySelectorAll(".questions");

questions.forEach(questions => {
  questions.addEventListener("click", () => {
    questions.classList.toggle("active");
  });
});