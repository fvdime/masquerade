const Trending = () => {
  return (
    <div className="border-t-2 border-gray-900">
      <div className="flex flex-col justify-center items-center my-10">
        <div className="font-bold text-3xl uppercase">hot right now</div>
        <div className="flex lg:flex-row justify-center items-center gap-5 m-5">
          <div className="hover:opacity-80 duration-300 ease-in cursor-pointer">
            <div className="flex flex-col">
              <img
                src="https://images.unsplash.com/photo-1692357023469-9acf3db69f86?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1380&q=80"
                alt=""
                className="h-96 w-64 hover:rounded-lg duration-300 ease-in"
              />
            </div>
            <div className="flex flex-row justify-between items-center font-medium text-lg pt-2">
              <div>x col</div>
              <div>skirt</div>
              <div>$199</div>
            </div>
          </div>
          <div className="hover:opacity-80 duration-300 ease-in cursor-pointer">
            <div className="flex flex-col">
              <img
                src="https://images.unsplash.com/photo-1691704950824-349add985885?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1527&q=80"
                alt=""
                className="h-96 w-64 hover:rounded-lg duration-300 ease-in"
              />
            </div>
            <div className="flex flex-row justify-between items-center font-medium text-lg pt-2">
              <div>x col</div>
              <div>skirt</div>
              <div>$199</div>
            </div>
          </div>
          <div className="hover:opacity-80 duration-300 ease-in cursor-pointer">
            <div className="flex flex-col">
              <img
                src="https://images.unsplash.com/photo-1691966736114-07d7d5c1494c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1512&q=80"
                alt=""
                className="h-96 w-64 hover:rounded-lg duration-300 ease-in"
              />
            </div>
            <div className="flex flex-row justify-between items-center font-medium text-lg pt-2">
              <div>x col</div>
              <div>skirt</div>
              <div>$199</div>
            </div>
          </div>
          <div className="hover:opacity-80 duration-300 ease-in cursor-pointer">
            <div className="flex flex-col">
              <img
                src="https://images.unsplash.com/photo-1691991516582-08591407b096?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1565&q=80"
                alt=""
                className="h-96 w-64 hover:rounded-lg duration-300 ease-in"
              />
            </div>
            <div className="flex flex-row justify-between items-center font-medium text-lg pt-2">
              <div>x col</div>
              <div>skirt</div>
              <div>$199</div>
            </div>
          </div>
        </div>
        <div>
          <button className="bg-gray-950 px-12 py-2 text-gray-100 uppercase">
            shop now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Trending;
