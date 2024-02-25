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
    <div className="font-outfit flex-1 flex flex-col gap-4">
      <h1 className="text-4xl">{name}</h1>

      <div>
        <h2 className="font-bold text-base">About</h2>
        <p>{description}</p>
      </div>

      <div>
        <h2 className="font-bold text-base">Tech Stack</h2>
        <p>{stack}</p>
      </div>

      <div>
        <h2 className="font-bold text-base">Features</h2>
        <p>{features}</p>
      </div>

      <Github link={github} />
    </div>
  );
}
