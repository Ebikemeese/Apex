export default function CodeShowcase() {
  return (
    <section
      id="workflow"
      className="py-24 px-6 bg-[#0a0f24] relative overflow-hidden border-t border-indigo-900/40"
    >
      {/* Background Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(#312e81_1px,transparent_1px)] [background-size:24px_24px] opacity-20 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Text Column */}
          <div className="lg:col-span-5">
            <span className="text-xs font-bold uppercase tracking-widest text-indigo-400 bg-indigo-950/80 border border-indigo-800/60 px-3 py-1 rounded-full">
              Developer First Experience
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white mt-6 mb-6 tracking-tight leading-tight">
              Simple REST & Async API integration.
            </h2>
            <p className="text-gray-300 text-sm leading-relaxed mb-8">
              Initialize non-blocking execution pipelines with minimal
              boilerplate. Native integration for Pydantic schemas, JWT
              authentication tokens, and automatic OpenAPI generation.
            </p>

            <ul className="space-y-3 text-sm text-gray-300 font-medium">
              <li className="flex items-center gap-3">
                <span className="w-5 h-5 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center text-xs">
                  ✓
                </span>
                Fully asynchronous runtime execution
              </li>
              <li className="flex items-center gap-3">
                <span className="w-5 h-5 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center text-xs">
                  ✓
                </span>
                Type-safe ORM models via SQLAlchemy 2.0
              </li>
              <li className="flex items-center gap-3">
                <span className="w-5 h-5 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center text-xs">
                  ✓
                </span>
                Built-in rate limiting &amp; CORS middleware
              </li>
            </ul>
          </div>

          {/* Right Code Block Box */}
          <div className="lg:col-span-7 bg-[#030712] border border-indigo-900/60 rounded-2xl p-6 shadow-2xl shadow-indigo-950/50 font-mono text-xs text-gray-300">
            <div className="flex items-center justify-between border-b border-gray-800 pb-4 mb-4">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-rose-500/80"></div>
                <div className="w-3 h-3 rounded-full bg-amber-500/80"></div>
                <div className="w-3 h-3 rounded-full bg-emerald-500/80"></div>
              </div>
              <span className="text-gray-500 text-[11px]">main_router.py</span>
            </div>

            <pre className="overflow-x-auto leading-relaxed text-indigo-200">
              <code>{`from fastapi import FastAPI, Depends
from sqlalchemy.ext.asyncio import AsyncSession
from apex_core import EngineSession, StreamRouter

app = FastAPI(title="Apex Microservice API")
router = StreamRouter(prefix="/v1/telemetry")

@router.post("/dispatch")
async def handle_stream(
    payload: TelemetrySchema,
    db: AsyncSession = Depends(EngineSession)
):
result = await db.execute(payload.process_event())
return {"status": "dispatched", "latency_ms": result.elapsed}`}</code>
            </pre>
          </div>
        </div>
      </div>
    </section>
  );
}
