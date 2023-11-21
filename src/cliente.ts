export class Cliente {
    private _nome: string;
    private _cpf: string;
    private _carteira: string;

    constructor(nome: string, cpf: string, carteira: string) {
        this._nome = nome;
        this._cpf = cpf;
        this._carteira = carteira;
    }

    get nome() {
        return this._nome;
    }

    set nome(val: string) {
        this._nome = val;
    }

    get cpf() {
        return this._cpf;
    }

    set cpf(val: string) {
        this._cpf = val;
    }

    get carteira() {
        return this._carteira;
    }

    set carteira(val: string) {
        this._carteira = val;
    }
}
