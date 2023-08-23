import React, { useState } from "react";

const useDisclose = () => {
  const [isOpen, SetOpen] = useState();

  const Onopen = () => {
    SetOpen(true);
  };
  const Onclose = () => {
    SetOpen(false);
  };
  return { Onclose, Onopen, isOpen };
};

export default useDisclose;
