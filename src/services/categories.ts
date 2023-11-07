import { getDocs, collection } from 'firebase/firestore'

import { database } from '../services/firebase'

export const CategoryService = {
  getAll: async function (): Promise<string[]> {
    const categoriesRef = collection(database, 'categories')
    const data = await getDocs(categoriesRef)
    const categories: string[] = []

    data.forEach((category) => {
      categories.push(category.id)
    })

    return categories
  },
}
