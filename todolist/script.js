const input = document.querySelector('input');
const list = document.getElementById('list');
let value = input.value;
let id = 6;

input.addEventListener('change', (e) => {
  value = e.target.value;
});

const newElement = () => {
  if (value.length > 0) {
    let newLi = document.createElement('li');
    newLi.innerHTML = `
    <span>${value}</span>
      <span onclick='deleteElement(${id})' class='close'>x</span>
      `;
    newLi.setAttribute('data-id', id);
    newLi.setAttribute('onclick', `markAsDone(${id})`);
    list.appendChild(newLi);
    value = '';
    input.value = '';
    id++;

    const toast = document.getElementById('successToast');
    toast.classList.remove('hide');
    toast.classList.add('show');

    window.setTimeout(() => {
      toast.classList.remove('show');
      toast.classList.add('hide');
    }, 3000);
  } else {
    const failToast = document.getElementById('liveToast');
    failToast.classList.remove('hide');
    failToast.classList.add('show');

    window.setTimeout(() => {
      failToast.classList.remove('show');
      failToast.classList.add('hide');
    }, 3000);
  }
};

const deleteElement = (id) => {
  const itemToDelete = document.querySelector(`[data-id="${id}"]`);
  list.removeChild(itemToDelete);
};

const markAsDone = (id) => {
  const itemToMarkAsDone = document.querySelector(`[data-id="${id}"]`);
  itemToMarkAsDone.classList.add('checked');
};
