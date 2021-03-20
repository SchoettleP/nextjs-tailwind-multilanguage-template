export default function Card({ title, body }) {
  return (
    <div className="w-64 m-5">
      <div className="border shadow border-gray-400 bg-white rounded flex flex-col justify-between hover:bg-gray-200">
        <div className="p-2">
          <div className="text-gray-900 font-bold text-xl items-center flex">
            {title}
          </div>
          <div>
            <span className="text-black">{body}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
