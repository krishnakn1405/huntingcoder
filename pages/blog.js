import React, { useEffect, useState } from "react";
import styles from "@/styles/Blog.module.css";
import Link from "next/link";

// Step 1: Collect all the files from blogdata directory
// Step 2: Iterate through and display them

const Blog = (props) => {
  console.log(props);
  const [blogs, setBlogs] = useState(props.allBlogs);

  // useEffect(() => {

  // }, [])
  return (
    <>
      <style jsx>
        {`
          h2 {
            font-size: 20px;
            margin-top: 30px;
          }
        `}
      </style>
      <main className={`${styles.main}`}>
        <div>
          {blogs.map((blogItem) => {
            return (
              <div key={blogItem.slug} className={styles.blogItem}>
                <Link href={`/blogpost/${blogItem.slug}`}>
                  <h2 className={styles.blogItemh2}>{blogItem.title}</h2>
                </Link>
                <p className={styles.blogItemp}>
                  {blogItem.metadesc.substr(0, 140)}...
                </p>
              </div>
            );
          })}
        </div>
      </main>
    </>
  );
};

export async function getServerSideProps(context) {
  let data = await fetch("http://localhost:3000/api/blogs");
  let allBlogs = await data.json();

  return {
    props: { allBlogs },
  };
}

export default Blog;
