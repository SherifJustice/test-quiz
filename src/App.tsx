import React from 'react'
import Result from './components/Result'
import Test from './components/Test'
import './scss/App.scss'

import { useSelector } from 'react-redux'
import { useAppDispatch } from './redux/store'
import {
	selectQuestionsData,
	setAnswers,
	setCurrentQuestion,
	setResult,
} from './redux/questionSlice'

function App() {
	const { currentQuestion, questions, answers, result } =
		useSelector(selectQuestionsData)
	const dispatch = useAppDispatch()
	const saveProgress = React.useRef(false)

	React.useEffect(() => {
		localStorage.setItem('questions', JSON.stringify(questions))
		if (saveProgress.current) {
			localStorage.setItem(
				'progress',
				JSON.stringify({ currentQuestion, result })
			)
			localStorage.setItem('answers', JSON.stringify({ answers }))
		}
		saveProgress.current = true
		if (currentQuestion === questions.length) {
			localStorage.removeItem('progress')
		}
	}, [currentQuestion, answers, questions])

	const question = questions[currentQuestion]
	const progress = Math.round((currentQuestion / questions.length) * 100)

	const onAnswerClick = (index: number) => {
		dispatch(setAnswers(index))
		if (index === question.correct) {
			dispatch(setResult(result + 1))
		}
		console.log(index, question.correct)
	}
	const onNextClick = () => {
		dispatch(setCurrentQuestion(currentQuestion + 1))
	}

	return (
		<div className="App">
			{currentQuestion !== questions.length ? (
				<Test
					onNextClick={onNextClick}
					{...question}
					progress={progress}
					onAnswerClick={onAnswerClick}
				/>
			) : (
				<Result />
			)}
		</div>
	)
}

export default App
