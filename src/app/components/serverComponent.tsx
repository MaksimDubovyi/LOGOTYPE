import React, { useEffect, useCallback } from "react";
import { startBot } from "@/app/services/bot";

const ServerComponent = () => {
  //   const startBotCallback = useCallback(() => {
  //     startBot();
  //   }, [startBot]);

  useEffect(() => {
    startBot();
  }, []);

  return <></>;
};

export { ServerComponent };
