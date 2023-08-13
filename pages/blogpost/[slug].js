import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import styles from "../../styles/BlogPost.module.css";

// Step 1: Find the file corresponding to the slug
// Step 2: Populate them inside the page
const slug = (props) => {
  function createMarkup(c) {
    return {__html: c};
  }
  const [blog, setBlog] = useState(props.myBlog);

  return (
    <div className={styles.container}>
      <main className={`${styles.main}`}>
        <div>
          <h1>{blog && blog.title}</h1>
          <hr className={styles.hr} />
          {blog && <div dangerouslySetInnerHTML={createMarkup(blog.content)}></div>}
        </div>
      </main>
    </div>
  );
};

export async function getServerSideProps(context) {
  const { slug } = context.query;

  let data = await fetch(`http://localhost:3000/api/getblog?slug=/${slug}`);
  let myBlog = await data.json();

  return {
    props: { myBlog },
  };
}

export default slug;
