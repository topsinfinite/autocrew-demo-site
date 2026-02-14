export default function Team() {
  const providers = [
    {
      name: "Dr. Sarah Chen",
      credentials: "MD",
      initials: "SC",
      avatarClass: "bg-primary",
      title: "Medical Director",
      specialties: "Family Medicine & Preventive Care",
    },
    {
      name: "Dr. Marcus Rivera",
      credentials: "DO",
      initials: "MR",
      avatarClass: "bg-accent",
      title: "Physician",
      specialties: "Sports Medicine & Pediatrics",
    },
    {
      name: "Dr. Priya Patel",
      credentials: "MD",
      initials: "PP",
      avatarClass: "bg-[#0a7b73]", // primary-dark
      title: "Physician",
      specialties: "Women's Health & Internal Medicine",
    },
    {
      name: "Dr. James Okonkwo",
      credentials: "MD",
      initials: "JO",
      avatarClass: "bg-[#4fb3a9]", // primary-light
      title: "Physician",
      specialties: "Geriatrics & Chronic Care",
    },
  ];

  return (
    <section id="team" className="bg-slate-50 py-20">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">
            Meet Our Providers
            <div className="w-24 h-1 bg-primary mx-auto mt-4"></div>
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Experienced, compassionate physicians dedicated to your family's
            well-being
          </p>
        </div>

        {/* Providers Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {providers.map((provider) => (
            <div
              key={provider.initials}
              className="bg-white rounded-lg shadow-md p-6 text-center hover:shadow-lg transition-shadow"
            >
              {/* Avatar Circle */}
              <div
                className={`${provider.avatarClass} w-24 h-24 rounded-full mx-auto mb-4 flex items-center justify-center`}
              >
                <span className="text-white text-2xl font-bold">
                  {provider.initials}
                </span>
              </div>

              {/* Provider Info */}
              <h3 className="text-xl font-bold text-slate-900 mb-1">
                {provider.name}, {provider.credentials}
              </h3>
              <p className="text-primary font-semibold mb-3">
                {provider.title}
              </p>
              <p className="text-slate-600 text-sm">{provider.specialties}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
