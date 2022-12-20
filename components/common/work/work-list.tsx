import { Box, Divider } from '@mui/material';
import { Work } from 'models';
import { WorkCard } from './work-card';

export interface WorkListProps {
  workList: Work[];
}

export function WorkList({ workList }: WorkListProps) {
  if (workList.length === 0) return null;
  return (
    <Box>
      {workList.map((work) => (
        <Box key={work.id}>
          <WorkCard work={work} />
          <Divider sx={{ my: 3 }} />
        </Box>
      ))}
    </Box>
  );
}
