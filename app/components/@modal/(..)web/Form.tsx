import { Dialog, Transition } from "@headlessui/react";
import { Dispatch, Fragment, SetStateAction, useRef, useState } from "react";
import axios from "axios";
import { Field, Form, Formik } from "formik";
import { BookingSchema } from "@/validation/booking.validate";
import { websites } from "@/data/website";
import ErrorModal from "../../Error";
import SuccessModal from "../../Success";

async function createUser(
  us_payload: any,
  web_payload: any,
  setOpenError: any,
  setOpenSuccess: any
) {
  try {
    await axios.post(`${process.env.NEXT_PUBLIC_API}/user`, {
      name: us_payload.name,
      email: us_payload.email,
      phoneNumber: us_payload.phoneNumber,
      bookWebs: web_payload,
    });
    setOpenSuccess(true);
  } catch (error) {
    setOpenError(true);
  }
}

export default function BookingForm({
  open,
  setOpen,
  websiteId,
}: {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
  websiteId: string;
}) {
  const [openError, setOpenError] = useState(false);
  const [openSuccess, setOpenSuccess] = useState(false);

  const cancelButtonRef = useRef(null);

  const findWebsite = websites.find((e) => e.id === Number(websiteId));

  return (
    <>
      <Transition.Root show={open} as={Fragment}>
        <Dialog
          as="div"
          className="relative z-10"
          initialFocus={cancelButtonRef}
          onClose={setOpen}
        >
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
          </Transition.Child>

          <div className="fixed inset-0 z-10 overflow-y-auto">
            <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                enterTo="opacity-100 translate-y-0 sm:scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              >
                <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                  <div className="isolate bg-white px-6 py-5 sm:py-12 lg:px-8">
                    <div
                      className="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]"
                      aria-hidden="true"
                    >
                      <div
                        className="relative left-1/2 -z-10 aspect-[1155/678] w-[36.125rem] max-w-none -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-40rem)] sm:w-[72.1875rem]"
                        style={{
                          clipPath:
                            "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
                        }}
                      />
                    </div>
                    <div className="mx-auto max-w-xl text-center">
                      <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                        Contact sales
                      </h2>
                      <p className="mt-2 text-base leading-8 text-gray-600">
                        Thank you for choosing our website for your purchase! We
                        appreciate your support and hope you enjoy your new
                        item. Happy shopping !
                      </p>
                    </div>
                    <Formik
                      initialValues={{
                        name: "",
                        email: "",
                        phoneNumber: "",
                      }}
                      validationSchema={BookingSchema}
                      onSubmit={(userPayload) => {
                        createUser(
                          userPayload,
                          findWebsite,
                          setOpenError,
                          setOpenSuccess
                        );
                      }}
                    >
                      {({ errors, touched }) => (
                        <Form className="mx-auto mt-16 max-w-xl sm:mt-20">
                          <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
                            <div className="sm:col-span-2">
                              <label
                                htmlFor="name"
                                className="block text-sm font-semibold leading-6 text-gray-900"
                              >
                                Name
                              </label>
                              <div className="mt-2.5">
                                <Field
                                  type="text"
                                  id="name"
                                  autoComplete="organization"
                                  name="name"
                                  className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                                {errors.name && touched.name ? (
                                  <div className="text-red-400 mt-2">
                                    {errors.name}
                                  </div>
                                ) : null}
                              </div>
                            </div>
                            <div className="sm:col-span-2">
                              <label
                                htmlFor="email"
                                className="block text-sm font-semibold leading-6 text-gray-900"
                              >
                                Email
                              </label>
                              <div className="mt-2.5">
                                <Field
                                  type="text"
                                  id="email"
                                  autoComplete="organization"
                                  name="email"
                                  className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                                {errors.email && touched.email ? (
                                  <div className="text-red-400 mt-2">
                                    {errors.email}
                                  </div>
                                ) : null}
                              </div>
                            </div>
                            <div className="sm:col-span-2">
                              <label
                                htmlFor="phoneNumber"
                                className="block text-sm font-semibold leading-6 text-gray-900"
                              >
                                Phone number
                              </label>
                              <div className="mt-2.5">
                                <Field
                                  type="text"
                                  id="phoneNumber"
                                  autoComplete="organization"
                                  name="phoneNumber"
                                  className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                                {errors.phoneNumber && touched.phoneNumber ? (
                                  <div className="text-red-400 mt-2">
                                    {errors.phoneNumber}
                                  </div>
                                ) : null}
                              </div>
                            </div>
                          </div>
                          <div className="mt-10">
                            <button
                              type="submit"
                              className="block w-full rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                            >
                              Agree booking
                            </button>
                          </div>
                        </Form>
                      )}
                    </Formik>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition.Root>

      {openError && <ErrorModal open={openError} setOpen={setOpenError} />}

      {openSuccess && (
        <SuccessModal open={openSuccess} setOpen={setOpenSuccess} />
      )}
    </>
  );
}
