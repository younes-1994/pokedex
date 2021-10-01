import React from "react";
import Navigation from "./src/navigation";
import { AuthProvider } from "./src/contexts/Auth";

export default () => (
  <AuthProvider>
    <Navigation />
  </AuthProvider>
);
