import React from 'react'

type TestProps = {
	title: string
	variants: string[]
	progress: number
	onAnswerClick: (index: number) => void
	onNextClick: () => void
}

const Test: React.FC<TestProps> = ({
	progress,
	title,
	variants,
	onAnswerClick,
	onNextClick,
}) => {
	return (
		<>
			<div className="progress">
				<div
					style={{ width: `${progress}%` }}
					className="progress__inner"
				></div>
			</div>
			<h1>{title}</h1>
			<ul>
				{variants.map((text, index) => (
					<li onClick={() => onAnswerClick(index)} key={text}>
						{text}
					</li>
				))}
				<button onClick={onNextClick}>Продолжить</button>
			</ul>
			<label className="container">
				Один
				<input type="checkbox" />
				<span className="checkmark"></span>
			</label>

			<div className="text-field">
				<input className="text-field__input" type="text" />
			</div>
		</>
	)
}

export default Test
