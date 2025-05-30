// src/hooks/useAuth.js
import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";

export default function useAuth() {
  return useContext(AuthContext);
}
