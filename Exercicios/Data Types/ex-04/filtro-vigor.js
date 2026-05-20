let data  = [
    {name: 'Jorge', id: 1},
    {name: 'Karla', id: 2},
    {name: 'Josh', id: 3},
    {name: 'Isla', id: 4},
    {name: 'Taylor', id: 5},
    {name: 'Mike', id: 6},
    {name: 'Blossom', id: 7},
    {name: 'Chery', id: 8},
    {name: 'Alexander', id: 9},
    {name: 'Mcqueen', id: 10},
];

function vigor(a, b) {
    for(let i = 0; i < data.length; i++) {
        let valor = data[i]

        if(valor.id < a || valor.id > b) {
            data.splice(i, 1);
            i--;
        }
    }

    console.log(data);
}

vigor(1, 5)