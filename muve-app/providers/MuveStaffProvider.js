import { useContext, createContext, useState, useEffect } from "react";
import team from "../assets/team";
import Constants from "expo-constants";
import { createClient } from "@supabase/supabase-js";

// Create a Context
const MuveStaffContext = createContext();

// Create a Provider component
export const MuveStaffProvider = ({ children }) => {
  const { SUPABASE_KEY, SUPABASE_URL } = Constants.expoConfig.extra;
  const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);

  const [staff, setStaff] = useState(team);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchStaffMembers = async () => {
      const { data } = await supabase.from("muve_staff").select("*");

      if (data) {
        setStaff(data);
      } else {
        setStaff(team);
      }

      setLoading(false);
    };

    fetchStaffMembers();
  }, []);

  return (
    <MuveStaffContext.Provider value={{ staff, loading }}>
      {children}
    </MuveStaffContext.Provider>
  );
};

// Create a custom hook to use the context
export const useMuveStaff = () => {
  return useContext(MuveStaffContext);
};
