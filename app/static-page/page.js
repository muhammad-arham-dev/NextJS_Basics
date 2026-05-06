async function getPosts() {
  const res = await fetch(
    "https://jsonplaceholder.typicode.com/posts",
    { cache: "force-cache" } // SSG behavior
  );

  return res.json();
}

export default async function StaticPage() {
  const posts = await getPosts();

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Static Generation (SSG)</h1>

      <div className="space-y-2">
        {posts.slice(0, 5).map((post) => (
          <div key={post.id} className="p-2 bg-slate-800 rounded">
            {post.title}
          </div>
        ))}
      </div>
    </div>
  );
}