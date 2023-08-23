import React from "react";
import Model from "./Model";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { addDoc, collection, doc, updateDoc } from "firebase/firestore";
import { db } from "../config/firbase";
import { toast } from "react-toastify";
import * as yup from "yup";

const contactVildationSchema = yup.object().shape({
  Name: yup.string().required("Name is Required"),
  Email: yup.string().email("Invalid Email").required("Email is Required"),
});

const AddAndUpdate = ({ isOpen, onClose, isUpdate, contact }) => {
  const addContact = async (contact) => {
    try {
      const ContactRef = collection(db, "contacts");
      await addDoc(ContactRef, contact);
      onClose();
      toast.success("Contact Added");
    } catch (error) {
      console.log(error);
    }
  };

  const UpdateContact = async (contact, id) => {
    try {
      const ContactRef = doc(db, "contacts", id);
      await updateDoc(ContactRef, contact);
      onClose();
      toast.success("Contact Updated");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <Model isOpen={isOpen} onClose={onClose}>
        <Formik
          validationSchema={contactVildationSchema}
          initialValues={
            isUpdate
              ? {
                  Name: contact.Name,
                  Email: contact.Email,
                }
              : {
                  Name: "",
                  Email: "",
                }
          }
          onSubmit={(values) => {
            isUpdate ? UpdateContact(values, contact.id) : addContact(values);
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
              <div className="text-red-500">
                <ErrorMessage name="Name" />
              </div>
              <div className="flex flex-col  text-white">
                <label htmlFor="Email">Email</label>
                <Field
                  type="email"
                  name="Email"
                  className="h-10 rounded-md text-black pl-3"
                />
              </div>
              <div className="text-red-500">
                <ErrorMessage name="Email" />
              </div>
            </div>

            <div className="flex justify-end">
              <button className=" text-white bg-orange-600 p-3 m-3">
                {isUpdate ? "Update" : "Add"} Contact
              </button>
            </div>
          </Form>
        </Formik>
      </Model>
    </div>
  );
};

export default AddAndUpdate;
