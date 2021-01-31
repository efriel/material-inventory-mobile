import React from 'react';
import { View, Text, StyleSheet} from 'react-native';

const PurchaseInvoiceScreen = props => {
    return (
        <View style={styles.screen}>
            <Text>Purchase Invoice Page</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default PurchaseInvoiceScreen;