import Card from "./Card";
export default function Portfolio() {
  return (
    <div>
      <div className="flex justify-center items-center text-2xl p-4">
        My Projects
      </div>
      <ul className="flex justify-center items-center flex-col lg:flex-row">
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
      </ul>
    </div>
  );
}
