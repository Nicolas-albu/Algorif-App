import { getDocs, collection, doc, getDoc } from 'firebase/firestore'

import { database, FirebaseTypes } from '@services/firebase'

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
  getQuestions: async function (
    CategoryName: string,
  ): Promise<FirebaseTypes.Question[]> {
    const categoriesRef = doc(database, 'categories', CategoryName)
    const data = await getDoc(categoriesRef)

    return data.data()?.questions
  },
}
