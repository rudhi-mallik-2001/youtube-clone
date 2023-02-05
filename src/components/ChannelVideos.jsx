import React from 'react'
import { Link } from "react-router-dom";
import { CheckCircle } from "@mui/icons-material";

import { Card, Typography, CardMedia, CardContent, Box } from '@mui/material';
const ChannelVideos = ({ channelDetail }) => {
  const snippet = channelDetail.snippet
  const thumbnails = channelDetail.snippet.thumbnails
  const high = channelDetail.snippet.thumbnails.high
  const url = channelDetail.snippet.thumbnails.high.url
  const title=channelDetail.snippet.title
  console.log(title)
  return (
    <Box
      sx={{ width: { sx: "100%" },display:'flex',flexDirection:'column',alignItems:'center',
      justifyContent:'center',textAlign:'center',height:"326px"}}
    >
      <Link to={`/channel/${""}`}
      >
        <CardContent 
        sx={{display:'flex',flexDirection:'column',alignItems:'center',
        justifyContent:'center',textAlign:'center',color:"#FFF",marginTop:'-250px'}}>
          <CardMedia image={snippet?.thumbnails?.high?.url}
          sx={{ width: 180, height: 180 ,borderRadius:"50%"}}/>
          <Typography variant="h6">
            {title}
            <CheckCircle
            sx={{fontSize:'12px',color:'gray',ml:'5px'}}
            />
          </Typography>
        </CardContent>
      </Link>
      </Box>
  )
}

export default ChannelVideos