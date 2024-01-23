const Header = () => {
  const ArrayFormat = [
    {
      id: 1,
      name: "Dinesh S",
      desc: "Learning React Js",
    },
    {
      id: 2,
      name: "Dinesh Singaram",
      desc: "Learning React Js With Example Concept",
    },
    {
      id: 3,
      name: "Dinesh Kumar",
      desc: "Learning React Js With Real Time Example",
    },
    {
      id: 4,
      name: "Dinesh Nkl",
      desc: "Learning React Js Using Build A Project",
    },
  ];
  const mapMethod = ArrayFormat.map((map) => {
    return (
      <div
        className="bg-white p-5 rounded flex items-center space-x-10 mb-5"
        key={map.id}
      >
        <img
          src="https://www.abrilliants.com/wp-content/uploads/2023/05/1631110818-logo-react-js.png"
          alt="React Js Logo"
          className="w-28"
        />
        <div className="space-y-2">
          <h1>{map.name}</h1>
          <h1>{map.desc}</h1>
        </div>
      </div>
    );
  });

  /*   console.log(mapMethod); */
  return (
    <div className="m-10 bg-green-100">
      <h4 className="text-2xl font-extralight mb-5 ">Current Works</h4>
      {/* <div className="bg-white p-10 rounded flex items-center space-x-10 ">
        <img
          src="https://www.abrilliants.com/wp-content/uploads/2023/05/1631110818-logo-react-js.png"
          alt="React Js Logo"
          className="w-28"
        />
        <div className="space-y-2">
          <h1>Hello</h1>
          <h1>Hi</h1>
        </div>
      </div> */}
      {mapMethod}
    </div>
  );
};
export default Header;
