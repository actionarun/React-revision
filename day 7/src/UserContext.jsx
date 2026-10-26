import { createContext } from "react";

export const UserContext = createContext();

export function UserProvider({children}) {

  const user = "Arun";

  return (
    <UserContext.Provider value={user}>
      {children}
    </UserContext.Provider>
  );
}