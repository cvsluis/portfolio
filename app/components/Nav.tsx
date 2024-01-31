import Github from "../svg/Github";
import LinkedIn from "../svg/LinkedIn";

export default function Nav() {
  const navlinks = [
    {
      title: "HELLO",
      path: "#hello",
    },
    {
      title: "ABOUT",
      path: "#about",
    },
    {
      title: "PROJECTS",
      path: "#projects",
    },
  ];

  const navmap = navlinks.map((link, index) => {
    return (
      <li key={index}>
        <a
          href={link.path}
          className="relative w-fit block after:block after:content-[''] after:absolute after:h-[1px] after:bg-blue after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-left"
        >
          {link.title}
        </a>
      </li>
    );
  });

  return (
    <nav className="sticky top-16 text-sm hidden md:flex flex-row items-end justify-between px-12 lg:px-0 z-50">
      <div>
        <ul className="flex flex-col gap-[2px]">{navmap}</ul>
      </div>
      <div className="flex flex-col items-end gap-2">
        <a
          href="https://github.com/cvsluis"
          target="blank"
        >
          <Github />
        </a>
        <a
          href="https://www.linkedin.com/in/caitlinvandersluis/"
          target="blank"
        >
          <LinkedIn />
        </a>
      </div>
    </nav>
  );
}
