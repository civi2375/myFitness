import React,{useEffect,useState} from 'react'
import { useParams } from 'react-router-dom'
import { Box } from '@mui/material'
import {fetchData,exercisesOptions, youtubeOptions} from '../utils/fetchData'
import Detail from '../components/Detail'
import ExerciseVideos from '../components/ExerciseVideos'
import SimilarExercises from '../components/SimilarExercises'

const ExerciseDetail = () => {
  const [exerciseDetail, setexerciseDetail] = useState({})
  const [exerciseVideo, setexerciseVideo] = useState([])
  const [target, setTarget] = useState([])
  const [equipment, setEquipment] = useState([])
  const { id } = useParams()

  useEffect(()=>{
    const fetchExercisesData = async () =>{
      const exerciseDbUrl = 'https://exercisedb.p.rapidapi.com';
      const youtubeSearchUrl = 'https://youtube-search-and-download.p.rapidapi.com'
      
      const exerciseDetailData = await fetchData(`${exerciseDbUrl}/exercises/exercise/${id}`,exercisesOptions)
      setexerciseDetail(exerciseDetailData)
      
      const exerciseVideoData = await fetchData(`${youtubeSearchUrl}/search?query=${exerciseDetail.name}`,youtubeOptions)
      setexerciseVideo(exerciseVideoData.contents)

      const targetData = await fetchData(`${exerciseDbUrl}/exercises/target/${exerciseDetailData.target}`,exercisesOptions)
      setTarget(targetData)
      
      const equipmentData = await fetchData(`${exerciseDbUrl}/exercises/equipment/${exerciseDetailData.equipment}`,exercisesOptions)
      setEquipment(equipmentData)
    } 
    fetchExercisesData();
  },[id])

  
  return (
    <Box>
      <Detail exerciseDetail={exerciseDetail} id={id}/>
      <ExerciseVideos exerciseVideo={exerciseVideo} name={exerciseDetail.name}/>
      <SimilarExercises target={target} equipment={equipment}/>
    </Box>
  )
}

export default ExerciseDetail