export class Locacao {
    private _id: string;
    private _placa: string;
    private _cpf: string;
    private _diaria: number;
    // data
    // dias
    // acrescimo

    constructor(id: string, placa: string, cpf: string, diaria: number) {
        this._id = id;
        this._placa = placa;
        this._cpf = cpf;
        this._diaria = diaria;
    }

    get id() {
        return this._id;
    }

    set id(val: string) {
        this._id = val;
    }

    get placa() {
        return this._placa;
    }

    set placa(val: string) {
        this._placa = val;
    }

    get cpf() {
        return this._cpf;
    }

    set cpf(val: string) {
        this._cpf = val;
    }

    get diaria() {
        return this._diaria;
    }

    set diaria(val: number) {
        this._diaria = val;
    }
}
