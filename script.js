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
    items.push(item);
    populateList(items, itemsList);
    this.reset();
    localStorage.setItem("items", JSON.stringify(items)); // save items to localStorage
}
function populateList(plates = [], platesList) {
    platesList.innerHTML = plates.map((plate, i) => {
        return `
          <li>
            <input type = "checkbox" data-index=${i} id="item${i}" ${plate.done ? 'checked' : ''}/>
            <label for="item${i}">${plate.text}</label>
          </li>
        `;
    }).join(""); //map returns an array, we need a string within html
}
addItems.addEventListener("submit", addItem);