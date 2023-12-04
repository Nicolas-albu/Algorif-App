/* eslint-disable @typescript-eslint/no-namespace */
export namespace DatabaseTypes {
  export type Test = {
    input: string
    output: string
  }

  export type Question = {
    detailedDescription: string
    description: string
    difficulty: string
    creator: string
    title: string
    topic: string
    code: string
    test: Test[]
  }
}
