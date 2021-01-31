import React from 'react';
import { View, Text, StyleSheet} from 'react-native';

const MasterPartsScreen = props => {
    return (
        <View style={styles.screen}>
            <Text>Master Parts Page</Text>
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

export default MasterPartsScreen;