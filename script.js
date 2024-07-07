document.querySelector('.order-button').addEventListener('click', function redirectToEmail() {
  var email = 'viktor@outlook.de';
  var cc = 'Rita@outlook.de';
  var subject = 'Beshtelung';
  var body = 'Hallo zusammen,%0A%0A%0A - Хочу заказать товар %0A%0A%0ADanke !';

  var mailtoLink = 'mailto:' + email + '?subject=' + encodeURIComponent(subject) +
    '&cc=' + encodeURIComponent(cc) + '&body=' + encodeURIComponent(body);

  window.location.href = mailtoLink;
} {
  // Действия при нажатии на кнопку "Заказать"
  console.log('Заказ оформлен');
});