import React from 'react';
import { View, Image, StyleSheet } from 'react-native';

import Texto from '../../../components/Texto';

export default function Item({item: { nome, imagem }}) {

    return <View key={nome} style={styles.item}>
        <Image source={imagem} style={styles.imagem} />
        <Texto style={styles.nome}>{nome}</Texto>
    </View>
}

const styles = StyleSheet.create({
    item: {
        flexDirection: "row",
        borderBottomWidth: 1,
        borderBottomColor: "#ececec",
        paddingVertical: 16,
        alignItems: "center",
        marginHorizontal: 16,
    },
    imagem: {
        width: 46,
        height: 46,
    },
    nome: {
        fontSize: 16,
        lineHeight: 26,
        marginLeft: 12,
        color: "#464646",
    }
});