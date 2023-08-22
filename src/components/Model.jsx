import React from "react";
import { createPortal } from "react-dom";
import { AiOutlineClose } from "react-icons/ai";

const Model = ({ isOpen, onClose, children }) => {
  return createPortal(
    <>
      {isOpen && (
        <>
          <div className="m-auto relative z-50 min-h-[200px] max-w-[80%] bg-slate-500 p-4 ">
            <div className="flex justify-end">
              <AiOutlineClose
                onClick={onClose}
                className="cursor-pointer text-3xl"
              />
            </div>
            {children}
          </div>
          <div
            onClick={onClose}
            className="backdrop-blur w-screen top-0 z-40 absolute h-screen"
          />
        </>
      )}
    </>,
    document.getElementById("model-root")
  );
};

export default Model;
