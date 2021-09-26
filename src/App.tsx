import React, { useRef, useState } from "react";
import "./App.css";
import ReactPlayer from "react-player";
import { Grid } from "@mui/material";

function App() {
  const videoRef = useRef<any>(null);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);

  const handleKeyDown = (e) => {
    if (e.key === "ArrowRight") {
      const curVidRef = videoRef?.current;
      curVidRef && curVidRef.seekTo(curVidRef.getCurrentTime() + 1 / 30);
      return;
    }
    if (e.key === "ArrowLeft") {
      const curVidRef = videoRef?.current;
      curVidRef && curVidRef.seekTo(curVidRef.getCurrentTime() - 1 / 30);
      return;
    }
    if (e.key === " ") {
      setIsPlaying(!isPlaying);
      return;
    }
  };

  return (
    <div className="App" tabIndex={-1} onKeyDown={handleKeyDown}>
      <Grid container item className="pt-8">
        <Grid container item xs={6}>
          hi
        </Grid>
        <Grid container item xs={6} justifyContent="center">
          <Grid item>
            <ReactPlayer
              playing={isPlaying}
              url="https://storage.cloud.google.com/guardian-scoreboard.appspot.com/IMG_6777.MOV"
              ref={videoRef}
              loop={false}
              config={{
                file: {},
              }}
            />
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
