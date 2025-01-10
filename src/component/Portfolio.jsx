import Card from "./Card";
export default function Portfolio() {
  return (
    <div>
      <div className="flex justify-center items-center text-2xl p-4">
        My Projects
      </div>
      <ul className="flex flex-col">
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
          <Card />
        </li>
      </ul>
    </div>
  );
}
