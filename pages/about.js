import React from "react";
import styles from "@/styles/About.module.css";

const About = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.center}>About Hunting Coder</h1>
      <h2 className={styles.h2}>Introduction</h2>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro aspernatur quam officiis dolorem, accusantium ducimus illum libero incidunt ipsa eligendi odit amet, sunt consectetur autem vitae dolore aliquam veniam quis perspiciatis? Expedita beatae suscipit iste sequi repellat praesentium quasi! Aut, ut nihil vero velit, vel magni voluptatibus eligendi alias quaerat aspernatur sint consequuntur exercitationem eos fugit laudantium dolorem eius numquam minus perferendis. Expedita nostrum tempore molestiae quasi in voluptatum nam voluptas! Minus maxime voluptates officia expedita quidem ab delectus, dignissimos, placeat neque.</p>

      <h2 className={styles.h2}>Services Offered</h2>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta illo pariatur suscipit esse perspiciatis? Inventore blanditiis dignissimos ut consequatur, tempore repellat recusandae quia aut commodi!</p>

      <p>We offer following services</p>
      <ul className={styles.ul}>
        <li>Service 1</li>
        <li>Service 2</li>
        <li>Service 3</li>
        <li>Service 4</li>
        <li>Service 5</li>
      </ul>

      <h2 className={styles.h2}>Contact Us</h2>
      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facilis similique veritatis dolorem quas aut! Alias nesciunt labore, nostrum commodi est odio quo odit soluta laborum incidunt, minima atque dolorum ipsa?</p>
      
    </div>
  );
};

export default About;
