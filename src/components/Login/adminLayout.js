import React from "react";
import { Route } from "react-router-dom";

function AdminLayout({ component: Component, ...props }) {
  const users = JSON.parse(localStorage.getItem("user"));

  return (
    users.role == "admin" && (
      <Route
        {...props}
        render={(routerProps) => (
          <>
            <Component {...routerProps} />
          </>
        )}
      />
    )
  );
}
export default AdminLayout;
