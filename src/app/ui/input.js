export default function Input({ label, type }) {
  return (
    <div className="flex flex-col w-full p-3">
      <label className="text-lg">{label}</label>
      <input
        type={type}
        className="border-2 border-solid border-black rounded p-2 text-lg"
      />
    </div>
  );
}
