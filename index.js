class heroi {
    constructor(nome, idade, tipo) {
        this.nome = nome
        this.idade = idade
        this.tipo = tipo
    }
    escrever(heroi) {
        switch (heroi.tipo){
            case "mago":
            console.log("O " + this.tipo + " atacou usando magia.");
            break;
            case "guerreiro":
                console.log("O " + this.tipo + " atacou usando espada.");
            break;
            case "monge":
                console.log("O " + this.tipo + " atacou usando artes marciais.");
            break;
            case "ninja":
            console.log("O " + this.tipo + " atacou usando shuriken.");
            break;
        }
    }
}

let hero = new heroi("Leo", 36, "mago");

heroi1.escrever(hero);
