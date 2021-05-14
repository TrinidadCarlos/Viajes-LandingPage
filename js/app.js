

//QUITAR EL SPINNER CUANDO EL DOCUMENTO ESTE LISTO
window.onload = function() {
  const spinner = document.querySelector('.spinner');
  spinner.style.opacity= 0;
  spinner.style.visibility="hidden";
  spinner.style.transition = "all 1s ease-in-out";
  
  if ('loading' in HTMLImageElement.prototype) {
      agregarLazyLoading();
  } 
};

function agregarLazyLoading() {
  const imagenes = document.querySelectorAll('img.lazy-load');
  imagenes.forEach(img => {
    img.setAttribute('loading','lazy');
  });
}
