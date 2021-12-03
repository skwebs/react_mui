import { useState } from 'react';
import {
  Container, TextField, FormControl, InputLabel, MenuItem, Select,
  Box, Card, CardContent, CardActions, Button, Typography, Grid,
} from '@mui/material';
import AdapterDateFns from '@mui/lab/AdapterDateFns';

import { LocalizationProvider, DatePicker } from '@mui/lab';

export default function RegForm() {
  const [firstName, setFirstName] = useState("");
  const [middleName, setMiddleName] = useState("");
  const [lastName, setLastName] = useState("");
  const [gender, setGender] = useState('');
  const [dob, setDob] = useState("");
  const [mother, setMother] = useState('');
  const [father, setFather] = useState('');
  const [mobile, setMobile] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');


  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(firstName, middleName, lastName, gender, dob, mother, father, mobile, email, address);
  };

  return (
    <Container>
      <Card elevation={8} sx={{ minWidth: 275, maxWidth: 800, marginTop: 5, marginLeft: "auto", marginRight: "auto" }}>
        <CardContent>
          <Typography variant="h6" gutterBottom>
            Shipping address
          </Typography>

          <Box
            component="form"
            // sx={{
            //   '& > :not(style)': {
            //     m: 1,
            //     // width: '30ch'
            //   },
            // }}

            noValidate
            autoComplete="off"
          >
            <Grid container >

              <Grid item xs={12} sm={6} >
                <TextField

                  required
                  fullWidth
                  autoComplete="first-name"
                  autoFocus
                  id="first_name" onChange={(e) => setFirstName(e.target.value)} label="First Name" size="small" variant="standard" />
              </Grid>

              <Grid item xs={12} sm={6}>
                <TextField

                  fullWidth
                  autoComplete="middle-name"
                  id="middle_name" onChange={(e) => setMiddleName(e.target.value)} label="Middle Name" size="small" variant="standard" />
              </Grid>

              <Grid item xs={12} sm={6}>
                <TextField

                  required
                  fullWidth
                  autoComplete="last-name"
                  id="last_name" onChange={(e) => setLastName(e.target.value)} label="Last Name" size="small" variant="standard" />
              </Grid>

              <Grid item xs={12} sm={6}>
                <FormControl variant="standard"

                  fullWidth
                  autoComplete="gender">
                  <InputLabel id="gender-label">Gender</InputLabel>
                  <Select
                    labelId="gender-label"
                    id="gender"
                    value={gender}
                    onChange={(e) => setGender(e.target.value)}
                    label="Age"
                  >
                    <MenuItem value="">
                      <em>None</em>
                    </MenuItem>
                    <MenuItem value={"Male"}>Male</MenuItem>
                    <MenuItem value={"Female"}>Female</MenuItem>
                  </Select>
                </FormControl>
              </Grid>

              <Grid item xs={12} sm={6}>
                <LocalizationProvider dateAdapter={AdapterDateFns}>
                  <DatePicker
                    label="Date of Birth"
                    // inputFormat="dd/MM/yyyy"
                    value={dob}
                    onChange={(newValue) => {
                      setDob(newValue);
                    }}
                    renderInput={(params) => <TextField fullWidth {...params} variant="standard" />}
                  />
                </LocalizationProvider>
              </Grid>

              <Grid item xs={12} sm={6}>
                <TextField

                  required
                  fullWidth
                  autoComplete="last-name" id="mother_name" onChange={(e) => setMother(e.target.value)} label="Mother Name" size="small" variant="standard" />
              </Grid>

              <Grid item xs={12} sm={6}>
                <TextField

                  required
                  fullWidth
                  autoComplete="last-name"
                  id="father_name" onChange={(e) => setFather(e.target.value)} label="Father Name" size="small" variant="standard" />
              </Grid>

              <Grid item xs={12} sm={6}>
                <TextField

                  required
                  fullWidth
                  autoComplete="last-name"
                  id="mobile" onChange={(e) => setMobile(e.target.value)} label="Mobile Number" size="small" variant="standard" />
              </Grid>

              <Grid item xs={12} sm={6}>
                <TextField

                  required
                  fullWidth
                  autoComplete="last-name"
                  id="email" onChange={(e) => setEmail(e.target.value)} label="Email Address" size="small" variant="standard" />
              </Grid>

              <Grid item xs={12} sm={6}>
                <TextField

                  required
                  fullWidth
                  autoComplete="last-name"
                  multiline id="address" onChange={(e) => setAddress(e.target.value)} label="Address" size="small" variant="standard" />
              </Grid>

              <Grid item xs={12} sm={6}>
                <Button

                  fullWidth
                  onClick={handleSubmit} variant="contained" color="primary" sx={{ marginTop: 5 }}>Submit</Button>
              </Grid>
            </Grid>
          </Box>
        </CardContent>

        <CardActions>
          <Button size="small">Learn More</Button>
        </CardActions>
      </Card>
    </Container>
  );
}


