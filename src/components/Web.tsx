import { websites } from "@/src/data/website";
import Image from "next/image";
import Link from "next/link";

export default function Webs() {
  return (
    <>
      {websites.map((website) => (
        <Link key={website.id} href={`/web/${website.id}`}>
          <div className="group relative">
            <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
              <Image
                src={website.imageSrc}
                alt={website.imageAlt}
                fill
                className="h-full w-full object-cover object-center lg:h-full lg:w-full rounded-lg"
              />
            </div>
          </div>
          <div className="mt-4 flex justify-between">
            <div>
              <h3 className="text-sm text-gray-700">
                <span
                  aria-hidden="true"
                  className="absolute inset-0 font-semibold"
                />
                {website.name}
              </h3>
              <p className="mt-1 text-sm text-gray-500">
                {website.description}
              </p>
            </div>
            <p className="text-sm font-medium text-gray-900">{website.price}</p>
          </div>
        </Link>
      ))}
    </>
  );
}
