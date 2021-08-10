
window.addEventListener('load',()=>{
  const array = document.querySelectorAll('.icon');

  array.forEach((item, index, arr)=>{
    item.style.animation = `jump 1.4s ease ${index/arr.length}s infinite`;

  });
})
