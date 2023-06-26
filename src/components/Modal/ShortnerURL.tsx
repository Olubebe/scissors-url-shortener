import React, { useState } from 'react';
import {
  Dialog,
  DialogTitle,
  DialogActions,
  DialogContent,
  Box,
  Button,
  TextField,
  IconButton,
} from '@mui/material';
import { Close as CloseIcon } from '@mui/icons-material';

const ShortnerURL = ({ handleClose, createShortenLink }: any) => {
  const [form, setForm] = useState({
    name: '',
    longUrl: '',
  });
  const [errors, setErrors] = useState({
    name: '',
    longUrl: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm((oldForm) => ({
      ...oldForm,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = () => {
    // Perform validation using regex
    const nameRegex = /^.{3,15}$/;
    const urlRegex = /^(?:(?:(?:https?|ftp):)?\/\/)?([\da-z.-]+)\.([a-z.]{2,6})(\/([^\s]*))?$/i;

    let nameError = '';
    let urlError = '';

    if (!nameRegex.test(form.name)) {
      nameError = 'Name should be between 3 and 15 characters.';
    }

    if (!urlRegex.test(form.longUrl)) {
      urlError = 'Invalid URL format.';
    }

    if (nameError || urlError) {
      setErrors({ name: nameError, longUrl: urlError });
      return;
    }

    createShortenLink(form.name, form.longUrl);
  };

  return (
    <Dialog open={true} onClose={handleClose} fullWidth>
      <DialogTitle>
        <Box display="flex" alignItems="center" justifyContent="space-between">
          Create Short URL
          <IconButton onClick={handleClose} size="small">
            <CloseIcon />
          </IconButton>
        </Box>
      </DialogTitle>
      <DialogContent>
        <TextField
          value={form.name}
          error={!!errors.name}
          helperText={errors.name}
          name="name"
          onChange={handleChange}
          fullWidth
          sx={{ marginBottom: 5 }}
          variant="filled"
          label="Name"
        />
        <TextField
          value={form.longUrl}
          error={!!errors.longUrl}
          helperText={errors.longUrl}
          name="longUrl"
          onChange={handleChange}
          fullWidth
          variant="filled"
          label="Long URL"
        />
      </DialogContent>
      <DialogActions>
        <Button
          color="primary"
          onClick={handleSubmit}
          sx={{ marginRight: 2, marginY: 1 }}
          variant="contained"
          disableElevation
        >
          Shorten URL
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default ShortnerURL;
