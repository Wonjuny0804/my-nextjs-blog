import React, { useCallback, useEffect, useState } from "react";
import Link from "next/link";
import Layout from "../../components/common/Layout";
import Admin from "../../service/admin";
import useAuth from "../../stores/auth";
import PostServiceInstance from "../../service/posts";
import { DocumentData } from "firebase/firestore";
import { GetStaticProps } from "next";

const AdminPage = () => {
  const signIn = useAuth((state) => state.signIn);
  const isAuthenticated = useAuth((state) => state.isAuthenticated);
  const [posts, setPosts] = useState<Array<{ id: string; data: DocumentData }>>(
    []
  );

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

  useEffect(() => {
    const getPosts = async () => {
      const posts = await PostServiceInstance.getPosts();
      if (posts) setPosts(posts);
    };

    getPosts();
  }, []);

  if (!isAuthenticated)
    return (
      <>
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
      </>
    );

  return (
    <Layout>
      <div className="mx-4 lg:mx-0">
        <div
          className={`lg:w-[1024px] lg:min-h-[600px] xl:w-[1280px] lg:m-auto`}
        >
          <h1 className="text-2xl my-3">Admin page</h1>
          <p className="leading-4">
            You are now securely authenticated. What would you like to do?
          </p>

          <h3 className="font-medium text-xl mt-4">Services</h3>
          <ul className="mt-3 flex flex-col gap-4">
            <li>
              <Link href="/admin/blog">
                <a className="px-4 py-2 border-2 font-medium text-white">
                  Blog CMS
                </a>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {},
  };
};

// export const getServerSideProps: GetServerSideProps = async (context) => {
//   console.log(context.req);
//   return {
//     props: {},
//   };
// };

export default AdminPage;
