import React, { useCallback, useEffect } from "react";
import Layout from "components/common/Layout";
import useAuth from "../../stores/auth";
import AdminServiceInstance from "../../services/admin";
import { useRouter } from "next/router";

const AdminSignInPage = () => {
  const { signIn } = useAuth();
  const router = useRouter();

  const handleSubmit = useCallback(
    async (event) => {
      event.preventDefault();

      const email = event.target[0].value;
      const password = event.target[1].value;

      const userCredentials = await AdminServiceInstance.signInWithIDPW({
        email,
        password,
      });

      signIn({
        name: userCredentials.user.displayName ?? "",
        userId: userCredentials.user.uid,
        email: userCredentials.user?.email ?? email,
      });

      router.push("/admin");
    },
    [router, signIn]
  );

  useEffect(() => {
    AdminServiceInstance.validateSignIn(
      () => {
        router.push("/admin");
      },
      () => {}
    );
  }, []);

  return (
    <Layout>
      <div className="mt-16 mx-4 lg:mx-0 font-montserrat">
        <h1 className="text-2xl my-3 text-white">This is the admin page</h1>
        <form className="flex flex-col gap-3 max-w-xl" onSubmit={handleSubmit}>
          <div className="grid grid-cols-[80px_1fr] text-white">
            <label htmlFor="adminID">ID</label>
            <input
              id="adminID"
              type="email"
              className={`bg-transparent focus:border-b focus:border-white  outline-none`}
            />
          </div>
          <div className="grid grid-cols-[80px_1fr] text-white ">
            <label htmlFor="adminPW">Password</label>
            <input
              id="adminPW"
              type="password"
              className={`bg-transparent focus:border-b focus:border-white outline-none`}
            />
          </div>

          <button className="border-2 bg-white">login</button>
        </form>
      </div>
    </Layout>
  );
};

export const getStaticProps = async () => {
  return {
    props: {},
  };
};

export default AdminSignInPage;
