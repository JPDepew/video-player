import React, { useEffect, useRef, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import ReactPlayer from "react-player";
import { Player } from "video-react";
import useKeyDown from "react-usekeydown";

function App() {
  const videoRef = useRef<any>(null);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);

  const handleKeyDown = (e) => {
    console.log(e.key);
    if (e.key === "ArrowRight") {
      const curVidRef = videoRef?.current;
      curVidRef && curVidRef.seekTo(curVidRef.getCurrentTime() + 1 / 30);
    }
    if (e.key === "ArrowLeft") {
      const curVidRef = videoRef?.current;
      curVidRef && curVidRef.seekTo(curVidRef.getCurrentTime() - 1 / 30);
    }
    if (e.key === " ") {
      setIsPlaying(!isPlaying);
    }
  };

  // useEffect(() => {
  //   // if (keyDownListener) {
  //   //   return;
  //   // }
  //   document.addEventListener("keydown", (e) => {
  //     setKeyDownListener(true);
  //     console.log(e.key);
  //     if (e.key === "ArrowRight") {
  //       const curVidRef = videoRef?.current;
  //       curVidRef && curVidRef.seekTo(curVidRef.getCurrentTime() + 1 / 30);
  //     }
  //     if (e.key === "ArrowLeft") {
  //       const curVidRef = videoRef?.current;
  //       curVidRef && curVidRef.seekTo(curVidRef.getCurrentTime() - 1 / 30);
  //     }
  //     if (e.key === " ") {
  //       setIsPlaying(!isPlaying);
  //     }
  //   });
  //   return () => {
  //     document.removeEventListener("keydown", (e) => e);
  //   };
  // }, [isPlaying, keyDownListener]);

  return (
    <div className="App" onKeyDown={handleKeyDown}>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        {/* <Player>
          <source src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4" />
        </Player> */}
        <ReactPlayer
          playing={isPlaying}
          // url="https://drive.google.com/uc?export=download&id=1VWCOqNQovRkpa_Cy6b9qJu3_2TOcvV4z"
          url="https://rr6---sn-p5qlsnzd.c.drive.google.com/videoplayback?expire=1632452706&ei=IghNYZ_vM-W-7gLw5oiwCQ&ip=96.235.27.102&cp=QVRIVEVfUVdOR1hPOmlybWJUcENUZlNpSWpZcWtyOXlGMGJhY3JaS0E0V1FYZURIajdqR2tTM2w&id=54251e60ad43884e&itag=37&source=webdrive&requiressl=yes&mh=XD&mm=32&mn=sn-p5qlsnzd&ms=su&mv=u&mvi=6&pl=22&ttl=transient&susc=dr&driveid=1VWCOqNQovRkpa_Cy6b9qJu3_2TOcvV4z&app=explorer&mime=video/mp4&vprv=1&prv=1&dur=8.126&lmt=1632335062050866&mt=1632437920&sparams=expire,ei,ip,cp,id,itag,source,requiressl,ttl,susc,driveid,app,mime,vprv,prv,dur,lmt&sig=AOq0QJ8wRQIgNrTWhIoDOh0rCq-VheAY-MGD64vFafB4TGwDIdEuIUECIQD6zcSuPJ26tYJtPa2QwWRpm6k6LcvDVLN3rTE8TObiWw==&lsparams=mh,mm,mn,ms,mv,mvi,pl&lsig=AG3C_xAwRQIgeskMKxzmvNJ4HU4i5xb8Wk9L75wK9U4LQo4dyB1hE3wCIQC-0wOwyz52g29uf54bnFtpnSQEgQ4N_vrixMYwBsH7RA==&cpn=Ay1W009q7NVBuct9&c=WEB_EMBEDDED_PLAYER&cver=1.20210921.1.0"
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

function useKeyPress(targetKey) {
  // State for keeping track of whether key is pressed
  const [keyPressed, setKeyPressed] = useState<boolean>(false);
  // If pressed key is our target key then set to true
  function downHandler({ key }) {
    if (key === targetKey) {
      setKeyPressed(true);
    }
  }
  // If released key is our target key then set to false
  const upHandler = ({ key }) => {
    if (key === targetKey) {
      setKeyPressed(false);
    }
  };
  // Add event listeners
  useEffect(() => {
    window.addEventListener("keydown", downHandler);
    window.addEventListener("keyup", upHandler);
    // Remove event listeners on cleanup
    return () => {
      window.removeEventListener("keydown", downHandler);
      window.removeEventListener("keyup", upHandler);
    };
  }, []); // Empty array ensures that effect is only run on mount and unmount
  return keyPressed;
}
