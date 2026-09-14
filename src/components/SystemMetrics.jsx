export default function SystemMetrics() {
  const metrics = [
    { label: "Request Throughput", value: "2.4M+", sub: "Requests per minute" },
    {
      label: "Average Latency",
      value: "<18ms",
      sub: "Global API response time",
    },
    { label: "Uptime SLA", value: "99.99%", sub: "Guaranteed availability" },
    {
      label: "Active Deployments",
      value: "14,000+",
      sub: "Production microservices",
    },
  ];

  return (
    <section
      id="metrics"
      className="py-20 bg-dark-card/50 border-y border-dark-border"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {metrics.map((item, idx) => (
            <div key={idx} className="text-center md:text-left">
              <div className="text-4xl sm:text-5xl font-black text-white tracking-tight mb-2">
                {item.value}
              </div>
              <div className="text-sm font-bold text-brand-accent mb-1">
                {item.label}
              </div>
              <div className="text-xs text-gray-500">{item.sub}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
