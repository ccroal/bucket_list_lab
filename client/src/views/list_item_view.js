const ListItemView = function (container) {
  this.container = container;
}

ListItemView.prototype.render = function (listItem) {
  const itemContainer = document.createElement('div');
  itemContainer.id = 'listItem';

  const activity = document.createElement('p');
  activity.textContent = `Activity: ${listItem.activity}`
  itemContainer.appendChild(activity)

  const location = document.createElement('p')
  location.textContent = `Location: ${listItem.location}`
  itemContainer.appendChild(activity)

  const when = document.createElement('p')
  when.textContent = `When: ${listItem.when}`
  itemContainer.appendChild(when)

  this.container.appendChild(itemContainer)
}

module.exports = ListItemView;
