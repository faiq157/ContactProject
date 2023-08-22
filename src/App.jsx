import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import { FiSearch } from "react-icons/fi";
import { AiFillPlusCircle } from "react-icons/ai";
import { collection, doc, getDoc, getDocs } from "firebase/firestore";
import { db } from "./config/firbase";

import ContactCard from "./components/ContactCard";
import Model from "./components/Model";
import AddAndUpdate from "./components/AddAndUpdate";

const App = () => {
  const [Contacts, setContacts] = useState([]);
  const [isOpen, SetOpen] = useState();

  const onOpen = () => {
    SetOpen(true);
  };
  const OnClose = () => {
    SetOpen(false);
  };

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
    <>
      <div className="max-w-[370px] m-auto">
        <Navbar />
        <div className="flex relative items-center">
          <FiSearch className=" absolute ml-1  text-3xl text-white" />
          <input
            type="text"
            className="border pl-10 bg-transparent rounded-md p-2 flex-grow"
          />
          <div>
            <AiFillPlusCircle
              onClick={onOpen}
              className="text-4xl text-white m-2 cursor-pointer"
            />
          </div>
        </div>
        <div>
          {Contacts.map((contact) => (
            <ContactCard key={contact.id} contact={contact} />
          ))}
        </div>
      </div>
      <AddAndUpdate isOpen={isOpen} onClose={OnClose} />
    </>
  );
};

export default App;
