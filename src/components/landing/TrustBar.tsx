export default function TrustBar() {
  const stats = [
    { value: "500,000+", label: "Patients Screened" },
    { value: "98.5%", label: "Diagnostic Accuracy" },
    { value: "250+", label: "Clinics in India" },
    { value: "< 1 Min", label: "Analysis Time" },
  ];

  return (
    <section className="bg-white border-y border-slate-200 py-12">
      <div className="max-w-7xl mx-auto px-6">
        <p className="text-center text-sm font-semibold text-slate-400 uppercase tracking-wider mb-8">
          Trusted by leading healthcare institutions
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <div key={i} className="text-center">
              <div className="text-3xl lg:text-4xl font-extrabold text-slate-800 mb-2">{stat.value}</div>
              <div className="text-sm font-medium text-slate-500">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
