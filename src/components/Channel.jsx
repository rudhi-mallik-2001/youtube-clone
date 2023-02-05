import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Stack, Box, CardMedia, Typography } from "@mui/material";
import { Sidebar, ChannelVideos, Vedios } from "./";
import { dataFromApi } from "../utils/dataFromApi";
import { useNavigate } from "react-router-dom";

function Channel() {
  const { id } = useParams();
  const [selectedCategory, setselectedCategory] = useState('');
  const [channelDetails, setchannelDetails] = useState(null);
  const [vedios, setvedios] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    dataFromApi(`channels?part=id,snippet&regionCode=IN&id=${id}`)
      .then((data) => { setchannelDetails(data?.items[0]) })

    dataFromApi(`search?channelId=${id}&regionCode=IN&part=snippet&order=date`)
      .then((data) => { setvedios(data?.items) })
  }, [id])
  useEffect(() => {
    if (selectedCategory !== '') {
      // dataFromApi(`search?part=id,snippet&q=${selectedCategory}`)
      // .then((data)=>setVideo(data.items))
      console.log(selectedCategory)
      navigate('/', { selectedCategory })
    }
  }, [selectedCategory])

  return (
    <Stack
      sx={{ flexDirection: { sx: "column", md: "row" }, height: '92vh' ,overflow: 'auto'}}>
      <Box
        sx={{
          height: { sx: "auto", md: "95%" },
          borderRight: "1px solid #3d3d3d",
          px: { sx: 0, md: 2 },
          width:'240px'
        }}>
        <Sidebar
          selectedCategory={selectedCategory}
          setselectedCategory={setselectedCategory}
        />
        <Typography
          variant="body2"
          sx={{ mt: "1.2px", color: "#FFF" }}
        >
          Copyright 2022 @rudhi

        </Typography>
      </Box>
      <Box sx={{ overflow: 'auto' }}>
        <Box>
          <CardMedia sx={{
            display: 'flex', flexDirection: 'column', alignItems: 'center',
            justifyContent: 'center', textAlign: 'center', color: "#FFF"
          }}>
            <img src={`${channelDetails?.brandingSettings?.image?.bannerExternalUrl}`} alt="" style={{ width: '80%', height: '320px' }} />
          </CardMedia>
          <Box>{channelDetails && <ChannelVideos channelDetail={channelDetails}></ChannelVideos>}</Box>
          <Box sx={{display:'flex',p:'2px'}}>
            <Box sx={{ overflow: 'auto',marginLeft:{md:'100px'} }}>
              <Vedios vedios={vedios} />
            </Box>
          </Box>
        </Box>
      </Box>

    </Stack>
  )
}

export default Channel;