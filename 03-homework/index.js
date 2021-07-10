import { user } from './user_information';

const accordion = document.querySelector('#accordionExample');

user.accounts.map((account) => {
  accordion.innerHTML += `
  <div class="accordion-item">
          <h2 class="accordion-header" id="heading-${account.id}">
            <button id="accordion-button-${account.id}" class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse-${account.id}" aria-expanded="false" aria-controls="collapse-${account.id}">
              ${account.name} - ${account.balance}
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
