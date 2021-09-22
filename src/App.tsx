import React, { useEffect, useRef } from "react";
import logo from "./logo.svg";
import "./App.css";
import ReactPlayer from "react-player";

function App() {
  const videoRef = useRef<any>(null);

  useEffect(() => {
    document.addEventListener("keydown", (e) => {
      if (e.key === "ArrowRight") {
        const curVidRef = videoRef?.current;
        curVidRef && curVidRef.seekTo(curVidRef.getCurrentTime() + 1 / 60);
      }
      if (e.key === "ArrowLeft") {
        const curVidRef = videoRef?.current;
        curVidRef && curVidRef.seekTo(curVidRef.getCurrentTime() - 1 / 60);
      }
    });
    return () => {
      document.removeEventListener("keydown", (e) => e);
    };
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <ReactPlayer
          url="https://www.youtube.com/watch?v=7CwT4q58N54"
          ref={videoRef}
          config={{
            youtube: {
              playerVars: {
                controls: 1,
              },
            },
          }}
        />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React Today
        </a>
      </header>
    </div>
  );
}

export default App;
