import { useNProgress } from '@tanem/react-nprogress';
import * as React from 'react';
import Bar from './Bar';
import Container from './Container';

export interface ProgressProps {
  isAnimating: boolean;
}

export function Progress({ isAnimating }: ProgressProps) {
  const { animationDuration, isFinished, progress } = useNProgress({
    isAnimating,
  });
  return (
    <Container animationDuration={animationDuration} isFinished={isFinished}>
      <Bar animationDuration={animationDuration} progress={progress} />
    </Container>
  );
}
