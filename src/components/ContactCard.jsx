import React from "react";
import { HiOutlineUserCircle } from "react-icons/hi";
import { IoMdTrash } from "react-icons/io";
import { RiEditCircleLine } from "react-icons/ri";
const ContactCard = ({ contact }) => {
  return (
    <div
      key={contact.id}
      className=" rounded-lg mt-2 bg-yellow-200 flex items-center justify-between"
    >
      <div className="flex gap-3">
        <HiOutlineUserCircle className=" text-orange-500 text-4xl m-3" />
        <div className="flex justify-center flex-col">
          <h2 className="font-bold">{contact.Name}</h2>
          <p className=" text-sm">{contact.Email}</p>
        </div>
      </div>
      <div className="flex justify-center gap-3 m-2">
        <IoMdTrash className="cursor-pointer text-2xl text-red-600" />
        <RiEditCircleLine className="cursor-pointer text-2xl text-orange-600" />
      </div>
    </div>
  );
};

export default ContactCard;
