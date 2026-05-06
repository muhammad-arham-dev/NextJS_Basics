async function getData() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  return res.json();
}

export default async function ServerFetchPage() {
  const users = await getData();

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Server Fetching</h1>

      <div className="space-y-2">
        {users.slice(0, 5).map((user) => (
          <div key={user.id} className="p-2 bg-slate-800 rounded">
            {user.name}
          </div>
        ))}
      </div>
    </div>
  );
}