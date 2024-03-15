import React, { useEffect, useCallback } from "react";
import { startBot } from "@/app/services/bot";

const ServerComponent = () => {
  useEffect(() => {
    startBot();
  }, []);

  return <></>;
};

export { ServerComponent };
