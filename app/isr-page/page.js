async function getPosts() {
  const res = await fetch(
    "https://jsonplaceholder.typicode.com/posts",
    {
      next: {
        revalidate: 10, // ISR every 10 seconds
      },
    }
  );

  return res.json();
}

export default async function ISRPage() {
  const posts = await getPosts();

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">
        Incremental Static Regeneration (ISR)
      </h1>

      <p className="text-sm text-gray-400 mb-4">
        Revalidates every 10 seconds
      </p>

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