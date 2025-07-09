import React,{useEffect,useState} from 'react'
import { Pagination,Box,Stack,Typography } from '@mui/material'
import { exercisesOptions,fetchData } from '../utils/fetchData'
import ExerciseCard from './ExerciseCard'



const Exercises = ({exercises,setExercises,bodyPart}) => {
  const [currentPage, setCurrentPage] = useState(1)
  const exercisesPerPage = 9
  const indexOfLastExercise = currentPage * exercisesPerPage
  const indexOfFirstExercise = indexOfLastExercise - exercisesPerPage
  const currentExercises = exercises.slice(indexOfFirstExercise,indexOfLastExercise)
  
  const paginate =(e,value) =>{
    setCurrentPage(value)
    window.scrollTo({top:1800,behavior:"smooth"})
  } 
  useEffect(()=>{
    let exercisesData = []
    const fetchExercisesData =async()=>{
      if(bodyPart==='all'){
        exercisesData= await fetchData(
        'https://exercisedb.p.rapidapi.com/exercises?limit=1500',exercisesOptions
        )
        console.log('1 ',);
        console.log(exercisesData);
        
      } else {
        exercisesData = await fetchData(
          `https://exercisedb.p.rapidapi.com/exercises/bodyPart/${bodyPart}?limit=1500`,exercisesOptions
        )
        console.log('2 ',);
        console.log(exercisesData);
        
      }
      setExercises(exercisesData)
    }
    fetchExercisesData();
  },[bodyPart])

  return (
    <Box 
      id='exercises'
      sx={{mt:{lg:"110"}}}
      mt="50px"
      p="20px"
    >
      <Typography variant='h3' mb='46px'>
        Show Result
      </Typography>
      <Stack 
        direction='row'
        sx={{gap:{lg:"110px",xs:"50px"}}}
        flexWrap='wrap'
        justifyContent="center"
      >
        {
          currentExercises.map((exercise,index)=>(
            <ExerciseCard key={index} exercise={exercise}/>
          ))
        }
      </Stack>
      <Stack mt="100px" alignItems="center">
        {
          exercises.length > exercisesPerPage && (
            <Pagination
              color='standard'
              shape='rounded'
              defaultPage={1}
              count={Math.ceil(exercises.length/exercisesPerPage)}
              page={currentPage}
              onChange={paginate}
              size='large'
            />
          )
        }
      </Stack>
    </Box>
  )
}

export default Exercises