/* eslint-disable no-mixed-spaces-and-tabs */
import { Question, questionsData, questionsState } from '../redux/types'

export const getProgressFromLS = () => {
	const data = localStorage.getItem('progress')
	const questions: Question[] = JSON.parse(
		localStorage.getItem('questions') || '[]'
	)
	const progress: questionsState = data
		? JSON.parse(data)
		: {
				currentQuestion: 0,
				result: 0,
				answers: [],
		  }

	return {
		questions: questionsData || (questions as Question[]),
		currentQuestion: progress.currentQuestion,
		result: progress.result,
		answers: progress.answers || 'string',
	}
}
