import React from 'react';
import { View, Text, StyleSheet} from 'react-native';

const PurchaseRequestScreen = props => {
    return (
        <View style={styles.screen}>
            <Text>Purchase Request Page</Text>
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

export default PurchaseRequestScreen;