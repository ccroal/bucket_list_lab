const BucketList = require('./models/bucket_list.js');

document.addEventListener('DOMContentLoaded', () => {
console.log('JavaScript Loaded');

const url = 'http://localhost:3000/api/bucket_list';
const bucketList = new BucketList(url);
sightings.bindEvents();
})
