function addBlock(say) {
  alert('Important');
  var say = document.createElement('say');
  say.className = 'my-class';
  say.id = 'my-id';
  say.style.backgroundColor = 'green';
  say.innerHTML = 'Hello {word}';
}
