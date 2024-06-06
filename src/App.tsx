import Result from './components/Result'
import Test from './components/Test'
import './scss/App.scss'

import { useSelector } from 'react-redux'
import { useAppDispatch } from './redux/store'
import {
	selectQuestionsData,
	setAnswers,
	setCurrentQuestion,
} from './redux/questionSlice'

function App() {
	const { currentQuestion, questions, answers } =
		useSelector(selectQuestionsData)
	const dispatch = useAppDispatch()

	const question = questions[currentQuestion]
	const progress = Math.round((currentQuestion / questions.length) * 100)

	const onAnswerClick = (index: number) => {
		dispatch(setCurrentQuestion(currentQuestion + 1))
		if (index === question.correct) {
			dispatch(setAnswers(answers + 1))
		}
	}

	return (
		<div className="App">
			{currentQuestion !== questions.length ? (
				<Test {...question} progress={progress} onAnswerClick={onAnswerClick} />
			) : (
				<Result />
			)}
		</div>
	)
}

export default App
