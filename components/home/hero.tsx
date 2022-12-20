import { Box, Button, Container, Stack, Typography } from '@mui/material';
import Image from 'next/image';
import * as React from 'react';
import avatar from '@/images/avatar.png';

export function HeroSection() {
  return (
    <Box component="section" pt={{ xs: 4, sm: 18 }} pb={{ xs: 7, sm: 9 }}>
      <Container>
        <Stack
          direction={{ xs: 'column-reverse', sm: 'row' }}
          alignItems={{ xs: 'center', sm: 'flex-start' }}
          textAlign={{ xs: 'center', sm: 'left' }}
          spacing={4}
        >
          <Box>
            <Typography component="h1" variant="h3" fontWeight="bold" mb={{ xs: 3.5, sm: 5 }}>
              Hi, I am John,
              <br />
              Creative Technologist
            </Typography>
            <Typography mb={{ xs: 3.5, sm: 5 }}>
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit
              officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud
              amet.
            </Typography>
            <Button variant="contained">Download Resume</Button>
          </Box>
          <Box
            minWidth={{ sm: '240px' }}
            maxWidth={{ xs: '240px' }}
            boxShadow="-5px 13px"
            color="secondary.light"
            borderRadius="50%"
          >
            <Image
              src={avatar}
              alt="avatar"
              style={{ width: '100%', height: 'auto', display: 'block' }}
            />
          </Box>
        </Stack>
      </Container>
    </Box>
  );
}
