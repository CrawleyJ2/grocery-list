function addItem () {
  // get item fields and clone
  const newItem = document.querySelector('#itemList');
  const clone = newItem.cloneNode(true);

  // update new item id
  clone.id = 'nextItem';

  // add to DOM
  newItem.after(clone);
}