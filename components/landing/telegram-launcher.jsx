import { ArrowRight, Clock3, MessageCircleMore, ShieldCheck, Stethoscope } from "lucide-react";

import { createTelegramLink, telegramScenarios } from "@/lib/telegram";

const quickActions = [
  {
    title: "Термінова допомога",
    description: "Для ситуацій, коли важливо швидко зрозуміти, чи потрібна клініка вже зараз.",
    badge: "Пріоритетний сценарій",
    start: telegramScenarios.urgent,
  },
  {
    title: "Підібрати фахівця",
    description: "Бот поставить кілька запитань і направить до ветеринара або спеціаліста з поведінки.",
    badge: "Найпопулярніше",
    start: telegramScenarios.experts,
  },
  {
    title: "Друга думка лікаря",
    description: "Підійде для розбору аналізів, симптомів, призначень або плану лікування.",
    badge: "Для спокою та ясності",
    start: telegramScenarios.secondOpinion,
  },
];

const steps = [
  "Переходьте в Telegram-бот",
  "Описуєте ситуацію та додаєте фото чи відео",
  "Отримуєте маршрут до потрібного фахівця",
];

export function TelegramLauncher({ telegramBaseUrl }) {
  return (
    <div className="glass-panel-strong liquid-stroke rounded-[2rem] p-6 sm:p-8">
      <div className="flex items-start justify-between gap-4">
        <div>
          <span className="glass-pill inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-primary">
            <Stethoscope className="h-3.5 w-3.5" />
            Запуск через Telegram-бота
          </span>
          <h3 className="mt-4 text-2xl font-semibold tracking-tight text-dark">Оберіть сценарій, і бот одразу проведе вас до консультації</h3>
        </div>
        <div className="glass-panel hidden rounded-2xl px-4 py-3 text-right text-xs text-slate-500 sm:block">
          <div className="font-semibold text-dark">Без зайвої форми</div>
          <div>усе починається прямо в боті</div>
        </div>
      </div>

      <div className="mt-8 space-y-4">
        {quickActions.map((action) => (
          <a
            key={action.title}
            href={createTelegramLink(telegramBaseUrl, action.start)}
            target="_blank"
            rel="noopener noreferrer"
            className="glass-panel liquid-stroke group block rounded-[1.75rem] px-5 py-5 transition hover:-translate-y-0.5 hover:shadow-glow"
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <div className="text-lg font-semibold tracking-tight text-dark">{action.title}</div>
                <p className="mt-2 max-w-xl text-sm leading-7 text-slate-600">{action.description}</p>
              </div>
              <span className="glass-pill rounded-full px-3 py-1 text-xs font-semibold text-primary">{action.badge}</span>
            </div>
            <div className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-primary">
              Відкрити сценарій у боті
              <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
            </div>
          </a>
        ))}
      </div>

      <div className="glass-panel rounded-[1.75rem] p-5">
        <div className="flex items-center gap-2 font-semibold text-dark">
          <MessageCircleMore className="h-4 w-4 text-accent" />
          Як це відбувається
        </div>
        <div className="mt-4 grid gap-3">
          {steps.map((step, index) => (
            <div key={step} className="flex items-center gap-3 text-sm text-slate-600">
              <span className="glass-pill grid h-8 w-8 shrink-0 place-items-center rounded-full font-semibold text-primary">{index + 1}</span>
              <span>{step}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-6 flex flex-col gap-3 sm:flex-row">
        <a
          href={createTelegramLink(telegramBaseUrl, telegramScenarios.final)}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 rounded-2xl bg-dark px-5 py-3.5 text-sm font-semibold text-white shadow-soft transition hover:-translate-y-0.5 hover:bg-primary"
        >
          Відкрити Telegram-бота
          <ArrowRight className="h-4 w-4" />
        </a>

        <a
          href={createTelegramLink(telegramBaseUrl, telegramScenarios.general)}
          target="_blank"
          rel="noopener noreferrer"
          className="glass-pill inline-flex items-center justify-center gap-2 rounded-2xl px-5 py-3.5 text-sm font-semibold text-primary transition hover:-translate-y-0.5"
        >
          Почати зі звичайного запиту
          <Clock3 className="h-4 w-4" />
        </a>
      </div>

      <div className="mt-5 grid gap-3 text-sm text-slate-500 sm:grid-cols-[1.1fr_0.9fr]">
        <p>
          Ми свідомо прибрали зайві поля із сайту: коли є готовий Telegram-бот, найкраща конверсія виходить тоді, коли людина одразу потрапляє в знайомий сценарій без дублювання заявки.
        </p>
        <div className="glass-panel rounded-2xl p-4">
          <div className="flex items-center gap-2 font-semibold text-dark">
            <ShieldCheck className="h-4 w-4 text-accent" />
            Що можна надіслати
          </div>
          <p className="mt-2 text-sm text-slate-500">Фото, відео, результати аналізів, опис симптомів і коротку історію ситуації.</p>
        </div>
      </div>
    </div>
  );
}
