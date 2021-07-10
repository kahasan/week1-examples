import { user } from './user_information';

const accordion = document.querySelector('#accordionExample');

let balance = 100;

user.accounts.map((account) => {
  accordion.innerHTML += `
  <div class="accordion-item">
          <h2 class="accordion-header" id="heading-${account.id}">
            <button id="accordion-button-${account.id}" class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse-${account.id}" aria-expanded="false" aria-controls="collapse-${account.id}">
              ${account.name}<div class="account-balance" id="account-balance-${account.id}">${account.balance}₺</div>
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

const openedItem = document.querySelector('.show');
const openedItemSplit = openedItem.id.split('-');
const openedItemId = openedItemSplit[openedItemSplit.length - 1];

let openedAccountBalance = document.querySelector(
  `#account-balance-${openedItemId}`
);

inputIban.addEventListener('input', () => {
  if (inputIban.value.length == 24) {
    inputAmount.removeAttribute('disabled');
  } else {
    inputAmount.setAttribute('disabled', '');
  }
});

let typedAmount = 0;

const sendBtn = document.querySelector('#sendBtn');
const modalBody = document.querySelector('.modal-body');
const form = document.querySelector('#form');
const modeTitle = document.querySelector('#exampleModalLabel');
const sendModalBtn = document.querySelector('#sendModalBtn');

function success() {
  sendModalBtn.classList.add('none');
  modalBody.innerHTML = 'Paracıklar yolda 💸';
  inputIban.value = '';
  inputAmount.value = '';
  inputAmount.setAttribute('disabled', '');
  sendBtn.classList.add('disabled');
  openedAccountBalance.textContent =
    openedAccountBalance.textContent - typedAmount;
  balance = balance - typedAmount;
}

sendBtn.addEventListener('click', (event) => {
  event.preventDefault();

  if (typedAmount < 500) {
    success();
  } else {
    modeTitle.textContent = 'Son bir şey daha ';
    form.classList.remove('form-none');
  }
});

const codeInput = document.querySelector('#recipient-name');
let denemeHakki = 4;

const fieldSet = document.querySelector('fieldset');

sendModalBtn.addEventListener('click', (event) => {
  if (codeInput.value == 1234) {
    success();
  } else {
    denemeHakki--;
    modeTitle.textContent = `Hatalı Şifre! ${denemeHakki} deneme hakkınız kaldı!`;
    codeInput.value = '';
    if (denemeHakki == 0) {
      modeTitle.textContent = 'Üzgünüz';
      modalBody.innerHTML = 'Hesabınız blokelendi';
      fieldSet.setAttribute('disabled', '');
      clearInterval(setInt);
      sendModalBtn.classList.add('disabled');
    }
  }
});

inputAmount.addEventListener('input', (event) => {
  typedAmount = event.target.value;
  console.log(balance);
  if (typedAmount && balance >= typedAmount) {
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
  openedAccountBalance = balanceTag;
};

const btn = document.querySelectorAll('.accordion-button');

btn.forEach((item) => {
  item.addEventListener('click', calc);
});

const countDownLabel = document.querySelector('#countdown');

let setInt = setInterval(() => {
  countDownLabel.textContent = countDownLabel.textContent - 1;
  if (countDownLabel.textContent == 0) {
    fieldSet.setAttribute('disabled', '');
    clearInterval(setInt);
  }
}, 1000);
