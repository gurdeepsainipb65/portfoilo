import Card from "./Card";
export default function Portfolio() {
  return (
    <div
    
    >
      <div className="flex justify-center items-center text-2xl p-4">
        My Projects
      </div>
      <ul className="grid grid-cols-1 lg:grid-cols-3  justify-center items-center">
        <li className="p-4">
          <Card
            name={"Movie Gallery"}
            desc={
              "My project, Movie Gallery, is a dynamic and interactive web application designed to display a collection of movies with options to filter and search. Here are the key aspects of your project:"
            }
            image={"/IMAG/movieproject.png"}
            siteurl={"https://gurdeepsainipb65.github.io/Movie-search/"}
            codeurl={"https://github.com/gurdeepsainipb65/Movie-search"}
          />
        </li>
        <li className="p-4">
          <Card
            name={" E-Commerce Website "}
            desc={
              "The E-Commerce Pizza Ordering Website is an interactive web application that enables customers to browse, customize, and order their favorite pizzas online with ease."
            }
            image={"/IMAG/ecommerce.png"}
            siteurl={"https://ecommerce-website-sage-five.vercel.app/"}
            codeurl={"https://github.com/gurdeepsainipb65/Ecommerce-website"}
          />
        </li>

        <li className="p-4" >
          <Card
            name={"full stack blog website"}
            desc={
              "Our Full Stack Blog Website, built with the MERN (MongoDB, Express.js, React, Node.js) stack, is a dynamic and feature-rich platform for content creators, bloggers, and readers. It provides a seamless experience for writing, managing, and engaging with blog content"
            }
            image={"/IMAG/blogwebsite.jpeg"}
            siteurl={"https://blogswebsitefrontend.vercel.app/"}
            codeurl={
              "https://github.com/gurdeepsainipb65/blogswebsitebackend"
            }
          />
        </li>
        <li className="p-4" >
          <Card
            name={"TODO with backend"}
            desc={
              "To-Do List web application that allows users to create, read, update, and delete (CRUD) tasks. This application will have a RESTful API developed using Node.js and a MongoDB database to store the tasks."
            }
            image={"/IMAG/todo.jpeg"}
            siteurl={"https://todo-app-using-node-js-x49w.onrender.com/"}
            codeurl={
              "https://github.com/gurdeepsainipb65/todo-app-using-node.js"
            }
          />
        </li>
      </ul>
    </div>
  );
}
