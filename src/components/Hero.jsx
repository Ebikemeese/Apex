export default function Hero() {
  return (
    <section className="relative pt-36 pb-20 px-6 max-w-7xl mx-auto text-center overflow-hidden">
      {/* Background Glow Effect */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-brand-500/15 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="inline-flex items-center gap-2 bg-dark-card border border-dark-border px-3.5 py-1.5 rounded-full text-xs font-semibold text-brand-accent mb-8 shadow-inner">
        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
        Apex v2.4 Platform Release
      </div>

      <h1 className="text-5xl sm:text-7xl font-extrabold tracking-tight text-white max-w-4xl mx-auto leading-[1.1] mb-8">
        Enterprise Cloud Infrastructure for{" "}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-accent via-indigo-300 to-white">
          Real-Time Data
        </span>
      </h1>

      <p className="text-gray-400 text-lg sm:text-xl max-w-2xl mx-auto mb-10 leading-relaxed font-normal">
        Deploy asynchronous microservices, orchestrate high-throughput APIs, and
        stream live telemetry across distributed global environments with zero
        downtime.
      </p>

      <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
        <a
          href="#features"
          className="w-full sm:w-auto bg-brand-500 hover:bg-brand-600 text-white px-8 py-3.5 rounded-xl font-bold text-sm transition-all shadow-lg shadow-brand-500/25"
        >
          Explore Capability Matrix
        </a>
        <a
          href="#architecture"
          className="w-full sm:w-auto bg-dark-card border border-dark-border hover:border-brand-500/50 text-gray-200 px-8 py-3.5 rounded-xl font-bold text-sm transition-all"
        >
          View Technical Stack
        </a>
      </div>
    </section>
  );
}
