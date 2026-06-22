import Image from "next/image";

const Hero = () => {
  return (
    <section className="grid grid-cols-2 items-center px-10 py-16">
      
      {/* Left */}
      <div>
        <h1 className="text-7xl font-bold leading-none">
          visual <br /> poetry
        </h1>

        <p className="mt-6 text-gray-600 max-w-md">
          Welcome to a visual journey that transcends time and space.
        </p>

        <div className="flex gap-10 mt-10">
          <div>
            <h2 className="text-3xl font-bold">+250k</h2>
            <p className="text-sm text-gray-500">Videos</p>
          </div>

          <div>
            <h2 className="text-3xl font-bold">+800k</h2>
            <p className="text-sm text-gray-500">Hours watched</p>
          </div>
        </div>
      </div>

      {/* Right */}
      <div className="bg-orange-400 p-6 rounded-3xl">
        <Image
          src="/images/camera.png"
          alt="camera"
          width={400}
          height={400}
          className="rounded-2xl"
        />
      </div>
    </section>
  );
};

export default Hero;
