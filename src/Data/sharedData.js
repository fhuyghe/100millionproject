import React from "react";

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

export const fakeData = [
  {
    name: "Nevada",
    children: [
      {
        name: "Voters",
        color: "red",
        value: 1,

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
        value: 600,
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
        value: 60,
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
