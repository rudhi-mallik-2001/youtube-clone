import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Box } from '@mui/material';
import { Navbar,Feed ,UpperBar,Channel,Searchterm,SearchBar,VideoPlayingPage} from "./components";
function App() {
  return (
    <>
      <BrowserRouter>
        <Box sx={{ backgroundColor: '#fff' }}>
          <Navbar />
          {/* <UpperBar/> */}
          <Routes>
            <Route path="/" exact element={<Feed />} />
            <Route path="/video/:id" element={<VideoPlayingPage />} />
            <Route path="/channel/:id" element={<Channel />} />
            <Route path="/search/:searchterm" element={<Searchterm />} />
          </Routes>
        </Box>
      </BrowserRouter>
    </>
  );
}

export default App;
