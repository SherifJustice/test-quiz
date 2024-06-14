import React from 'react'
import { useSelector } from 'react-redux'
import { selectQuestionsData } from '../redux/questionSlice'

const Result: React.FC = () => {
	const { result, questions } = useSelector(selectQuestionsData)
	return (
		<div className="result">
			<img src="https://cdn-icons-png.flaticon.com/512/2278/2278992.png" />
			<h2>
				Вы отгадали {result} ответа из {questions.length}
			</h2>
			<a href="/">
				<button>Попробовать снова</button>
			</a>
		</div>
	)
}

export default Result
