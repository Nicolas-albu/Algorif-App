import { getDocs, collection } from 'firebase/firestore'
import { database, auth } from '../services/firebase'

export const QuestionService = {
  getSuggestions: async function (): Promise<string[]> {
    const categoriesRef = collection(database, 'categories')
    const data = await getDocs(categoriesRef)
    const categories: string[] = []

    data.forEach((category) => {
      categories.push(category.id)
    })

    return categories
  },
  getQuestionsSolved: async function () {
    console.log(auth.currentUser!.uid)
  },
}
