import { Stethoscope, Baby, UserRound, Heart, ShieldCheck, Activity, Video } from 'lucide-react';

const services = [
  {
    icon: Stethoscope,
    name: 'Primary Care',
    description: 'Comprehensive health assessments, preventive screenings, and treatment for acute and chronic conditions.',
  },
  {
    icon: Baby,
    name: 'Pediatric Care',
    description: 'Well-child visits, immunizations, developmental screenings, and compassionate care for your little ones.',
  },
  {
    icon: UserRound,
    name: 'Senior & Geriatric Care',
    description: 'Medicare wellness visits, fall prevention, memory screenings, medication management, and coordinated care for aging adults.',
  },
  {
    icon: Heart,
    name: "Women's Health",
    description: 'Annual wellness exams, reproductive health services, and prenatal care in a supportive environment.',
  },
  {
    icon: ShieldCheck,
    name: 'Preventive Care',
    description: 'Screenings, vaccinations, and personalized wellness plans to keep you healthy and thriving.',
  },
  {
    icon: Activity,
    name: 'Chronic Disease Management',
    description: 'Expert management of diabetes, hypertension, asthma, thyroid conditions, and other chronic diseases.',
  },
  {
    icon: Video,
    name: 'Telehealth',
    description: 'Convenient virtual visits for follow-ups, prescription refills, and minor health concerns from home.',
  },
];

export default function Services() {
  return (
    <section id="services" className="bg-white py-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">
            Our Services
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            Comprehensive care for your entire family, from routine check-ups to specialized treatment
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.name}
                className="bg-white rounded-lg p-8 border border-slate-200 hover:shadow-lg transition-shadow duration-300"
              >
                {/* Icon */}
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                  <Icon className="w-8 h-8 text-primary" />
                </div>

                {/* Service Name */}
                <h3 className="text-xl font-bold text-slate-900 mb-3">
                  {service.name}
                </h3>

                {/* Description */}
                <p className="text-slate-600 leading-relaxed">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
