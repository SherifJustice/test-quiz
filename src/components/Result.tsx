import React from 'react'
import { useSelector } from 'react-redux'
import { selectQuestionsData } from '../redux/questionSlice'

const Result: React.FC = () => {
	const { answers, questions } = useSelector(selectQuestionsData)
	return (
		<div className="result">
			<img src="https://cdn-icons-png.flaticon.com/512/2278/2278992.png" />
			<h2>
				Вы отгадали {answers} ответа из {questions.length}
			</h2>
			<button>Попробовать снова</button>
		</div>
	)
}

export default Result
