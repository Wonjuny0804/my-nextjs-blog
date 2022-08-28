import React, { useCallback } from "react";
import singleAdminConroller from "../../service/admin";

const AdminPage = () => {
  const handleSubmit = useCallback(async (event) => {
    event.preventDefault();

    const email = event.target[0].value;
    const password = event.target[1].value;

    const userCredentials = await singleAdminConroller.signInWithIDPW({
      email,
      password,
    });

    console.log(userCredentials);
  }, []);

  return (
    <div className="mx-4 lg:mx-0">
      Welcome to admin page
      <h1 className="text-2xl my-3">This is the admin page</h1>
      <form className="flex flex-col gap-3 max-w-xl" onSubmit={handleSubmit}>
        <div className="grid grid-cols-[80px_1fr]">
          <label htmlFor="adminID">ID</label>
          <input id="adminID" type="email" />
        </div>
        <div className="grid grid-cols-[80px_1fr]">
          <label htmlFor="adminPW">Password</label>
          <input id="adminPW" type="password" />
        </div>

        <button className="border-2 bg-white">login</button>
      </form>
    </div>
  );
};

export default AdminPage;
