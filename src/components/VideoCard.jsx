import {useEffect,useState} from 'react'
import { Link } from 'react-router-dom';
import { Typography, Card, CardContent, CardMedia } from "@mui/material";
import { CheckedCircle } from "@mui/icons-material";

import {
  demoChannelTitle, demoThumbnailUrl,
  demoVideoTitle, demoVideoUrl,
  demoChannelUrl
} from "../utils/constants";
const VideosCard = ({video}) => {
  const [chnnelDitels,setchnnelDitels]=useState()
   //console.log(video)
  const snippet = video.snippet
  const thumbnails = video.snippet.thumbnails
  const high = video.snippet.thumbnails.high
  const url = video.snippet.thumbnails.high.url
  const channelId=video.snippet.channelId;
  //console.log(channelId)

  // useEffect(()=>{
  //   dataFromApi(`/channels?part=snippet,statistics&id=${channelId}`)
  //   .then((data)=>setchnnelDitels(data.items))
  // })

//if(!chnnelDitels)return 'Loading...'

// console.log(chnnelDitels)
  return (
    <Card sx={{width:{sx:'100%',sm:'385',md:'380px'},margin:'10px'}} >
      
      <Link to={video.id.videoId ? `/video/${video.id.videoId}` : `${demoChannelUrl}`} >
        <CardMedia image={snippet?.thumbnails?.high?.url}
          sx={{ width: {sx:'100%',sm:'385',md:'380px'}, height: 200 }}
        />
        <CardContent sx={{backgroundColor:'#fff6',height:'106px'}}>
          {/* ------------ */}
          
          {/* ------------ */}
          <Link to={video.id.videoId ? `/video/${video.id.videoId}` : `${demoVideoUrl}`}>
            <Typography variant='subtitle1'
            fontWeight="bold" color="black">
              {snippet?.title.slice(0,70)||demoVideoTitle}
            </Typography>
          </Link>
          <Link to={snippet.channelId ? `/channel/${snippet.channelId}` : `${demoVideoUrl}`}>
            <Typography variant='subtitle2'
            fontWeight="bold" color="gray"
            >
              {snippet?.channelTitle.slice(0,40)||demoChannelTitle}
            </Typography>
          </Link>
        </CardContent>
      </Link>
    </Card>
  )
}

export default VideosCard