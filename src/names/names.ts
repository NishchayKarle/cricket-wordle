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
  ["Raina", "Suresh Raina", ["Debut Test 100, 2010", "87(25)", "Mr. IPL"]],
  ["Patel", "Axar Patel", ["6/38 vs. England, Ahmedabad"]],
  ["Munaf", "Munaf Patel", ["2/40 vs. Pakistan, 2011 WC Semis"]],
  [
    "Vijay",
    "Murali Vijay",
    ["167 vs. Australia, Boxing Day Test", "CSK", "Opener"],
  ],
  ["Rahul", "KL Rahul", ["199 vs. England", "Test Debut 100, Sydney"]],
  [
    "Vinod",
    "Vinod Kambli",
    ["224 vs. England", "664-run partnership with Tendulkar"],
  ],
  ["Binny", "Stuart Binny", ["Father-Son Duo", "6/4 vs. Bangladesh"]],
  [
    "Kumar",
    "Bhuvneshwar Kumar",
    ["Swing King", "Purple Cap", "140-run partnership with Dhoni"],
  ],
  ["Robin", "Robin Uthappa", ["2009 IPL Final let down"]],
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
