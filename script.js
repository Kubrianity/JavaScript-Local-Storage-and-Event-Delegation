const addItems = document.querySelector('.add-items');
const itemsList = document.querySelector('.plates');
const items = [];

function addItem(e) {
    e.preventDefault(); // stop page from reloading
    const text = (this.querySelector('[name=item]')).value; // "this" refers to the actual form
    const item = {
        text,
        done: false
    }

}
addItems.addEventListener("submit", addItem)