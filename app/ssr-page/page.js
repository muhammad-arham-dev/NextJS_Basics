async function getUsers() {
  const res = await fetch(
    "https://jsonplaceholder.typicode.com/users",
    { cache: "no-store" } // SSR
  );

  return res.json();
}

export default async function SSRPage() {
  const users = await getUsers();

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">
        Server-Side Rendering (SSR)
      </h1>

      <div className="space-y-2">
        {users.map((user) => (
          <div key={user.id} className="p-2 bg-slate-800 rounded">
            {user.name}
          </div>
        ))}
      </div>
    </div>
  );
}