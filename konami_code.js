const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]

function init() {
  var index = 0;
  document.addEventListener('keydown', e => {
    const key = parseInt(e.key || e.which || e.location);
    if (key === code[index]){
      index++;
      if (index === code.length){
        alert('Congrats!');
        index = 0;
      }
    } else {
      index = 0;
    }
  })
}
