import React, { memo, useState } from "react";
import { Box, Grid, Typography, Button, Hidden } from "@mui/material";
import { BarChart as ChartIcon } from "@mui/icons-material";
import format from "date-fns/format";
import QRCode from "qrcode.react"; // Import the QR code generation library


interface LinkCardProps {
  id: string;
  name: string;
  longUrl: string;
  shortUrl: string;
  totalClicks: number;
  deleteLink: (linkId: string) => void;
  copyLink: (linkId: string) => void;
}

const LinkCard = ({
  id,
  name,
  longUrl,
  shortUrl,
  totalClicks,
  deleteLink,
  copyLink,
}: LinkCardProps) => {
  const [showQRCode, setShowQRCode] = useState(false);

  const toggleQRCode = () => {
    setShowQRCode(!showQRCode);
  };

  const shortUrlToCopy = `${window.location.host}/${shortUrl}`;

  return (
    <div>
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Box width="50%">
          {/* <Typography variant="overline" color="textSecondary">
            Created at {format(createdAt, "d MMM, HH:mm")}{" "}
          </Typography> */}
          <Box my={2}>
            <Typography sx={{marginBottom:2 }} variant="h5">{name}</Typography>
            <Typography style={{overflow:"hidden", textOverflow: "ellipsis"}} >{longUrl}</Typography>
          </Box>
          <Box display="flex" alignItems="center">
            <Typography color="primary">
              {shortUrlToCopy}
            </Typography>
            <Box mx={3}>
              <Button onClick={() => copyLink(shortUrlToCopy)} color="primary" variant="outlined" size="small" >
                Copy
              </Button>
            </Box>
            <Button
              color="secondary"
              variant="contained"
              size="small"
              disableElevation
              onClick={() => deleteLink(id)}
            >
              Delete
            </Button>
            <Button
              variant="contained"
              size="small"
              sx={{ ml: 2 }}
              disableElevation
              onClick={toggleQRCode}
            >
              {showQRCode ? "Hide QR Code" : "Show QR Code"}
            </Button>
          </Box>
          {showQRCode && (
            <Box mt={2}>
              <QRCode value={longUrl} size={128} />
            </Box>
          )}
        </Box>
        
          <Box>
            <Box display="flex" justifyContent="center">
              <Typography>{totalClicks}</Typography>
              <ChartIcon />
            </Box>
            <Hidden only="xs">
            <Typography variant="overline">Total Clicks</Typography>
            </Hidden>
          </Box>
        
      </Box>
    </div>
  );
};

export default memo(LinkCard);
