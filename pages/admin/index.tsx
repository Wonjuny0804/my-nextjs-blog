import React, { useCallback, useEffect, useState } from "react";
import Link from "next/link";
import Layout from "../../components/common/Layout";
import Admin from "../../service/admin";
import useAuth from "../../stores/auth";
import PostServiceInstance from "../../service/posts";
import { DocumentData } from "firebase/firestore";

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
      const posts = await PostServiceInstance.getPosts(1, 1);
      if (posts) setPosts(posts);
    };

    getPosts();
  }, []);

  return (
    <Layout>
      <div className="mx-4 lg:mx-0">
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
          <div
            className={`lg:w-[1024px] xl:w-[1280px] lg:m-auto font-workSans`}
          >
            <h1 className="text-2xl my-3">Admin page</h1>
            <p className="leading-4">
              You are now securely authenticated. What would you like to do?
            </p>

            <h3 className="font-medium text-xl mt-4">Services</h3>
            <ul className="mt-3 flex flex-col gap-4">
              {/* <li>
                <Link href="/admin/write">
                  <a className="admin-btn">Write new post</a>
                </Link>
              </li>
              <li>
                <Link href="/admin/blog">
                  <a className="admin-btn">Edit posts</a>
                </Link>
              </li> */}
              <li>
                <Link href="/admin/blog">
                  <a className="px-4 py-2 border-2 font-medium shadow-[3px_3px_0_#000000]">
                    Blog CMS
                  </a>
                </Link>
              </li>
            </ul>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default AdminPage;
