const Product = () => {
  return (
      <div className="max-w-screen-lg mx-auto my-10">
        <div className="grid md:grid-cols-2 mb-5">
          <figure className="flex flex-col items-center justify-center text-center bg-transparent ">
            <img
              className="h-96 w-full rounded-lg object-cover"
              src="https://images.unsplash.com/photo-1685508260751-b1462ac60236?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80"
              alt=""
            />
          </figure>
          <figure className="flex flex-col items-center justify-center p-8 bg-transparent rounded-tr-lg">
            <blockquote className="max-w-2xl mx-auto mb-4 lg:mb-8">
              <div className="flex flex-col gap-5 ">
                <div className="text-3xl font-semibold underline text-gray-900 uppercase break-words ">
                  somethin that something
                </div>
                <div className="text-gray-600">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Dolorem perspiciatis ipsam, maxime tenetur reprehenderit vero
                  sequi ex officia! Exercitationem consectetur voluptate
                </div>
                <div className="font-bold self-end pr-5">$299</div>
                <div className="flex flex-row justify-center items-center">
                  <button className="bg-gray-950 px-12 py-2 text-gray-100 uppercase">
                    Add to Bag
                  </button>
                </div>
              </div>
            </blockquote>
          </figure>
        </div>
      </div> 
  );
};

export default Product;
