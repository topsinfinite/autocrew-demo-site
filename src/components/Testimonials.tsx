import { Quote, Star } from 'lucide-react';

interface Testimonial {
  id: number;
  name: string;
  duration: string;
  text: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: 'Maria G.',
    duration: 'Patient for 5 years',
    text: "The medication check feature on the Health Assistant is incredible. I can quickly see all my prescriptions and when I need refills. It's like having a pharmacist in my pocket!",
  },
  {
    id: 2,
    name: 'David T.',
    duration: 'Patient for 3 years',
    text: 'As a diabetic, having instant access to my lab results is a game-changer. I can track my A1C trends and share them with Dr. Chen during our visits. The whole team here is fantastic.',
  },
  {
    id: 3,
    name: 'Jennifer & Tom W.',
    duration: 'Family patients for 7 years',
    text: "Our kids absolutely love Dr. Rivera! And the telehealth option has saved us so many trips to the office for minor issues. Best family practice in Austin.",
  },
  {
    id: 4,
    name: 'Robert M.',
    duration: 'Patient for 2 years',
    text: 'At 82, I take quite a few medications. Dr. Okonkwo is wonderful with elderly care, and the Health Assistant helps me track my medications and upcoming appointments without needing to call the office.',
  },
];

export function Testimonials() {
  return (
    <section id="testimonials" className="bg-slate-50 py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            What Our Patients Say
            <span className="block w-24 h-1 bg-primary mx-auto mt-4 rounded"></span>
          </h2>
          <p className="text-lg text-slate-600 mt-4">
            Real stories from the families we serve
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-white rounded-lg shadow-md p-6 md:p-8 hover:shadow-lg transition-shadow"
            >
              <Quote className="w-8 h-8 text-primary mb-4" />

              <p className="text-slate-700 italic mb-6 leading-relaxed">
                "{testimonial.text}"
              </p>

              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 fill-accent text-accent"
                  />
                ))}
              </div>

              <div>
                <p className="font-bold text-slate-900">{testimonial.name}</p>
                <p className="text-sm text-slate-500">{testimonial.duration}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
