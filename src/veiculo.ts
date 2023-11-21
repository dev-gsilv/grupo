export class Veiculo {
    private _marca: string;
    private _modelo: string;
    private _ano: number;
    private _tipo: string;
    private _placa: string;

    constructor(
        marca: string,
        modelo: string,
        ano: number,
        tipo: string,
        placa: string,
    ) {
        this._marca = marca;
        this._modelo = modelo;
        this._ano = ano;
        this._tipo = tipo;
        this._placa = placa;
    }

    public get marca() {
        return this._marca;
    }

    public set marca(val: string) {
        this._marca = val;
    }

    public get modelo() {
        return this._modelo;
    }

    public set modelo(val: string) {
        this._modelo = val;
    }

    public get ano() {
        return this._ano;
    }

    public set ano(val: number) {
        this._ano = val;
    }

    public get tipo() {
        return this._tipo;
    }

    public set tipo(val: string) {
        this._tipo = val;
    }

    public get placa() {
        return this._placa;
    }

    public set placa(val: string) {
        this._placa = val;
    }
}
