export const questions = [
    {
        question: "What is your level of interest in politics?",
        type: "slider",
        legend: ['Not Interested', 'Very Interested'],
        responses: [
            {
                responseValue: 0,
                resultChange: [
                    [3,1],[4,1],[5,1]
                ]
            },
            {
                responseValue: 1,
                resultChange: [
                    [3,1],[4,1],[5,1]
                ]
            },
            {
                responseValue: 2,
                resultChange: [
                    [3,1],[4,1]
                ]
            },
            {
                responseValue: 3,
                resultChange: [
                    [3,1]
                ]
            },
            {
                responseValue: 4,
                resultChange: [

                ]
            },
            {
                responseValue: 5,
                resultChange: [

                ]
            },
            {
                responseValue: 6,
                resultChange: [

                ]
            },
            {
                responseValue: 7,
                resultChange: [
                    [0,1]
                ]
            },
            {
                responseValue: 8,
                resultChange: [
                    [0,1],[1,1],[2,1]
                ]
            },
            {
                responseValue: 9,
                resultChange: [
                    [0,1],[1,1],[2,1]
                ]
            },
            {
                responseValue: 10,
                resultChange: [
                    [0,1],[1,1],[2,1]
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
                    [1,2]
                ]
            },
            {
                responseValue: "Moderate",
                resultChange: [
                    [0,1],[1,1],[3,1],[4,2]
                ]
            },
            {
                responseValue: "Conservative",
                resultChange: [
                    [2,3]
                ]
            },
            {
                responseValue: "I don't know",
                resultChange: [
                    [3,1],[4,1],[5,2]
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
                    [0,1],[1,1],[2,1]
                ]
            },
            {
                responseValue: "Somewhat closely",
                resultChange: [
                    [0,1],[1,1],[2,1]
                ]
            },
            {
                responseValue: "Not very closely",
                resultChange: [
                    [3,1],[4,1]
                ]
            },
            {
                responseValue: "Not at all",
                resultChange: [
                    [3,1],[4,1],[5,1]
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
                    [0,1],[1,1],[2,1],[3,1]
                ]
            },
            {
                responseValue: "No",
                resultChange: [
                    [4, 1],[5,1]
                ]
            },
            {
                responseValue: "I'm not sure",
                resultChange: [
                    [4, 1],[5,2]
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
                    [1,1],[2,1]
                ]
            },
            {
                responseValue: "Somewhat Confident",
                resultChange: [
                    [0,1],[1,1],[2,1]
                ]
            },
            {
                responseValue: "Not very confident",
                resultChange: [
                    [0,1],[3,1],[4,1],[5,1]
                ]
            },
            {
                responseValue: "Not confident at all",
                resultChange: [
                    [4,1],[5,1]
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
                    [1,1],[2,1]
                ]
            },
            {
                responseValue: "Social Media",
                resultChange: [
                    [3,1],[4,1],[5,1]
                ]
            },
            {
                responseValue: "TV Shows & Movies",
                resultChange: [
                    [3,1],[4,1],[5,1]
                ]
            },
            {
                responseValue: "Gaming",
                resultChange: [
                    [3,1],[4,1],[5,1]
                ]
            },
            {
                responseValue: "Sports",
                resultChange: [
                    [3,1],[4,1],[5,1]
                ]
            },
            {
                responseValue: "Something else",
                resultChange: [
                    [3,1],[4,1],[5,1]
                ]
            }
        ]
    },
    {
        question: "How often do you volunteer at an organization (non-profit, religious group, school group or any other)",
        type: "choices",
        responses: [
            {
                responseValue: "Every week",
                resultChange: [
                    [1,1]
                ]
            },
            {
                responseValue: "A few times a month",
                resultChange: [
                    [1,1]
                ]
            },
            {
                responseValue: "A few times a year",
                resultChange: [
                    [0,1],[1,1],[2,1]
                ]
            },
            {
                responseValue: "Once a year",
                resultChange: [
                    [0,1],[2,1],[4,1],[5,1]
                ]
            },
            {
                responseValue: "Every few years",
                resultChange: [
                    [0,1],[3,1],[4,1],[5,1]
                ]
            },
            {
                responseValue: "Never",
                resultChange: [
                    [3,1],[4,1],[5,1]
                ]
            }
        ]
    },
    {
        question: "How easy is it to vote?",
        type: "slider",
        legend: ['Hard', 'Easy'],
        responses: [
            {
                responseValue: 0,
                resultChange: [
                    [5,1]
                ]
            },
            {
                responseValue: 1,
                resultChange: [
                    [4,1],[5,1]
                ]
            },
            {
                responseValue: 2,
                resultChange: [
                    [0,1],[4,1],[5,1]
                ]
            },
            {
                responseValue: 3,
                resultChange: [
                    [0,1],[4,1]
                ]
            },
            {
                responseValue: 4,
                resultChange: [
                    [0,1],[4,1]
                ]
            },
            {
                responseValue: 5,
                resultChange: [
                    [0,1],[3,1]
                ]
            },
            {
                responseValue: 6,
                resultChange: [
                    [0,1],[3,1]
                ]
            },
            {
                responseValue: 7,
                resultChange: [
                    [3,1]
                ]
            },
            {
                responseValue: 8,
                resultChange: [
                    [1,1],[2,1],[3,1]
                ]
            },
            {
                responseValue: 9,
                resultChange: [
                    [1,1],[2,1]
                ]
            },
            {
                responseValue: 10,
                resultChange: [
                    [1,1],[2,1]
                ]
            }
        ]
    },
    {
        question: "Are you registered to vote?",
        type: "choices",
        responses: [
            {
                responseValue: "Yes",
                resultChange: [
                    [0,1],[1,1],[2,1],[3,1]
                ]
            },
            {
                responseValue: "No",
                resultChange: [
                    [4,1]
                ]
            },
            {
                responseValue: "I'm not sure",
                resultChange: [
                    [5,3]
                ]
            }
        ]
    },
    {
        question: "Will you vote in 2020?",
        type: "choices",
        responses: [
            {
                responseValue: "Yes",
                resultChange: [
                    [0,1],[2,1]
                ]
            },
            {
                responseValue: "No",
                resultChange: [
                    [4,1],[5,1]
                ]
            },
            {
                responseValue: "I'm not sure",
                resultChange: [
                    [0,1],[3,1],[4,1],[5,1]
                ]
            }
        ]
    },
    {
        question: "Who would you elect if you had to choose the next President?",
        type: "choices",
        responses: [
            {
                responseValue: "President Donald Trump",
                resultChange: [
                    [2,1]
                ]
            },
            {
                responseValue: "The Democratic Nominee",
                resultChange: [
                    [0,1],[1,1],[2,-1]
                ]
            },
            {
                responseValue: "A Third Party Candidate",
                resultChange: [
                    [1,1],[2,1]
                ]
            },
            {
                responseValue: "I don't know",
                resultChange: [
                    [0,1],[4,1],[5,1]
                ]
            }
        ]
    }
];

export const results = [
    {
        name: "Established Progressives",
        path: "educated-progressives",
        percentage: 21,
        color: "blue",
        description: "Compared to other non-voters, they are well established both in life and in their left-leaning political beliefs.",
        behaviors: [
            "This group is the most liberal among non-voters and the most approving of the Democratic Party, tracking closely with the party platform on key policy issues. They report high intentionality in news consumption, have the highest opinion of the news media and are the profile most closely following political news. They are also the most likely to report their family getting and discussing news growing up. They also have the highest levels of civic engagement at twice the rate of average non-voters. Members of this cluster trust in the election system, are very interested in politics, believe that they have enough information to vote and belong to social networks with regular voters.",
            "Dissatisfaction with candidates is the most common answer for nonparticipation. They are the second most likely profile to vote in 2020 and the most likely to choose the Democratic nominee (59%)."
        ],
        demographics: ["This profile has the highest educational attainment, with nearly half holding a college degree, and they have a high average income and homeownership rate. They are slightly older on average, yet very likely to be working full time."]
    },
    {
        name: "Traditional Conservatives",
        path: "traditional-conservatives",
        percentage: 17,
        color: "red",
        description: "Compared to other non-voters, they hold the most conservative political beliefs and are more likely to be enjoying a comfortable retirement.",
        behaviors: ["This group is predominantly Republican, and their stated positions on key issues align most with the party’s current platform. This group has the highest intentionality in seeking out news, high news consumption, closely follows politics and were raised in households that discussed news. They also have the lowest opinion of the media’s impartiality and the least trust in the media. A majority believes it’s harder to be informed because of the increase in information available today. However, they have the highest degree of trust in the elections system. They are particularly concerned with immigration, cited by 44% of this profile as the top issue facing the U.S., compared with the 19% non-voter average. This profile is the most interested in voting in 2020 and is the most consolidated as to their 2020 preferred candidate, President Trump (84%)."],
        demographics: ["This profile is the oldest and least diverse at 79% white. They are the most likely to be married, homeowners and retired, and they boast the highest household income level. This is also the only profile to be majority male (60%)."] 
    },
    {
        name: "Modern Moderates",
        path: "young-moderates",
        color: "yellow",
        percentage: 20,
        description: "Compared to other non-voters, they are left-leaning moderates working hard as they approach middle age.",
        behaviors: ["Most non-voters in this profile self-identify as having “moderate” political viewpoints, yet the majority show clear preference for the Democratic Party and platform on key issues. Their top issue is tied between “jobs/the economy” and“healthcare.” They are fairly high consumers of news and have a high opinion of the news media, but are only following news about politics “somewhat closely.” They have a moderate interest in politics and are moderately civically engaged. They are the least likely to say that voting is very easy, and most likely to report that it is difficult. Only moderately interested in voting, they show a clear preference for the Democratic nominee (55%), but some would vote Republican (16%) and third party (18%)."],
        demographics: ["They are slightly younger than the average non-voter and the mostethnically diverse, although still majority white (57%). They are fairly educated and the most likely to be employed full time."]
    },
    {
        name: "Indifferent Average",
        path: "indifferent-average",
        percentage: 17,
        color: "green",
        description: "Compared to other non-voters, they appear very middle-of-the-road in their politics, engagement and situation in life.",
        behaviors: ["This profile has a mix of political viewpoints but is united by its members’ lack of interest in news or following political current affairs. Members of this subgroup have a media diet tipped toward entertainment and social media more than any other profile. They are also less civically engaged than the “Plugged In” profiles. However, a decent number are registered to vote and think the voting process is easy. Their top reason for not voting is “lack of information about issues/candidates.”"],
        demographics: ["They are predominantly female (63%) and the most likely profile to report children living in the home. They are mostly middle income, and a third are college educated."]
    },
    {
        name: "Unattached Apoliticals",
        path: "unattached-apoliticals",
        color: "black",
        percentage: 17,
        description: "Compared to other non-voters, they are young and staunchly independent, both politically and in life.",
        behaviors: ["This profile is distinguished by a lack of attachment to either major party and for reporting the least interest in politics and voting. News consumption, intentionality and civic participation rates fall below those of non-voters as a whole. They have the lowest voter registration rate of any profile at 65%, and a simple lack of interest is the top reason cited for not registering. This is also the cluster most likely to say that nothing would motivate them to participate in voting. This group is the least likely to see the 2020 election as more important than others and the most likely to vote for a third party if they were forced to choose a candidate."],
        demographics: ["They are the youngest profile on average and have generally low educational attainment and household income. A large majority is unmarried, and they are the most likely to be have moved within the last three years."]
    },
    {
        name: "Underemployed Unsures",
        path: "underemployed-unsures",
        percentage: 8.4,
        color: "grey",
        description: "Compared to other non-voters, they are the least resourced and engaged across the board, and unsure of where they stand on politics.",
        behaviors: ["This group is distinguished by its lack of political opinions compared to other non-voters, with members often answering that they “did not know” on policy, favorability and candidate preference questions. They are also unsure whether they trust the election system. They have very low interest in politics or following political news. They are the least civically engaged and have the second lowest voter registration rate, at 60% unregistered."],
        demographics: ["They have the lowest educational attainment, lowest homeownership rate, lowest marriage rate, least full-time employment and lowest household income. This segment is 65% female, the largest gender majority of any profile."]
    }
]






