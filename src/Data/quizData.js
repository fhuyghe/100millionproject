export const questions = [
    {
        question: "What is your level of interest in politics?",
        type: "slider",
        responses: [
            {
                responseValue: 0,
                resultChange: [
                    [1,0],[2,1],[5,-1]
                ]
            },
            {
                responseValue: 1,
                resultChange: [
                    [0,-1],[2,1],[4,1]
                ]
            },
            {
                responseValue: 2,
                resultChange: [
                    [0,-1],[3,2],[5,-2]
                ]
            },
            {
                responseValue: 3,
                resultChange: [
                    [0,1],[1,4],[2,3],[5,1]
                ]
            },
            {
                responseValue: 4,
                resultChange: [
                    [1,-1],[2,3],[4,1]
                ]
            },
            {
                responseValue: 5,
                resultChange: [
                    [0,-2],[3,2],[5,-1]
                ]
            },
            {
                responseValue: 6,
                resultChange: [
                    [1,-2],[2,1],[4,-1]
                ]
            },
            {
                responseValue: 7,
                resultChange: [
                    [1,-2],[3,-2],[5,-2]
                ]
            },
            {
                responseValue: 8,
                resultChange: [
                    [0,-2],[3,-1],[5,2]
                ]
            },
            {
                responseValue: 9,
                resultChange: [
                    [2,-1],[4,-1]
                ]
            },
            {
                responseValue: 10,
                resultChange: [
                    [0,-1],[3,1],[5,1]
                ]
            }
        ]
    },
    {
        question: "Where do you lean on the political scale?",
        type: "choices",
        responses: [
            {
                responseValue: "Liberal",
                resultChange: [
                    [0,2],[3,1],[4,-1]
                ]
            },
            {
                responseValue: "Moderate",
                resultChange: [
                    [2,-1],[3,-2]
                ]
            },
            {
                responseValue: "Conservative",
                resultChange: [
                    [1,3],[2,-1]
                ]
            },
            {
                responseValue: "I don't know",
                resultChange: [
                    [1,-2],[4,1]
                ]
            }                                                      
        ]
    },
    {
        question: "How closely do you follow the news and politics?",
        type: "choices",
        responses: [
            {
                responseValue: "Very closely",
                resultChange: [
                    [1,3],[2,-1]
                ]
            },
            {
                responseValue: "Somewhat closely",
                resultChange: [
                    [0,-1],[3,1],[5,1]
                ]
            },
            {
                responseValue: "Not very closely",
                resultChange: [
                    [0,-2],[3,-1],[5,2]
                ]
            },
            {
                responseValue: "Not at all",
                resultChange: [
                    [0,2],[3,1],[4,-1]
                ]
            }                
        ]
    },
    {
        question: "When national elections are coming up do you feel like you have enough information about the candidates?",
        type: "choices",
        responses: [
            {
                responseValue: "Yes",
                resultChange: [
                    [1,0],[2,1],[5,-1]
                ]
            },
            {
                responseValue: "No",
                resultChange: [
                    [0,-2],[3,-1],[5,2]
                ]
            }
        ]
    },
    {
        question: "How confident are you that the results of an election represent the will of the people?",
        type: "choices",
        responses: [
            {
                responseValue: "Very Confident",
                resultChange: [
                    [1,3],[2,-1]
                ]
            },
            {
                responseValue: "Somewhat Confident",
                resultChange: [
                    [0,1],[1,4],[2,3],[5,1]
                ]
            },
            {
                responseValue: "Not very confident",
                resultChange: [
                    [1,0],[2,1],[5,-1]  
                ]
            },
            {
                responseValue: "Not confident at all",
                resultChange: [
                    [0,2],[3,1],[4,-1]
                ]
            }                                                
        ]
    },
    {
        question: "What media do you consume THE MOST of on a daily basis?",
        type: "choices",
        responses: [
            {
                responseValue: "News",
                resultChange: [
                    [0,2],[3,1],[4,-1]
                ]
            },
            {
                responseValue: "Social Media",
                resultChage: [
                    [0,-1],[3,1],[5,1]
                ]
            },
            {
                responseValue: "TV Shows & Movies",
                resultChange: [
                    [0,-2],[3,-1],[5,2]
                ]
            },
            {
                responseValue: "Gaming",
                resultChange: [
                    [1,3],[2,-1]
                ]
            },
            {
                responseValue: "Sports",
                resultChange: [
                    [1,-2],[4,1]
                ]
            },
            {
                responseValue: "Something else",
                resultChange: [
                    [1,0],[2,1],[5,-1]
                ]
            }                    
        ]
    }
  ];

export const results = [
    {
        result: "Result 1",        
        description: "You believe in X..."
    },
    {
        result: "Result 2",    
        description: "You believe in Y..."
    },
    {
        result: "Result 3",        
        description: "You believe in Z..."
    },
    {
        result: "Result 4",        
        description: "You believe in..."
    },
    {
        result: "Result 5",        
        description: "You believe in..."
    },
    {
        result: "Result 6",        
        description: "You believe in..."
    }
]
  