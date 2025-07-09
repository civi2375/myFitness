import React from 'react'
import { Box,Stack,Typography } from '@mui/material'

import HorizontalScrollbar from './HorizontalScollbar'
import Loader from './Loader'

const SimilarExercises = ({target,equipment}) => {
  return (
    <Box sx={{mt:{lg:"100px",xs:"0"}}}>
      <Typography variant='h3' mb={5}>Exercises that target the same muscle group</Typography>
      <Stack direction="row" sx={{P:"2",position:"relative"}}>
        {
          target.length ? 
          <HorizontalScrollbar data={target}/>:
          <Loader/>          
        }
      </Stack>
      <Typography variant='h3' mb={5}>Exercises that target the same equipment</Typography>
      <Stack direction="row" sx={{P:"2",position:"relative"}}>
        {
          target.length ? 
          <HorizontalScrollbar data={equipment}/>:
          <Loader/>          
        }
      </Stack>

    </Box>  
  )
}

export default SimilarExercises