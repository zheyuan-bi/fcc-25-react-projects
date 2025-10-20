import { createContext, useEffect, useState } from "react";
import callFeatureFlagsDataService from "../data";

export const FeatureFlagContext = createContext(null);

export default function FeatureFlagGlobalState({ children }) {
  const [isLoading, setIsLoading] = useState(false);
  const [enabledFlags, setEnabledFlags] = useState({});

  async function fetchFeatureFlags() {
    try {
      setIsLoading(true);
      const response = await callFeatureFlagsDataService();
      setEnabledFlags(response);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
      setIsLoading(false);
      throw new Error(error);
    }
  }

  useEffect(() => {
    fetchFeatureFlags();
  }, []);

  return <FeatureFlagContext.Provider value={{ isLoading, enabledFlags }}>{children}</FeatureFlagContext.Provider>;
}
