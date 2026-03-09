"use client";

import { useState, useCallback, useMemo } from "react";
import { INITIAL_TODOS_CODE } from "@/app/constants";
import { parseSetCompleteValue } from "@/app/utils";

export function useDeployment() {
  const [isDeployed, setIsDeployed] = useState(true);
  const [deployedCode, setDeployedCode] = useState(INITIAL_TODOS_CODE);
  const [notification, setNotification] = useState("Fix the bug in setComplete!");

  /** The effective setComplete value from the deployed code. */
  const setCompleteValue = useMemo(
    () => parseSetCompleteValue(deployedCode) ?? false,
    [deployedCode]
  );

  /** Called when user edits code — marks as not deployed & updates notification */
  const markCodeChanged = useCallback((currentCode: string) => {
    setIsDeployed(false);

    const val = parseSetCompleteValue(currentCode);
    if (val === true) {
      setNotification("Now click Run to deploy your fix!");
    } else {
      setNotification("Fix the bug in setComplete!");
    }
  }, []);

  /** Deploy the code: apply it to the running preview. */
  const deploy = useCallback(
    (code: string): { success: boolean; message: string } => {
      setDeployedCode(code);
      setIsDeployed(true);

      const val = parseSetCompleteValue(code);
      if (val === true) {
        setNotification("Bug fixed! Try checking a todo now.");
        return {
          success: true,
          message: "npx convex deploy → deployed successfully ✓",
        };
      } else {
        setNotification("Deployed — but the bug is still there!");
        return {
          success: false,
          message: "npx convex deploy → deployed (bug still present)",
        };
      }
    },
    []
  );

  return {
    isDeployed,
    deployedCode,
    notification,
    setCompleteValue,
    markCodeChanged,
    deploy,
  };
}
