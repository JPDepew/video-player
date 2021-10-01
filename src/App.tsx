import React, { useRef, useState } from "react";
import "./App.css";
import ReactPlayer from "react-player";
import {
  Grid,
  Paper,
  styled,
  Table,
  TableBody,
  TableCell,
  tableCellClasses,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
} from "@mui/material";

interface VideoClip {
  shotName: string;
  tcIn: string;
  tcOut: string;
  frameCount: number;
  vfxType: string;
  thumbnail: string;
  clientDescription: string;
  ballparkArtistBid: string;
  acceptedBid: string;
}

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

function App() {
  const videoRef = useRef<any>(null);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [frameRate, setFrameRate] = useState<number>(30);

  const videoClips: VideoClip[] = [
    {
      shotName: "ESC_001_010",
      tcIn: "00:00:16:12",
      tcOut: "00:01:20:50",
      frameCount: 220,
      vfxType: "Fly Comp",
      thumbnail: "",
      clientDescription: "Description",
      ballparkArtistBid: "Need to know if fly is CGI",
      acceptedBid: "Awaiting Client",
    },
    {
      shotName: "ESC_001_020",
      tcIn: "00:00:16:12",
      tcOut: "00:01:20:50",
      frameCount: 220,
      vfxType: "Fly Comp",
      thumbnail: "",
      clientDescription: "Description",
      ballparkArtistBid: "Need to know if fly is CGI",
      acceptedBid: "Awaiting Client",
    },
    {
      shotName: "ESC_001_030",
      tcIn: "00:00:16:12",
      tcOut: "00:01:20:50",
      frameCount: 220,
      vfxType: "Fly Comp",
      thumbnail: "",
      clientDescription: "Description",
      ballparkArtistBid: "Need to know if fly is CGI",
      acceptedBid: "Awaiting Client",
    },
  ];

  const handleKeyDown = (e) => {
    if (e.key === "ArrowRight") {
      const curVidRef = videoRef?.current;
      curVidRef && curVidRef.seekTo(curVidRef.getCurrentTime() + 1 / frameRate);
      return;
    }
    if (e.key === "ArrowLeft") {
      const curVidRef = videoRef?.current;
      curVidRef && curVidRef.seekTo(curVidRef.getCurrentTime() - 1 / frameRate);
      return;
    }
    if (e.key === " ") {
      setIsPlaying(!isPlaying);
      return;
    }
  };

  return (
    <div className="App" tabIndex={-1} onKeyDown={handleKeyDown}>
      <Grid container item className="p-8" spacing={2}>
        <Grid container item xs={6}>
          <Grid item>
            <TableContainer component={Paper}>
              <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <StyledTableCell>Shot Name</StyledTableCell>
                    <StyledTableCell align="right">TC IN</StyledTableCell>
                    <StyledTableCell align="right">TC OUT</StyledTableCell>
                    <StyledTableCell align="right">Frame Count</StyledTableCell>
                    <StyledTableCell align="right">VFX Type</StyledTableCell>
                    <StyledTableCell align="right">Thumbnail</StyledTableCell>
                    <StyledTableCell align="right">
                      Client Description
                    </StyledTableCell>
                    <StyledTableCell align="right">
                      Ballpark Artist Bid
                    </StyledTableCell>
                    <StyledTableCell align="right">
                      Accepted Bid
                    </StyledTableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {videoClips.map((row) => (
                    <StyledTableRow
                      key={row.shotName}
                      sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                    >
                      <StyledTableCell component="th" scope="row">
                        {row.shotName}
                      </StyledTableCell>
                      <StyledTableCell align="right">
                        {row.tcIn}
                      </StyledTableCell>
                      <StyledTableCell align="right">
                        {row.tcOut}
                      </StyledTableCell>
                      <StyledTableCell align="right">
                        {row.frameCount}
                      </StyledTableCell>
                      <StyledTableCell align="right">
                        {row.vfxType}
                      </StyledTableCell>
                      <StyledTableCell align="right">
                        {row.thumbnail}
                      </StyledTableCell>
                      <StyledTableCell align="right">
                        {row.clientDescription}
                      </StyledTableCell>
                      <StyledTableCell align="right">
                        {row.ballparkArtistBid}
                      </StyledTableCell>
                      <StyledTableCell align="right">
                        {row.acceptedBid}
                      </StyledTableCell>
                    </StyledTableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Grid>
        </Grid>
        <Grid container item xs={6} justifyContent="flex-start" spacing={3}>
          <Grid item>
            <ReactPlayer
              playing={isPlaying}
              url="https://storage.cloud.google.com/guardian-scoreboard.appspot.com/IMG_6777.MOV"
              ref={videoRef}
              loop={false}
              width="auto"
              height="auto"
              config={{
                file: {},
              }}
            />
          </Grid>
          <Grid item>
            <TextField
              variant="outlined"
              type="number"
              label="FrameRate"
              value={frameRate}
              onChange={(e) => setFrameRate(parseFloat(e.target.value))}
            />
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
