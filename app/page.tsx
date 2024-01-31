import Hello from "./components/Hello";
import Nav from "./components/Nav";
import AboutMe from "./components/AboutMe";
import Projects from "./components/Projects";

export default function Home() {
  return (
    <main className="bg-light">
      <div className="container mx-auto">
        <Hello />
        <Nav />
        <AboutMe />
        <Projects />
      </div>
    </main>
  );
}
