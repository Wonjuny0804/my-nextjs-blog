import React, { useCallback, useRef } from "react";
import dynamic from "next/dynamic";
import Admin from "../../service/admin";
import useAuth from "../../stores/auth";

const TextEditor = dynamic(
  () => import("../../components/TextEditor/TextEditor"),
  {
    ssr: false,
  }
);

const AdminPage = () => {
  const signIn = useAuth((state) => state.signIn);
  const isAuthenticated = useAuth((state) => state.isAuthenticated);

  const handleSubmit = useCallback(async (event) => {
    event.preventDefault();

    const email = event.target[0].value;
    const password = event.target[1].value;

    const userCredentials = await Admin.signInWithIDPW({
      email,
      password,
    });

    signIn({
      name: userCredentials.user.displayName ?? "",
      userId: userCredentials.user.uid,
      email: userCredentials.user?.email ?? email,
    });
  }, []);

  return (
    <div className="mx-4 lg:mx-0">
      Welcome to admin page
      {!isAuthenticated ? (
        <>
          <h1 className="text-2xl my-3">This is the admin page</h1>
          <form
            className="flex flex-col gap-3 max-w-xl"
            onSubmit={handleSubmit}
          >
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
        </>
      ) : (
        <>
          <h1 className="text-2xl my-3">Welcome home master</h1>
          <p>You are now securely authenticated. What would you like to do?</p>
          <TextEditor />
        </>
      )}
    </div>
  );
};

export default AdminPage;
