import { Box, Divider } from '@mui/material';
import { Work } from 'models';

export interface WorkListProps {
  workList: Work[];
}

export function WorkList({ workList }: WorkListProps) {
  if (workList.length === 0) return null;
  return (
    <Box>
      {workList.map((work) => (
        <div key={work.id}>
          <Box>{work.title}</Box>
          <Divider sx={{ my: 3 }} />
        </div>
      ))}
    </Box>
  );
}
