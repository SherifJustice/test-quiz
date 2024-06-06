import { createSlice } from '@reduxjs/toolkit'
import { questions, questionsState } from './types'

// Initial state
const initialState: questionsState = {
	questions: questions,
	currentQuestion: 0,
	answers: 0,
}

// Reducers

export const questionSlice = createSlice({
	name: 'questions',
	initialState,
	reducers: {
		setCurrentQuestion(state, action) {
			state.currentQuestion = action.payload
		},
		setAnswers(state, action) {
			state.answers = action.payload
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

export const { setCurrentQuestion, createQuestion, setAnswers } =
	questionSlice.actions

export default questionSlice.reducer
