import Link from "next/link";

export default async function BlogPage(blogList) {
  return (
    <>
      <div className="text-center font-bold text-3xl mb-5 ">Tin Tức</div>
      <div className="max-w-screen-xl grid grid-cols-3 gap-4 mx-auto">
        {blogList.blogList.map((blog, i) => {
          return (
            <Link href={`/blogs/${blog.id}`}>
              <div
                className=" relative border-2 rounded-lg p-5 bg-white hover:border-[#9fd6f9] hover:bg-slate-100"
                key={i}
              >
                <div className="w-full">
                  <img
                    className="h-64 rounded-lg bg-white mb-2 w-full mb-4"
                    src={blog.image_url}
                  ></img>
                  <div className="h-10 text-justify font-bold mb-4">
                    {blog.title}
                  </div>
                  <div className="h-12 text-xs text-justify mb-6 opacity-50">
                    {blog.content.split(" ").slice(0, 27).join(" ") + "..."}
                  </div>
                </div>

                <div className="bottom-0 left-0 p-4 absolute text-blue-500 text-xs font-bold">
                  {blog.author}
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </>
  );
}
