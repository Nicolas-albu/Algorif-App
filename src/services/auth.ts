import { createUserWithEmailAndPassword, Auth } from 'firebase/auth'
import { ref, uploadBytes } from 'firebase/storage'
import { doc, setDoc } from 'firebase/firestore'

import { database, storage } from './firebase'

type UserInformations = {
  email: string
  password: string
  userName: string
  state: string
  city: string
}

type AuthData = {
  userInformations: UserInformations
  auth: Auth
}

export const AuthService = {
  register: async function ({ userInformations, auth }: AuthData) {
    await createUserWithEmailAndPassword(
      auth,
      userInformations.email,
      userInformations.password,
    )

    await setDoc(doc(database, 'coders', auth.currentUser!.uid), {
      email: userInformations.email,
      userName: userInformations.userName,
      state: userInformations.state,
      city: userInformations.city,
      phone: '',
      teacher: false,
      score: 0,
    })

    const taskRef = doc(database, 'taskSolved', auth.currentUser!.uid)
    await setDoc(taskRef, {})

    const submissionsRef = doc(database, 'submissions', auth.currentUser!.uid)
    await setDoc(submissionsRef, {})

    const storageRef = ref(storage, auth.currentUser!.uid + '.png')
    await uploadBytes(storageRef, new Blob())
  },
}
