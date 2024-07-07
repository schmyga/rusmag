function redirectToEmail() {
  var email = 'viktor@outlook.de';
  var cc = 'Rita@outlook.de';
  var subject = 'Beshtelung';
  var body = 'Hallo zusammen,
    
    Хочу заказать товар
      
  
  Danke !';

  var mailtoLink = 'mailto:' + email + '?subject=' + encodeURIComponent(subject) +
    '&cc=' + encodeURIComponent(cc) + '&body=' + encodeURIComponent(body);

  window.location.href = mailtoLink;
}

document.querySelector('.order-button').addEventListener('click', redirectToEmail);
var expandBtn = document.querySelector('.expand-btn');
var expandText = document.querySelector('.expand-text');

expandBtn.addEventListener('click', function() {
  if (expandText.style.display === 'none') {
    expandText.style.display = 'inline';
    expandBtn.textContent = 'Weniger anzeigen';
  } else {
    expandText.style.display = 'none';
    expandBtn.textContent = 'Mehr anzeigen';
  }
});

