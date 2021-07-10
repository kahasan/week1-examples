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
  const id = event.target.id;
  const price = parseInt(document.querySelector(`#price-${id}`).textContent);

  const amount = document.querySelector(`#amount-${id}`);
  console.log(amount);

  money.textContent = BILL_GATES_MONEY;
  // adet = parseInt(BILL_GATES_MONEY / price);
  //event.path[1].childNodes[4].attributes[1].textContent = `Bu üründen ${adet} adet alabilirsiniz`;

  if (BILL_GATES_MONEY > 0 && BILL_GATES_MONEY - price >= 0) {
    BILL_GATES_MONEY = BILL_GATES_MONEY - price;
    amount.textContent++;
  } else {
    alert('Maalesef paranız yetmiyor.. :(');
  }
};

products.map((product) => {
  container.innerHTML += `<div class="card">
                            <h3 class="title">${product.name}</h3>
                            <div class="img-div"> 
                              <img src=${product.img}>
                            </div>
                            <div class="price-section">
                              <div>Fiyat</div>
                              <div class="price" id="price-${product.id}">${product.price}</div>
                            </div>
                            <div class="piece-section">
                              <div>Alınan adet</div>
                              <div class="amount" id="amount-${product.id}">${alinanAdet}</div>
                            </div>
                            <button class="btn" id=${product.id}>Satın Al</button>
                          </div>`;

  document.querySelectorAll('.btn').forEach((item) => {
    item.addEventListener('click', deneme);
  });
});

document.body.appendChild(moneySection);
