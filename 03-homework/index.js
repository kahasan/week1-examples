import { user } from './user_information';

const accordion = document.querySelector('#accordionExample');

user.accounts.map((account) => {
  accordion.innerHTML += `
  <div class="accordion-item">
          <h2 class="accordion-header" id="heading-${account.id}">
            <button id="accordion-button-${account.id}" class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse-${account.id}" aria-expanded="false" aria-controls="collapse-${account.id}">
              ${account.name}<div id="account-balance-${account.id}">${account.balance}</div>
            </button>
          </h2>
          <div id="collapse-${account.id}" class="accordion-collapse collapse" aria-labelledby="heading-${account.id}" data-bs-parent="#accordionExample">
            <div class="accordion-body">
              ${account.iban}
            </div>
          </div>
        </div>
`;
});

const accordionBtn = document.querySelector('#accordion-button-1');
accordionBtn.attributes[5].value = 'true';
accordionBtn.classList.remove('collapsed');

const collapseItem = document.querySelector('#collapse-1');
collapseItem.classList.add('show');

const inputIban = document.querySelector('#inputIban');
const inputAmount = document.querySelector('#inputAmount');
inputIban.addEventListener('input', () => {
  if (inputIban.value.length == 24) {
    inputAmount.removeAttribute('disabled');
  } else {
    inputAmount.setAttribute('disabled', '');
  }
});

let balance = 100;
const sendBtn = document.querySelector('#sendBtn');

sendBtn.addEventListener('click', (event) => {
  event.preventDefault();
  console.log('deneme');
});

inputAmount.addEventListener('input', (event) => {
  console.log(balance);
  if (event.target.value && balance >= event.target.value) {
    sendBtn.classList.remove('disabled');
  } else {
    sendBtn.classList.add('disabled');
  }
});

const calc = (event) => {
  const wholeId = event.target.id.split('-');
  const id = wholeId[wholeId.length - 1];

  const balanceTag = document.querySelector(`#account-balance-${id}`);
  balance = parseInt(balanceTag.textContent);
};

const btn = document.querySelectorAll('.accordion-button');

btn.forEach((item) => {
  item.addEventListener('click', calc);
});
