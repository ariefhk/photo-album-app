"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

const ForceRefresh = () => {
  const router = useRouter();
  useEffect(() => {
    router.refresh();
  }, [router]);

  return <></>;
};

export default ForceRefresh;
