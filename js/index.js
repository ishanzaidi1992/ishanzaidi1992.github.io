var previousCard = document.getElementById('previous');
var nextCard = document.getElementById('next');
var previousCard = document.getElementById('previous');
var cards = [
  ['main-window', '#FCE4EC'],
  ['second-window', '#F1F8E9'],
  ['third-window', '#E3F2FD'],
  ['fourth-window', '#BFB4FE'],
  ['fifth-window', '#FFCAE0']
];

nextCard.addEventListener('click', function() {
  console.log('test')
  setNextCard()
})

previousCard.addEventListener('click', function() {
  setPreviousCard();
})

function setNextCard() {
  var elm = cards.shift();
  cards.push(elm);
  console.log(cards);
  updateCard('forward');
}

function setPreviousCard() {
  var elm = cards.pop();
  cards.unshift(elm);
  updateCard();
}

function updateCard(direction) {
  for (var i = 0; i <= cards.length; i++) {
    if (i === 0) {
      document.getElementById(cards[i][0]).classList.remove('animated-back');

      if (direction === 'forward') {
        document.getElementById(cards[i][0]).classList.add('focus');

      } else {
        document.getElementById(cards[i][0]).classList.add('animated-focus');

      }
      document.getElementById(cards[i][0]).classList.remove('back');
      document.getElementById(cards[i][0]).classList.remove('middle');

      document.getElementById('container').style.background = cards[i][1];
    } else if (i === 1) {
      document.getElementById(cards[i][0]).classList.add('middle');
      document.getElementById(cards[i][0]).classList.remove('focus');
      document.getElementById(cards[i][0]).classList.remove('back');
      document.getElementById(cards[i][0]).classList.remove('animated-back');
      document.getElementById(cards[i][0]).classList.remove('animated-focus');

    }else if (i === 2) {
      document.getElementById(cards[i][0]).classList.add('middle');
      document.getElementById(cards[i][0]).classList.remove('focus');
      document.getElementById(cards[i][0]).classList.remove('back');
      document.getElementById(cards[i][0]).classList.remove('animated-back');
      document.getElementById(cards[i][0]).classList.remove('animated-focus');

    }else if (i === 3) {
      document.getElementById(cards[i][0]).classList.add('middle');
      document.getElementById(cards[i][0]).classList.remove('focus');
      document.getElementById(cards[i][0]).classList.remove('back');
      document.getElementById(cards[i][0]).classList.remove('animated-back');
      document.getElementById(cards[i][0]).classList.remove('animated-focus');

    } else if (i === 4) {
      document.getElementById(cards[i][0]).classList.remove('animated-focus');

      if (direction === 'forward') {
        document.getElementById(cards[i][0]).classList.add('animated-back');
      } else {
        document.getElementById(cards[i][0]).classList.add('back');

      }
      document.getElementById(cards[i][0]).classList.remove('focus');
      document.getElementById(cards[i][0]).classList.remove('middle');

    }
  }
  console.log(cards)
}

function updateTime() {
  var today = new Date();
  var nextyear=today.getFullYear()+1;
  var deadline = 'January 1 ' + nextyear + " 00:00:00";
  //var deadline = 'June 2 ' + (today.getFullYear()) + " 15:58:30";
  if (today.getMonth == 0 && today.getDate == 1) {
    deadline = 'January 1 ' + nextyear + " 00:00:00";
  };
  d = timeLeft(deadline);
  if (d.days>=365) {
    $('.card').css('background','#2196F3');
    ripple(".second")
    ripple(".minute");
    ripple(".hour");
    ripple(".day");
    $(".second").html(0);
    $(".minute").html(0);
    $(".hour").html(0);
    $(".day").html(0);
    $(".seconds").css("stroke-dasharray", + Math.floor((Math.random() * 100) + 1) + " 100");
    $(".minutes").css("stroke-dasharray", + Math.floor((Math.random() * 100) + 1) + " 100");
    $(".hours").css("stroke-dasharray", + Math.floor((Math.random() * 100) + 1) + " 100");
    $(".days").css("stroke-dasharray", + Math.floor((Math.random() * 100) + 1) + " 100");
    $('.greeting').html('Welcome to '+today.getFullYear());
  } else {
    if(d.days<=30){
      $('.card').css('background','#ffc107');
    }else if(d.days>30 && d.days<=120){
      $('.card').css('background','#ffeb3b');
    }else{
      $('.card').css('background','#cddc39');
    }
    
    $('.greeting').html('Before '+nextyear);
    var s = d.seconds * 1.68,
      m = d.minutes * 1.68,
      h = d.hours * 4.17,
      d1=d.days * (100/daysInYear(today.getFullYear())),
      s2 = d.seconds,
      m2 = d.minutes,
      h2 = d.hours,
      d2 = d.days;
    $(".seconds").css("stroke-dasharray", +s + " 100");
    $(".minutes").css("stroke-dasharray", +m + " 100");
    $(".hours").css("stroke-dasharray", +h + " 100");
    $(".days").css("stroke-dasharray", +d1 + " 100");
      ripple(".second");
      $(".second").html((s2 < 10 ? "0" : "") + s2);
    if (parseInt($(".minute").html()) !== m2) {
      ripple(".minute");
      $(".minute").html((m2 < 10 ? "0" : "") + m2);
    }
    if (parseInt($(".hour").html()) !== h2) {
      ripple(".hour");
      $(".hour").html((h2 < 10 ? "0" : "") + h2);
    }
    if (parseInt($(".day").html()) !== d2) {
      ripple(".day");
      $(".day").html(d2);
    }
  }
}

function timeLeft(endtime) {
  var t = Date.parse(endtime) - Date.parse(new Date());
  var seconds = Math.floor((t / 1000) % 60);
  var minutes = Math.floor((t / 1000 / 60) % 60);
  var hours = Math.floor((t / (1000 * 60 * 60)) % 24);
  var days = Math.floor(t / (1000 * 60 * 60 * 24));
  return {
    'total': t,
    'days': days,
    'hours': hours,
    'minutes': minutes,
    'seconds': seconds
  };
};

function daysInYear(year) {
    if(year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0)) {
        // Leap year
        return 366;
    } else {
        // Not a leap year
        return 365;
    }
}

// Ripple effect
var target, ink, d, x, y;
$(".fab").click(function(e) {
  target = $(this);
  //create .ink element if it doesn't exist
  if (target.find(".ink").length == 0)
    target.prepend("<span class='ink'></span>");

  ink = target.find(".ink");
  //incase of quick double clicks stop the previous animation
  ink.removeClass("animate");

  //set size of .ink
  if (!ink.height() && !ink.width()) {
    //use parent's width or height whichever is larger for the diameter to make a circle which can cover the entire element.
    d = Math.max(target.outerWidth(), target.outerHeight());
    ink.css({
      height: d,
      width: d
    });
  }

  //get click coordinates
  //logic = click coordinates relative to page - parent's position relative to page - half of self height/width to make it controllable from the center;
  x = e.pageX - target.offset().left - ink.width() / 2;
  y = e.pageY - target.offset().top - ink.height() / 2;

  //set the position and add class .animate
  ink.css({
    top: y + 'px',
    left: x + 'px'
  }).addClass("animate");
});

function ripple(e) {
  target = $(e).parent();
  //create .ink element if it doesn't exist
  if (target.find(".ink").length == 0)
    target.prepend("<span class='ink'></span>");

  ink = target.find(".ink");
  //incase of quick double clicks stop the previous animation
  ink.removeClass("animate");

  //set size of .ink
  if (!ink.height() && !ink.width()) {
    //use parent's width or height whichever is larger for the diameter to make a circle which can cover the entire element.
    d = Math.max(target.outerWidth(), target.outerHeight());
    ink.css({
      height: d,
      width: d
    });
  }

  //get click coordinates
  //logic = click coordinates relative to page - parent's position relative to page - half of self height/width to make it controllable from the center;
  x = e.pageX - target.offset().left - ink.width() / 2;
  y = e.pageY - target.offset().top - ink.height() / 2;

  //set the position and add class .animate
  ink.css({
    top: y + 'px',
    left: x + 'px'
  }).addClass("animate");
}

var clock = setInterval(updateTime, 1000);
