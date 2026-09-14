export default function TechSpecGrid() {
  const specs = [
    {
      category: "Backend Engine",
      title: "FastAPI & Async Python",
      details:
        "High-performance non-blocking async endpoint handlers utilizing Pydantic validation schemas.",
    },
    {
      category: "Persistence Layer",
      title: "SQLAlchemy 2.0 & PostgreSQL",
      details:
        "Fully asynchronous database sessions with automated schema migration pipelines powered by Alembic.",
    },
    {
      category: "Frontend Runtime",
      title: "React & Tailwind CSS",
      details:
        "Compositor-driven UI design built with utility-first CSS and optimized production bundle splits.",
    },
  ];

  return (
    <section
      id="architecture"
      className="py-24 px-6 max-w-7xl mx-auto border-t border-dark-border"
    >
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h2 className="text-xs font-bold uppercase tracking-widest text-brand-accent mb-3">
          Under The Hood
        </h2>
        <p className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
          Modern technology stack architecture.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {specs.map((spec, index) => (
          <div
            key={index}
            className="bg-dark-card border border-dark-border rounded-2xl p-8 relative overflow-hidden"
          >
            <div className="text-xs font-bold text-brand-accent uppercase tracking-wider mb-2">
              {spec.category}
            </div>
            <h3 className="text-xl font-bold text-white mb-4">{spec.title}</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              {spec.details}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
