import React, { useCallback } from "react";

const AdminPage = () => {
  const handleSubmit = useCallback((event) => {
    event.preventDefault();

    console.log(event.target[0].value);
    console.log(event.target[1].value);
  }, []);
  return (
    <div>
      Welcome to admin page
      <h1>This is the admin page</h1>
      <form className="flex flex-col gap-3 max-w-xl" onSubmit={handleSubmit}>
        <div className="flex">
          <label htmlFor="adminID">ID</label>
          <input id="adminID" type="email" />
        </div>
        <div className="flex">
          <label htmlFor="adminPW">Password</label>
          <input id="adminPW" type="password" />
        </div>

        <button className="border-2 bg-white">login</button>
      </form>
    </div>
  );
};

export default AdminPage;
