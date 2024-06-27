
export default function NotFound() {

  //TODO: Improve design
  return (
    <>
      <div className="pointer-events-none relative -mt-[56px] flex h-screen flex-col items-center justify-center gap-8 overflow-hidden [&>*]:pointer-events-auto">
        <div className="flex flex-col items-center justify-center">
          <h1 className="mb-4 font-mono text-4xl font-bold leading-tight opacity-60 md:text-9xl">
            404
          </h1>
          <p className="px-6 text-center font-mono text-base md:px-0 md:text-xl">
          </p>
        </div>
      </div>
    </>
  );
}
