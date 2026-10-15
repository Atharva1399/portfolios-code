import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <main className="on-blue flex min-h-screen flex-col items-start justify-center gap-6 bg-blue px-6 text-white sm:px-12">
      <p className="type-label text-white/75">Error 404 · {location.pathname}</p>
      <h1 className="display text-[clamp(4rem,18vw,14rem)]">Wrong tab</h1>
      <a href="/" className="rounded-md bg-white px-6 py-3 font-semibold text-blue">
        Back to the binder
      </a>
    </main>
  );
};

export default NotFound;
