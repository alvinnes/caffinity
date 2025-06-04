const tes = () => {
  return (
    <div className="flex h-screen w-full items-center justify-center">
      <div className="mr-4 w-80 bg-white py-2 shadow-[5px_5px_0_black] transition-all active:translate-y-1 active:shadow-none border-solid border-1 border-slate-200 rounded-xs">
        Tes
      </div>
      <input
        type="text"
        placeholder="Ketik di sini"
        className="rounded border border-gray-300 bg-white px-3 py-2 shadow-[4px_4px_0_black] transition focus:shadow-[2px_2px_0_black] focus:outline-none"
      />
    </div>
  );
};

export default tes;
