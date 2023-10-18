"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

import Modal from "../Modal";

import { Admin } from "../../types/user";
import { AdminDeleteLabel } from "../../consts/modal_labels";

interface Props {
  admin: Admin[];
}

interface FormData {
  email: string;
  password: string;
}

const AdminEditForm = ({ admin }: Props) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [formData, setFormData] = useState<FormData>({
    email: admin[0].email,
    password: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const deleteAdmin = () => {};

  return (
    <>
      <div className="col-span-12">
        <div className="rounded-sm border border-gray bg-white shadow-default">
          <div className="flex justify-between border-b border-gray px-7 py-4.5">
            <h4 className="text-base font-medium text-primary">
              Edit Admin User
            </h4>
          </div>
          <div className="flex flex-col gap-7.5 p-7.5 pb-11 text-secondary">
            <div className="flex flex-wrap gap-7.5">
              <div className="w-full md:flex-1">
                <div className="text-sm font-medium mb-3">Email Address*</div>
                <div className="flex items-center text-base font-medium h-11.5">
                  <input
                    type="text"
                    name="email"
                    id="email"
                    className="block w-full h-full rounded-md border-0 px-3 py-1.5 text-primary ring-1 ring-gray ring-inset focus:ring-2 focus:ring-inset"
                    value={formData.email}
                    onChange={handleInputChange}
                  />
                </div>
              </div>
              <div className="w-full md:flex-1">
                <div className="text-sm font-medium mb-3">Password*</div>
                <div className="flex items-center text-base font-medium h-11.5">
                  <input
                    type="text"
                    name="password"
                    id="password"
                    className="block w-full h-full rounded-md border-0 px-3 py-1.5 text-primary ring-1 ring-gray ring-inset focus:ring-2 focus:ring-inset"
                    value={formData.password}
                    onChange={handleInputChange}
                  />
                </div>
              </div>
            </div>

            <div className="flex gap-5 justify-between">
              <button
                className="inline-flex items-center justify-center gap-2.5 rounded-full border border-primary2 py-2 px-6 text-center font-medium text-primary2 hover:bg-opacity-90"
                onClick={() => setIsModalOpen(true)}
              >
                <Image
                  width={18}
                  height={18}
                  src={"/images/icon-trash.svg"}
                  alt="Delete User"
                />
                Delete User
              </button>
              <div className="flex gap-2 justify-end lg:gap-7.5">
                <Link href={"/admins"}>
                  <button className="rounded-full border border-primary2 py-2 px-6 text-center font-medium text-primary2 hover:bg-opacity-90">
                    Cancel
                  </button>
                </Link>
                <button className="rounded-full border border-primary2 bg-primary2 py-2 px-6 text-center font-medium text-white hover:bg-opacity-90">
                  Save
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Modal
        isOpen={isModalOpen}
        label={AdminDeleteLabel(admin[0].email)}
        closeModal={() => setIsModalOpen(false)}
        onSubmit={deleteAdmin}
      />
    </>
  );
};

export default AdminEditForm;
