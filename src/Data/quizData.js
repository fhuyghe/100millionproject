export const questions = [
    {
        question: "What is your level of interest in politics?",
        type: "slider",
        responses: [
            {
                response: 0,
                resultChange: [
                    1,
                    0,
                    1
                ]
            },
            {
                response: 1,
                resultChange: [
                    2,
                    -1,
                    1
                ]
            },
            {
                response: 2,
                resultChange: [
                    0,
                    -1,
                    0
                ]
            },
            {
                response: 3,
                resultChange: [
                    +2,
                     1,
                    +1
                ]
            },
            {
                response: 4,
                resultChange: [
                    2,
                    0,
                    1
                ]
            },
            {
                response: 5,
                resultChange: [
                    0,
                    -1,
                    0
                ]
            }
        ]
    },
    {
        question: "Where do you lean on the political scale?",
        type: "choices",
        responses: [
            {
                response: "Liberal",
                resultChange: [
                    2,
                    -1,
                    1
                ]
            },
            {
                response: "Moderate",
                resultChange: [
                    -1,
                    2,
                    -1
                ]
            },
            {
                response: "Conservative",
                resultChange: [
                    -4,
                     3,
                    -2
                ]
            },
            {
                response: "I don't know",
                resultChange: [
                    -2,
                     1,
                    -4
                ]
            }                                                      
        ]
    },
    {
        question: "How closely do you follow the news and politics?",
        type: "choices",
        responses: [
            {
                respopnse: "Very closely",
                resultChange: [
                    -1,
                    +3,
                    -2
                ]
            },
            {
                response: "Somewhat closely",
                resultChange: [
                    -3,
                    +2,
                    -4
                ]
            },
            {
                response: "Not very closely",
                resultChange: [
                    -1,
                    -2,
                    3
                ]
            },
            {
                response: "Not at all",
                resultChange: [
                    2,
                    -1,
                    2
                ]
            }                
        ]
    },
    {
        question: "When national elections are coming up do you feel like you have enough information about the candidates?",
        type: "choices",
        responses: [
            {
                response: "Yes",
                resultChange: [
                    0,
                    1,
                    1
                ]
            },
            {
                response: "No",
                resultChange: [
                    2,
                    1,
                    1
                ]
            }
        ]
    },
    {
        question: "How confident are you that the results of an election represent the will of the people?",
        type: "choices",
        responses: [
            {
                response: "Very Confident",
                resultChange: [
                    1,
                    0,
                    2
                ]
            },
            {
                response: "Somewhat Confident",
                resultChange: [
                    0,
                    2,
                    1
                ]
            },
            {
                response: "Not very confident",
                resultChange: [
                    1, 
                    0,
                    -1    
                ]
            },
            {
                response: "Not confident at all",
                resultChange: [
                    0, 
                    1, 
                    1
                ]
            }                                                
        ]
    },
    {
        question: "What media do you consume THE MOST of on a daily basis?",
        type: "choices",
        responses: [
            {
                response: "News",
                resultChange: [
                    2, 
                    -1, 
                    -1
                ]
            },
            {
                response: "Social Media",
                resultChage: [
                    1,
                    -1,
                    0
                ]
            },
            {
                response: "TV Shows & Movies",
                resultChange: [
                    0,
                    -1,
                    2
                ]
            },
            {
                response: "Gaming",
                resultChange: [
                    1,
                    1,
                    0
                ]
            },
            {
                response: "Sports",
                resultChange: [
                    0,
                    -1,
                    1
                ]
            },
            {
                response: "Something else",
                resultChange: [
                    1,
                    -1,
                    0
                ]
            }                    
        ]
    }
  ];

export const results = [
    {
        result: "Result 1",
        points: null,
        description: "You believe in X..."
    },
    {
        result: "Result 2",
        points: null,
        description: "You believe in Y..."
    },
    {
        result: "Result 3",
        points: null,
        description: "You believe in Z..."
    }
]
  