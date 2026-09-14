export default function FAQSection() {
  const faqs = [
    {
      q: "Can I deploy Apex Engine on custom cloud servers?",
      a: "Yes. Apex Engine provides Docker container specs and Helm charts for instant deployment across AWS, GCP, Azure, or bare-metal Linux servers.",
    },
    {
      q: "How does it handle asynchronous database concurrency?",
      a: "By leveraging async driver engines (such as asyncpg and SQLAlchemy 2.0 AsyncSession), database connections are pooled without blocking the main event loop.",
    },
    {
      q: "Is there built-in support for frontend CORS and authentication?",
      a: "Yes. CORS middleware, JWT decoding, and OAuth2 security dependencies are included in standard router configurations.",
    },
    {
      q: "What is the typical deployment time for a new project?",
      a: "Using our pre-configured Vite and FastAPI templates, new microservices can be spun up and deployed in under 10 minutes.",
    },
  ];

  return (
    <section
      id="faq"
      className="py-24 px-6 bg-[#0d1322] border-t border-gray-800"
    >
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-xs font-bold uppercase tracking-widest text-indigo-400 mb-3">
            Knowledge Base
          </h2>
          <p className="text-3xl font-extrabold text-white tracking-tight">
            Frequently Asked Questions
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {faqs.map((faq, idx) => (
            <div
              key={idx}
              className="bg-[#151c2e] border border-gray-800 rounded-2xl p-6"
            >
              <h3 className="text-base font-bold text-white mb-3 flex items-start gap-2">
                <span className="text-indigo-400">Q:</span> {faq.q}
              </h3>
              <p className="text-gray-400 text-xs leading-relaxed">{faq.a}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
