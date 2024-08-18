const names: [string, string, string[]][] = [
  ["Yadav", "Kuldeep Yadav", ["6/25 vs. England", "China", "KulCha"]],
  ["Dhoni", "Mahendra Singh Dhoni", ["183", "91*", "2007, 2011, 2013"]],
  ["Kapil", "Kapil Dev", ["1983"]],
  ["Rohit", "Rohit Sharma", ["WC 2019", "IPL 2009 MIP", "264."]],
  ["Kohli", "Virat Kohli", ["973", "141.", "183"]],
  ["Virat", "Virat Kohli", ["973", "141.", "183"]],
  [
    "Shami",
    "Mohammed Shami",
    ["WC Hat-Trick", "Debut 10 Wicket Haul", "WC 7-fer"],
  ],
  ["Raina", "Suresh Raina", [""]],
  ["Patel", "Axar Patel", [""]],
  ["Munaf", "Munaf Patel", [""]],
  ["Vijay", "Murali Vijay", [""]],
  ["Rahul", "KL Rahul", [""]],
  ["Kiran", "Kiran More", [""]],
  ["Vinod", "Vinod Kambli", [""]],
  ["Binny", "Roger Binny", [""]],
  ["Dilip", "Dilip Vengsarkar", [""]],
  ["Kumar", "Bhuvneshwar Kumar", [""]],
  ["Robin", "Robin Uthappa", [""]],
];

const selectAnswer: () => [string, string, string[]] = () => {
  return (
    names[Math.floor(Math.random() * names.length)] ?? [
      "Rohit",
      "Rohit Sharma",
      ["WC 2019", "IPL 2009 MIP", "264."],
    ]
  );
};

export default selectAnswer;
