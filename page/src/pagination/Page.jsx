import {Box, Button, Card, CardContent, CardMedia, Grid } from '@mui/material'
import SendIcon from '@mui/icons-material/Send'
import {movies} from '../../public/list'
import { useEffect, useState } from 'react'
const Page = () => {
    
    const [dataArr,setDataArr] = useState([])
    const [displayArr,setDisplayArr] = useState([])
    const [totalPages,setTotalPages] = useState([])
    const [currentPage,setcurrentPage] = useState(1)
    console.log(totalPages,currentPage)
    useEffect(()=>{
        setDataArr(movies)
        // setDisplayArr()
    },[])
    useEffect(()=>{
        const itemsPP = 4;
        const noOfPages = Math.ceil((dataArr.length)/4)
        setTotalPages(noOfPages)
        console.log( Array.from(noOfPages))
        const indexOfLast = (currentPage*itemsPP)  ;
        const indexOfFirst = indexOfLast - itemsPP;
        const arr = dataArr.slice(indexOfFirst,indexOfLast)
        console.log(indexOfFirst,indexOfLast,arr)
        setDisplayArr(arr)
    },[currentPage,dataArr])

    return (
        <div>
                        <div>


            {currentPage !== 1 ? <Button onClick={()=>setcurrentPage(currentPage != 1 ? currentPage-1 : currentPage)}>prev</Button> : <></>}
            {[...Array(totalPages)].map((element,index) => {
                return <Button onClick={()=>setcurrentPage(index+1)}>{index+1}</Button>
            })}
{currentPage !== totalPages ? <Button onClick={()=>setcurrentPage(currentPage != totalPages ? currentPage+1 : currentPage)}>next</Button> : <></>}
            </div>
            <Grid container spacing={3}>
            {displayArr.map((element,index) => {
                const {poster,genre,character,name} = element;
                return <Grid item md={3}>
                    <Card>
                    <Box sx={{display:'flex',justifyContent:'center'}}>
                <CardMedia component="img" image={dataArr[0].poster} width={'20%'}/>
                </Box>
                <CardContent>
                    <h4>{name}</h4>
                    <p>{character}</p>
                    <p>{genre}</p>
                    <Button endIcon={<SendIcon />}>Watch Now</Button>
                </CardContent>
            </Card>
            </Grid>
            })}
            </Grid>

        </div>
        
        
    )
}
export default Page