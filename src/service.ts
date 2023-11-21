import fs from 'fs';
import { Veiculo } from './veiculo';
import { frotaDisponivel, frotaAlugada, frotaCompleta } from './env/caminhos';

export class Service {
    cadastrar(
        marca: string,
        modelo: string,
        ano: number,
        tipo: string,
        placa: string,
    ) {
        try {
            const novoVeiculo = new Veiculo(marca, modelo, ano, tipo, placa);

            if (!fs.existsSync(frotaCompleta)) {
                fs.writeFileSync(frotaCompleta, '[]');
            }

            const frotaString: string = fs.readFileSync(frotaCompleta, 'utf-8');
            const frotaArray: Veiculo[] = JSON.parse(frotaString) as Veiculo[];

            let placasFrota: string[] = [];
            frotaArray.forEach((v: Veiculo) => {
                console.log(
                    v instanceof Veiculo,
                    novoVeiculo instanceof Veiculo,
                );
                console.log(v.placa, novoVeiculo.placa);
                //console.log(Object.keys(v)[4]);
                //console.log(Object.values(v)[4]);

                // TODO corrigir esta gambiarra
                // gambiarra, já que v.placa sempre retorna undefined
                placasFrota.push(Object.values(v)[4]);
            });

            if (placasFrota.includes(novoVeiculo.placa)) {
                return `\n\tVeículo placa ${novoVeiculo.placa} já está cadastrado!`;
            } else {
                frotaArray.push(novoVeiculo);
                const updateString = JSON.stringify(frotaArray, null, 2);

                fs.writeFileSync(frotaCompleta, updateString);
                return `Cadastro efetuado com sucesso!`;
            }
        } catch (error) {
            console.log(error);
        }
    }

    alugar(nome: string, cpf: string, carteira: string) {
        this.filtrarFrotaPorCategoria(carteira);
        return 'service.alugar()';
    }

    filtrarFrotaPorCategoria(carteira: string) {
        if (!fs.existsSync(frotaDisponivel)) {
            // TODO validar quais veiculos nao tem locaçao ativa
            fs.writeFileSync(
                frotaDisponivel,
                fs.readFileSync(frotaCompleta, 'utf-8'),
            );
        }

        const frotaDisponivelString: string = fs.readFileSync(
            frotaDisponivel,
            'utf-8',
        );
        const frotaDisponivelArray: Veiculo[] = JSON.parse(
            frotaDisponivelString,
        );

        console.log(
            frotaDisponivelArray[0],
            frotaDisponivelArray[0] instanceof Veiculo,
        );

        frotaDisponivelArray.forEach((v: Veiculo) => {
            console.log(v.tipo);
        });
    }

    devolver() {}

    disponiveis() {}

    alugados() {}

    frotaCompleta() {
        if (!fs.existsSync(frotaCompleta)) {
            return 'Não existem veículos cadastrados!';
        } else {
            const frotaString: string = fs.readFileSync(frotaCompleta, 'utf-8');
            const frotaArray: Veiculo[] = JSON.parse(frotaString);
            return frotaArray;
        }
    }
}
