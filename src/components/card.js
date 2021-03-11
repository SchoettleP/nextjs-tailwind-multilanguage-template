export default function Card({ title, body }) {
  return (
    <div className="w-64 m-5">
      <div className="border shadow border-gray-400 bg-white rounded flex flex-col justify-between">
        <div className="p-2">
          <div className="text-gray-900 font-bold text-xl items-center flex">
            {title}
          </div>
          <div>{body}</div>
        </div>
      </div>
    </div>
  );
}
