// Loader
$(window).on('load', function () {
  $('#preloader').fadeOut('slow');
});

$(document).ready(function () {
  $('body').show();
});

function filterNotAll(proficiency, color) {
  var y = document.getElementById('icon-list').querySelectorAll('.icon i');
  for (var i = 0; i < y.length; i++) {
    y[i].setAttribute('style', 'color: #B8BDB5;');
  }
  var all_words = document
    .getElementById('icon-list')
    .querySelectorAll('.icon h2');
  for (var i = 0; i < all_words.length; i++) {
    all_words[i].setAttribute('style', 'font-weight: 400;');
  }
  var x = document
    .getElementById('icon-list')
    .querySelectorAll(`.${proficiency} i`);
  for (var i = 0; i < x.length; i++) {
    x[i].setAttribute('style', `color: ${color}`);
  }
  var selected_words = document
    .getElementById('icon-list')
    .querySelectorAll(`.${proficiency} h2`);
  for (var i = 0; i < selected_words.length; i++) {
    selected_words[i].setAttribute('style', 'font-weight: 700;');
  }
}

function filterSelection(c) {
  var map = {
    all: '#3c4f76',
    high: '#8c00ff',
    medium: '#F6511D',
    low: '#fcba04',
  };
  if (c == 'all') {
    var x = document.getElementById('icon-list').querySelectorAll('.icon i');
    for (var i = 0; i < x.length; i++) {
      x[i].setAttribute('style', 'color: #3c4f76;');
    }
    var all_words = document
      .getElementById('icon-list')
      .querySelectorAll('.icon h2');
    for (var i = 0; i < all_words.length; i++) {
      all_words[i].setAttribute('style', 'font-weight: 400;');
    }
  } else {
    filterNotAll(c, map[c]);
  }
  var container = document.getElementById('skills-filter');
  var current = container.querySelector('.active');
  current.setAttribute(
    'style',
    'background: none; color: black; border: 1px solid #3c4f76;'
  );
  current.classList.remove('active');
  var active = container.querySelector(`#${c}`);
  active.classList.add('active');
  active.setAttribute(
    'style',
    `background: ${map[c]}; color: 'white'; border: none;`
  );
}

function experienceFilter(job) {
  var prevTab = document.querySelector('.tab-container ul li.active');
  var prevId = prevTab.id;
  prevTab.classList.remove('active');
  var activeTab = document.getElementById(job);
  activeTab.classList.add('active');

  var prevDesc = document.getElementById(`${prevId}-desc`);
  prevDesc.classList.remove('active');
  var activeDesc = document.getElementById(`${job}-desc`);
  activeDesc.classList.add('active');
}

$('a[href^="#"]').click(function (event) {
  var id = $(this).attr('href');
  var target = $(id).offset().top - 100;
  $('html, body').animate({ scrollTop: target }, 500);
  event.preventDefault();
});

function getTargetTop(elem) {
  var id = elem.attr('href');
  var offset = 60;
  return $(id).offset().top - offset;
}

$(window).scroll(function (e) {
  isSelected($(window).scrollTop());
});

var sections = $('a[href^="#"]');

function isSelected(scrolledTo) {
  var threshold = 100;
  var i;

  for (i = 0; i < sections.length; i++) {
    var section = $(sections[i]);
    var target = getTargetTop(section);

    if (scrolledTo > target - threshold && scrolledTo < target + threshold) {
      sections.removeClass('active');
      section.addClass('active');
    }
  }
}

/* Navbar Toggle */

/* Open when someone clicks on the span element */
function openNav() {
  document.documentElement.style.overflow = 'hidden'; // firefox, chrome
  document.body.scroll = 'no'; // ie only
  document.getElementById('navOverlay').style.width = '100%';
}

/* Close when someone clicks on the "x" symbol inside the overlay */
function closeNav() {
  document.documentElement.style.overflow = 'auto'; // firefox, chrome
  document.body.scroll = 'yes'; // ie only
  document.getElementById('navOverlay').style.width = '0%';
}
