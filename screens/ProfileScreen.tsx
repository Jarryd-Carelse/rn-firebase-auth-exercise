import { StyleSheet, Text, View, Button, SafeAreaView, TouchableOpacity } from 'react-native'
import React from 'react'
import { auth } from '../firebase';
import { signOutUser } from '../services/authService';
import { colors } from '../theme';

const ProfileScreen = () => {
    const handleLogout = async () => {
        try {
            await signOutUser();
        } catch (error) {
        }
    }

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: colors.background }}>
            <View style={styles.container}>
                <Text style={styles.welcome}>
                  {auth.currentUser?.displayName ? `Welcome back, ${auth.currentUser.displayName}!` : 'Welcome back!'}
                </Text>
                <Text style={styles.title}>Profile</Text>
                <Text style={styles.emailLabel}>Email:</Text>
                <Text style={styles.email}>{auth.currentUser?.email || 'Not logged in'}</Text>
                <TouchableOpacity style={styles.button} onPress={handleLogout}>
                    <Text style={styles.buttonText}>Sign Out</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 20,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    welcome: {
        fontSize: 24,
        color: colors.secondary,
        fontWeight: 'bold',
        marginBottom: 18,
        textAlign: 'center',
    },
    title: {
        fontSize: 32,
        color: colors.primary,
        fontWeight: 'bold',
        marginBottom: 30,
        textAlign: 'center',
    },
    emailLabel: {
        fontSize: 18,
        color: colors.secondary,
        marginBottom: 4,
        fontWeight: 'bold',
    },
    email: {
        fontSize: 20,
        color: colors.text,
        marginBottom: 30,
    },
    button: {
        backgroundColor: colors.secondary,
        borderRadius: 8,
        padding: 14,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 2,
        width: 180,
    },
    buttonText: {
        color: colors.buttonText,
        fontWeight: 'bold',
        fontSize: 18,
        letterSpacing: 1,
        textAlign: 'center',
    },
    username: {
        fontSize: 22,
        color: colors.primary,
        fontWeight: 'bold',
        marginTop: 10,
    },
});

export default ProfileScreen;