"use client";
import { useState, useEffect } from "react";

interface Clinetsideprop {
  children: React.ReactNode;
}

const ClinetOnly:React.FC<Clinetsideprop> = ({ children }) => {
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  if (!hasMounted) {
    return null;
  }

  return (
    <>{ children };</>
  )
};

export default ClinetOnly;
