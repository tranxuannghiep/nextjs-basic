import { Box, Container, Typography } from '@mui/material';
import { Work } from 'models';
import { WorkList } from '../common/work';

export function FeatureWorks() {
  const workList: Work[] = [
    {
      id: 1,
      title: 'Designing Dashboards',
      createdAt: 1581440400000,
      taskList: ['Dashboard'],
      shortDescription:
        'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.',
      thumbnailUrl:
        'https://res.cloudinary.com/dm5dsvrhy/image/upload/v1671522116/nextjs-basic/Rectangle_30_1_ostfke.jpg',
      fullDescription: '',
      updatedAt: 1581440400000,
    },
    {
      id: 2,
      title: 'Vibrant Portraits of 2020',
      createdAt: 1581440400000,
      taskList: ['Illustration'],
      shortDescription:
        'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.',
      thumbnailUrl:
        'https://res.cloudinary.com/dm5dsvrhy/image/upload/v1671522117/nextjs-basic/Rectangle_32_1_i7xyys.jpg',
      fullDescription: '',
      updatedAt: 1581440400000,
    },
    {
      id: 3,
      title: '36 Days of Malayalam type',
      createdAt: 1581440400000,
      taskList: ['Typography'],
      shortDescription:
        'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.',
      thumbnailUrl:
        'https://res.cloudinary.com/dm5dsvrhy/image/upload/v1671522119/nextjs-basic/Rectangle_34_1_ixp9s4.jpg',
      fullDescription: '',
      updatedAt: 1581440400000,
    },
  ];

  return (
    <Box component="section" pt={2} pb={4}>
      <Container>
        <Typography variant="h5" mb={4}>
          Feature works
        </Typography>
        <WorkList workList={workList} />
      </Container>
    </Box>
  );
}
