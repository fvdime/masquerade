const HeroBanner = () => {
  return (
    <div className="">
      <div className="border-b-2 border-gray-900">
        <div className="max-w-screen-xl mx-auto mb-5">
          <div className="text-gray-950 font-extrabold text-[180px] uppercase break-words">
            masquerade
          </div>
          <div className="text-gray-900 font-semibold text-2xl text-justify pb-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem ad
            officia alias doloremque, maiores, in tempora aliquam optio vel
            debitis cum distinctio ab dolore sed reiciendis. Atque quod
            distinctio repellat? Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Vero perspiciatis similique molestias ad qui
            distinctio, molestiae cumque sunt omnis quibusdam repellat sit a,
            numquam porro nulla quasi cum sint asperiores?
          </div>
        </div>
      </div>
      <div className="max-w-screen-md mx-auto my-10">
        <div className="flex justify-between items-center text-6xl font-bold uppercase mb-5 flex-wrap">
          <div>break</div>
          <div>the</div>
          <div>chains</div>
        </div>
        <div className="my-10 ">
          <div className="grid gap-4 ">
            <div>
              <img
                className="h-96 w-full rounded-lg object-cover"
                src="https://images.unsplash.com/photo-1691732870814-058265779623?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1565&q=80"
                alt=""
              />
            </div>
            <div className="grid grid-cols-5 gap-4">
              <div>
                <img
                  className="h-36 w-full rounded-lg object-cover"
                  src="https://images.unsplash.com/photo-1685508260751-b1462ac60236?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80"
                  alt=""
                />
              </div>
              <div>
                <img
                  className="h-36 w-full rounded-lg object-cover"
                  src="https://images.unsplash.com/photo-1687141572261-4679156f5b0f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80"
                  alt=""
                />
              </div>
              <div>
                <img
                  className="h-36 w-full rounded-lg object-cover"
                  src="https://images.unsplash.com/photo-1684122561380-3772a4f9e388?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80"
                  alt=""
                />
              </div>
              <div>
                <img
                  className="h-36 w-full rounded-lg object-cover"
                  src="https://images.unsplash.com/photo-1678853119663-9586722a12b5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1552&q=80"
                  alt=""
                />
              </div>
              <div>
                <img
                  className="h-36 w-full rounded-lg object-cover"
                  src="https://images.unsplash.com/photo-1675657149146-a4e4e9621bcf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-row justify-center items-center">
          <button className="bg-gray-950 px-12 py-2 text-gray-100 uppercase">
            Explore
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
