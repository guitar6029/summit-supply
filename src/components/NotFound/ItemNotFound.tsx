import Link from "next/link";

export default function ItemNotFound({
  title,
  msg,
}: {
  title: string;
  msg: string;
}) {
  return (
    <div className="flex flex-col items-center justify-center p-10">
      <h1 className="text-5xl font-bold mb-4">{title}</h1>
      <p className="text-3xl">{msg}</p>
      <Link
        href="/"
        className="bg-amber-600 w-full md:w-1/4 text-center hover:bg-amber-800 transition duration-300 ease-in text-white rounded-lg px-4 py-2 mt-4"
      >
        Home
      </Link>
      <Link
        href="/shoes"
        className="bg-amber-600 w-full md:w-1/4 text-center hover:bg-amber-800 transition duration-300 ease-in text-white rounded-lg px-4 py-2 mt-4"
      >
        Shoes
      </Link>
    </div>
  );
}
