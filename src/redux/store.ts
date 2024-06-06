import { configureStore } from '@reduxjs/toolkit'
import { useDispatch } from 'react-redux'
import questions from './questionSlice'

export const store = configureStore({
	reducer: { questions },
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch
export const useAppDispatch = () => useDispatch<AppDispatch>()
