"use client";
import axios from "axios";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import ErrorModal from "../components/Error";
import UpdateUserForm from "../components/@modal/(..)dashboard/UpdateUser";

const getUsers = async (
  setUser: any,
  setOpenError: Dispatch<SetStateAction<boolean>>
) => {
  try {
    const { data } = await axios.get(`${process.env.NEXT_PUBLIC_API}/user`);
    setUser(data);
  } catch (error) {
    setOpenError(true);
  }
};

const deleteUser = async (
  userId: string,
  setOpenError: Dispatch<SetStateAction<boolean>>
) => {
  try {
    await axios.delete(`${process.env.NEXT_PUBLIC_API}/user/${userId}`);
    window.location.reload();
  } catch (error) {
    setOpenError(true);
  }
};

export default function UserManagements() {
  const [users, setUsers] = useState([]);
  const [openError, setOpenError] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const [userId, setUserId] = useState<string>("");

  useEffect(() => {
    getUsers(setUsers, setOpenError);
  }, []);

  function updateUserActive(userId: string) {
    setOpenModal(!openModal);
    setUserId(userId);
  }
  return (
    <div className="w-screen mt-32">
      <div className="mx-auto max-w-xl text-center">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Users management
        </h2>
        <p className="mt-2 text-base leading-8 text-gray-600">Welcome back !</p>
      </div>
      <div className="w-full grid place-items-center">
        <ul role="list" className="divide-y divide-gray-100">
          {users?.map((user: any) => (
            <li key={user?.email} className="flex justify-between gap-x-6 py-5">
              <div className="flex gap-x-4">
                <img
                  className="h-12 w-12 flex-none rounded-full bg-gray-50"
                  src="data:image/png;base64,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"
                  alt=""
                />
                <div className="min-w-0 flex-auto">
                  <p className="text-sm font-semibold leading-6 text-gray-900">
                    {user?.name}
                  </p>
                  <p className="mt-1 truncate text-xs leading-5 text-gray-500">
                    {user?.email}
                  </p>
                </div>
              </div>
              <div className="hidden sm:flex sm:flex-col sm:items-end">
                <p className="truncate text-xs leading-5 text-gray-500">
                  + {user?.phoneNumber}
                </p>
                <div className="flex gap-x-2">
                  <div className="">
                    <button
                      className="inline-flex items-center rounded-md bg-blue-50 px-2 py-1 text-xs font-medium text-blue-700 ring-1 ring-inset ring-blue-700/10"
                      onClick={() => updateUserActive(user._id)}
                    >
                      Update
                    </button>
                  </div>
                  <div className="">
                    <button
                      className="inline-flex items-center rounded-md bg-red-50 px-2 py-1 text-xs font-medium text-red-700 ring-1 ring-inset ring-red-600/10"
                      onClick={() => deleteUser(user._id, setOpenError)}
                    >
                      Remove
                    </button>
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>

      {openError && <ErrorModal open={openError} setOpen={setOpenError} />}

      {openModal && (
        <UpdateUserForm
          userId={userId}
          open={openModal}
          setOpen={setOpenModal}
        />
      )}
    </div>
  );
}
