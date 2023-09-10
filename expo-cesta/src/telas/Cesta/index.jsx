//imports
import { StyleSheet, View, FlatList } from 'react-native';

//componentes
import Topo from './componentes/Topo.jsx';
import Detalhes from './componentes/Detalhes.jsx';
import Item from './componentes/Item.jsx';
import Texto from '../../componentes/Texto.jsx';

// Em react native todos os elementos são "display flex" por padrão

export function Cesta({ topo, detalhes, itens }) {
    // Como essa função é exportada sem "default", 
    // o nome da função deve ser declarado com cha- 
    // ves no momento da importação

    return <>
        <FlatList
            data={itens.lista}
            renderItem={Item}
            keyExtracto={({ nome }) => nome}
            ListHeaderComponent={() => {
                return <>
                    <Topo {...topo} />

                    <View style={estilos.cesta}>
                        <Detalhes {...detalhes} />
                        <Texto style={estilos.titulo}>{itens.titulo}</Texto>
                    </View>
                </>
            }}
        />
    </>
}

const estilos = StyleSheet.create({
    titulo: {
        color: "#464646",
        fontWeight: "bold",
        marginTop: 32,
        marginBottom: 8,
        fontSize: 20,
        lineHeight: 32
    },
    cesta: {
        paddingVertical: 8,
        paddingHorizontal: 16
    }
});