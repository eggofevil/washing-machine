(function () {
  var door = document.querySelector('.washing-machine__door');
  var linnen = document.querySelector('.linnen');
  var startBtn = document.querySelector('.washing-machine__start-btn');
  var doorOpened = false;
  var linnenLoaded = false;
  var inWork = false;
  var counter = 0;
  
  door.addEventListener('click', function () {
    if (!doorOpened) {
      door.style.transform = 'scale(0.1, 1) translateX(-450%)';
      doorOpened = true;
    }
    else {
      door.style.transform = '';
      doorOpened = false;
    }
  });
  linnen.addEventListener('click', function () {
    if (doorOpened) {
      if (!linnenLoaded) {
        linnen.style.transform = 'translate(-250px, -250px)';
        linnenLoaded = true;
      } else {
        linnen.style.transform = '';
        linnenLoaded = false;
      }
    }
  });
  startBtn.addEventListener('click', function () {
    if (!doorOpened && linnenLoaded) {
      linnen.style['transition-duration'] = '0.5s';
      rotate(0);
    }
  });
  
  function rotate () {
    console.log(counter);
    var deg = counter * 359;
    linnen.style.transform = 'translate(-250px, -250px) rotate(' + deg + 'deg)';
    counter++;
    if (counter < 25) {
      setTimeout(rotate, 550);
    } else {
      counter = 0;
    }
  }
})();