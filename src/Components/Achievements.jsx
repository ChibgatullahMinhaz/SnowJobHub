import { motion } from 'framer-motion';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';

const stats = [
  { value: 500, label: 'Companies', suffix: '+' },
  { value: 1000, label: 'Job Listings', suffix: '+' },
  { value: 50000, label: 'Active Users', suffix: '+' },
  { value: 20000, label: 'Successful Hires', suffix: '+' },
];

const Achievements = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.3 });

  return (
    <section className="py-16  relative overflow-hidden">
      <div className="absolute top-10 left-10 w-32 h-32 bg-white rounded-full mix-blend-overlay filter blur-3xl opacity-10"></div>
      <div className="absolute bottom-10 right-10 w-32 h-32 bg-winter-blue rounded-full mix-blend-overlay filter blur-3xl opacity-10"></div>

      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-700">
            Our <span className="text-blue-500"> Achievements</span>
          </h2>
          <p className="text-[#526177] max-w-2xl mx-auto">
          SnowJobHub has helped thousands of professionals find their perfect career path.
          </p>
        </motion.div>

        <div
          ref={ref}
          className="grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="text-center"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.5 }}
            >
              <div className="text-4xl md:text-5xl font-bold text-winter-purple mb-2">
                {inView && (
                  <CountUp
                    start={0}
                    end={stat.value}
                    duration={15}
                    delay={index * 0.2}
                    suffix={stat.suffix}
                  />
                )}
              </div>
              <div className="text-[#526177">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
