//imports
import { StyleSheet, TouchableOpacity } from "react-native";

//componentes
import Texto from "./Texto.jsx";

export default function StandartButton({ textoInterno, cancelation }) {
    let style = estilos.botaoConfirmar;

    if (cancelation) {
        style = estilos.botaoCancelar;
    }

    return (
        <>
            {/* Botão */}
            <TouchableOpacity style={style}>
                <Texto style={estilos.textoBotao}>{textoInterno}</Texto>
            </TouchableOpacity>
        </>
    )
}

const estilos = StyleSheet.create({
    botaoConfirmar: {
        marginTop: 16,
        backgroundColor: "#2A9F85",
        paddingVertical: 16,
        borderRadius: 6
    },

    botaoCancelar: {
        marginTop: 16,
        backgroundColor: "#f54842",
        paddingVertical: 16,
        borderRadius: 6
    },

    textoBotao: {
        textAlign: "center",
        color: "#ffffff",
        fontSize: 16,
        lineHeight: 26,
        fontWeight: "bold"
    }
})
