import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import { FiSearch } from "react-icons/fi";
import { AiFillPlusCircle } from "react-icons/ai";
import {
  collection,
  doc,
  getDoc,
  getDocs,
  onSnapshot,
} from "firebase/firestore";
import { db } from "./config/firbase";

import ContactCard from "./components/ContactCard";
import Model from "./components/Model";
import AddAndUpdate from "./components/AddAndUpdate";
import useDisclose from "./hooks/useDisclose";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import NotFoundContact from "./components/NotFoundContact";

const App = () => {
  const [Contacts, setContacts] = useState([]);
  const { Onclose, Onopen, isOpen } = useDisclose();
  useEffect(() => {
    const getContact = async () => {
      try {
        const ContactRef = collection(db, "contacts");

        onSnapshot(ContactRef, (snapshot) => {
          const ContactList = snapshot.docs.map((doc) => {
            return {
              id: doc.id,
              ...doc.data(),
            };
          });
          setContacts(ContactList);
          return ContactList;
        });
      } catch (error) {}
    };
    getContact();
  }, []);

  const FilterContact = (e) => {
    const value = e.target.value.toLowerCase(); // Convert the search value to lowercase

    const ContactRef = collection(db, "contacts");

    onSnapshot(ContactRef, (snapshot) => {
      const ContactList = snapshot.docs.map((doc) => {
        return {
          id: doc.id,
          ...doc.data(),
        };
      });

      const FilteredContacts = ContactList.filter((contact) =>
        contact.Name.toLowerCase().includes(value)
      );

      setContacts(FilteredContacts);
    });
  };

  return (
    <>
      <div className="max-w-[370px] m-auto">
        <Navbar />
        <div className="flex relative items-center">
          <FiSearch className=" absolute ml-1  text-3xl text-white" />
          <input
            onChange={FilterContact}
            type="text"
            className="border pl-10 bg-transparent rounded-md p-2 flex-grow"
          />
          <div>
            <AiFillPlusCircle
              onClick={Onopen}
              className="text-4xl text-white m-2 cursor-pointer"
            />
          </div>
        </div>
        <div>
          {Contacts.length <= 0 ? (
            <NotFoundContact />
          ) : (
            Contacts.map((contact) => (
              <ContactCard key={contact.id} contact={contact} />
            ))
          )}
        </div>
      </div>
      <AddAndUpdate isOpen={isOpen} onClose={Onclose} />
      <ToastContainer position="bottom-center" />
    </>
  );
};

export default App;
