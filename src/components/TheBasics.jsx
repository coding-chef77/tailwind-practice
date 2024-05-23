const TheBasics = () => {
  return (
    <div className="w-full max-w-lg rounded-lg bg-white p-10 shadow-xl shadow-indigo-500/50">
      <h2 className="text-xl font-bold">@HeineRocks</h2>
      <p className="mb-6 mt-3 leading-relaxed text-zinc-600">
        lorum ipsum dolor sit amet consectetur adipisicing elit. Vitea
        dignissimos voluptatibus reiciendis perferendis facilis dolores
        temporibus aperiam consequuntur soluta. dolo rem ipsa dignissimos
        voluptatibus reiciendis perferendis facilis dolores temporibus aperiam
        consequuntur soluta.{" "}
      </p>
      <div className="grid w-full grid-cols-2 overflow-hidden rounded-xl border border-indigo-500 font-medium">
        <button className="bg-indigo-500 p-3 text-white">Subscribe</button>
        <button className="bg-white p-3 text-indigo-500">Notification</button>
      </div>
    </div>
  );
};

export default TheBasics;
