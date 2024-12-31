import {Box, Button, Card, CardContent, CardMedia, Grid, Skeleton } from '@mui/material'
import SendIcon from '@mui/icons-material/Send'
import {movies} from '../../public/list'
import { useEffect, useState } from 'react'
import axios from 'axios'
const SkeletonTag = () => {
    const [loading,setLoading] = useState(true)
    const [dataArr,setDataArr] = useState([])
    const fetchData = async ()=>{
        try{
            const data = await fetch('https://randomuser.me/api/0.8/?results=10');
            const newData = await data.json()
            if(newData){
                setDataArr(newData.results)
                setLoading(false)
            }
        }catch(error){
            console.log(error)
        }
    }
    useEffect(()=> {
        fetchData()
    },[])

    return (
        <div>
        {loading ? 
            <div style={{display:'flex',gap:'25px'}}>
            <Skeleton animation="wave" variant='rectangle' height={'50px'} width={'20%'}/> 
            <Skeleton animation="wave" variant='rectangle' height={'50px'} width={'20%'}/> 
            <Skeleton animation="wave" variant='rectangle' height={'50px'} width={'20%'}/> 
            <Skeleton animation="wave" variant='rectangle' height={'50px'} width={'20%'}/> 
            </div>:
            <div>
            <Grid container spacing={3}>
            {dataArr.map((element,index) => {
                const {picture,email,gender,phone} = element.user;
                return <Grid item md={3}>
                    <Card>
                    <Box sx={{display:'flex',justifyContent:'center'}}>
                    {loading ? 
                <Skeleton animation="wave" height={'50px'} width={'20%'}/>
                    :<CardMedia component="img" image={picture.medium} width={'20%'}/>  
                    }
                </Box>
                <CardContent>
                    <h4>{phone}</h4>
                    <p>{gender}</p>
                    <p>{email}</p>
                    <Button endIcon={<SendIcon />}>Watch Now</Button>
                </CardContent>
            </Card>
            </Grid>
            })}
            </Grid>
            </div>}
            </div> 
    )
}

export default SkeletonTag
