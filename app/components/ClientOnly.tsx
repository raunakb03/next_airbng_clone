"use client";
import { useState, useEffect } from "react";

interface ClientOnlyProps {
  children: React.ReactNode;
}

const ClientOnly = ({ children }: ClientOnlyProps) => {
  const [hasMounted, setHasMounted] = useState(false);
  useEffect(() => {
    setHasMounted(true);
  }, []);
  if (!hasMounted) return null;
  return <>{children}</>;
};

export default ClientOnly;
