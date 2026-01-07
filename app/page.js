import { supabase } from "@/lib/supabase";

export default async function Home() {
  const { data, error } = await supabase.from("exercises").select("*");

  if (error) {
    console.log(error);
  }

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold pb-4">Exercises</h1>
      {data.length === 0 ? (
        <p className="text-gray-500">No exercises found</p>
      ) : (
        <ul clasName="space-y-4">
          {data.map((exercise) => (
            <li key={exercise.id} className="p-4 border rounded">
              <h2 className="text-lg font-bold">{exercise.title}</h2>
              <p className="text-gray-500">{exercise.category}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
