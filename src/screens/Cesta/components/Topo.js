import React from 'react';
import { StyleSheet, Image, Dimensions } from 'react-native';

import Texto from '../../../components/Texto';
import topo from '../../../../assets/topo.png';

const widht = Dimensions.get('screen').width;

export default function Topo({ titulo }) {
    return (
        <>
            <Image source={topo} style={styles.topo} />
            <Texto style={styles.titulo}>{titulo}</Texto>
        </>
    )
}

const styles = StyleSheet.create({
    topo: {
        width: '100%',
        height: 578 / 768 * widht,
    },
    titulo: {
        position: 'absolute',
        alignSelf: 'center',
        textAlign: 'center',
        fontSize: 16,
        lineHeight: 26,
        color: '#FFFFFF',
        fontWeight: 'bold',
        padding: 16,
    },
});