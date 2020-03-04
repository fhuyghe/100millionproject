
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
          PA: [28],
          VA: [31],
          WI: [33]
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
          PA: [36],
          VA: [35],
          WI: [31]
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
          PA: [18],
          VA: [18],
          WI: [19]
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
          PA: [19],
          VA: [17],
          WI: [17]
        }
      }
    ]
  },
  {
    name: "What do you think is the most important issue for the US?",
    type: 'circle',
    maxValue: 10,
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
    type: "bar",
    legend: ['Non-voters'],
    scale: 10,
    values: [
      {
        name: 'AZ',
        value: 6.323
  },
      {
        name: 'FL', 
        value: 6.598},
      {
        name: 'GA', 
        value: 6.137},
      {
        name: 'MI', 
        value: 5.780},
      {
        name: 'MN', 
        value: 6.181
      },
      {
        name: 'NV', 
        value: 6.243
      },
      {
        name: 'NH', 
        value: 6.271
      },
      {
        name: 'PA', 
        value: 5.952
      },
      {
        name: 'WI', 
        value: 5.787
      },
      {
        name: 'VA', 
        value: 6.113
      }
    ]
  }
]


export const landingData = [{
  name: "What would you say is the main reason for not voting?",
  type: "bar-vertical",
  legend: ['Non-voters'],
  children: [
    {
      name: "They don't like the candidates",
      values: [17]
    },{
      name: "Vote doesn't matter",
      values: [12]
    },{
      name: "They don't know the candidates",
      values: [8]
    },{
      name: "No time for voting",
      values: [8]
    },{
      name: "Not interested",
      values: [8]
    },{
      name: "The system is corrupt",
      values: [8]
    }
    ]
  },
  {
    name: "How confident are you that the results of an election represent the will of the people?",
    type: 'bar',
    legend: ['Voters', 'Non-voters'],
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
  },
  {
    name: "Gender",
    type: 'pie',
    legend: ['Voters', 'Non-voters', '18-24'],
    children: [
      {
        name: "Male",
        values: [50, 47, 46]
      },
      {
        name: "Female",
        values: [50, 53, 54]
      }
    ]
  },
  {
    name: "Level of Education",
    type: 'bar',
    legend: ['Voters', 'Non-voters'],
    children: [
      {
        name: "Grade School",
        values: [1, 1]
      },
      {
        name: "Some High School",
        values: [1, 5, 8]
      },
      {
        name: "High School Graduate",
        values: [14, 26, 30]
      },
      {
        name: "Technical School",
        values: [3, 6, 3]
      },
      {
        name: "College Graduate",
        values: [35, 26, 24]
      },
      {
        name: "Graduate School",
        values: [18, 11, 3]
      },
      {
        name: "Don't Know",
        values: [0, 3, 4]
      }
    ]
  }, {
    name: "To what degree do you think the decisions made by the president and other elected officials in Washington impact your life?",
    type: "bar",
    legend: [],
    values: [
      {
        name: "Voters",
        value: 8.1
      },
      {
        name: "Non-voters",
        value: 7.0
      },
      {
        name: "18-24",
        value: 7.2
      }
    ]
  }
]