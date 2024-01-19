async function getBlogById(blogId) {
  const response = await fetch(process.env.HOST + `/blogs/read/${blogId}`, {
    method: "GET",
  });
  return response.json();
}
export default async function PageBlog({ params }) {
  const blog = await getBlogById(params.id);
  console.log(blog);

  return (
    <div>
      <h1 className="text-4xl font-bold text-center m-10 w-1/2 mx-auto">
        {" "}
        {blog.title}
      </h1>
      <img
        className="rounded-lg bg-white mb-2 w-1/4  mx-auto mb-4"
        src={blog.image_url}
      ></img>
      <p className="p-8 max-w-screen-xl mx-auto justify">{blog.content}</p>
      <p className="p-8 max-w-screen-xl mx-auto text-right font-bold text-lg color-black">
        {blog.author}
      </p>
    </div>
  );
}
