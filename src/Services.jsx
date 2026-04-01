import React from "react";
import Header from "./components/Header";
import SocialBar from "./components/SocialBar";
import { services } from "./data/services";
import { colors } from "./data/experts";

export default function Services() {
  return (
    <div
      className="min-h-screen"
      style={{
        background: `radial-gradient(1200px 600px at 100% -10%, ${colors.accent}10, transparent 60%), #faf9fb`,
      }}
    >
      <Header />
      <SocialBar />

      <main className="max-w-6xl mx-auto px-4 py-6">
        {/* intro */}
        <section className="mb-6 rounded-2xl border p-4 bg-white">
          <h1 className="text-2xl font-bold mb-2">Ціни та послуги</h1>
          <p className="text-zinc-600">
            Непевні, чи потрібна вам допомога? Напишіть адміністратору у Telegram —
            ми оцінимо стан улюбленця протягом 10 хвилин 🐾
          </p>
        </section>

        {/* services */}
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {services.map((s) => (
            <article
              key={s.slug}
              className="rounded-2xl border bg-white p-5 flex flex-col justify-between hover:shadow-md transition"
              style={{ borderColor: `${colors.primary}22` }}
            >
              <div>
                <h3 className="font-semibold text-lg">{s.title}</h3>
                <p className="text-sm text-zinc-600 mt-1">{s.description}</p>

                <div className="mt-3 text-sm text-zinc-500">
                  ⏱ {s.duration}
                </div>
              </div>

              <div className="mt-4">
                <div className="text-xl font-bold mb-3">
                  {s.price} {s.currency}
                </div>

                <a
                  href="https://t.me/petbalance"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-center rounded-xl px-4 py-2 font-medium"
                  style={{
                    background: `linear-gradient(135deg, ${colors.accent}, ${colors.primary})`,
                    color: "#fff",
                  }}
                >
                  Записатися
                </a>
              </div>
            </article>
          ))}
        </section>
      </main>
    </div>
  );
}
