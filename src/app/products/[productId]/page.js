const DynamicProductPage = ({ params, searchParams }) => {
  console.log(searchParams);
  return (
    <div>
      <h1 className="text-3xl text-center font-bold">Dynamic Product page: {params.productId}</h1>
    </div>
  );
};

export default DynamicProductPage;
