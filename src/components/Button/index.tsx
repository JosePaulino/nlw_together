import React from "react";
import { RectButton, RectButtonProperties } from "react-native-gesture-handler";
import { Text } from 'react-native';

import { styles } from './styles';

type Props = RectButtonProperties & {
    title: string;
}

export function Button({ title, ...rest }: Props) {
    return (
        <RectButton
            style={styles.container}
            {...rest}
        >
            <Text style={styles.title}>
                {title}
            </Text>
        </RectButton>
    );
}