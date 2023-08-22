import React from "react";
import Model from "./Model";
import { Field, Form, Formik } from "formik";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../config/firbase";

const AddAndUpdate = ({ isOpen, onClose }) => {
  const addContact = async (contact) => {
    const ContactRef = collection(db, "contacts");
    await addDoc(ContactRef, contact);
  };

  return (
    <div>
      <Model isOpen={isOpen} onClose={onClose}>
        <Formik
          initialValues={{
            Name: "",
            Email: "",
          }}
          onSubmit={(values) => {
            addContact(values);
            console.log(values);
          }}
        >
          <Form>
            <div className="flex gap-4 flex-col">
              <div className="flex flex-col  text-white">
                <label htmlFor="Name">Name</label>
                <Field
                  type="name"
                  name="Name"
                  className="h-10 rounded-md text-black pl-3"
                />
              </div>
              <div className="flex flex-col  text-white">
                <label htmlFor="Email">Email</label>
                <Field
                  type="email"
                  name="Email"
                  className="h-10 rounded-md text-black pl-3"
                />
              </div>
            </div>

            <div className="flex justify-end">
              <button className=" text-white bg-orange-600 p-3 m-3">
                Submit
              </button>
            </div>
          </Form>
        </Formik>
      </Model>
    </div>
  );
};

export default AddAndUpdate;
