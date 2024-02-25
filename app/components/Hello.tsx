import Github from "../ui/svg/Github";
import LinkedIn from "../ui/svg/LinkedIn";

export default function Hello() {
  return (
    <div className="p-8 md:py-0 md:px-28 flex min-h-screen md:min-h-[80vh] flex-col justify-center items-center gap-12">
      <div className="flex flex-col gap-8">
        <h1 className="font-outfit font-bold md:pt-48 text-center text-6xl md:text-8xl">
          Hi, I'm Caitlin!
        </h1>
        <h3 className="text-center text-sm md:text-xl">
          Full Stack Web Developer based in Victoria, BC
        </h3>
        <div className="flex flex-row justify-center items-center md:hidden text-sm gap-3">
          <Github link="https://github.com/cvsluis" />
          <LinkedIn />
        </div>
      </div>
      <img src="/images/caitlin-emoji.png" className="w-[260px] h-auto"></img>
    </div>
  );
}
