import { useContext } from "react";
import { UserContext } from "../providers/UserProvider";

export const useUser = (): UserContextType => {
  const context = useContext(UserContext);
  if (context === null) {
    throw new Error("useUser must be used within a UserProvider");
  }
  return context;
};
