import React, {useRef, useState} from 'react';
import {
    Platform,
    Pressable,
    SafeAreaView,
    StyleSheet, Text, TextInput,
    View,
} from 'react-native';

function App(): React.JSX.Element {
    const inputRef = useRef<TextInput>(null);
    const [showPass, setShowPass] = useState(false);
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.inputContainer}>
                <View>
                    <View style={{
                        width: '100%',
                        borderRadius: 5,
                        marginVertical: 10,
                        flexDirection: 'row',
                        paddingHorizontal: 5,
                        borderWidth: 1,
                        borderColor: 'blue',
                    }}>
                        <TextInput
                            ref={inputRef}
                            style={{
                                flex: 1,
                                color: 'red',
                                paddingTop: Platform.OS === 'ios' ? 15 : undefined,
                                paddingBottom: Platform.OS === 'ios' ? 15 : undefined,
                                paddingHorizontal: Platform.OS === 'ios' ? 5 : undefined,
                            }}
                            secureTextEntry={!showPass}
                            onChangeText={v => {
                                let value = v;
                                inputRef.current?.setNativeProps({text: value});
                            }}
                        />
                        <Pressable onPress={() => setShowPass(!showPass)} style={{
                            marginStart: 'auto',
                            marginHorizontal: 10,
                            justifyContent: 'center',
                        }}>
                            <Text>{showPass ? "Hide" : "Show"}</Text>
                        </Pressable>
                    </View>
                </View>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    inputContainer: {
        width: '80%',
    },
    textInput: {
        height: 40,
        borderColor: '#ccc',
        color: 'red',
        borderWidth: 1,
        marginBottom: 12,
        paddingHorizontal: 10,
    },
});

export default App;
