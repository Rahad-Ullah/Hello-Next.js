
const CatchAllRoutes = ({ params, searchParams }) => {
  console.log(searchParams);
  return (
    <div>
      <h1 className="text-3xl text-center font-bold">Catch All Routes page</h1>
    </div>
  );
};

export default CatchAllRoutes;
