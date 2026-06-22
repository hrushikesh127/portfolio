import Image from "next/image";

const Portfolio = () => {
  return (
    <section className="px-10 py-20 bg-white">
      <h1 className="text-6xl font-bold mb-10">portfolio</h1>

      <div className="grid grid-cols-4 gap-6">
        <Image src="/images/p1.jpg" width={300} height={300} alt="" className="rounded-xl"/>
        <Image src="/images/p2.jpg" width={300} height={300} alt="" className="rounded-xl"/>
        <Image src="/images/p3.jpg" width={300} height={300} alt="" className="rounded-xl"/>
        <Image src="/images/p4.jpg" width={300} height={300} alt="" className="rounded-xl"/>
      </div>
    </section>
  );
};

export default Portfolio;