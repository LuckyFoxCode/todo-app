import { Aside, TheHeader } from '@/components';

export const Root = () => (
  <>
    <TheHeader />
    <main className='mt-5 flex flex-col'>
      <Aside />
    </main>
  </>
);
