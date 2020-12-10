import { createContext } from "react";

export const CartContext = createContext({ isOpen: false, closeMe: () => {} });
