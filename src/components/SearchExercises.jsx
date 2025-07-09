import React,{useEffect,useState} from 'react'
import { Box,Button,Stack,TextField,Typography } from '@mui/material'
import { fetchData,exercisesOptions } from '../utils/fetchData'
import HorizontalScollbar from './HorizontalScollbar'
import Exercises from './Exercises'

const SearchExercises = ({setExercises,bodyPart,setBodyPart}) => {
    const[search,setSearch]=useState('')
    const[bodyParts,setBodyParts] =useState([])
    useEffect(()=>{
        const fetchExercisesData = async () =>{
            const bodyPartsData =await fetchData('https://exercisedb.p.rapidapi.com/exercises/bodyPartList',exercisesOptions)
            setBodyParts(['all',...bodyPartsData])
        }
        fetchExercisesData()
    },[])

    const handleSearch = async()=>{
        if(search){
            const exercisesData = await fetchData(
                'https://exercisedb.p.rapidapi.com/exercises?limit=1500',exercisesOptions
            )
            console.log(exercisesData)
            const searchedExercises = exercisesData.filter(
                (item) => item.name.toLowerCase().includes(search)
                       || item.target.toLowerCase().includes(search)
                       || item.equipment.toLowerCase().includes(search)
                       || item.bodyPart.toLowerCase().includes(search),
            );            
            
            setSearch('')        
            setExercises(searchedExercises);
        }
    }

  return (
    <Stack alignItems='center' mt='37px' justifyContent='center' p="20">
        <Typography fontWeight={700} sx={{fontSize:{lg:'44px',xs:'30px'}}} mb='50px' textAlign='center'>
            Awesome Exercises You <br /> Should Know
        </Typography>
        <Box position='relative' mb='72px'>
            <TextField
                sx={{
                    input:{fontWeight:'700',border:'none',borderRadius:'4px'},
                    width:{lg:'800px',xs:'350px'},
                    background:'#fff',
                    borderRadius:'40px'
                }} 
                height='76px' 
                value={search}
                onChange={(e)=>{setSearch(e.target.value.toLowerCase())}}
                placeholder='Search Exercises'
                type='text'
            />
            <Button className='search-btn' 
                onClick={handleSearch}
                sx={{
                    bgcolor:'#ff2625',
                    color:'#fff',
                    textTransform:'none',
                    width:{lg:'175px',xs:'80px'},
                    fontSize:{lg:"20px",xs:'14px'},
                    height:'56px',
                    position:'absolute',
                    right:0
                }}>
                Search
            </Button>
        </Box>
        <Box sx={{position:'relative',width:'100%',p:'20px'}}>
            <HorizontalScollbar data={bodyParts} bodyPart={bodyPart} setBodyPart={setBodyPart} isBodyParts/>
        </Box>
    </Stack>
  )
}

export default SearchExercises