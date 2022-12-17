import { LayoutProps } from 'models';
import Link from 'next/link';
import { useEffect } from 'react';

export function MainLayout({ children }: LayoutProps) {
  useEffect(() => {
    console.log('Main Layout mounting');
    return () => console.log('Main Layout unmounting');
  }, []);
  return (
    <div>
      <h1>Admin Layout</h1>
      <div>Sidebar</div>
      <Link href="/">Home</Link>
      <Link href="/about">About</Link>
      <div>{children}</div>
    </div>
  );
}
