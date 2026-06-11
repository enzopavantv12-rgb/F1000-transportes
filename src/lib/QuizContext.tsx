import { createContext, useContext } from 'react'

export const QuizContext = createContext<() => void>(() => {})

export function useQuiz() {
  return useContext(QuizContext)
}
