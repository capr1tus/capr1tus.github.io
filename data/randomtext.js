  const textSelect= [
    'Text One',
    'Text Two',
    'Text Three',
];
 
function getRandomText() {
    const randomIndex = Math.floor(Math.random() * textSelect.length);
    return textSelect[randomIndex];
  }
 
function loadText() {
  const myDiv = document.getElementById('blurb');
  myDiv.innerHTML= getRandomText();
}
 
window.onload = loadText;