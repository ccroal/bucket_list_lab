const BucketList = require('./models/bucket_list.js');

document.addEventListener('DOMContentLoaded', () => {
console.log('JavaScript Loaded');

const bucketListContainer = document.querySelector('div#bucket-list');
const listGridView = new ListGirdView(bucketListContainer);
listGridView.bindEvents();

const url = 'http://localhost:3000/api/bucket_list';
const bucketList = new BucketList(url);
bucketList.bindEvents();
})
