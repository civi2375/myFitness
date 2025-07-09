import React from 'react'
import { Route,Routes } from 'react-router-dom'
import { Box } from '@mui/material'
import './App.css'
import NavBar from './components/NavBar'
import Home from './Pages/Home'
import ExerciseDetail from './Pages/ExerciseDetail'
import Footer from './components/Footer'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

const queryClient = new QueryClient()

const App = () => {
  return (
    <QueryClientProvider  client = {queryClient}>
      <Box width="400px"sx={{width:{xl:'1488px'}}} m="auto">
          <NavBar/>
          <Routes>
              <Route path='/' element={<Home/>}/>
              <Route path='/exercise/:id' element={<ExerciseDetail/>}/>
          </Routes>
          <Footer/>
      </Box>
    </QueryClientProvider>
  )
}

export default App