import React, { useEffect, useState } from "react";
import styles from "@/styles/Blog.module.css";
import Link from "next/link";
import InfiniteScroll from "react-infinite-scroll-component";


// Step 1: Collect all the files from blogdata directory
// Step 2: Iterate through and display them

const Blog = (props) => {
  const [blogs, setBlogs] = useState(props.allBlogs);
  const [counts, setCounts] = useState(props.allCount);

  const [count, setCount] = useState(2);

  const fetchData = async () => {
    let d = await fetch(`http://localhost:3000/api/blogs/?count=${count + 2}`);
    setCount(count + 2);
    let data = await d.json();
    data = data.allBlogs;
    setBlogs(data)
  };

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

        <InfiniteScroll
          dataLength={blogs.length}
          next={fetchData}
          hasMore={counts !== blogs.length}
          loader={<h4>Loading...</h4>}
          endMessage={
            <p style={{ textAlign: 'center' }}>
              <b>Yay! You have seen it all</b>
            </p>
          }
        >
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
        </InfiniteScroll>

        <div>

        </div>
      </main>
    </>
  );
};

export async function getServerSideProps(context) {
  let data = await fetch("http://localhost:3000/api/blogs?count=6");
  let sendData = await data.json();

  let allCount = sendData.allCount;
  let allBlogs = sendData.allBlogs;

  return {
    props: { allCount: allCount, allBlogs: allBlogs },
  };
}

export default Blog;
