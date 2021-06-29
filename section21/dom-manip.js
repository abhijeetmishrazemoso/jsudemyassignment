document.getElementById('h1').innerHTML = 'Welcome to my Site!';
document.getElementById('p1').innerHTML = 'My name is ' + 'Abhijeet';

const childToRemove = document.getElementById('h2');
childToRemove.parentNode.removeChild(childToRemove);
document.getElementById('p2').style.color = 'blue';
document.getElementById('p2').innerHTML = 'I Love Javascript';
