import { useState } from 'react';
import { Typography, Grid, TextField, FormControlLabel, Checkbox } from '@mui/material';

export default function ParentsDetails() {
  const [motherName, setMotherName] = useState('');
  const [fatherName, setFatherName] = useState('');
  const [mobile, setMobile] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');

  return (
    <>
      <Typography variant="h6" gutterBottom>
        Parents Details
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} >
          <TextField
            required
            fullWidth
            autoComplete="mother-name"
            id="motherName"
            onChange={(e) => setMotherName(e.target.value)}
            label="Mother's Name"
            size="small"
            variant="standard" />
        </Grid>

        <Grid item xs={12} >
          <TextField
            required
            fullWidth
            autoComplete="father-name"
            id="fatherName"
            onChange={(e) => setFatherName(e.target.value)}
            label="Father's Name"
            size="small"
            variant="standard" />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            fullWidth
            autoComplete="tel-national"
            id="mobile"
            onChange={(e) => setMobile(e.target.value)}
            label="Mobile Number"
            size="small"
            variant="standard" />
        </Grid>

        <Grid item xs={12} sm={6}>
          <TextField
            required
            fullWidth
            autoComplete="email"
            id="email"
            onChange={(e) => setEmail(e.target.value)}
            label="Email Address"
            size="small"
            variant="standard" />
        </Grid>

        <Grid item xs={12}>
          <TextField
            required
            fullWidth
            autoComplete="street-address"
            multiline id="address" onChange={(e) => setAddress(e.target.value)} label="Address" size="small" variant="standard" />
        </Grid>
        {/* <Grid item xs={12}>
          <FormControlLabel
            control={<Checkbox color="secondary" name="saveCard" value="yes" />}
            label="Remember credit card details for next time"
          />
        </Grid> */}
      </Grid>
    </>
  );
}