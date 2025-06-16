export class Contact{
    nome: string;
    email: string;
    messaggio: string;
    constructor(nome: string = '', email: string = '', messaggio: string = '') {
        this.nome = nome;
        this.email = email;
        this.messaggio = messaggio;
    }
}