function setTime() {
  var now = new Date();
  var time = [];
  var arrows = document.querySelectorAll('.arrow');
  var dividers = document.querySelectorAll('.divider');
  
  time.push(now.getHours());
  time.push(now.getMinutes());
  time.push(now.getSeconds());
  time.push(Math.floor(now.getMilliseconds() / 10));
  
  time = time.map( elem => elem < 10 ? '0' + elem : elem );
  
  for (var index = 0; index < arrows.length; index++) {
    arrows[index].innerHTML = time[index];
  }

  dividers.forEach( elem => {
    if (time[3] < 50) {
      elem.style.color = 'black';
    } else {
      elem.style.color = 'red';
    }
  });
}

setInterval(setTime, 10);