let numbers = [1,2,3,4]
console.log(numbers[1])


//Array bimenional - Matrizes
/*
salvamentos de dados
Inteligencia artiicial (comp.Vional)
Des. Jogo
Waz
*/

let matrizes = [
    [1,2,3],
    ['a', 'Gabriel', 23] //Linha 1
]
//console.log(matriz[1][2])
          //matriz[linha][coluna]

//Laço de repetição - FOR(para)
//for(inicia conição, incremento){CORPO CODIGO}
for(let i = 0; i < matrizes.length; i++){
    let linha = '';
    for(let j = 0; j < matrizes[i].length; j++){
        linha += matrizes[i][j] + ' ';  
    }
    console.log(linha)

}

/*

linha = ''
linha += 1 + '' -> '1 '
linha += 2 + '' -> '1 2 '
linha += 3 + '' -> '1 2 3 '

*/

let matriz = [
    [1,2,3] //Primeira linha: linha 0
    [4,5,6] //Segunda linha: linha 1
    [7,8,9] //Terceira linha: linha 2
];

for (let i = 0; i < matriz.length; i++)
{
    let linha = '';
    for (let j = 0; j<matri[i].length; j++) {
        linha += matri[i][j] + ' ';
    }
    console.log(linha)
}