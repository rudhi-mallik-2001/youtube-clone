import React from 'react'
import { Link } from "react-router-dom";
import { CheckCircle } from "@mui/icons-material";

import { Card, Typography, CardMedia, CardContent, Box } from '@mui/material';
const ChannelCard = ({ channelDetail }) => {
  console.log(channelDetail)
  const channel = channelDetail.id.channelId;
  const snippet = channelDetail.snippet
  const thumbnails = channelDetail.snippet.thumbnails
  const high = channelDetail.snippet.thumbnails.high
  const url = channelDetail.snippet.thumbnails.high.url
  const title=channelDetail.snippet.channelTitle
  return (
    <Box
      sx={{ width: { md: '320px', sx: "100%" },display:'flex',flexDirection:'column',alignItems:'center',
      justifyContent:'center',textAlign:'center',height:"326px"}}
    >
      <Link to={`/channel/${channel}`}
      >
        <CardContent 
        sx={{display:'flex',flexDirection:'column',alignItems:'center',
        justifyContent:'center',textAlign:'center',color:"#black"}}>
          <CardMedia image={snippet?.thumbnails?.high?.url}
          sx={{ width: 180, height: 180 ,borderRadius:"50%"}}/>
          <Typography variant="h6">
            {title}
            <CheckCircle
            sx={{fontSize:'18px',color:'blue',ml:'5px'}}
            />
          </Typography>
        </CardContent>
      </Link>
      </Box>
  )
}

export default ChannelCard