import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Button,Stack,Typography } from '@mui/material'
import { exercisesOptions } from '../utils/fetchData'

const ExerciseCard = ({exercise}) => {
    const [imgURL, setImgURL] = useState(null)
    useEffect(() => {
        fetch(`https://exercisedb.p.rapidapi.com/image?exerciseId=${exercise.id}&resolution=720&rapidapi-key=${process.env.REACT_APP_RAPID_API_KEY}`, exercisesOptions) 
            .then(response => response.blob())
            .then(blob => {
                const url = URL.createObjectURL(blob);
                setImgURL(url);
            })
            .catch(error => console.error('Fetch error:', error));
    }, [exercise.id]);
    
    return (
    <Link className='exercise-card' to={`/exercise/${exercise.id}`}>
        
        <img src={imgURL} alt={exercise.name} loading='lazy' />
        <Stack direction='row'>
            <Button 
                sx={{
                    ml:'21px',
                    color:"#fff",
                    background:'#ffa9a9',
                    fontSize:"14px",
                    borderRadius:"20px",
                    textTransform:"capitalize"
                }}>
                {exercise.bodyPart}
            </Button>
            <Button 
                sx={{
                    ml:'21px',
                    color:"#fff",
                    background:'#fcc757',
                    fontSize:"14px",
                    borderRadius:"20px",
                    textTransform:"capitalize"
                }}>
                {exercise.target}
            </Button>
        </Stack>
        <Typography 
            ml="21px" 
            color="#000" 
            fontWeight="bold"
            mt="11px"
            pb="10px"
            textTransform="capitalize"
            fontSize="22px"
        >
            {exercise.name}
        </Typography>
    </Link>
  )
}

export default ExerciseCard