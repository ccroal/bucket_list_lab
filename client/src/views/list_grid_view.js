const PubSub = require('../helpers/pub_sub.js');
const ListItemView = require('./list_item_view.js');

const ListGirdView = function(container){
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
  const bucketListView = new BucketListView(this.container);
  bucketList.forEach((listItem) => bucketList.render(listItem));
}

module.exports = ListGirdView;
