import React from 'react';
import { View, Text, StyleSheet} from 'react-native';

const MasterGoodsScreen = props => {
    return (
        <View style={styles.screen}>
            <Text>Master Goods Page</Text>
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

export default MasterGoodsScreen;