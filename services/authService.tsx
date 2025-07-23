import { auth } from "../firebase";
import { signInWithEmailAndPassword, createUserWithEmailAndPassword, updateProfile } from "firebase/auth";

export const loginUser = async (email: string, password: string) => {
    try {
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        return userCredential.user;
    } 
    catch (error) {
        console.error('Login error:', error);
        throw error;
    }
}

export const signUp = async (email: string, password: string, username: string) => {
    try {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        if (auth.currentUser) {
            await updateProfile(auth.currentUser, { displayName: username });
        }
        return userCredential.user;
    } catch (error) {
        console.error('Sign up error:', error);
        throw error;
    }
}

export const signOutUser = async () => {
    try {
        await auth.signOut();
    } catch (error) {
        console.error('Sign out error:', error);
        throw error;
    }
}   