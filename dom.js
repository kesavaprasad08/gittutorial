console.log(document.title);
document.title='hello world';
var headerTitle= document.getElementById('header-title');
var header = document.getElementById('main-header');
header.style.borderBottom = 'solid 3px #000';
var addItem = document.getElementsByClassName('title');
addItem[0].style.fontWeight= 900;
addItem[0].style.color='green';
