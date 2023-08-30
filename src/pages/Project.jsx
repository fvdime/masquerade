const Project = () => {
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
          <blockquote className="max-w-2xl mx-auto mb-4 text-gray-500 lg:mb-8 ">
            <h3 className="text-lg font-semibold text-gray-900 ">
              Solid foundation for any project
            </h3>
            <p className="my-4">
              Designing with Figma components that can be easily translated to
              the utility classes of Tailwind CSS is a huge timesaver! Lorem
              ipsum dolor sit amet consectetur adipisicing elit. Adipisci
              aperiam aliquam nulla perferendis maiores blanditiis dolore vitae
              placeat similique libero, voluptatibus neque! Aut laboriosam ut
              accusamus labore ullam eveniet optio.
            </p>
            <figcaption className="flex items-center justify-center space-x-3 mt-5">
            <img
              className="rounded-full w-9 h-9"
              src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/roberta-casas.png"
              alt="profile picture"
            />
            <div className="space-y-0.5 font-medium text-left">
              <div>Roberta Casas</div>
              <div className="text-sm text-gray-500 ">
                Lead designer at Dropbox
              </div>
            </div>
          </figcaption>
          </blockquote>
        </figure>
      </div>
      <div className="grid border border-gray-800 rounded-lg shadow-sm md:grid-cols-2">
        <figure className="flex flex-col items-center justify-center p-8  bg-transparent border-gray-800 rounded-t-lg md:rounded-t-none md:rounded-tl-lg md:border-r">
          <ol className="relative border-l border-gray-700">
            <span className="font-semibold text-xl ml-4">
              Timeline for projects
            </span>
            <li className="my-10 ml-4">
              <div className="absolute w-3 h-3 rounded-full mt-0 -left-1.5 border border-gray-900 bg-gray-700"></div>
              <time className="mb-1 text-sm font-normal leading-none text-gray-500">
                February 2022
              </time>
              <h3 className="text-lg font-semibold text-gray-900 ">
                Application UI code in Tailwind CSS
              </h3>
              <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
                Get access to over 20+ pages including a dashboard layout,
                charts, kanban board, calendar, and pre-order E-commerce &
                Marketing pages.
              </p>
            </li>
            <li className="mb-10 ml-4">
              <div className="absolute w-3 h-3 rounded-full mt-1.5 -left-1.5 border border-gray-900 bg-gray-700"></div>
              <time className="mb-1 text-sm font-normal leading-none text-gray-500">
                March 2022
              </time>
              <h3 className="text-lg font-semibold text-gray-900 ">
                Marketing UI design in Figma
              </h3>
              <p className="text-base font-normal text-gray-500">
                All of the pages and components are first designed in Figma and
                we keep a parity between the two versions even as we update the
                project.
              </p>
            </li>
            <li className="ml-4">
              <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
              <time className="mb-1 text-sm font-normal leading-none text-gray-500">
                April 2022
              </time>
              <h3 className="text-lg font-semibold text-gray-900 ">
                E-Commerce UI code in Tailwind CSS
              </h3>
              <p className="text-base font-normal text-gray-500 ">
                Get started with dozens of web components and interactive
                elements built on top of Tailwind CSS.
              </p>
            </li>
          </ol>
        </figure>
        <figure className="flex flex-col items-center justify-center p-8 bg-transparent rounded-tr-lg text-start">
          <blockquote className="max-w-2xl mx-auto mb-4 lg:mb-8 ">
            <span className="uppercase font-medium text-lg">
        Share your ideas with me and let&apos;s work together!
      </span>
      <form className="my-5">
        <div className="relative z-0 w-full mb-6 group">
          <input
            type="email"
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-700 appearance-none focus:outline-none focus:ring-0 focus:border-lime-600 peer"
            placeholder=" "
            required
          />
          <label className="peer-focus:font-medium absolute text-sm text-gray-500  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-lime-600 peer-focus:dark:text-lime-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
            Email address
          </label>
        </div>

        <div className="grid md:grid-cols-2 md:gap-6">
          <div className="relative z-0 w-full mb-6 group">
            <input
              type="text"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-700 appearance-none dark:text-white dark:focus:border-lime-500 focus:outline-none focus:ring-0 focus:border-lime-600 peer"
              placeholder=" "
              required
            />
            <label className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-lime-600 peer-focus:dark:text-lime-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
              First name
            </label>
          </div>
          <div className="relative z-0 w-full mb-6 group">
            <input
              type="text"
              name="floating_last_name"
              id="floating_last_name"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-700 appearance-none dark:text-white dark:focus:border-lime-500 focus:outline-none focus:ring-0 focus:border-lime-600 peer"
              placeholder=" "
              required
            />
            <label className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-lime-600 peer-focus:dark:text-lime-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
              Last name
            </label>
          </div>
        </div>
        <div className="relative z-0 w-full mb-6 group">
          <textarea
            type="email"
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-700 appearance-none focus:outline-none focus:ring-0 focus:border-lime-600 peer"
            placeholder=" "
            required
          />
          <label className="peer-focus:font-medium absolute text-sm text-gray-500  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-lime-600 peer-focus:dark:text-lime-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
            Your Message
          </label>
        </div>
      </form>
          </blockquote>
          
          <div className="flex flex-col justify-center items-center">
            <button className="bg-gray-950 px-12 py-2 text-gray-100 uppercase mt-5">
              Hire Me
            </button>
          </div>
        </figure>
      </div>
    </div>
  );
};

export default Project;
