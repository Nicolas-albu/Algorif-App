import {
  getDocs,
  collection,
  doc,
  getDoc,
  serverTimestamp,
  updateDoc,
  increment,
} from 'firebase/firestore'

import type { DatabaseTypes } from '@services/database'
import { database, auth } from '@services/firebase'

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
  ): Promise<DatabaseTypes.Question[]> {
    const categoriesRef = doc(database, 'categories', CategoryName)
    const data = await getDoc(categoriesRef)

    return data.data()?.questions
  },
  setQuestionStatus: async function (
    nameQuestion: string,
    isCorrect: boolean,
    difficulty: string,
    category: string,
    code: string,
  ) {
    const questionsSolvedRef = doc(
      database,
      'taskSolved',
      auth.currentUser!.uid,
    )
    const submissionsRef = doc(database, 'submissions', auth.currentUser!.uid)
    const actualDate = serverTimestamp()

    const updateQuestionsSolved = updateDoc(questionsSolvedRef, {
      [nameQuestion]: {
        difficultQuestion: difficulty,
        completed: isCorrect,
        date: actualDate,
        topic: category,
      },
      [difficulty + 'Submissions']: increment(1),
    })

    const updateSubmissions = updateDoc(submissionsRef, {
      [nameQuestion]: {
        correctCode: isCorrect,
        code,
      },
    })

    Promise.all([updateQuestionsSolved, updateSubmissions])
  },
}
