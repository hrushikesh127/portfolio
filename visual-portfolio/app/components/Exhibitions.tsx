type Exhibition = {
  title: string;
  place: string;
};

const Exhibitions = () => {
  const data: Exhibition[] = [
    {
      title: "Cinematic Visions Unveiled",
      place: "Madrid Gallery, Spain",
    },
    {
      title: "Frames in Motion",
      place: "Manchester Museum, UK",
    },
    {
      title: "Journey Through Time",
      place: "Milan Gallery, Italy",
    },
    {
      title: "Experimental Narratives",
      place: "Paris Museum, France",
    },
  ];

  return (
    <section className="px-10 py-20">
      <h1 className="text-5xl font-bold mb-10">exhibitions</h1>

      {data.map((item, index) => (
        <div
          key={index}
          className="flex justify-between items-center border-b py-6"
        >
          <div>
            <p className="text-sm text-gray-500">0{index + 1}</p>
            <h2 className="text-2xl font-semibold">{item.title}</h2>
          </div>

          <div className="flex items-center gap-6">
            <p className="text-gray-500">{item.place}</p>
            <button className="border px-4 py-2 rounded-full">
              Buy Ticket
            </button>
          </div>
        </div>
      ))}
    </section>
  );
};

export default Exhibitions;