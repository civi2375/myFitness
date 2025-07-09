import React from 'react'
import { Typography,Stack,Button } from '@mui/material'
import BodyPartImage from '../assets/icons/body-part.png'
import TargetImage from '../assets/icons/target.png'
import EquipmentImage from '../assets/icons/equipment.png'

const Detail = ({ exerciseDetail,id }) => {
    const resolution = "360"
    const imgURL = `https://exercisedb.p.rapidapi.com/image?exerciseId=${id}&resolution=${resolution}&rapidapi-key=${process.env.REACT_APP_RAPID_API_KEY}`
    const {bodyPart,name,target,eqipment} = exerciseDetail
    const extraDetail = [
        {
            icon:BodyPartImage,
            name:bodyPart
        },
        {
            icon:TargetImage,
            name:target
        },
        {
            icon:EquipmentImage,
            name:eqipment
        }
    ]

    return (
    <Stack gap='60px' sx={{flexDirection:{lg:"row"},p:"20px",alignItems:"center"}}>
        <img src={imgURL} alt={name} loading='lazy' className='detail-image' />
        <Stack sx={{gap:{lg:"35px",xs:"20px"}}}>
            <Typography variant='h3'>
                {name}
            </Typography>
            <Typography variant='h6'>
                Exercises keep you strong
                {name} {` `} is one of the best
                exercises to target your {target}.
                It will help you improve 
                your mood and gain energy
            </Typography>
            {
                extraDetail.map((item)=>(
                    <Stack key={item.name} direction='row' gap='24px' alignItems='center'> 
                        <Button sx={{background:"#fff2db",borderRadius:"50%",width:"100px",height:"100px"}}>
                            <img src={item.icon} alt={bodyPart} style={{width:"50px",height:"50px"}} />
                        </Button>
                        <Typography variant='h5' textTransform="capitalize">
                            {item.name}
                        </Typography>
                    </Stack>
                ))
            }
        </Stack>
    </Stack>
  )
}

export default Detail