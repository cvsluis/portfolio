import Link from "next/link";

export default function Navigation({
  id,
  name,
  numOfProjects,
}: {
  id: number;
  name: string;
  numOfProjects: number;
}) {
  const minus = id === 1 ? numOfProjects : id - 1;
  const plus = id === numOfProjects ? 1 : id + 1;

  return (
    <nav className="flex justify-center items-center">
      <Link href={`/projects/${minus}`}>&lt;</Link>
      <h3 className="mx-6">{name}</h3>
      <Link href={`/projects/${plus}`}>&gt;</Link>
    </nav>
  );
}
