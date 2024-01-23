import { useParams } from "react-router-dom";

const MainPage = () => {
  const { name } = useParams();
  console.log(name);
  return (
    <div>
      <h1 className="max-w-md bg-red-300 text-center p-10 mx-auto">
        This Is About Content Content
      </h1>
      <h1 className="max-w-md bg-red-200 text-center p-10 mx-auto">
        Welcome To This Page {name ? name : "Guest"}
      </h1>
    </div>
  );
};
export default MainPage;
