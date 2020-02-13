export const questions = [
    {
        question: "What is your level of interest in politics?",
        type: "slider",
        responses: [
            {
                responseValue: 0,
                resultChange: [
                    [1, 0], [2, 1], [5, -1]
                ]
            },
            {
                responseValue: 1,
                resultChange: [
                    [0, -1], [2, 1], [4, 1]
                ]
            },
            {
                responseValue: 2,
                resultChange: [
                    [0, -1], [3, 2], [5, -2]
                ]
            },
            {
                responseValue: 3,
                resultChange: [
                    [0, 1], [1, 4], [2, 3], [5, 1]
                ]
            },
            {
                responseValue: 4,
                resultChange: [
                    [1, -1], [2, 3], [4, 1]
                ]
            },
            {
                responseValue: 5,
                resultChange: [
                    [0, -2], [3, 2], [5, -1]
                ]
            },
            {
                responseValue: 6,
                resultChange: [
                    [1, -2], [2, 1], [4, -1]
                ]
            },
            {
                responseValue: 7,
                resultChange: [
                    [1, -2], [3, -2], [5, -2]
                ]
            },
            {
                responseValue: 8,
                resultChange: [
                    [0, -2], [3, -1], [5, 2]
                ]
            },
            {
                responseValue: 9,
                resultChange: [
                    [2, -1], [4, -1]
                ]
            },
            {
                responseValue: 10,
                resultChange: [
                    [0, -1], [3, 1], [5, 1]
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
                    [0, 2], [3, 1], [4, -1]
                ]
            },
            {
                responseValue: "Moderate",
                resultChange: [
                    [2, -1], [3, -2]
                ]
            },
            {
                responseValue: "Conservative",
                resultChange: [
                    [1, 3], [2, -1]
                ]
            },
            {
                responseValue: "I don't know",
                resultChange: [
                    [1, -2], [4, 1]
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
                    [1, 3], [2, -1]
                ]
            },
            {
                responseValue: "Somewhat closely",
                resultChange: [
                    [0, -1], [3, 1], [5, 1]
                ]
            },
            {
                responseValue: "Not very closely",
                resultChange: [
                    [0, -2], [3, -1], [5, 2]
                ]
            },
            {
                responseValue: "Not at all",
                resultChange: [
                    [0, 2], [3, 1], [4, -1]
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
                    [1, 0], [2, 1], [5, -1]
                ]
            },
            {
                responseValue: "No",
                resultChange: [
                    [0, -2], [3, -1], [5, 2]
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
                    [1, 3], [2, -1]
                ]
            },
            {
                responseValue: "Somewhat Confident",
                resultChange: [
                    [0, 1], [1, 4], [2, 3], [5, 1]
                ]
            },
            {
                responseValue: "Not very confident",
                resultChange: [
                    [1, 0], [2, 1], [5, -1]
                ]
            },
            {
                responseValue: "Not confident at all",
                resultChange: [
                    [0, 2], [3, 1], [4, -1]
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
                    [0, 2], [3, 1], [4, -1]
                ]
            },
            {
                responseValue: "Social Media",
                resultChage: [
                    [0, -1], [3, 1], [5, 1]
                ]
            },
            {
                responseValue: "TV Shows & Movies",
                resultChange: [
                    [0, -2], [3, -1], [5, 2]
                ]
            },
            {
                responseValue: "Gaming",
                resultChange: [
                    [1, 3], [2, -1]
                ]
            },
            {
                responseValue: "Sports",
                resultChange: [
                    [1, -2], [4, 1]
                ]
            },
            {
                responseValue: "Something else",
                resultChange: [
                    [1, 0], [2, 1], [5, -1]
                ]
            }
        ]
    }
];

export const results = [
    {
        result: "The Young Moderate",
        path: "young-moderate",
        description: "<p>The first profile in the Plugged In group is “Younger Moderates.” This cluster is younger, is the most ethnically diverse, is the most politically moderate, and leans toward the Democratic Party</p>"
    },
    {
        result: "The Educated Progressive",
        path: "educated-progressives",
        description: "<p>The second group is “TK.” This cluster has high educational attainment and household income. It is the most liberal cluster, the most Democratic, and is more ethnically diverse than non-voters as a whole.</p><p>This group reports high intentionality in news consumption, has the highest opinion of the news media and is the cluster most closely following the news.   They are also the most likely to report their family getting and discussing news growing up at 52% versus the non-voter average of 29%. </p><p>Members of this cluster are very interested in politics, overwhelmingly believe that they have enough information to vote, and belong to social networks with regular voters. Dissatisfaction with candidates is the most common answer for nonparticipation.  They also have the highest levels of civic engagement at twice the rate of average non-voters.</p><p>On the issues this group of non-voters tracks closely with the policy priority of Democratic leaning voters overall: greater opposition to the wall on the Mexican border and greater support for a path to citizenship for undocumented aliens, the Affordable Care Act, abortion rights and stricter gun laws.</p>"
    },
    {
        result: "The Frustrated Conservative",
        path: "frustrated-conservatives",
        description: "<p>The third group is “TK.” This cluster is on average older, the least diverse (79% white), most likely to be homeowners, highest marriage rate, household income higher than non-voters as a whole, is ideologically conservative and predominantly Republican. This is also the only cluster to be majority male. A key distinguishing factor is that this cluster is most averse to current candidates when they report on their not voting.</p><p>This group boasts the highest intentionality in seeking out news, reports high news consumption, that they are closely following politics, and were raised in households that discussed news. They also have the lowest opinion of the media’s impartiality, the least trust in the media, and 60% believe it’s harder to be informed because of all of the information available today, which is a significant factor contributing to their disengagement from the political process.</p><p>They are also the group most likely to believe the election system represents the will of the people, closely followed by the Democrat-leaning non-voter group.</p><p>Members of this cluster are the most likely of any cluster to cite not liking the candidates as their reason for not voting and 26% stated that nothing would motivate them to vote in the future.   As it pertains to the issues, this group of non-voters’ positions resemble those of Republican leaning voters overall: with greater support for the wall on the Mexican border and greater opposition to a path to citizenship for undocumented aliens, the Affordable Care Act, abortion rights and stricter gun laws.</p>"
    },
    {
        result: "The Average Non-Voter",
        path: "average-non-voter",
        description: "<p>In the Checked Out group, the leading profile is “The Average Non-Voter.” This cluster is unique in its lack of specific distinguishing characteristics.  Members of this subgroup have a media diet tipped toward TV & social media at a rate higher than any other cluster; they are for the most part not following the news and are less civically engaged than non-voters as a whole. Their top reasons for not voting are lack of information about issues/candidates, dislike of candidates, and a general feeling that their vote won’t matter.</p><p>On balance, the answers from this group are politically and demographically in line with the results of the overall non-voter sample.</p>"
    },
    {
        result: "The Non-Participator",
        path: "non-participator",
        description: "<p>The second Checked Out Profile is the TK. They have lower educational attainment and household income and are most likely to consider themselves as political Independents.</p><p>This cluster is distinguished by their clearly stated lack of interest in news, politics, and voting. News consumption, intentionality, and civic participation rates fall below those of non-voters as a whole.   Two-thirds of this group are not registered to vote, the highest of any cluster, of whom over 36% cite a simple lack of interest as their primary reason for not registering. This is also the cluster most likely to say that nothing would motivate them to participate in voting and is the most comfortable with others making decisions on their behalf.</p><p>As it pertains to 2020, this group is the one least likely to believe that the upcoming Presidential elections are more important than similar contests in the past and they would be more likely than other non-voters to prefer “someone else” to be President versus either the current occupant of the White House or the Democratic Party nominee.</p>"
    },
    {
        result: "The Civically Uninformed",
        path: "civically-uninformed",
        description: "<p>The final profile…. Demographically this segment has the lowest educational attainment, lowest homeownership rate, lowest marriage rate, least employment, and lowest household income. This segment is 65% female, the largest gender discrepancy of any cluster. They are distinguished not by their opinions, but in having relatively few opinions.</p><p>This subgroup of the non-voter universe represents the segment least likely to participate in the electoral process for a variety of reasons. Chief among these reasons is a fundamental lack of interest in politics, a characteristic further exacerbated by their dearth of news consumption.</p><p>This group is distinguished not by how they answered questions on the functioning of government and/or various hot button political topics, but rather by their inability to answer at all. On a wide variety of questions throughout the survey, a majority of respondents in this cluster chose the “Don’t Know/No Answer” option.</p>"
    }
]
