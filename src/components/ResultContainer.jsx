import { motion } from "framer-motion";
import ResultCard from "./ResultCard";

// ✅ Local images (replace with your actual assets)
import bag from "./assets/bag.png";
import shoes from "./assets/shoes.png";
import woman from "./assets/woman.png";

export const ResultContainer = () => {
  const results = [
    {
      image: bag,
      metrics: ["Sales increase by 47%", "2x Website visits", "Profit margin by 70%"],
      
      name: "Anita M",
      role: "Founder | BackPack INC | Instagram",
    },
    {
      image: shoes,
      metrics: ["SEO Search by 62%", "2x Revenue from Ads","From $0 to $1,000,000 in sales."],
      
      name: "Malik B.",
      role: "Marketing Lead | BBR | Own Website",
    },
    {
      image: woman,
      metrics: ["SEO Search by 80%", "3x Revenue from Ads","From 0 to 100K followers"],
      
      name: "Rahul S.",
      role: "Owner | Friday Lunch | Facebook",
    },
  ];

  return (
    <section className="w-full bg-[#FEFAE0] py-20 px-6 md:px-12 flex flex-col items-center">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-16"
      >
        <div className="inline-flex items-center justify-center px-4 py-2 mb-4 rounded-xl border border-[#ffffff1a] backdrop-blur-sm">
          <span className="font-medium text-[15px] text-black">Results</span>
        </div>

        <h2 className="text-[42px] md:text-[58px] font-medium text-[#0D0D0D] leading-[1.2]">
          Results speak for{" "}
          <span className="italic font-[Instrument_Serif] text-[58px]">
            themselves.
          </span>
        </h2>

        <p className="text-[18px] text-gray-700 mt-4 max-w-[600px] mx-auto">
          We’ve worked across a number of industries and have achieved some
          incredible results with some incredible people and brands.
        </p>
      </motion.div>

      {/* Cards */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ staggerChildren: 0.2, duration: 1 }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 w-full max-w-6xl"
      >
        {results.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2, duration: 0.8 }}
          >
            <ResultCard {...item} />
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default ResultContainer;
