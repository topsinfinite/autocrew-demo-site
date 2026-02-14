import {
  Pill,
  Calendar,
  FileText,
  MessageCircle,
  Mic,
  ShieldCheck,
  ArrowDownRight,
} from 'lucide-react';

const features = [
  {
    icon: Pill,
    title: 'Medication List',
    description: 'View current medications, dosages, and refill schedules',
  },
  {
    icon: Calendar,
    title: 'Appointments',
    description: 'Check upcoming visits and request new appointments',
  },
  {
    icon: FileText,
    title: 'Lab Results',
    description: 'Access your latest lab work and test results',
  },
  {
    icon: MessageCircle,
    title: '24/7 Chat Support',
    description: 'Get answers to health questions anytime',
  },
  {
    icon: Mic,
    title: 'Voice-Enabled',
    description: 'Speak naturally — our assistant understands you',
  },
  {
    icon: ShieldCheck,
    title: 'HIPAA Compliant',
    description: 'Your health data is always secure and private',
  },
];

const chatMessages = [
  {
    role: 'user',
    content: 'What medications am I currently taking?',
  },
  {
    role: 'assistant',
    content: `Based on your records, you're currently prescribed:
• Metformin 500mg - twice daily
• Lisinopril 10mg - once daily
• Vitamin D3 2000 IU - once daily

Would you like me to check for any refills due?`,
  },
  {
    role: 'user',
    content: 'When is my next appointment?',
  },
  {
    role: 'assistant',
    content: `Your next appointment is:
📅 March 15, 2026 at 10:30 AM
With Dr. Sarah Chen - Annual Wellness Visit`,
  },
];

export default function PatientPortal() {
  return (
    <section id="patient-portal" className="bg-white py-20 px-6 sm:px-8 lg:px-12">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Your Health Information,{' '}
            <span className="text-primary border-b-4 border-primary">Anytime</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our AI-powered Health Assistant gives you instant access to your health records
          </p>
        </div>

        {/* Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Left Column - Features */}
          <div className="space-y-6">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div key={index} className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-gray-900 mb-1">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600">{feature.description}</p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right Column - Chat Preview */}
          <div className="flex items-center justify-center">
            <div className="w-full max-w-md rounded-2xl shadow-2xl overflow-hidden border border-gray-200">
              {/* Chat Header */}
              <div className="bg-primary px-6 py-4 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <MessageCircle className="w-6 h-6 text-white" />
                  <span className="font-semibold text-white text-lg">
                    Health Assistant
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                  <span className="text-white/90 text-sm">Online</span>
                </div>
              </div>

              {/* Chat Messages */}
              <div className="bg-gray-50 p-6 space-y-4 h-96 overflow-y-auto">
                {chatMessages.map((message, index) => (
                  <div
                    key={index}
                    className={`flex ${
                      message.role === 'user' ? 'justify-end' : 'justify-start'
                    }`}
                  >
                    <div
                      className={`max-w-[80%] rounded-2xl px-4 py-3 ${
                        message.role === 'user'
                          ? 'bg-primary text-white rounded-tr-sm'
                          : 'bg-gray-100 text-gray-900 rounded-tl-sm'
                      }`}
                    >
                      <p className="text-sm whitespace-pre-line leading-relaxed">
                        {message.content}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Chat Input (Disabled/Preview) */}
              <div className="bg-white px-6 py-4 border-t border-gray-200">
                <div className="flex items-center gap-3">
                  <input
                    type="text"
                    placeholder="Type your message..."
                    disabled
                    className="flex-1 px-4 py-2 border border-gray-300 rounded-full bg-gray-50 text-gray-400 cursor-not-allowed"
                  />
                  <button
                    disabled
                    className="w-10 h-10 rounded-full bg-primary/30 flex items-center justify-center cursor-not-allowed"
                  >
                    <MessageCircle className="w-5 h-5 text-primary/50" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Button with Animated Arrow */}
        <div className="flex flex-col items-center gap-6">
          <button className="bg-primary hover:bg-primary/90 text-white font-semibold px-8 py-4 rounded-full text-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
            Try the Health Assistant
          </button>
          <div className="flex items-center gap-2 text-accent font-medium animate-bounce">
            <span className="text-sm">Click the widget below</span>
            <ArrowDownRight className="w-5 h-5" />
          </div>
        </div>
      </div>
    </section>
  );
}
