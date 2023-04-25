const logoutBtn = document.querySelector('#logout');
logoutBtn.addEventListener('click', function(event) {
  event.preventDefault();
  window.location.replace('../index.html');
});