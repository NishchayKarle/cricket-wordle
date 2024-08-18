"use client";
const names: [string, string][] = [
  ["Yadav", "Kuldeep Yadav"],
  ["Dhoni", "Mahendra Singh Dhoni"],
  ["Kapil", "Kapil Dev"],
  ["Rohit", "Rohit Sharma"],
  ["Kohli", "Virat Kohli"],
  ["Virat", "Virat Kohli"],
  ["Shami", "Mohammed Shami"],
  ["Raina", "Suresh Raina"],
  ["Patel", "Axar Patel"],
  ["Munaf", "Munaf Patel"],
  ["Vijay", "Murali Vijay"],
  ["Rahul", "KL Rahul"],
  ["Kiran", "Kiran More"],
  ["Vinod", "Vinod Kambli"],
  ["Binny", "Roger Binny"],
  ["Dilip", "Dilip Vengsarkar"],
  ["Kumar", "Bhuvneshwar Kumar"],
  ["Robin", "Robin Uthappa"],
];

const selectAnswer: () => [string, string] = () => {
  return names[Math.floor(Math.random() * names.length)] || ["Rohit", "Sharma"];
};

export default selectAnswer;
