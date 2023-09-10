import logo from "../../assets/logo.png";
import banner from "../../assets/topo.png";

import tomate from '../../assets/frutas/Tomate.png';
import brocolis from '../../assets/frutas/Brócolis.png';
import batata from '../../assets/frutas/Batata.png';
import pepino from '../../assets/frutas/Pepino.png';
import abobora from '../../assets/frutas/Abóbora.png';

// Os mocks na programação geralmente são utilizados em 
// testes automatizados como forma de substituir as funç-
// ões originais para que os dados reais não sejam afeta-
// dos pelos testes.

const cesta = {
    topo: {
        titulo: "Detalhes da cesta",
        bannerTopo: banner
    },
    detalhes: {
        nome: "Cesta de verduras",
        logoFazenda: logo,
        nomeFazenda: "Jennie Jack Farm",
        descricao: "Uma cesta com produtos selecionados cuidadosamente da fazenda direto para sua cozinha.",
        preco: "R$ 50,00",
        textoPrimeiroBotao: "Comprar Agora",
        textoSegundoBotao: "Cancelar"
    },
    itens: {
        titulo: "Itens da cesta",
        lista: [
            {
                nome: "Tomate",
                imagem: tomate,
            },
            {
                nome: "Brócolis",
                imagem: brocolis,
            },
            {
                nome: "Batata",
                imagem: batata,
            },
            {
                nome: "Pepino",
                imagem: pepino,
            },
            {
                nome: "Abóbora",
                imagem: abobora,
            }
        ]
    }
}

export default cesta;