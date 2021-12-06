const express = require('express');
const app = express();

const data = {
    "nome": [
        "Willian",
        "Enzo",
        "Marco",
        "Paulo",
        "Anderson",
        "Alex",
        "Filipe",
        "Leonardo",
        "Victor",
        "Samuel",
        "Deivid",
        "Mário",
        "Otávio",
        "Cristiano",
        "Luiz",
        "João",
        "Caio",
        "Lucas",
        "Gabriel"
    ],
    "sobrenome": [
        "Silva",
        "Souza",
        "Costa",
        "Santos",
        "Oliveira",
        "Pereira",
        "Rodrigues",
        "Almeida",
        "Nascimento",
        "Lima",
        "Araújo",
        "Fernandes",
        "Carvalho",
        "Gomes",
        "Martins",
        "Rocha",
        "Ribeiro",
        "Alves",
        "Monteiro",
        "Mendes",
        "Barros",
        "Freitas",
        "Barbosa",
        "Pinto",
        "Moura",
        "Dias",
        "Castro",
        "Campos",
        "Cardoso"
    ],
    "posicao": [
        "centro-avante",
        "atacante",
        "meia-atacante",
        "volante",
        "lateral-direito",
        "lateral-esquerdo",
        "meio-campista",
        "zagueiro",
        "goleiro"
    ],
    "clube": [
        "Criciúma",
        "Figueirense",
        "Avaí",
        "Joinville",
        "Chapecoense",
        "Fluminense",
        "Vasco",
        "Corinthians",
        "Botafogo",
        "Flamengo",
        "São Paulo",
        "Santos",
        "Grêmio",
        "Internacional",
        "Curitiba",
        "Paraná",
        "Cruzeiro",
        "Atlético Mineiro",
        "Atlético Paranaense",
        "Bahia",
        "Vitória"
    ]
};

app.get('/gerador', (req, res) => {
    const ageQueryString = req.query.filtro;

    res.send(`${getName()} ${getSurname()} é um futebolista brasileiro ${getAge(ageQueryString == 'idade')} que atua como ${getPosition()}. Atualmente defende o ${getTeam()}.`);
});

app.listen(8000, () => {
    console.log('Rodando na porta 8000');
});

function getAge(toString) {
    const randomAge = Math.round(Math.random() * (39 - 17 + 1) + 17);

    if (toString) {
        if (randomAge <= 21) {
            return 'novato';
        } else if (randomAge <= 28) {
            return 'profissional';
        } else if (randomAge <= 34) {
            return 'veterano'
        }

        return 'master';
    }

    return `de ${randomAge} anos`;
}

function getPosition() {
    const randomIndex = Math.floor(Math.random() * (data.posicao.length - 1)) + 1;

    return data.posicao[randomIndex];
}

function getTeam() {
    const randomIndex = Math.floor(Math.random() * (data.clube.length - 1)) + 1;

    return data.clube[randomIndex];
}

function getName() {
    const randomIndex = Math.floor(Math.random() * (data.nome.length - 1)) + 1;

    return data.nome[randomIndex];
}

function getSurname() {
    const randomIndex = Math.floor(Math.random() * (data.sobrenome.length - 1)) + 1;

    return data.sobrenome[randomIndex];
}



