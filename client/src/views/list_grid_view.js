const PubSub = require('../helpers/pub_sub.js');
const ListItemView = require('./list_item_view.js');

const ListGridView = function(container){
  this.container = container;
}

ListGridView.prototype.bindEvents = function(){
  PubSub.subscribe('BucketList:data-loaded', (event) => {
    this.render(event.detail);
    console.log(event.detail);
  })
}

ListGridView.prototype.render = function(bucketlist){
  this.container.innerHTML = '';
  const bucketListView = new ListItemView(this.container);
  bucketlist.forEach((listItem) => bucketListView.render(listItem));
}

module.exports = ListGridView;
