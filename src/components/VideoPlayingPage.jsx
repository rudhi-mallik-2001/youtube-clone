import { useState, useEffect } from 'react'
import ReactPlayer from 'react-player/youtube'
import { Link, useParams } from "react-router-dom";
import { dataFromApi } from "../utils/dataFromApi";
import { Vedios ,UpperBar} from "./";
import { Stack, Box, Typography } from "@mui/material";
import { CheckCircle } from "@mui/icons-material";
const VideoPlayingPage = () => {
    const { id } = useParams()
    const [VideoDitels, setVideoDitels] = useState(null);
    const [video, setvideo] = useState();
    useEffect(() => {
        dataFromApi(`videos?part=snippet,statistics&order=date&id=${id}`)
            .then((data) => setVideoDitels(data.items[0]))
        dataFromApi(`search?part=snippet&order=date&relatedToVideoId=${id}&type=video`)
            .then((data) => setvideo(data.items))
    }, [id])
    const direction="column";
    if (!VideoDitels?.snippet) return "Loading..."
    if (!video) return "Loading..."
    console.log(VideoDitels)
    return (
        <Box minHeight="89vh" overflow={"hidden"}>
            
            <Stack direction={{ xs: 'column', md: 'row' }} minHeight="92vh" overflow={"scrool"}>
                <Box flex={1} p={2} m={2}>
                    <Box sx={{ width: '100%', position: 'sticky' }}>
                        <ReactPlayer url={`https//www.youtube.com/watch?v=${id}`}
                            className='react-player' controls />
                    </Box>
                    <Typography color={"black"} variant={"h6"} p={2} fontWeight={'bold'}>
                        {VideoDitels.snippet.title}
                    </Typography>
                    <Stack direction={"row"} justifyContent={"space-between"}
                    >
                        <Link to={`/channel/${VideoDitels.snippet.channelId}`}>
                            <Typography variant={{ sm: "h4", md: "h6" }} sx={{ color: "black" }} py={1} px={2} fontWeight={'bold'}>
                                {VideoDitels.snippet.channelTitle}
                                <CheckCircle sx={{ fontSize: "12px", color: "gray", ml: "5px" }} />
                            </Typography>
                        </Link>

                        <Stack direction={'row'} gap="20px" alignItems={"center"} >
                            <Typography sx={{ color: "black" }} py={1} px={2}fontWeight={'bold'}>
                                {parseInt(VideoDitels.statistics.likeCount)} Likes
                            </Typography>
                            <Typography sx={{ color: "black" }} py={1} px={2} fontWeight={'bold'}>
                                {parseInt(VideoDitels.statistics.viewCount)} Views
                            </Typography>
                        </Stack>
                    </Stack>
                </Box>
                <Box justifyCenter="center" alignItems="center" px={2} py={{ md: 1, xs: 5 }} height={'91vh'} overflow={'auto'}>
                    <Vedios video={video} direction={direction} />
                </Box>
            </Stack>

        </Box>
    )
}

export default VideoPlayingPage