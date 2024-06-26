export type Question = {
	title: string
	variants: string[]
	correct: number
}

export interface questionsState {
	questions: Question[]
	currentQuestion: number
	answers: number[] | string
	result: number
}

export const questionsData: Array<Question> = [
	{
		title: 'React - это ... ?',
		variants: ['библиотека', 'фреймворк', 'приложение'],
		correct: 0,
	},
	{
		title: 'Компонент - это ... ',
		variants: [
			'приложение',
			'часть приложения или страницы',
			'то, что я не знаю что такое',
		],
		correct: 1,
	},
	{
		title: 'Что такое JSX?',
		variants: [
			'Это простой HTML',
			'Это функция',
			'Это тот же HTML, но с возможностью выполнять JS-код',
		],
		correct: 2,
	},
	{
		title: 'Какого цвета бананы?',
		variants: ['Красный', 'Чёрный', 'Хороший', 'Синий'],
		correct: 2,
	},
	{
		title: 'Какого цвета бананы?',
		variants: ['Красный', 'Чёрный', 'Хороший', 'Синий'],
		correct: 2,
	},
]
