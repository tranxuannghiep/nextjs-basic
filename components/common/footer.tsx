import Facebook from '@mui/icons-material/Facebook';
import Instagram from '@mui/icons-material/Instagram';
import Twitter from '@mui/icons-material/Twitter';
import LinkedIn from '@mui/icons-material/LinkedIn';
import { Box, Icon, Stack, Typography } from '@mui/material';

const socialLinks = [
  {
    icon: Facebook,
    url: 'https://www.google.com/',
  },
  {
    icon: Instagram,
    url: 'https://www.google.com/',
  },
  {
    icon: Twitter,
    url: 'https://www.google.com/',
  },
  {
    icon: LinkedIn,
    url: 'https://www.google.com/',
  },
];

export function Footer() {
  return (
    <Box component="footer" textAlign="center" py={2}>
      <Stack direction="row" justifyContent="center">
        {socialLinks.map((social, index) => (
          <Box
            key={index}
            component="a"
            p={2}
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Icon component={social.icon} fontSize="large" />
          </Box>
        ))}
      </Stack>
      <Typography>Copyright ©{new Date().getFullYear()} All rights reserved </Typography>
    </Box>
  );
}
