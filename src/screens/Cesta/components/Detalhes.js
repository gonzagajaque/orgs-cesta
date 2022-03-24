import React from 'react';
import { StyleSheet, View, Image, TouchableOpacity } from 'react-native';

import Texto from '../../../components/Texto';

export default function Detalhes({ nome, logoFazenda, nomeFazenda, descricao, preco, botao }) {
    return (
        <>
            <Texto style={styles.nome}>{nome}</Texto>
            <View style={styles.fazenda}>
                <Image source={logoFazenda} style={styles.imagemFazenda} />
                <Texto style={styles.nomeFazenda}>{nomeFazenda}</Texto>
            </View>
            <Texto style={styles.descrição}>{descricao}</Texto>
            <Texto style={styles.preco}>{preco}</Texto>

            <TouchableOpacity style={styles.botao} onPress={() => { }}>
                <Texto style={styles.textoBotao}>
                    {botao}
                </Texto>
            </TouchableOpacity>
        </>
    )
}

const styles = StyleSheet.create({
    nome: {
        color: '#464646',
        fontSize: 26,
        lineHeight: 42,
        fontWeight: 'bold',
    },
    fazenda: {
        flexDirection: 'row',
        paddingVertical: 12,
    },
    imagemFazenda: {
        width: 32,
        height: 32,
    },
    nomeFazenda: {
        fontSize: 16,
        lineHeight: 26,
        marginLeft: 12,
    },
    descrição: {
        color: '#a3a3a3',
        fontSize: 16,
        lineHeight: 26,
    },
    preco: {
        color: '#2a9f85',
        fontWeight: 'bold',
        fontSize: 26,
        lineHeight: 42,
        marginTop: 8,
    },
    botao: {
        marginTop: 16,
        backgroundColor: '#2a9f85',
        paddingVertical: 16,
        borderRadius: 6,
    },
    textoBotao: {
        textAlign: 'center',
        color: '#FFFFFF',
        fontSize: 16,
        lineHeight: 26,
        fontWeight: 'bold',
    },
});