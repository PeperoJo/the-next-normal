function showBrand(){
  document.getElementById('brand-btn').classList.add('active');
  document.getElementById('consumer-btn').classList.remove('active');

  document.getElementById('brand-pledge').classList.remove('d-none');
  document.getElementById('indiv-pledge').classList.add('d-none');

  document.getElementById('arrowBrand').classList.remove('d-none');
  document.getElementById('arrowMyself').classList.add('d-none');


}

function showConsumer(){
  document.getElementById('brand-btn').classList.remove('active');
  document.getElementById('consumer-btn').classList.add('active');

  document.getElementById('brand-pledge').classList.add('d-none');
  document.getElementById('indiv-pledge').classList.remove('d-none');

  document.getElementById('arrowBrand').classList.add('d-none');
  document.getElementById('arrowMyself').classList.remove('d-none');
}

showConsumer();
