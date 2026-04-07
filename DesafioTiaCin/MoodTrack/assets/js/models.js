class Habito {
    constructor(nome, concluido = false){
        this.nome = nome;
        this.concluido = concluido;
    }
}

class Registro {
    constructor(data, humor, obs, habitos){
        this.data = data;
        this.humor = humor;
        this.obs = obs;
        this.habitos = habitos;
    } 
}