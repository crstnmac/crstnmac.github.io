import { navigation } from "config";
import Link from "next/link";

const nav = navigation.mainNav;

export default function Footer() {
  return (
    <div className="flex w-full items-center justify-between py-6">
      <div className="flex items-center">Criston</div>
      <div className="hidden font-medium capitalize lg:inline-flex">
        Fontend Developer
      </div>
      <div className="ml-10 space-x-8">
        {nav.map((item, index) => (
          <Link
            key={index}
            href={item.href}
            className="text-base font-medium tracking-wide text-dark"
          >
            {item.title}
          </Link>
        ))}
      </div>
    </div>
  );
}
