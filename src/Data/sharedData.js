
export const swingStates = [
  "Colorado",
  "Florida",
  "Georgia",
  "Michigan",
  "Minnesota",
  "Nevada",
  "New Hampshire",
  "Ohio",
  "Pennsylvania",
  "Virginia"
];

export const surveyData = [
  {
    name: "What do you think is the most important issue for the US?",
    type: 'circles',
    children: [
      {
        name: "Immigration",
        values: {
          average: [22, 19, 11],
          CO: [],
          FL: [],
          GO: [],
          MI: [],
          MN: [],
          NV: [],
          NH: [],
          OH: [],
          PA: [],
          VI: []
        }
      },
      {
        name: "Gun Control",
        values: {
          average: [11, 8, 15],
          CO: [],
          FL: [],
          GO: [],
          MI: [],
          MN: [],
          NV: [],
          NH: [],
          OH: [],
          PA: [],
          VI: []
        }
      },
      {
        name: "Jobs and Economy",
        values: {
          average: [10, 13, 8],
          CO: [],
          FL: [],
          GO: [],
          MI: [],
          MN: [],
          NV: [],
          NH: [],
          OH: [],
          PA: [],
          VI: []
        }
      },
      {
        name: "Healthcare",
        values: {
          average: [10, 13, 9],
          CO: [],
          FL: [],
          GO: [],
          MI: [],
          MN: [],
          NV: [],
          NH: [],
          OH: [],
          PA: [],
          VI: []
        }
      },
      {
        name: "Environment",
        values: {
          average: [7,5,10],
          CO: [],
          FL: [],
          GO: [],
          MI: [],
          MN: [],
          NV: [],
          NH: [],
          OH: [],
          PA: [],
          VI: []
        }
      },
      {
        name: "Racism and Race relations",
        values: {
          average: [9, 7, 10],
          CO: [],
          FL: [],
          GO: [],
          MI: [],
          MN: [],
          NV: [],
          NH: [],
          OH: [],
          PA: [],
          VI: []
        }
      }
    ]
  },
  {
    name: "How closely do you follow the news?",
    type: "bars",
    children: [
        {
          name: "Very Closely",
          values: {
            average: [40, 24, 16],
            CO: [],
            FL: [],
            GO: [],
            MI: [],
            MN: [],
            NV: [],
            NH: [],
            OH: [],
            PA: [],
            VI: []
          }
      },
      {
        name: "Somewhat Closely",
        values: {
          average: [42, 38, 42],
          CO: [],
          FL: [],
          GO: [],
          MI: [],
          MN: [],
          NV: [],
          NH: [],
          OH: [],
          PA: [],
          VI: []
        }
      },
      {
        name: "Not Very Closely",
        values: {
          average: [13, 24, 30],
          CO: [],
          FL: [],
          GO: [],
          MI: [],
          MN: [],
          NV: [],
          NH: [],
          OH: [],
          PA: [],
          VI: []
        }
      },
      {
        name: "Not at all",
        values: {
          average: [4, 11, 8],
          CO: [],
          FL: [],
          GO: [],
          MI: [],
          MN: [],
          NV: [],
          NH: [],
          OH: [],
          PA: [],
          VI: []
        }
      }
    ]
  },
  {
    name: "What is your level of interest in politics?",
    type: "bars",
    scale: 10,
    children: [
      {
        name: "",
        values: {
          average: [7.65, 7.21, 6.101],
          CO: [],
          FL: [],
          GO: [],
          MI: [],
          MN: [],
          NV: [],
          NH: [],
          OH: [],
          PA: [],
          VI: []
        }
      }
    ]
  },
  {
    name: "Why are you not currently registered to vote?",
    type: "circles",
    subgroups: ['Non-voters', '18-24'],
    children: [
      {
        name: "I don't care",
        values: {
          average: [29, 28],
          CO: [],
          FL: [],
          GO: [],
          MI: [],
          MN: [],
          NV: [],
          NH: [],
          OH: [],
          PA: [],
          VI: []
        }
      },
      {
        name: "My vote doesn't matter",
        values: {
          average: [13, 5],
          CO: [],
          FL: [],
          GO: [],
          MI: [],
          MN: [],
          NV: [],
          NH: [],
          OH: [],
          PA: [],
          VI: []
        }
      },
      {
        name: "I don't know how",
        values: {
          average: [8, 14],
          CO: [],
          FL: [],
          GO: [],
          MI: [],
          MN: [],
          NV: [],
          NH: [],
          OH: [],
          PA: [],
          VI: []
        }
      },
      {
        name: "I keep forgetting to register",
        values: {
          average: [7, 12],
          CO: [],
          FL: [],
          GO: [],
          MI: [],
          MN: [],
          NV: [],
          NH: [],
          OH: [],
          PA: [],
          VI: []
        }
      },
      {
        name: "I'm too busy",
        values: {
          average: [6, 9],
          CO: [],
          FL: [],
          GO: [],
          MI: [],
          MN: [],
          NV: [],
          NH: [],
          OH: [],
          PA: [],
          VI: []
        }
      },
      {
        name: "I recently moved",
        values: {
          average: [13, 5],
          CO: [],
          FL: [],
          GO: [],
          MI: [],
          MN: [],
          NV: [],
          NH: [],
          OH: [],
          PA: [],
          VI: []
        }
      },
      {
        name: "The system is corrupt",
        values: {
          average: [9, 6],
          CO: [],
          FL: [],
          GO: [],
          MI: [],
          MN: [],
          NV: [],
          NH: [],
          OH: [],
          PA: [],
          VI: []
        }
      },
      {
        name: "Religion objection",
        values: {
          average: [4, 3],
          CO: [],
          FL: [],
          GO: [],
          MI: [],
          MN: [],
          NV: [],
          NH: [],
          OH: [],
          PA: [],
          VI: []
        }
      },
      {
        name: "To avoid jury duty",
        values: {
          average: [4, 2],
          CO: [],
          FL: [],
          GO: [],
          MI: [],
          MN: [],
          NV: [],
          NH: [],
          OH: [],
          PA: [],
          VI: []
        }
      },
      {
        name: "I don't know",
        values: {
          average: [15, 14],
          CO: [],
          FL: [],
          GO: [],
          MI: [],
          MN: [],
          NV: [],
          NH: [],
          OH: [],
          PA: [],
          VI: []
        }
      }
    ]
  },
  {
    name: "What could motivate you to vote in more elections?",
    type: "bars",
    children: [
      
    ]
  },
  {
    name: "How much to you think the results of an election represent the will of the people?",
    type: "bars",
    children: [
      
    ]
  },
  {
    name: "What party would you vote for in 2020?",
    type: "bars",
    children: [
      
    ]
  },
  {
    name: "Are you planning to vote in 2020?",
    type: "bars",
    children: [
      
    ]
  }
]

export const fakeData = [
  {
    name: "Colorado",
    children: [
      {
        name: "Voters",
        // color: "red",
        value: 80,

        children: [
          {
            name: "Immigration",
            value: 900
          },
          {
            name: "Gun Control",
            value: 800
          },
          {
            name: "Climate Change",
            value: 700
          },
          {
            name: "Race Relations",
            value: 600
          },
          {
            name: "Health Care",
            value: 500
          },
          {
            name: "Jobs",
            value: 400
          }
        ]
      },
      {
        name: "Non-Voters",
        value: 50,
        children: [
          {
            name: "Immigration",
            value: 190
          },
          {
            name: "Gun Control",
            value: 289
          },
          {
            name: "Climate Change",
            value: 635
          },
          {
            name: "Race Relations",
            value: 732
          },
          {
            name: "Health Care",
            value: 835
          },
          {
            name: "Jobs",
            value: 600
          }
        ]
      },
      {
        name: "18-24",
        value: 30,
        children: [
          {
            name: "Immigration",
            value: 600
          },
          {
            name: "Gun Control",
            value: 400
          },
          {
            name: "Climate Change",
            value: 300
          },
          {
            name: "Race Relations",
            value: 250
          },
          {
            name: "Health Care",
            value: 60
          },
          {
            name: "Jobs",
            value: 60
          }
        ]
      }
    ]
  }, {
    name: "Florida",
    children: [
      {
        name: "Voters",
        // color: "red",
        value: 30,

        children: [
          {
            name: "Immigration",
            value: 200
          },
          {
            name: "Gun Control",
            value: 300
          },
          {
            name: "Climate Change",
            value: 700
          },
          {
            name: "Race Relations",
            value: 600
          },
          {
            name: "Health Care",
            value: 500
          },
          {
            name: "Jobs",
            value: 900
          }
        ]
      },
      {
        name: "Non-Voters",
        value: 50,
        children: [
          {
            name: "Immigration",
            value: 190
          },
          {
            name: "Gun Control",
            value: 289
          },
          {
            name: "Climate Change",
            value: 635
          },
          {
            name: "Race Relations",
            value: 732
          },
          {
            name: "Health Care",
            value: 835
          },
          {
            name: "Jobs",
            value: 600
          }
        ]
      },
      {
        name: "18-24",
        value: 30,
        children: [
          {
            name: "Immigration",
            value: 600
          },
          {
            name: "Gun Control",
            value: 400
          },
          {
            name: "Climate Change",
            value: 300
          },
          {
            name: "Race Relations",
            value: 250
          },
          {
            name: "Health Care",
            value: 60
          },
          {
            name: "Jobs",
            value: 60
          }
        ]
      }
    ]
  }
];
