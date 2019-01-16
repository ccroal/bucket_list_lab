const PubSub = require('../helpers/pub_sub.js');
const ListItemView = require('./list_item_view.js');

const ListGirdView = function(container){
  this.container = container;
}

ListGirdView.prototype.bindEvents = function(){
  PubSub.subscribe('BucketList:data-loaded', (event) => {
    this.render(event.detail);
    console.log(event.detail);
  })
}
