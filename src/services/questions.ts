import { getDocs, collection, doc, getDoc } from 'firebase/firestore'
import { database, auth } from '@services/firebase'

type Test = {
  input: string
  output: string
}

export type QuestionTypeFirestore = {
  title: string
  topic: string
  code: string
  creator: string
  description: string
  detailedDescription: string
  difficulty: string
  test: Test[]
}

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
  ): Promise<QuestionTypeFirestore[]> {
    const categoriesRef = doc(database, 'categories', CategoryName)
    const data = await getDoc(categoriesRef)

    return data.data()?.questions
  },
  getQuestionsSolved: async function () {
    console.log(auth.currentUser!.uid)
  },
}
