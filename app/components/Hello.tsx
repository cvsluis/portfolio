export default function Hello() {
  return (
    <div className="p-8 md:px-28 flex min-h-screen md:min-h-[80vh] flex-col justify-center items-center gap-8">
      <h1 className="font-dm md:pt-14 text-center text-6xl md:text-8xl">
        Caitlin Vandersluis
      </h1>
      <h3 className="text-center text-sm md:text-xl">
        Full Stack Web Developer based in Victoria, BC
      </h3>
      <div className="flex flex-row items-center md:hidden text-sm gap-3">
        <p>github</p>
        <p>linkedin</p>
      </div>
    </div>
  );
}
