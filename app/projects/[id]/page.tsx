import { Metadata } from "next";
import { projects } from "../../lib/data";
import Carousel from "@/app/ui/project/carousel";
import Details from "@/app/ui/project/details";

export const metadata: Metadata = {
  title: "Projects",
};

export default async function Page({ params }: { params: { id: string } }) {
  const id = Number(params.id);
  const project = projects.find((project) => project.id === id);

  if (!project) {
    return <div>Project not found!</div>;
  }

  return (
    <main className="min-h-screen flex flex-col justify-center">
      {/* title */}
      {/* close button */}
      <div className="p-4 md:p-0 container mx-auto flex flex-col md:flex-row justify-center items-center gap-8">
        <Carousel images={project.images} />
        <Details {...project} />
      </div>
      {/* bottom navigation */}
    </main>
  );
}
