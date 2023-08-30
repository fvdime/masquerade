const Footer = () => {
  return (
    <div className="font-semibold text-sm mb-4">
      <div className="flex justify-between border-y-2 border-gray-900">
        <div className="flex-1 justify-start border-r-2 border-gray-900 uppercase p-1">
          phone: 0000000000 <br />
          contact: contact@gmail.com <br />
          contact Hours: (mon-fri 9am - 5pm) <br />
          Address: Lorem ipsum, dolor sit amet consectet
        </div>
        <div className="flex flex-col">
          <div className="uppercase border-b border-gray-900 p-2 hover:underline hover:cursor-pointer">
            <a href="/">linkedin</a>
          </div>
          <div className="uppercase border-b border-gray-900 p-2 hover:underline hover:cursor-pointer">
            <a href="/">github</a>
          </div>
          <div className="uppercase p-2 hover:underline hover:cursor-pointer">
            <a href="/">instagram</a>
          </div>
        </div>
        <div className="flex-1 border-l-2 border-gray-900 p-1">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </div>
      </div>
    </div>
  );
};

export default Footer;
