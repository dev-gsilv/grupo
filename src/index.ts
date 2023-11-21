import { question } from 'readline-sync';
import { Service } from './service';

class Main {
    static run() {
        const service = new Service();
        console.log(
            'Bem-vindo à Locadora TypeCar!\nEscolha uma opção para continuar.',
        );

        let opcao: number = 0;
        while (opcao != 6) {
            console.log(
                '\n1: Cadastrar veículo.\n2: Alugar veículo.\n3: Devolver veículo.\n4: Listar veículos disponíveis.\n5: Listar veículos alugados. \n6: Sair.',
            );
            opcao = parseInt(question('\nO que você deseja fazer? '));
            let resposta: string | undefined = '';
            switch (opcao) {
                case 1:
                    console.log('Cadastrar veículo.');
                    const marca = question('Qual a marca do veículo? ');
                    const modelo = question('Qual o modelo do veículo? ');
                    const ano = parseInt(question('Qual o ano do veículo? '));
                    const tipo = question(
                        'Qual o tipo do veículo? (carro ou moto) ',
                    );
                    const placa = question('Qual a placa do veículo? ');

                    resposta = service.cadastrar(
                        marca,
                        modelo,
                        ano,
                        tipo,
                        placa,
                    );
                    console.log(resposta);
                    break;
                case 2:
                    console.log('Alugar veículo.');
                    const nome = question('Qual o nome do cliente? ');
                    const cpf = question('Qual o CPF do cliente? ');
                    const carteira = question('Qual o tipo de carteira do cliente? (A ou B)');
                   
                    resposta = service.alugar(nome, cpf, carteira);
                    console.log(resposta);
                    break;
                case 3:
                    console.log('Devolver veículo.');

                    break;
                case 4:
                    console.log('Listar veículos disponíveis');

                    break;
                case 5:
                    console.log('Listar veículos alugados');

                    break;
                case 6:
                    console.log('Encerrando sistema. Até breve!');

                    break;
                case 200:
                    console.log('Alugar veículo.');
                    console.log(service.frotaCompleta());

                    break;
                default:
                    console.log('Opção inválida. Tente novamente!');
                    break;
            }
        }
    }
}

Main.run();
