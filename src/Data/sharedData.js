
export const swingStates = [
  {
    name: "Arizona",
    path: "arizona",
    abbr: 'AZ'
  },
  {
    name: "Florida",
    path: "florida",
    abbr: 'FL'
  },
  {
    name: "Georgia",
    path: "georgia",
    abbr: 'GA'
  },
  {
    name: "Michigan",
    path: "michigan",
    abbr: 'MI'
  },
  {
    name: "Minnesota",
    path: "minnesota",
    abbr: 'MN'
  },
  {
    name: "Nevada",
    path: "nevada",
    abbr: 'NV'
  },
  {
    name: "New Hampshire",
    path: "new-hampshire",
    abbr: 'NH'
  },
  {
    name: "Pennsylvania",
    path: "pennsylvania",
    abbr: 'PA'
  },
  {
    name: "Virginia",
    path: "virginia",
    abbr: 'VA'
  },
  {
    name: "Wisconsin",
    path: "wisconsin",
    abbr: 'WI'
  }
];
/* /////  Index
0: What do you think is the most important issue for the US?
1: How closely do you follow the news?
2: What is your level of interest in politics?
3: Why are you not currently registered to vote?
4: What could motivate you to vote in more elections?
5: How much to you think the results of an election represent the will of the people?
6: What party would you vote for in 2020?
7: Are you planning to vote in 2020?
*/

export const surveyData = [
  {
    name: "What do you think is the most important issue for the US?",
    type: 'circles',
    legend: ['Non-voters'],
    children: [
      {
        name: "Immigration",
        values: {
          average: [19],
          AZ: [27],
          FL: [22],
          GA: [18],
          MI: [18],
          MN: [18],
          NV: [25],
          NH: [19],
          PA: [18],
          VA: [23],
          WI: [16]
        }
      },
      {
        name: "Gun Control",
        values: {
          average: [8],
          AZ: [5],
          FL: [7],
          GA: [8],
          MI: [9],
          MN: [10],
          NV: [9],
          NH: [8],
          PA: [8],
          VA: [9],
          WI: [9]
        }
      },
      {
        name: "Jobs and Economy",
        values: {
          average: [13],
          AZ: [12],
          FL: [15],
          GA: [14],
          MI: [11],
          MN: [10],
          NV: [13],
          NH: [15],
          PA: [19],
          VA: [16],
          WI: [13]
        }
      },
      {
        name: "Healthcare",
        values: {
          average: [13],
          AZ: [10],
          FL: [11],
          GA: [12],
          MI: [12],
          MN: [15],
          NV: [8],
          NH: [15],
          PA: [11],
          VA: [14],
          WI: [14]
        }
      },
      {
        name: "Environment",
        values: {
          average: [5],
          AZ: [5],
          FL: [5],
          GA: [3],
          MI: [6],
          MN: [7],
          NV: [6],
          NH: [10],
          PA: [6],
          VA: [6],
          WI: [6]
        }
      },
      {
        name: "Race relations",
        values: {
          average: [7],
          AZ: [4],
          FL: [6],
          GA: [5],
          MI: [5],
          MN: [5],
          NV: [5],
          NH: [3],
          PA: [4],
          VA: [5],
          WI: [4]
        }
      },
      {
        name: "Education",
        values: {
          average: [4],
          AZ: [4],
          FL: [6],
          GA: [4],
          MI: [4],
          MN: [4],
          NV: [4],
          NH: [5],
          PA: [5],
          VA: [5],
          WI: [3]
        }
      },
      {
        name: "Income Inequality",
        values: {
          average: [3],
          AZ: [3],
          FL: [3],
          GA: [3],
          MI: [3],
          MN: [3],
          NV: [4],
          NH: [4],
          PA: [4],
          VA: [3],
          WI: [3]
        }
      },
      {
        name: "Foreign Policy",
        values: {
          average: [3],
          AZ: [2],
          FL: [2],
          GA: [2],
          MI: [4],
          MN: [4],
          NV: [3],
          NH: [3],
          PA: [2],
          VA: [4],
          WI: [5]
        }
      }
    ]
  },
  {
    name: "What is your level of interest in politics?",
    type: "bars",
    legend: ['Voters', 'Non-voters'],
    scale: 10,
    children: [
      {
        name: "Voters",
        values: {
          average: [7.21, 5.4],
          AZ: [6.323, 3.21],
          FL: [6.598],
          GA: [6.137],
          MI: [5.780],
          MN: [6.181],
          NV: [6.243],
          NH: [6.271],
          PA: [5.952],
          WI: [5.787],
          VA: [6.113]
        }
      }
    ]
  },
  {
    name: "What party would you vote for in 2020?",
    type: "pie",
    legend: ['Non-voters'],
    children: [
      {
        name: "Democratic Party",
        values: {
          average: [33],
          AZ: [25],
          FL: [31],
          GA: [34],
          MI: [32],
          MN: [29],
          NV: [33],
          NH: [29],
          WI: [33],
          PA: [28],
          VA: [31]
        }
      },
      {
        name: "President Trump",
        values: {
          average: [30],
          AZ: [34],
          FL: [36],
          GA: [29],
          MI: [31],
          MN: [29],
          NV: [33],
          NH: [30],
          WI: [31],
          PA: [36],
          VA: [5]
        }
      },
      {
        name: "Someone else",
        values: {
          average: [18],
          AZ: [22],
          FL: [17],
          GA: [18],
          MI: [19],
          MN: [20],
          NV: [21],
          NH: [23],
          WI: [19],
          PA: [18],
          VA: [18]
        }
      },
      {
        name: "Don't know",
        values: {
          average: [19],
          AZ: [20],
          FL: [16],
          GA: [19],
          MI: [18],
          MN: [23],
          NV: [13],
          NH: [18],
          WI: [17],
          PA: [19],
          VA: [17]
        }
      }
    ]
  }
]


export const landingData = [
  {
    name: "How confident are you that the results of an election represent the will of the people?",
    type: 'bar',
    legend: ['Voters', 'Non-voters', '18-24'],
    children: [
      {
        name: "Very Confident",
        values: [23, 18, 15]
      },
      {
        name: "Somewhat confident",
        values: [40, 34, 31]
      },
      {
        name: "Not very confident",
        values: [25, 25, 33]
      },
      {
        name: "Not confident at all",
        values: [9, 13, 12]
      },
      {
        name: "Don't know",
        values: [3, 10, 9]
      }
    ]
  }
]