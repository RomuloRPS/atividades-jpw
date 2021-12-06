const express = require('express');
const app = express();

const listaCompras = [
    "Papel Higiênico",
    "Nescau",
    "Banana",
    "Maça",
    "Melancia",
    "Chocolate",
    "Pão",
    "Presunto",
    "Queijo",
    "Manteiga",
    "Ovo",
    "Pizza",
    "Esponja",
    "Carvão",
    "Carne",
    "Frango",
    "Desodorante",
    "Detergente",
    "Sabão em pó",
];

app.get('/', (req, res) => {
    const queryString = req.query;
    const limite = queryString.limite;
    
    
    if (limite ) {
        if (!Number.isInteger(Number(limite))) {
            return res.status(400).send("Caractere não reconhecido, informe um número de 1 à 15");  
        }
        
        if (limite > 15 || limite < 1) {
            return res.status(400).send("Limite não válido, informe um limite entre 1 e 15");  
        }

        
    }
    
    const listaFinal = shuffleLista(listaCompras);

    return res.send(listaFinal.splice(0, limite ? limite : 15));

});

function shuffleLista(array) {
    let newArray = JSON.parse(JSON.stringify(array));

    for (let i = newArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
    }

    return newArray;
}

app.listen(8000, () => {
    console.log('Rodando na porta 8000');
});