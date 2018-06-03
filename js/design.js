
window.onload = function() {       
    var a = document.getElementsByClassName("menu__icon")[0]; 
    var b = document.getElementsByClassName("menu")[0]; 
    a.addEventListener( 'click', function () {
          b.classList.toggle('menu_state_open');
        }) 
    };




var slider = tns({
    container: '.clients_slider',
    loop: false,
    items: 1,
    gutter: 5,
    nav: false,
    responsive: {
        300: {
            items: 4
        },
        500: {
          items: 6
        },
        900: {
          items: 8
        }
      },
    speed: 400,
    controls: false,
    controlsText: [" ", " "],
    rewind: true,
    autoplay: true,
    autoplayHoverPause: true,
    autoplayTimeout: 1500,
    autoplayText: [" ", " "],
    autoplayButtonOutput: false
  });
