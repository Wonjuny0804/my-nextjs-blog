import React, { useEffect, useState } from "react";
import Link from "next/link";
import Layout from "../../components/common/Layout/Layout";
import AdminServiceInstance from "../../service/admin";
import PostServiceInstance from "../../service/posts";
import { DocumentData } from "firebase/firestore";
import { GetStaticProps } from "next";
import { useRouter } from "next/router";

const AdminPage = () => {
  const router = useRouter();
  const [posts, setPosts] = useState<Array<{ id: string; data: DocumentData }>>(
    []
  );

  useEffect(() => {
    const getPosts = async () => {
      const posts = await PostServiceInstance.getPosts();
      if (posts) setPosts(posts);
    };

    getPosts();
  }, []);

  useEffect(() => {
    AdminServiceInstance.validateSignIn(
      () => {},
      () => {
        router.replace("/admin/signin");
      }
    );
  }, [router]);

  return (
    <Layout>
      <div className="mx-4 lg:mx-0 font-montserrat">
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
              <Link
                href="/admin/blog"
                className="px-4 py-2 border-2 font-medium text-white"
              >
                Blog CMS
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

export default AdminPage;
