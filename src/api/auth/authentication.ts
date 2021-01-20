import { auth, twitterAuthProvider } from "@api/firebase_config";

export type UserCredential = {
  displayName: string | null | undefined;
  uid: string | null | undefined;
};

const login = () => auth.signInWithPopup(twitterAuthProvider);
const logout = () => auth.signOut();

export { login, logout };
