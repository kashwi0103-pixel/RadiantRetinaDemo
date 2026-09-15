export default function Testimonials() {
  const testimonials = [
    {
      quote: "DR Sahayak has fundamentally transformed how we screen patients in our rural camps. The AI's accuracy matches our senior specialists.",
      name: "Dr. Ananya Sharma",
      title: "Chief Ophthalmologist",
      clinic: "VisionCare India",
      image: "AS"
    },
    {
      quote: "The ability to get instant severity grading allows us to prioritize high-risk patients immediately. It's a game-changer for primary care.",
      name: "Dr. Rajesh Kumar",
      title: "Medical Director",
      clinic: "Metro Health Network",
      image: "RK"
    }
  ];

  return (
    <section id="testimonials" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">Trusted by Specialists</h2>
          <p className="text-lg text-slate-600">
            Hear from eye-care providers who are using DR Sahayak to scale their screening programs.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((test, i) => (
            <div key={i} className="bg-slate-50 border border-slate-200 rounded-2xl p-8 hover:shadow-md transition-shadow">
              <div className="mb-6">
                {/* Quote marks */}
                <svg className="w-8 h-8 text-teal-200 mb-4" fill="currentColor" viewBox="0 0 32 32" aria-hidden="true">
                  <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                </svg>
                <p className="text-lg text-slate-700 italic">"{test.quote}"</p>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-teal-100 text-teal-800 font-bold rounded-full flex items-center justify-center">
                  {test.image}
                </div>
                <div>
                  <div className="font-bold text-slate-900">{test.name}</div>
                  <div className="text-sm text-slate-600">{test.title}, {test.clinic}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
