use bucketList;
db.dropDatabase();

db.list.inserMany([
  {
    activity: "Sky Diving",
    location: "Anywhere",
    when: 2025
  },
  {
    activity: "12 nights in Vegas",
    location: "Las Vegas",
    when: 2020
  },
  {
    activity: "Complete the lab",
    location: "Codeclan",
    when: "now"
  },
  {
    activity: "Drive a F1 car at Monaco",
    location: "Monaco",
    when: 2022
  }
])
