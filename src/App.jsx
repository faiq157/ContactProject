import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import { FiSearch } from "react-icons/fi";
import { AiFillPlusCircle } from "react-icons/ai";
import { collection, doc, getDoc, getDocs } from "firebase/firestore";
import { db } from "./config/firbase";
import { HiOutlineUserCircle } from "react-icons/hi";

const App = () => {
  const [Contacts, setContacts] = useState([]);

  useEffect(() => {
    const getContact = async () => {
      try {
        const ContactRef = collection(db, "contacts");
        const ContactsnapShot = await getDocs(ContactRef);
        const ContactList = ContactsnapShot.docs.map((doc) => {
          return {
            id: doc.id,
            ...doc.data(),
          };
        });
        setContacts(ContactList);
      } catch (error) {}
    };
    getContact();
  }, []);
  return (
    <div className="max-w-[370px] m-auto">
      <Navbar />
      <div className="flex relative items-center">
        <FiSearch className=" absolute ml-1  text-3xl text-white" />
        <input
          type="text"
          className="border pl-10 bg-transparent rounded-md p-2 flex-grow"
        />
        <div>
          <AiFillPlusCircle className="text-4xl text-white m-2 cursor-pointer" />
        </div>
      </div>
      <div>
        {Contacts.map((contact) => (
          <div key={contact.id}>
            <HiOutlineUserCircle />
            <div className="">
              <h2 className="">{contact.Name}</h2>
              <p className="">{contact.Email}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
