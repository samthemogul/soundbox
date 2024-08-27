import { Route, Routes } from "react-router-dom";
import "./styles/App.css";
import {
  AroundYou,
  ArtistInfo,
  Explore,
  Search,
  SongDetails,
  TopArtists,
  TopSongs,
} from "./pages";
import Sidebar from "./containers/Sidebar";
import AuxContainer from "./containers/AuxContainer";
import MusicPlayer from "./containers/MusicPlayer";

import useTheme from "./hooks/useTheme";
import MobileHeader from "./components/MobileHeader";
import MobileNav from "./containers/MobileNav";


function App() {

  const { theme } = useTheme() || {};
  return (
    <div className={`${theme} main-container`}>
      {/* {theme}
      <button onClick={toggleTheme}>ToggleTheme</button> */}
      <Sidebar />
      <main className="mainbody">
        <div className="center-content">
          <MobileNav />
          <MobileHeader />

          <div>
            <div>
              <Routes>
                <Route path="/" element={<Explore />} />
                <Route path="/around-you" element={<AroundYou />} />
                <Route path="/artists/:artistId" element={<ArtistInfo />} />
                <Route path="/songs/:songid" element={<SongDetails />} />
                <Route path="/search/:query" element={<Search />} />
                <Route path="/top-artists" element={<TopArtists />} />
                <Route path="/top-songs" element={<TopSongs />} />
              </Routes>
            </div>
          </div>
        </div>
        <div className="aux-content">
          <AuxContainer />
        </div>
      </main>
      <div>
        <MusicPlayer />
      </div>
    </div>
  );
}

export default App;
