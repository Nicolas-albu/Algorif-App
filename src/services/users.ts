import { doc, getDoc, updateDoc } from 'firebase/firestore'

import { auth, database } from '@services/firebase'

export const UserServices = {
  updateScore: async () => {
    const scoreRef = doc(database, 'coders', auth.currentUser!.uid)
    const scoreActual = await getDoc(scoreRef)
    const newScore = scoreActual.data()?.score + 1

    await updateDoc(scoreRef, { score: newScore })
  },
}
