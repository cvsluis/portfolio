import { Project } from "@/app/lib/definitions";
import Github from "@/app/ui/svg/Github";

export default function Details({
  name,
  description,
  stack,
  features,
  github,
}: Project) {
  return (
    <section className="font-outfit flex-1 flex flex-col gap-4">
      <div className="flex justify-between items-center">
        <h1 className="text-4xl">{name}</h1>
        <div className="flex md:hidden">
          <Github link={github} />
        </div>
      </div>

      <div>
        <h2 className="font-bold text-base">About</h2>
        <p>{description}</p>
      </div>

      <div>
        <h2 className="font-bold text-base">Tech Stack</h2>
        <p>{stack}</p>
      </div>

      {features && (
        <div>
          <h2 className="font-bold text-base">Features</h2>
          <p>{features}</p>
        </div>
      )}
      <div className="hidden md:flex">
        <Github link={github} />
      </div>
    </section>
  );
}
