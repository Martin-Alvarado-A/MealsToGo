import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    SafeAreaView,
    Platform,
    StatusBar,
} from 'react-native';

export default function App() {
    return (
        <SafeAreaView style={styles.app}>
            <View style={styles.app__search}>
                <Text> Search </Text>
            </View>
            <View style={styles.app__list}>
                <Text> List </Text>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    app: {
        flex: 1,
        paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    },
    app__search: {
        padding: 10,
    },
    app__list: {
        flex: 1,
        padding: 10,
    },
});
