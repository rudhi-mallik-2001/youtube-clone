import React from 'react'
import { VideoCard, ChannelCard } from "./";
import { Stack, Box } from "@mui/material";
const Vedios = (video) => {
   // console.log( video)
  // console.log(typeof video)
  const result = Object.values(video); 
  const items = result[0];
  //console.log( video.direction)


  return (
    // <></>
    <Stack direction={video.direction||"row"} flexWrap="wrap"
      justifyContent="start"  gap={2}>
        
      {items.map((itm, idx) => (
        <Box key={idx}>
          
          {itm.id.videoId && <VideoCard video={itm} />}
          {itm.id.channelId && <ChannelCard channelDetail={itm} />}
        </Box>
      ))}

    </Stack>
  )
}

export default Vedios