export default function NotFound() {
  return (
    <>
      <div className="pointer-events-none relative flex h-screen flex-col items-center justify-center gap-8 overflow-hidden [&>*]:pointer-events-auto">
        <div className="flex flex-col items-center justify-center">
          <h1 className="mb-4 font-mono text-4xl font-bold leading-tight opacity-60 sm:text-6xl md:text-8xl lg:text-9xl">
            404
          </h1>
          <p className="px-6 text-center font-mono text-base sm:text-lg md:px-0 md:text-xl">
            The page you're looking for doesn't exist.
          </p>
        </div>
      </div>
    </>
  );
}
