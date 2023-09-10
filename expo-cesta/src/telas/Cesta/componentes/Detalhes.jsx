//imports
import { View, Image, StyleSheet, Button, TouchableOpacity } from "react-native";

//componentes
import Texto from "../../../componentes/Texto.jsx";
import StandartButton from "../../../componentes/StandartButton.jsx"

export default function Detalhes(detalhes) {
    return (
        <>
            {/* Body */}
            <Texto style={estilos.nome}>{detalhes.nome}</Texto>
            <View style={estilos.fazenda}>
                <Image source={detalhes.logoFazenda} style={estilos.imagemFazenda} />
                <Texto style={estilos.nomeFazenda}>
                    {detalhes.nomeFazenda}
                </Texto>
            </View>
            <Texto style={estilos.descricao}>
                {detalhes.descricao}
            </Texto>
            <Texto style={estilos.preco}>
                {detalhes.preco}
            </Texto>

            {/* Botão */}
            <StandartButton textoInterno={detalhes.textoPrimeiroBotao} />
            <StandartButton cancelation={true} textoInterno={detalhes.textoSegundoBotao} />
        </>
    )
}

const estilos = StyleSheet.create({
    nome: {
        color: "#464646",
        fontSize: 26,
        lineHeight: 42,
        fontWeight: "bold"
    },

    fazenda: {
        flexDirection: "row",
        paddingVertical: 12
    },

    nomeFazenda: {
        fontSize: 16,
        lineHeight: 26,
        marginLeft: 12
    },

    imagemFazenda: {
        width: 32,
        height: 32
    },

    descricao: {
        color: "#A3A3A3",
        fontSize: 16,
        lineHeight: 26
    },

    preco: {
        color: "#2A9F85",
        fontWeight: "bold",
        fontSize: 26,
        lineHeight: 42,
        marginTop: 8
    }
})