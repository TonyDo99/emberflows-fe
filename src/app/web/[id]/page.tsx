"use client";
import Image from "next/image";
import { CursorArrowRaysIcon } from "@heroicons/react/20/solid";
import { useState } from "react";
import BookingForm from "@/src/components/@modal/(..)web/Form";

const features = [
  { name: "Origin", description: "Designed by Good Goods, Inc." },
  {
    name: "Material",
    description:
      "Solid walnut base with rare earth magnets and powder coated steel card cover",
  },
  { name: "Dimensions", description: '6.25" x 3.55" x 1.15"' },
  { name: "Finish", description: "Hand sanded and finished with natural oil" },
  { name: "Includes", description: "Wood card tray and 3 refill packs" },
  {
    name: "Considerations",
    description:
      "Made from natural materials. Grain and color vary with each item.",
  },
];

export default function ProductDetail({ params }: { params: { id: string } }) {
  const [openModal, setOpenModal] = useState(false);
  return (
    <div className="bg-white">
      <div className="mx-auto grid max-w-2xl grid-cols-1 items-center gap-x-8 gap-y-16 px-4 py-24 sm:px-6 sm:py-32 lg:max-w-7xl lg:grid-cols-2 lg:px-8">
        <div>
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Technical Specifications
          </h2>
          <p className="mt-4 text-gray-500">
            The walnut wood card tray is precision milled to perfectly fit a
            stack of Focus cards. The powder coated steel divider separates
            active cards from new ones, or can be used to archive important task
            lists.
          </p>

          <dl className="mt-16 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:gap-x-8">
            {features.map((feature) => (
              <div key={feature.name} className="border-t border-gray-200 pt-4">
                <dt className="font-medium text-gray-900">{feature.name}</dt>
                <dd className="mt-2 text-sm text-gray-500">
                  {feature.description}
                </dd>
              </div>
            ))}
          </dl>
        </div>
        <div className="grid grid-cols-2 grid-rows-2 gap-4 sm:gap-6 lg:gap-8">
          <Image
            src="https://cdn.dribbble.com/userupload/4396435/file/original-60f5a7d5489a08ce60383766bd36439c.png?compress=1&resize=752x"
            alt="Walnut card tray with white powder coated steel divider and 3 punchout holes."
            className="rounded-lg bg-gray-100"
            width={300}
            height={300}
          />
          <Image
            src="https://cdn.dribbble.com/userupload/4387289/file/original-c3f57290bc76c22b7d245c8c833d2dcd.png?compress=1&resize=752x"
            alt="Top down view of walnut card tray with embedded magnets and card groove."
            className="rounded-lg bg-gray-100"
            width={300}
            height={300}
          />
          <Image
            src="https://cdn.dribbble.com/userupload/6012665/file/original-0292d6a01076ded0d131e46889479882.png?compress=1&resize=752x"
            alt="Side of walnut card tray with card groove and recessed card area."
            className="rounded-lg bg-gray-100"
            width={300}
            height={300}
          />
          <Image
            src="https://cdn.dribbble.com/userupload/4392539/file/original-247cbaac5509d1959c43a89447798c41.png?compress=1&resize=752x"
            alt="Walnut card tray filled with cards and card angled in dedicated groove."
            className="rounded-lg bg-gray-100"
            width={300}
            height={300}
          />
        </div>
        <span>
          <button
            type="button"
            className="inline-flex items-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            onClick={() => setOpenModal(true)}
          >
            <CursorArrowRaysIcon
              className="-ml-0.5 mr-1.5 h-5 w-5"
              aria-hidden="true"
            />
            Booking
          </button>
        </span>
      </div>
      {openModal && (
        <BookingForm
          open={openModal}
          setOpen={setOpenModal}
          websiteId={params.id}
        />
      )}
    </div>
  );
}
