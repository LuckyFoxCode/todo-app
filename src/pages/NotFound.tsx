import { useNavigate } from 'react-router-dom';

export const NotFound = () => {
  const navigate = useNavigate();

  const goBack = () => navigate(-1);

  return (
    <div className='flex h-[100dvh] w-[100dvw] items-center justify-center'>
      <div className='m-auto flex flex-col items-center gap-y-4 font-montserrat'>
        <span className='font-montserrat text-4xl text-n-6'>404</span>
        <h2 className='text-7xl capitalize text-n-7 dark:text-light'>
          page not found
        </h2>
        <p className='text-lg text-slate-400 dark:text-n-4'>
          Sorry, we couldn't find the page you're looking for.
        </p>
        <button
          onClick={goBack}
          className='rounded-lg bg-n-6 px-4 py-2 text-lg capitalize text-light shadow-lg shadow-transparent transition-all duration-300 hover:text-n-0 hover:shadow-n-6 focus:shadow-n-6 focus:outline-none'
        >
          Go back home
        </button>
      </div>
    </div>
  );
};
