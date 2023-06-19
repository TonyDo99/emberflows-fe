"use client";
import axios from "axios";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import ErrorModal from "../components/Error";

const getUsers = async (
  setUser: any,
  setOpenError: Dispatch<SetStateAction<boolean>>
) => {
  try {
    const { data } = await axios.get("http://localhost:3000/api/user");
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
    await axios.delete(`http://localhost:3000/api/user/${userId}`);
    window.location.reload();
  } catch (error) {
    setOpenError(true);
  }
};

export default function UserManagements() {
  const [users, setUsers] = useState([]);
  const [openError, setOpenError] = useState(false);

  useEffect(() => {
    getUsers(setUsers, setOpenError);
  }, []);

  return (
    <div className="w-screen mt-32">
      <div className="w-full grid place-items-center">
        <ul role="list" className="divide-y divide-gray-100">
          {users?.map((user: any) => (
            <li key={user?.email} className="flex justify-between gap-x-6 py-5">
              <div className="flex gap-x-4">
                <img
                  className="h-12 w-12 flex-none rounded-full bg-gray-50"
                  src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
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
                    <button className="inline-flex items-center rounded-md bg-blue-50 px-2 py-1 text-xs font-medium text-blue-700 ring-1 ring-inset ring-blue-700/10">
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
    </div>
  );
}
