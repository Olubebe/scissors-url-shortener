import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { CircularProgress, Box, Typography } from '@mui/material';
import { db, doc, getDoc, setDoc, increment } from "../../../firebase";

const LinkRedirected = () => {
  const navigate = useNavigate();
  const { shortUrl } = useParams();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const redirectUrl = async () => {
      try {
        const linkDocRef = doc(db, `links/${shortUrl}`);
        const linkDocSnap = await getDoc(linkDocRef);

        if (linkDocSnap.exists()) {
          const { longUrl, linkID, userUid } = linkDocSnap.data();
          window.location.href = longUrl;

          const linkDocRefTotal = doc(db, `users/${userUid}/links/${linkID}`);
          await setDoc(linkDocRefTotal, {
            totalClicks: increment(1),
          }, { merge: true });

          console.log('Total clicks incremented successfully!');
        } else {
          setLoading(false);
          console.log('Link not found');
        }
      } catch (error) {
        console.error('Error retrieving link:', error);
      }
    };

    redirectUrl();
  }, []);

  if (loading) {
    return (
      <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
        <CircularProgress />
        <Typography>Redirecting to the link</Typography>
      </Box>
    );
  } else {
    return (
      <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
        <Typography>Link is invalid</Typography>
      </Box>
    );
  }
};

export default LinkRedirected;
