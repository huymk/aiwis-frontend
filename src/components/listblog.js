export default async function BlogPage(blogList) {
  return (
    <>
      <div>Tin Tức</div>
      <div className="max-w-screen-xl grid grid-cols-3 gap-4 mx-auto">
        {blogList.blogList.map((blog) => {
          return (
            <div className="border-2 rounded-lg p-3 bg-white hover:border-[#9fd6f9] hover:bg-slate-100">
              <div className="w-full">
                <img
                  className="rounded-lg bg-white mb-2 w-full"
                  src={blog.image_url}
                ></img>
                <div className="text-justify font-bold">{blog.title}</div>
                <div className="text-justify">
                  {blog.content.split(" ").slice(0, 27).join(" ") + "..."}
                </div>
              </div>

              <div className="text- text-blue-500 text-xs font-bold">
                {blog.author}
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}
