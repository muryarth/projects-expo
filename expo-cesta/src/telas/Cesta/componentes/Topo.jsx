//imports
import { Image, StyleSheet, Dimensions } from "react-native";

//componentes
import Texto from "../../../componentes/Texto.jsx";

const width = Dimensions.get('screen').width;

export default function Topo({ titulo, bannerTopo }) {
    return (
        <>
            <Image source={bannerTopo} style={estilos.topo} />
            <Texto style={estilos.titulo}>{titulo}</Texto>
        </>
    );
}

const estilos = StyleSheet.create({
    topo: {
        width: "100%",
        height: (578 / 768) * width
    },

    titulo: {
        position: "absolute",
        textAlign: "center",
        textAlignVertical: "center",
        width: "100%",
        height: 120,
        fontSize: 16,
        fontWeight: "bold",
        color: "white",
    },
})