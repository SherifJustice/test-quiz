import React from 'react'

type TestProps = {
	title: string
	variants: string[]
	progress: number
	onAnswerClick: (index: number) => void
}

const Test: React.FC<TestProps> = ({
	progress,
	title,
	variants,
	onAnswerClick,
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
			</ul>
		</>
	)
}

export default Test
