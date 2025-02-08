import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Active({ href, children }) {
  const pathname = usePathname();
  return (
    <>
      <Link
        href={href}
        className={`px-4 py-2 rounded-xl ${
          pathname === href
            ? "bg-gray-200 text-gray-700"
            : "text-gray-700 bg-transparent"
        }`}
      >
        {children}
      </Link>
    </>
  );
}
