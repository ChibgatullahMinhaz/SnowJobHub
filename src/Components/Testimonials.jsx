import { useEffect, useState } from 'react';
import Marquee from "react-fast-marquee";

const Testimonials = () => {
  const [testimonials, setTestimonials] = useState([]);

  useEffect(() => {
    fetch('/testimonials.json')
      .then(res => res.json())
      .then(data => setTestimonials(data))
      .catch(err => console.error('API fetch error:', err));
  }, []);

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4 text-gray-800">What People Say</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Real experiences from successful professionals on SnowJobHub.
          </p>
        </div>

        {/* Marquee container */}
        <div className="overflow-hidden">
          <Marquee
            direction="left"
            speed={30}
            gradient={false}
            loop={0}
            pauseOnHover={true}
            
          >
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="bg-white shadow-md rounded-lg p-6 w-80 h-50 flex-shrink-0 gap-3.5 border">
                <div className="flex items-center mb-4">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full mr-4 border-2 border-blue-500"
                  />
                  <div>
                    <h4 className="font-semibold text-gray-800">{testimonial.name}</h4>
                    <p className="text-sm text-gray-500">{testimonial.role} at {testimonial.company}</p>
                  </div>
                </div>
                <p className="text-gray-600 italic">"{testimonial.quote}"</p>
              </div>
            ))}
          </Marquee>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
