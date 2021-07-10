import { user } from './user_information';

const accordion = document.querySelector('#accordionFlush');

user.accounts.map((account) => {
  accordion.innerHTML += `
  <div class="accordion-item">
  <h2 class="accordion-header" id="flush-heading${account.id}">
    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapse${account.id}" aria-expanded="false" aria-controls="flush-collapse${account.id}">
      ${account.name} - ${account.balance}₺
    </button>
  </h2>
  <div id="flush-collapse${account.id}" class="accordion-collapse collapse" aria-labelledby="flush-heading${account.id}" data-bs-parent="#accordionFlushExample">
    <div class="accordion-body">${account.iban}</div>
  </div>
</div>

`;
});
