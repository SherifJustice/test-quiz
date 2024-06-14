import { createSlice } from '@reduxjs/toolkit'
import { questionsState } from './types'
import { getProgressFromLS } from '../utils/getProgressFromLS.1'

// Initial state
const initialState: questionsState = getProgressFromLS()

// Reducers

export const questionSlice = createSlice({
	name: 'questions',
	initialState,
	reducers: {
		setCurrentQuestion(state, action) {
			state.currentQuestion = action.payload
		},
		setResult(state, action) {
			state.result = action.payload
		},
		setAnswers(state, action) {
			state.answers = [...state.answers, action.payload]
		},
		createQuestion(state, action) {
			state.questions = [...state.questions, action.payload]
		},
	},
})

// Selectors
export const selectQuestionsData = (state: { questions: questionsState }) => {
	return state.questions
}

// Actions

export const { setCurrentQuestion, createQuestion, setAnswers, setResult } =
	questionSlice.actions

export default questionSlice.reducer
