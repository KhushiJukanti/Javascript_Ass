let players = [
    {
        name: "test1",
        team: "A"
    },
    {
        name: "test2",
        team: "A"
    },
    {
        name: "test3",
        team: "B"
    },
    {
        name: "test4",
        team: "A"
    },
    {
        name: "test5",
        team: "B"
    },
    {
        name: "test6",
        team: "A"
    }
]


let output = {};

for (let player of players) {
    // Check if the team key already exists in the output object
    if (!output[player.team]) {
        // If it doesn't exist, create an empty array for the team
        output[player.team] = [];
    }
    // Push the player object with only the name property into the team's array
    output[player.team].push({ name: player.name });
}

console.log(output);


// output
// {
//     "A": [{ name: "test1" }, { name: "test2" }, { name: "test4" }, { name: "test" }],
//         "B": [{ name: "test5" }, { name: "test3" }]
// }