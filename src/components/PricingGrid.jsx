export default function PricingGrid() {
  const tiers = [
    {
      name: "Developer",
      price: "$0",
      period: "forever free",
      description:
        "Ideal for local testing, rapid prototyping, and side projects.",
      features: [
        "Up to 100,000 requests/mo",
        "Single-region edge routing",
        "Community Discord support",
        "Standard API rate limits",
      ],
      highlight: false,
    },
    {
      name: "Pro Engine",
      price: "$79",
      period: "per month",
      description:
        "For scaling platforms requiring asynchronous microservices.",
      features: [
        "10,000,000 requests/mo",
        "Multi-region edge routing",
        "Priority email & chat support",
        "Custom domain SSL binding",
        "Automated database migrations",
      ],
      highlight: true,
    },
    {
      name: "Enterprise",
      price: "Custom",
      period: "billed annually",
      description:
        "Dedicated cluster capacity for enterprise workload isolation.",
      features: [
        "Unlimited monthly bandwidth",
        "Dedicated VPC deployment",
        "24/7 SLA & DevOps support",
        "Custom security compliance (SOC2)",
      ],
      highlight: false,
    },
  ];

  return (
    <section
      id="pricing"
      className="py-24 px-6 bg-gradient-to-b from-[#090d16] via-[#111625] to-[#090d16] border-t border-gray-800"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-xs font-bold uppercase tracking-widest text-indigo-400 mb-3">
            Flexible Tiering
          </h2>
          <p className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Transparent pricing for teams of any scale.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {tiers.map((tier, idx) => (
            <div
              key={idx}
              className={`rounded-3xl p-8 flex flex-col justify-between transition-all duration-300 relative ${
                tier.highlight
                  ? "bg-[#182035] border-2 border-indigo-500 shadow-xl shadow-indigo-500/10 scale-105"
                  : "bg-[#111827] border border-gray-800 hover:border-gray-700"
              }`}
            >
              {tier.highlight && (
                <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-indigo-500 text-white text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full shadow-md">
                  Most Popular
                </span>
              )}

              <div>
                <h3 className="text-xl font-bold text-white mb-2">
                  {tier.name}
                </h3>
                <p className="text-gray-400 text-xs mb-6 min-h-[36px]">
                  {tier.description}
                </p>
                <div className="flex items-baseline gap-2 mb-6">
                  <span className="text-4xl font-extrabold text-white">
                    {tier.price}
                  </span>
                  <span className="text-xs text-gray-400">{tier.period}</span>
                </div>

                <ul className="space-y-3 text-xs text-gray-300 border-t border-gray-800/80 pt-6 mb-8">
                  {tier.features.map((feat, fIdx) => (
                    <li key={fIdx} className="flex items-center gap-2">
                      <span className="text-indigo-400">✦</span>
                      {feat}
                    </li>
                  ))}
                </ul>
              </div>

              <a
                href="#contact"
                className={`w-full text-center py-3 rounded-xl font-bold text-xs uppercase tracking-wider transition-colors ${
                  tier.highlight
                    ? "bg-indigo-600 hover:bg-indigo-500 text-white shadow-lg shadow-indigo-600/30"
                    : "bg-gray-800 hover:bg-gray-700 text-gray-200"
                }`}
              >
                Select Plan
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
