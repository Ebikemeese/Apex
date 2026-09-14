export default function BentoGrid() {
  return (
    <section
      id="features"
      className="py-24 px-6 max-w-7xl mx-auto border-t border-dark-border"
    >
      <div className="mb-16">
        <h2 className="text-xs font-bold uppercase tracking-widest text-brand-accent mb-3">
          Core Platform Modules
        </h2>
        <p className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
          Engineered for mission-critical reliability.
        </p>
      </div>

      {/* Bento Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Large Feature Card (Spans 2 columns) */}
        <div className="md:col-span-2 bg-dark-card border border-dark-border hover:border-brand-500/50 rounded-3xl p-8 sm:p-10 flex flex-col justify-between transition-all duration-300 group">
          <div>
            <div className="w-12 h-12 rounded-2xl bg-brand-500/10 border border-brand-500/20 text-brand-accent flex items-center justify-center text-2xl font-bold mb-6 group-hover:scale-110 transition-transform">
              ⚡
            </div>
            <h3 className="text-2xl font-bold text-white mb-3">
              Asynchronous Event Streaming
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed max-w-xl">
              Process millions of event triggers concurrently with low-latency
              pub/sub pipelines, event sourcing, and non-blocking I/O runtime
              integration.
            </p>
          </div>

          <div className="mt-8 pt-6 border-t border-dark-border/60 flex items-center gap-6 text-xs text-gray-400 font-mono">
            <span>Latency: &lt;12ms</span>
            <span>•</span>
            <span>Concurrency: 100k/sec</span>
          </div>
        </div>

        {/* Standard Feature Card 1 */}
        <div className="bg-dark-card border border-dark-border hover:border-brand-500/50 rounded-3xl p-8 flex flex-col justify-between transition-all duration-300 group">
          <div>
            <div className="w-12 h-12 rounded-2xl bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 flex items-center justify-center text-2xl font-bold mb-6 group-hover:scale-110 transition-transform">
              🛡️
            </div>
            <h3 className="text-xl font-bold text-white mb-3">
              Zero-Trust Security
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Automated token rotation, encrypted data vaults, and role-based
              access control out of the box.
            </p>
          </div>
          <span className="mt-6 text-xs text-brand-accent font-semibold">
            AES-256 Encrypted
          </span>
        </div>

        {/* Standard Feature Card 2 */}
        <div className="bg-dark-card border border-dark-border hover:border-brand-500/50 rounded-3xl p-8 flex flex-col justify-between transition-all duration-300 group">
          <div>
            <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 flex items-center justify-center text-2xl font-bold mb-6 group-hover:scale-110 transition-transform">
              🌐
            </div>
            <h3 className="text-xl font-bold text-white mb-3">
              Edge CDN Routing
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Global content delivery network caching static assets and dynamic
              responses at 250+ edge nodes.
            </p>
          </div>
          <span className="mt-6 text-xs text-emerald-400 font-semibold">
            Global Distribution
          </span>
        </div>

        {/* Large Feature Card 2 (Spans 2 columns) */}
        <div className="md:col-span-2 bg-dark-card border border-dark-border hover:border-brand-500/50 rounded-3xl p-8 sm:p-10 flex flex-col justify-between transition-all duration-300 group">
          <div>
            <div className="w-12 h-12 rounded-2xl bg-purple-500/10 border border-purple-500/20 text-purple-400 flex items-center justify-center text-2xl font-bold mb-6 group-hover:scale-110 transition-transform">
              📊
            </div>
            <h3 className="text-2xl font-bold text-white mb-3">
              Real-time Telemetry Dashboard
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed max-w-xl">
              Inspect application metrics, memory footprints, active database
              pools, and query performance in real-time with automated anomaly
              alerts.
            </p>
          </div>

          <div className="mt-8 pt-6 border-t border-dark-border/60 flex items-center gap-6 text-xs text-gray-400 font-mono">
            <span>Uptime: 99.99%</span>
            <span>•</span>
            <span>OpenTelemetry Compatible</span>
          </div>
        </div>
      </div>
    </section>
  );
}
