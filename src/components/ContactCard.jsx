import React, { useState } from "react";
import { HiOutlineUserCircle } from "react-icons/hi";
import { IoMdTrash } from "react-icons/io";
import { RiEditCircleLine } from "react-icons/ri";
import AddAndUpdate from "./AddAndUpdate";
import { deleteDoc, doc } from "firebase/firestore";
import { db } from "../config/firbase";
import useDisclose from "../hooks/useDisclose";
import { toast } from "react-toastify";
const ContactCard = ({ contact }) => {
  const { Onclose, Onopen, isOpen } = useDisclose();
  const deleteContact = async (id) => {
    try {
      deleteDoc(doc(db, "contacts", id));
      toast.success("Contact Deleted");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
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
          <IoMdTrash
            onClick={() => {
              deleteContact(contact.id);
            }}
            className="cursor-pointer text-2xl text-red-600"
          />
          <RiEditCircleLine
            onClick={Onopen}
            className="cursor-pointer text-2xl text-orange-600"
          />
        </div>
      </div>
      <AddAndUpdate
        isUpdate
        contact={contact}
        isOpen={isOpen}
        onClose={Onclose}
      />
    </>
  );
};

export default ContactCard;
