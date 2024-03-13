var nameList = [
  "Ayusha",
  "Bob",
  "Charlie",
  "David",
  "Emma",
  "Ayusha",
  "Grace",
  "Henry",
  "Ivy",
  "Jack",
  "Kate",
  "Leo",
  "Mia",
  "Noah",
  "Olivia",
  "Peter",
  "Quinn",
  "Rose",
  "Sam",
  "Tara",
  "Ulysses",
  "Vera",
  "Walter",
  "Xena",
  "Yara",
  "Zane",
  "Ava",
  "Benjamin",
  "Chloe",
  "Daniel",
];
function generate() {
  return nameList[Math.floor(Math.random() * nameList.length)];
}
export default generate;

// utils/helper.js

const commentList = [
  "Great video! 😍😍",
  "Nice work!",
  "I enjoyed watching this.",
  "Awesome content!",
  "Well done!🔥",
  "Fantastic!",
  "Loved it!",
  "Amazing!",
  "Keep it up! 👍👍",
  "Impressive!",
  "Beautiful!",
  // Add more comments as needed
];

export function generateRandomComment() {
  return commentList[Math.floor(Math.random() * commentList.length)];
}
