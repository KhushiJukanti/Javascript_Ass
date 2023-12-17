let players = [
    {
        name:"test1",
        team: "A"
    },
    {
        name:"test2",
        team: "A"
    },
    {
        name:"test3",
        team: "B"
    },
    {
        name:"test4",
        team: "A"
    },
    {
        name:"test5",
        team: "B"
    },
    {
        name:"test6",
        team: "A"
    }
]


output
{
    "A":[{name:"test1"},{name:"test2"},{name:"test4"},{name:"test"}],
    "B":[{name:"test5"},{name:"test3"}]
}