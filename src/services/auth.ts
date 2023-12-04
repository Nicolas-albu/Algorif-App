import { signInWithEmailAndPassword } from 'firebase/auth'
import { NextOrObserver, User } from '@firebase/auth'

import { auth as firebaseAuth } from './firebase'

export const auth = () => ({
  signInWithEmailAndPassword: async (email: string, password: string) => {
    await signInWithEmailAndPassword(firebaseAuth, email, password)
  },
  onAuthStateChanged: (setUser: NextOrObserver<User | null>) => {
    firebaseAuth.onAuthStateChanged(setUser)
  },
})
