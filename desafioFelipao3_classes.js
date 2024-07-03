class hero {
    constructor(nome, idade, tipo){
        this.nome = nome
        this.idade = idade
        
        const tiposPermitidos = ["mago", "guerreiro", "ninja", "monge"];
        if (tiposPermitidos.includes(tipo.toLowerCase())){
            this.tipo = tipo.toLowerCase();
        } else {
            tipo = undefined
        }
    }
    attack(){
        this.ataque = undefined
        if(this.tipo === "mago") {
            this.ataque = "magia";
        }else if(this.tipo === "guerreiro"){
            this.ataque = "espada";
        }else if(this.tipo === "monge"){
            this.ataque = "artes marciais";
        }else if(this.tipo === "ninja"){
            this.ataque = "shuriken";
        }else{
            this.ataque = "golpe";
        }
        console.log(`O ${this.tipo} atacou usando ${this.ataque}`)
    }
}
let heroiDivino = new hero ("Ruff Ghanor", 26, "Monge")
heroiDivino.attack ()

let heroiSilencioso = new hero ("Raizo da Neblina", 34, "ninja")
heroiSilencioso.attack()

let heroiForte = new hero ("Ruffus Cave", 51, "guerreiro")
heroiForte.attack()