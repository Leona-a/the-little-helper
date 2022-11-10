import React from "react";
import { isAdminUser } from "../lib/utils";

function Admin() {
  return (
    <div className="grid place-items-center ">
      {
        isAdminUser()
          ? <div className="text-4xl inline mt-10">This is admin</div>
          : <div className="">You must be an admin to view this page</div>
      }
    </div>
  )
}

export default Admin;
