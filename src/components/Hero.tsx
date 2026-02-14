import { UserPlus, Clock, Video, Stethoscope, Heart, Activity } from 'lucide-react';

export default function Hero() {
  return (
    <section id="hero" className="relative overflow-hidden bg-gradient-to-b from-slate-50 to-white pt-28 pb-20 lg:pt-36 lg:pb-28">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left side - Text content */}
          <div className="text-center lg:text-left">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 leading-tight mb-6">
              Your Family's Health, Our Priority
            </h1>
            <p className="text-lg sm:text-xl text-slate-600 mb-8 max-w-2xl mx-auto lg:mx-0">
              Comprehensive, compassionate primary care for every member of your family — from newborns to grandparents.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12">
              <a
                href="#contact"
                className="inline-flex items-center justify-center px-8 py-3 text-base font-medium text-white bg-primary hover:bg-primary-dark rounded-lg transition-colors duration-200 shadow-md hover:shadow-lg"
              >
                Schedule an Appointment
              </a>
              <a
                href="#team"
                className="inline-flex items-center justify-center px-8 py-3 text-base font-medium text-primary bg-white border-2 border-primary hover:bg-primary hover:text-white rounded-lg transition-colors duration-200"
              >
                Meet Our Team
              </a>
            </div>

            {/* Trust Badges */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start text-sm">
              <div className="flex items-center gap-2 text-slate-700">
                <div className="flex items-center justify-center w-8 h-8 rounded-full bg-primary/10">
                  <UserPlus className="w-4 h-4 text-primary" />
                </div>
                <span className="font-medium">Accepting New Patients</span>
              </div>
              <div className="flex items-center gap-2 text-slate-700">
                <div className="flex items-center justify-center w-8 h-8 rounded-full bg-primary/10">
                  <Clock className="w-4 h-4 text-primary" />
                </div>
                <span className="font-medium">Same-Day Appointments</span>
              </div>
              <div className="flex items-center gap-2 text-slate-700">
                <div className="flex items-center justify-center w-8 h-8 rounded-full bg-primary/10">
                  <Video className="w-4 h-4 text-primary" />
                </div>
                <span className="font-medium">Telehealth Available</span>
              </div>
            </div>
          </div>

          {/* Right side - Decorative medical icons composition */}
          <div className="relative hidden lg:flex items-center justify-center">
            <div className="relative w-full max-w-md h-96">
              {/* Background decorative circles */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 rounded-full border-2 border-primary/20 animate-pulse"></div>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 rounded-full border-2 border-accent/20"></div>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 rounded-full bg-gradient-to-br from-primary/5 to-accent/5"></div>

              {/* Stethoscope - Top Left */}
              <div className="absolute top-8 left-12 w-20 h-20 rounded-2xl bg-gradient-to-br from-primary to-primary-dark flex items-center justify-center shadow-xl transform hover:scale-110 transition-transform duration-300">
                <Stethoscope className="w-10 h-10 text-white" />
              </div>

              {/* Heart - Top Right */}
              <div className="absolute top-16 right-8 w-24 h-24 rounded-full bg-gradient-to-br from-accent to-pink-500 flex items-center justify-center shadow-xl transform hover:scale-110 transition-transform duration-300 animate-pulse">
                <Heart className="w-12 h-12 text-white fill-white" />
              </div>

              {/* Activity - Bottom Center */}
              <div className="absolute bottom-12 left-1/2 -translate-x-1/2 w-28 h-28 rounded-2xl bg-gradient-to-br from-primary/90 to-accent flex items-center justify-center shadow-2xl transform hover:scale-110 transition-transform duration-300">
                <Activity className="w-14 h-14 text-white" />
              </div>

              {/* Small accent circles */}
              <div className="absolute top-1/3 right-1/4 w-12 h-12 rounded-full bg-primary/20 blur-sm"></div>
              <div className="absolute bottom-1/3 left-1/4 w-16 h-16 rounded-full bg-accent/20 blur-sm"></div>
              <div className="absolute top-2/3 right-1/3 w-8 h-8 rounded-full bg-primary/30"></div>

              {/* Floating dots */}
              <div className="absolute top-1/4 left-1/3 w-3 h-3 rounded-full bg-primary animate-bounce"></div>
              <div className="absolute bottom-1/4 right-1/3 w-2 h-2 rounded-full bg-accent" style={{ animationDelay: '0.3s' }}></div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom wave separator (optional decorative element) */}
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent"></div>
    </section>
  );
}
