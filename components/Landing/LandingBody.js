import React from "react";
import { Link } from "gatsby";
import moment from "moment";
import { postWrapper, bodyWrapper, link } from "./LandingBody.module.css";

const LandingBody = ({ posts }) => {
  return (
    <section className={bodyWrapper}>
      {posts.map((post) => (
        <Link key={post.id} to={`/blog/${post.slug}`} className={link}>
          <article className={postWrapper}>
            <h2>{post.slug}</h2>
            <p>{post.excerpt}</p>
            <span>{moment(post.frontmatter.date).format("MMM DD, YYYY")}</span>
          </article>
        </Link>
      ))}
    </section>
  );
};

export default LandingBody;
