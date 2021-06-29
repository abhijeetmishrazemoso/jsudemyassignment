function btn1Clicked() {
  document.getElementById('p1').innerHTML = 'Button 1 was clicked';
  alert('Button 1 was clicked');
}

function charsTyped() {
  let chars = document.getElementById('i1').value;
  createString(chars);
}

function createString(someString) {
  document.getElementById('p2').innerHTML = 'Characters typed: ' + someString.length;
}

document.getElementById('b2').addEventListener('click', btn2Clicked);

function btn2Clicked() {
  let main = document.getElementsByTagName('body')[0];
  let child = document.getElementById('p3');
  main.removeChild(child)
}

document.getElementById('i2').addEventListener('keypress', valueEntered);

function valueEntered() {
  let size = document.getElementById('i2').value.length||1.1;
  document.getElementById('p4').style.fontSize = (size*2) + 'em'
}