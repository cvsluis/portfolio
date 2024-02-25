import { Metadata } from "next";
import { projects } from "../../lib/data";
import Carousel from "@/app/ui/project/carousel";
import Details from "@/app/ui/project/details";
import Navigation from "@/app/ui/project/navigation";
import Asterisk from "@/app/ui/svg/Asterisk";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Caitlin Vandersluis | Projects",
};

export default async function Page({ params }: { params: { id: string } }) {
  const id = Number(params.id);
  const project = projects.find((project) => project.id === id);
  const numOfProjects = projects.length;

  if (!project) {
    return <div>Project not found!</div>;
  }

  return (
    <main className="container mx-auto p-4 md:py-16 min-h-screen flex flex-col justify-between gap-4 md:gap-0">
      <div className="flex flex-row justify-between">
        <div className="flex flex-row items-center gap-2">
          <Asterisk />
          PROJECTS
        </div>
        <Link href="/#projects">X</Link>
      </div>

      <div className="container mx-auto flex flex-col md:flex-row justify-center items-center gap-8">
        <Carousel images={project.images} />
        <Details {...project} />
      </div>

      <Navigation id={id} name={project.name} numOfProjects={numOfProjects} />
    </main>
  );
}
