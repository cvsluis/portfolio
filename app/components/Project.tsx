import { Project } from "@/app/lib/definitions";
import Image from "next/image";
import Link from "next/link";

export default function Project({ id, name, cover, description }: Project) {
  return (
    <Link
      className="aspect-square relative group row-span-1"
      href={`/projects/${id}`}
    >
      <Image
        src={cover}
        className="w-full h-full object-cover rounded-xl"
        alt={`Cover photo for ${name} project`}
        width={0}
        height={0}
        sizes="100vw"
      />
      <div className="bg-pinkred rounded-xl opacity-0 h-full group-hover:opacity-100 duration-300 absolute left-0 bottom-0 right-0 z-10 p-4 flex flex-col justify-center items-center gap-1 md:gap-3  text-white">
        <p className="text-xl md:text-2xl font-semibold font-outfit">{name}</p>
        <p className="hidden md:block md:text-base text-center">
          {description}
        </p>
      </div>
    </Link>
  );
}
