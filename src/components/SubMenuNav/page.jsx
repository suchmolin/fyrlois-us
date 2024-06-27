import Link from "next/link";

export default function SubMenuNav() {
  return (
    <ul className="flex gap-3 sm:gap-5 lg:gap-10 justify-center items-center h-full text-[#000b7a] text-sm sm:text-base">
      <li className="">
        <a href="/">Home</a>
      </li>

      <li>
        <Link href="/courses">Cursos</Link>
      </li>

      <li>
        <Link href="/about-us">Conócenos</Link>
      </li>

      <li>
        <Link href="/contact-us">Contacto</Link>
      </li>

      <li>
        <a href="#">Test</a>
      </li>
    </ul>
  );
}
