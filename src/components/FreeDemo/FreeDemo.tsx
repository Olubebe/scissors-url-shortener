import React, { useState, Fragment, useEffect, useCallback } from 'react';
import { Box, Grid, Typography, Button, Divider, Snackbar } from '@mui/material';
import Navbar from '../Navbar/Navbar';
import LinkCard from './components/LinkCard';
import ShortnerURL from '../Modal/ShortnerURL';
import { serverTimestamp, db, auth, collection, addDoc, doc, getDocs, deleteDoc, query, where } from '../../firebase';
import { nanoid } from 'nanoid';
import copy from 'copy-to-clipboard';
import { QuerySnapshot } from 'firebase/firestore';


interface Link {
  id: string;
  name: string;
  longUrl: string;
  shortUrl: string;
  totalClicks: number;
}

const FreeDemo = () => {
  const [openModal, setOpenModal] = useState(false);
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [links, setLinks] = useState<Link[]>([]);
  const userUid = auth.currentUser?.uid;

  const handleCreateShortLink = async (name: string, longUrl: string): Promise<void> => {
    const link: Link = {
      id: nanoid(),
      name,
      longUrl: longUrl.includes('http') ? longUrl : `https://${longUrl}`,
      shortUrl: nanoid(6),
      totalClicks: 0,
    };
  
    try {
      const userLinksCollectionRef = collection(db, `users/${userUid}/links`);
      const docRef = await addDoc(userLinksCollectionRef, link);
      console.log('Document written with ID:', docRef.id);
    } catch (error) {
      console.error('Error adding document:', error);
    }
  
    setOpenModal(false);
  };

  const handleDeleteLink = useCallback(async (linkId: string): Promise<void> => {
    try {
      const linkDocRef = doc(db, `users/${userUid}/links/${linkId}`);
      await deleteDoc(linkDocRef);
      console.log('Document deleted:', linkId);
    } catch (error) {
      console.error('Error deleting document:', error);
    }
  }, []);

 
  useEffect(() => {
    const fetchLinks = async (): Promise<void> => {
      try {
        const userLinksCollectionRef = collection(db, 'links');
        const querySnapshot = await getDocs(userLinksCollectionRef);

        const links: Link[] = querySnapshot.docs.map((doc) => {
          const data = doc.data();
          const link: Link = {
            id: doc.id,
            name: data.name,
            longUrl: data.longUrl,
            shortUrl: data.shortUrl,
            totalClicks: data.totalClicks,
          };
          return link;
        });

        setLinks(links);
      } catch (error) {
        console.error('Error fetching links:', error);
      }
    };

    fetchLinks();
  }, []);
  


  const handleCopyLink = (shortUrl: string): void => {
    copy(shortUrl);
    setOpenSnackbar(true);
  };
  
  

  return (
    <div>
      <Snackbar
        open={openSnackbar}
        onClose={() => setOpenSnackbar(false)}
        autoHideDuration={2000}
        message="Link copied to the clipboard"
      />
      {openModal && (
        <ShortnerURL createShortenLink={handleCreateShortLink} handleClose={() => setOpenModal(false)} />
      )}
      <Navbar />
      <Box mt={{xs: 3, sm: 5}} p={{ xs: 2, sm: 0 }}>
        <Grid container justifyContent="center">
          <Grid item xs={12} sm={8}>
            <Box mb={5} display="flex">
              <Box mr={3}>
                <Typography variant="h4">Links</Typography>
              </Box>
              <Button onClick={() => setOpenModal(true)} variant="contained" disableElevation color="primary">
                Create New
              </Button>
            </Box>

            {links
              // .sort((prevLink, nextLink) => nextLink.createdAt.getTime() - prevLink.createdAt.getTime())
              .map((link, idx) => (
                <Fragment key={link.id}>
                  <LinkCard {...link} deleteLink={handleDeleteLink} copyLink={handleCopyLink} />
                  {idx !== links.length - 1 && (
                    <Box my={4}>
                      <Divider />
                    </Box>
                  )}
                </Fragment>
              ))}
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};

export default FreeDemo;
