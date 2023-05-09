import Link from "next/link";

export default function Footer() {
  return (
    <footer className="py-8 px-2 lg:px-4 flex justify-between bg-gray-900 text-white">
      <a href="https://facebook.com/JasubiP" target="_blanck" className="flex gap-2 items-center">
        powered by 
        <img src="/image/jasubip-logo.png" alt="jasubip Desarrollador del citio" />
      </a>
      <Link href="/acerca-de">Acerca de</Link>
    </footer>
  );
};
