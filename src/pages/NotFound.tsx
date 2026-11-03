import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error('404 Error: User attempted to access non-existent route:', location.pathname);
  }, [location.pathname]);

  return (
    <main className="grid-paper flex min-h-screen flex-col items-start justify-center gap-6 px-6 text-ink sm:px-12">
      <p className="type-label text-ink-soft">Error 404 · {location.pathname}</p>
      <h1 className="display text-[clamp(4rem,18vw,14rem)] text-blue">Wrong tab</h1>
      <a href="/" className="rounded-md bg-blue px-6 py-3 font-semibold text-white hover:bg-blue-deep">
        Back to the binder
      </a>
    </main>
  );
};

export default NotFound;
