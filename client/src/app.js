const BucketList = require('./models/bucket_list.js');
const ListGridView = require('./views/list_grid_view');

document.addEventListener('DOMContentLoaded', () => {
console.log('JavaScript Loaded');

const bucketListContainer = document.querySelector('div#bucket-list');
const listGridView = new ListGridView(bucketListContainer);
listGridView.bindEvents();

const url = 'http://localhost:3000/api/list';
const bucketList = new BucketList(url);
bucketList.getData();
})
