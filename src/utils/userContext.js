import { createContext } from 'react';

const userContext = createContext({
  user: {
    name: 'Vinita Kumari',
    email: "vinitaksoni0502@gmail.com"
  }
})

userContext.displayName = "UserContext";

export default userContext;