export default async function BlogPage(blogList) {
  return (
    <>
      <div className="text-center font-bold text-3xl mb-5 ">Tin Tức</div>
      <div className="max-w-screen-xl grid grid-cols-3 gap-4 mx-auto">
        {blogList.blogList.map((blog, i) => {
          return (
            <div
              className=" relative border-2 rounded-lg p-3 bg-white hover:border-[#9fd6f9] hover:bg-slate-100"
              key={i}
            >
              <div className="w-full">
                <img
                  className="rounded-lg bg-white mb-2 w-full mb-4"
                  src={blog.image_url}
                ></img>
                <div className="text-justify font-bold mb-4">{blog.title}</div>
                <div className="text-justify mb-6">
                  {blog.content.split(" ").slice(0, 27).join(" ") + "..."}
                </div>
              </div>

              <div className="bottom-0 left-0 p-4 absolute text-blue-500 text-xs font-bold">
                {blog.author}
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}
