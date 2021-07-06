import products from './productList.js';

const container = document.querySelector('#container');

let BILL_GATES_MONEY = Number.MAX_SAFE_INTEGER;

let adet = 0;
let alinanAdet = 0;

const moneyTitle = document.createElement('h1');
moneyTitle.textContent = 'Kalan Para';
moneyTitle.className = 'money-title';

const moneySection = document.createElement('div');
moneySection.className = 'money';
moneySection.appendChild(moneyTitle);

const money = document.createElement('h1');
money.textContent = String(BILL_GATES_MONEY);
moneySection.appendChild(money);

const deneme = (event) => {
  const price = parseInt(event.path[1].childNodes[2].childNodes[1].textContent);
  money.textContent = BILL_GATES_MONEY;
  adet = parseInt(BILL_GATES_MONEY / price);
  event.path[1].childNodes[4].attributes[1].textContent = `Bu üründen ${adet} adet alabilirsiniz`;

  if (BILL_GATES_MONEY > 0 && BILL_GATES_MONEY - price >= 0) {
    BILL_GATES_MONEY = BILL_GATES_MONEY - price;
    event.path[1].childNodes[3].childNodes[1].textContent =
      parseInt(event.path[1].childNodes[3].childNodes[1].textContent) + 1;
  } else {
    alert('Maalesef paranız yetmiyor.. :(');
  }
};

products.map((product) => {
  const card = document.createElement('div');
  card.className = 'card';

  const title = document.createElement('h3');
  title.className = 'title';
  title.textContent = product.name;

  const imgDiv = document.createElement('div');
  imgDiv.className = 'img-div';

  const img = document.createElement('img');
  img.src = product.img;

  const priceSection = document.createElement('div');
  priceSection.className = 'price-section';

  const priceTitle = document.createElement('div');
  priceTitle.textContent = 'Fiyat';

  const price = document.createElement('div');
  price.className = 'price';
  price.textContent = product.price;

  priceSection.appendChild(priceTitle);
  priceSection.appendChild(price);

  const pieceSection = document.createElement('div');
  pieceSection.className = 'piece-section';

  const pieceTitle = document.createElement('div');
  pieceTitle.textContent = 'Alınan adet';

  const piece = document.createElement('div');
  piece.className = 'amount';
  piece.textContent = parseInt(alinanAdet);

  pieceSection.appendChild(pieceTitle);
  pieceSection.appendChild(piece);

  const btn = document.createElement('button');
  btn.textContent = 'Satın Al';
  btn.className = 'btn';
  btn.addEventListener('click', deneme);
  btn.title = `Bu üründen ${
    BILL_GATES_MONEY / product.price
  } adet alabilirsiniz`;

  container.appendChild(card);
  card.append(title);
  card.appendChild(imgDiv);
  imgDiv.appendChild(img);
  card.appendChild(priceSection);
  card.appendChild(pieceSection);
  card.appendChild(btn);
});

document.body.appendChild(moneySection);
