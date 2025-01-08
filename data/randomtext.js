  const textSelect= [
    'appakling',
    'LOVEWAREZ',
    'SixVertical',
    'RealRhythmatic',
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