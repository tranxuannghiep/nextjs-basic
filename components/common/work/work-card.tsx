import { Work } from '@/models';
import { Chip, Stack, Typography } from '@mui/material';
import { Box } from '@mui/system';
import Image from 'next/image';
import { format } from 'date-fns';

export interface WorkCardProps {
  work: Work;
}

export function WorkCard({ work }: WorkCardProps) {
  return (
    <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
      <Box width={{ xs: '100%', sm: '246px' }} flexShrink={0}>
        <Image
          src={work.thumbnailUrl}
          priority={true}
          width={246}
          height={180}
          alt="work thumbnail"
          style={{ width: '100%', display: 'block', height: 'auto' }}
        />
      </Box>
      <Box>
        <Typography variant="h4" fontWeight="bold">
          {work.title}
        </Typography>
        <Stack direction="row" my={2}>
          <Chip label={format(work.createdAt, 'yyyy')} color="secondary" size="small" />
          <Typography ml={3} color="GrayText">
            {work.taskList.join(', ')}
          </Typography>
        </Stack>
        <Typography>{work.shortDescription}</Typography>
      </Box>
    </Stack>
  );
}
