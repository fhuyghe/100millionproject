
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
    type: 'pie',
    legend: ['Voters', 'Non-voters', '18-24'],
    children: [
      {
        name: "Immigration",
        values: {
          average: [22, 19, 11],
          AZ: [4, 14, 24],
          FL: [36, 26, 16],
          GA: [],
          MI: [],
          MN: [],
          NV: [],
          NH: [],
          PA: [],
          VA: [],
          WI: []
        }
      },
      {
        name: "Gun Control",
        values: {
          average: [11, 8, 15],
          AZ: [30, 20, 10],
          FL: [],
          GA: [],
          MI: [],
          MN: [],
          NV: [],
          NH: [],
          WI: [],
          PA: [],
          VA: []
        }
      },
      {
        name: "Jobs and Economy",
        values: {
          average: [10, 13, 8],
          AZ: [],
          FL: [],
          GA: [],
          MI: [],
          MN: [],
          NV: [],
          NH: [],
          WI: [],
          PA: [],
          VA: []
        }
      },
      {
        name: "Healthcare",
        values: {
          average: [10, 13, 9],
          AZ: [],
          FL: [],
          GA: [],
          MI: [],
          MN: [],
          NV: [],
          NH: [],
          WI: [],
          PA: [],
          VA: []
        }
      },
      {
        name: "Environment",
        values: {
          average: [7,5,10],
          AZ: [],
          FL: [],
          GA: [],
          MI: [],
          MN: [],
          NV: [],
          NH: [],
          WI: [],
          PA: [],
          VA: []
        }
      },
      {
        name: "Race relations",
        values: {
          average: [9, 7, 10],
          AZ: [],
          FL: [],
          GA: [],
          MI: [],
          MN: [],
          NV: [],
          NH: [],
          WI: [],
          PA: [],
          VA: []
        }
      }
    ]
  },
  {
    name: "How closely do you follow the news?",
    type: "bars",
    legend: ['Voters', 'Non-voters', '18-24'],
    children: [
        {
          name: "Very Closely",
          values: {
            average: [40, 24, 16],
            AZ: [],
            FL: [],
            GA: [],
            MI: [],
            MN: [],
            NV: [],
            NH: [],
            WI: [],
            PA: [],
            VA: []
          }
      },
      {
        name: "Somewhat Closely",
        values: {
          average: [42, 38, 42],
          AZ: [],
          FL: [],
          GA: [],
          MI: [],
          MN: [],
          NV: [],
          NH: [],
          WI: [],
          PA: [],
          VA: []
        }
      },
      {
        name: "Not Very Closely",
        values: {
          average: [13, 24, 30],
          AZ: [],
          FL: [],
          GA: [],
          MI: [],
          MN: [],
          NV: [],
          NH: [],
          WI: [],
          PA: [],
          VA: []
        }
      },
      {
        name: "Not at all",
        values: {
          average: [4, 11, 8],
          AZ: [],
          FL: [],
          GA: [],
          MI: [],
          MN: [],
          NV: [],
          NH: [],
          WI: [],
          PA: [],
          VA: []
        }
      }
    ]
  },
  {
    name: "What is your level of interest in politics?",
    type: "bars",
    legend: ['Voters', 'Non-voters', '18-24'],
    scale: 10,
    children: [
      {
        name: "",
        values: {
          average: [7.65, 7.21, 6.101],
          AZ: [5.981],
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
    name: "Why are you not currently registered to vote?",
    type: "circles",
    legend: ['Non-voters', '18-24'],
    children: [
      {
        name: "I don't care",
        values: {
          average: [29, 28],
          AZ: [3, 20],
          FL: [],
          GA: [],
          MI: [],
          MN: [],
          NV: [],
          NH: [],
          WI: [],
          PA: [],
          VA: []
        }
      },
      {
        name: "My vote doesn't matter",
        values: {
          average: [13, 5],
          AZ: [10, 8],
          FL: [],
          GA: [],
          MI: [],
          MN: [],
          NV: [],
          NH: [],
          WI: [],
          PA: [],
          VA: []
        }
      },
      {
        name: "I don't know how",
        values: {
          average: [8, 14],
          AZ: [],
          FL: [],
          GA: [],
          MI: [],
          MN: [],
          NV: [],
          NH: [],
          WI: [],
          PA: [],
          VA: []
        }
      },
      {
        name: "I keep forgetting to register",
        values: {
          average: [7, 12],
          AZ: [],
          FL: [],
          GA: [],
          MI: [],
          MN: [],
          NV: [],
          NH: [],
          WI: [],
          PA: [],
          VA: []
        }
      },
      {
        name: "I'm too busy",
        values: {
          average: [6, 9],
          AZ: [],
          FL: [],
          GA: [],
          MI: [],
          MN: [],
          NV: [],
          NH: [],
          WI: [],
          PA: [],
          VA: []
        }
      },
      {
        name: "I recently moved",
        values: {
          average: [13, 5],
          AZ: [],
          FL: [],
          GA: [],
          MI: [],
          MN: [],
          NV: [],
          NH: [],
          WI: [],
          PA: [],
          VA: []
        }
      },
      {
        name: "The system is corrupt",
        values: {
          average: [9, 6],
          AZ: [],
          FL: [],
          GA: [],
          MI: [],
          MN: [],
          NV: [],
          NH: [],
          WI: [],
          PA: [],
          VA: []
        }
      },
      {
        name: "Religion objection",
        values: {
          average: [4, 3],
          AZ: [],
          FL: [],
          GA: [],
          MI: [],
          MN: [],
          NV: [],
          NH: [],
          WI: [],
          PA: [],
          VA: []
        }
      },
      {
        name: "To avoid jury duty",
        values: {
          average: [4, 2],
          AZ: [],
          FL: [],
          GA: [],
          MI: [],
          MN: [],
          NV: [],
          NH: [],
          WI: [],
          PA: [],
          VA: []
        }
      },
      {
        name: "I don't know",
        values: {
          average: [15, 14],
          AZ: [],
          FL: [],
          GA: [],
          MI: [],
          MN: [],
          NV: [],
          NH: [],
          WI: [],
          PA: [],
          VA: []
        }
      }
    ]
  },
  {
    name: "What could motivate you to vote in more elections?",
    type: "circles",
    legend: ['Non-voters', '18-24'],
    children: [
      {
        name: "A candidate I believe in",
        values: {
          average: [22, 14],
          AZ: [],
          FL: [],
          GA: [],
          MI: [],
          MN: [],
          NV: [],
          NH: [],
          WI: [],
          PA: [],
          VA: []
        }
      },
      {
        name: "If I could vote online",
        values: {
          average: [15, 14],
          AZ: [],
          FL: [],
          GA: [],
          MI: [],
          MN: [],
          NV: [],
          NH: [],
          WI: [],
          PA: [],
          VA: []
        }
      },
      {
        name: "Better quality information",
        values: {
          average: [9, 11],
          AZ: [],
          FL: [],
          GA: [],
          MI: [],
          MN: [],
          NV: [],
          NH: [],
          WI: [],
          PA: [],
          VA: []
        }
      },
      {
        name: "If my vote mattered",
        values: {
          average: [7, 10],
          AZ: [],
          FL: [],
          GA: [],
          MI: [],
          MN: [],
          NV: [],
          NH: [],
          WI: [],
          PA: [],
          VA: []
        }
      },
      {
        name: "A particular issue",
        values: {
          average: [15, 14],
          AZ: [],
          FL: [],
          GA: [],
          MI: [],
          MN: [],
          NV: [],
          NH: [],
          WI: [],
          PA: [],
          VA: []
        }
      },
      {
        name: "More information on candidates",
        values: {
          average: [15, 14],
          AZ: [],
          FL: [],
          GA: [],
          MI: [],
          MN: [],
          NV: [],
          NH: [],
          WI: [],
          PA: [],
          VA: []
        }
      },
      {
        name: "A more convenient process to register",
        values: {
          average: [15, 14],
          AZ: [],
          FL: [],
          GA: [],
          MI: [],
          MN: [],
          NV: [],
          NH: [],
          WI: [],
          PA: [],
          VA: []
        }
      },
      {
        name: "More time to learn",
        values: {
          average: [15, 14],
          AZ: [],
          FL: [],
          GA: [],
          MI: [],
          MN: [],
          NV: [],
          NH: [],
          WI: [],
          PA: [],
          VA: []
        }
      },
      {
        name: "If they made voting mandatory",
        values: {
          average: [15, 14],
          AZ: [],
          FL: [],
          GA: [],
          MI: [],
          MN: [],
          NV: [],
          NH: [],
          WI: [],
          PA: [],
          VA: []
        }
      },
      {
        name: "More time to vote",
        values: {
          average: [4, 4],
          AZ: [],
          FL: [],
          GA: [],
          MI: [],
          MN: [],
          NV: [],
          NH: [],
          WI: [],
          PA: [],
          VA: []
        }
      },
      {
        name: "If there were an incentive",
        values: {
          average: [2, 4],
          AZ: [],
          FL: [],
          GA: [],
          MI: [],
          MN: [],
          NV: [],
          NH: [],
          WI: [],
          PA: [],
          VA: []
        }
      },
      {
        name: "A more convenient process to vote",
        values: {
          average: [2, 3],
          AZ: [],
          FL: [],
          GA: [],
          MI: [],
          MN: [],
          NV: [],
          NH: [],
          WI: [],
          PA: [],
          VA: []
        }
      },
      {
        name: "Nothing",
        values: {
          average: [17, 15],
          AZ: [],
          FL: [],
          GA: [],
          MI: [],
          MN: [],
          NV: [],
          NH: [],
          WI: [],
          PA: [],
          VA: []
        }
      }
    ]
  },
  {
    name: "How much to you think the results of an election represent the will of the people?",
    type: "bars",
    legend: ['Voters', 'Non-voters', '18-24'],
    children: [
      {
        name: "Very Confident",
        values: {
          average: [23, 18, 15],
          AZ: [],
          FL: [],
          GA: [],
          MI: [],
          MN: [],
          NV: [],
          NH: [],
          WI: [],
          PA: [],
          VA: []
        }
      },
      {
        name: "Somewhat Confident",
        values: {
          average: [40, 34, 31],
          AZ: [],
          FL: [],
          GA: [],
          MI: [],
          MN: [],
          NV: [],
          NH: [],
          WI: [],
          PA: [],
          VA: []
        }
      },
      {
        name: "Not Very Confident",
        values: {
          average: [25, 25, 33],
          AZ: [],
          FL: [],
          GA: [],
          MI: [],
          MN: [],
          NV: [],
          NH: [],
          WI: [],
          PA: [],
          VA: []
        }
      },
      {
        name: "Not Confident at all",
        values: {
          average: [9, 13, 12],
          AZ: [],
          FL: [],
          GA: [],
          MI: [],
          MN: [],
          NV: [],
          NH: [],
          WI: [],
          PA: [],
          VA: []
        }
      },
      {
        name: "Don't know",
        values: {
          average: [3, 10, 9],
          AZ: [],
          FL: [],
          GA: [],
          MI: [],
          MN: [],
          NV: [],
          NH: [],
          WI: [],
          PA: [],
          VA: []
        }
      }
    ]
  },
  {
    name: "What party would you vote for in 2020?",
    type: "bars",
    legend: ['Non-voters', '18-24'],
    children: [
      {
        name: "Democratic Party",
        values: {
          average: [46, 33, 41],
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
          average: [37, 30, 19],
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
          average: [11, 18, 25],
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
          average: [7, 19, 15],
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
  },
  {
    name: "Are you planning to vote in 2020?",
    type: "bars",
    legend: ['Non-voters', '18-24'],
    children: [
      {
        name: "Yes",
        values: {
          average: [97, 71, 66],
          AZ: [],
          FL: [],
          GA: [],
          MI: [],
          MN: [],
          NV: [],
          NH: [],
          WI: [],
          PA: [],
          VA: []
        }
      },
      {
        name: "No",
        values: {
          average: [2, 16, 20],
          AZ: [],
          FL: [],
          GA: [],
          MI: [],
          MN: [],
          NV: [],
          NH: [],
          WI: [],
          PA: [],
          VA: []
        }
      },
      {
        name: "Don't know",
        values: {
          average: [1, 14, 14],
          AZ: [],
          FL: [],
          GA: [],
          MI: [],
          MN: [],
          NV: [],
          NH: [],
          WI: [],
          PA: [],
          VA: []
        }
      }
    ]
  }
]