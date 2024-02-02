type ProjectProps = {
  name: string;
  image: string;
  stack: string;
  description: string;
  github: string;
};

export default function Project({
  name,
  image,
  stack,
  description,
  github,
}: ProjectProps) {
  return (
    <div>
      <h4 className="text-lg font-bold">{name}</h4>
      <h5>{stack}</h5>
      <p className="text-sm">{description}</p>
    </div>
  );
}
