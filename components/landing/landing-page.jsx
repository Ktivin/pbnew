import Image from "next/image";
import Link from "next/link";
import {
  Activity,
  ArrowRight,
  AudioLines,
  BadgeCheck,
  Brain,
  Camera,
  Clock3,
  HeartPulse,
  MapPin,
  MessageCircleMore,
  Paperclip,
  PhoneCall,
  SendHorizontal,
  ShieldCheck,
  Sparkles,
  Star,
  Video,
} from "lucide-react";

import { AnimatedCounter, Float, Reveal } from "@/components/landing/motion";
import { SidePets } from "@/components/landing/pet-illustrations";
import { TelegramLauncher } from "@/components/landing/telegram-launcher";
import {
  consultationFormats,
  contacts,
  experts,
  faqItems,
  metrics,
  navigation,
  problemStories,
  productHighlights,
  scenarios,
  solutionCards,
  steps,
  testimonials,
  trustBadges,
} from "@/data/petbalance-content";
import { createTelegramLink, telegramScenarios } from "@/lib/telegram";

const formatIcons = [MessageCircleMore, AudioLines, Video, Clock3, PhoneCall, Camera];
const solutionIcons = [ShieldCheck, HeartPulse, MapPin, Brain];
const stepIcons = [BadgeCheck, MessageCircleMore, Activity];
const heroChips = ["4.9 із 5 середній рейтинг", "10 000+ консультацій", "відповідь у середньому за 3 хвилини"];

const painHighlights = [
  "Питомцю стало погано вночі",
  "Незрозуміло, чи їхати в клініку",
  "Потрібен швидкий орієнтир без дороги через усе місто",
];

export function LandingPage() {
  const telegramHeroLink = createTelegramLink(contacts.telegram, telegramScenarios.hero);
  const telegramExpertsLink = createTelegramLink(contacts.telegram, telegramScenarios.experts);
  const telegramFinalLink = createTelegramLink(contacts.telegram, telegramScenarios.final);
  const telegramUrgentLink = createTelegramLink(contacts.telegram, telegramScenarios.urgent);

  return (
    <div className="relative overflow-hidden bg-[linear-gradient(180deg,#f8fcfd_0%,#eef5f7_35%,#f7fbfc_100%)] text-text">
      <div className="pointer-events-none absolute inset-0 opacity-30 [background-image:linear-gradient(rgba(31,90,79,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(31,90,79,0.05)_1px,transparent_1px)] [background-size:88px_88px] [mask-image:radial-gradient(circle_at_center,black,transparent_88%)]" />
      <div className="pointer-events-none absolute left-[8%] top-8 h-56 w-56 rounded-full bg-[radial-gradient(circle,rgba(135,206,235,0.28),transparent_68%)] blur-3xl" />
      <div className="pointer-events-none absolute right-[6%] top-20 h-56 w-56 rounded-full bg-[radial-gradient(circle,rgba(243,116,131,0.2),transparent_68%)] blur-3xl" />
      <SidePets />

      <header className="sticky top-3 z-40 px-3 sm:px-4 lg:px-6">
        <div className="glass-panel liquid-stroke mx-auto flex max-w-7xl items-center justify-between gap-3 rounded-[2rem] px-3 py-3 sm:gap-4 sm:px-6 sm:py-4 lg:px-8">
          <Link href="/" className="inline-flex min-w-0 items-center gap-2 sm:gap-[1.125rem]">
            <div className="relative flex h-[4.5rem] w-[4.5rem] shrink-0 items-center justify-center rounded-[1.45rem] bg-white/92 shadow-[0_18px_40px_rgba(31,90,79,0.09)] sm:h-20 sm:w-20">
              <Image src="/logo.svg" alt="PetBalance" fill sizes="80px" className="object-contain p-1" priority />
            </div>
            <div className="min-w-0 pt-0.5 sm:pt-0">
              <div className="text-[12px] font-semibold uppercase tracking-[0.16em] sm:text-lg sm:tracking-[0.36em]">
                <BrandWordmark uppercase />
              </div>
              <div className="max-w-[7.25rem] text-[10px] leading-4 text-slate-500/95 sm:max-w-none sm:text-sm sm:leading-5">онлайн-консультації для власників тварин</div>
            </div>
          </Link>

          <nav className="hidden items-center gap-6 lg:flex">
            {navigation.map((item) => (
              <a key={item.href} href={item.href} className="text-sm font-medium text-slate-600 transition hover:text-dark">
                {item.label}
              </a>
            ))}
          </nav>

          <div className="flex shrink-0 items-center gap-2 sm:gap-3">
            <a
              href={telegramHeroLink}
              target="_blank"
              rel="noopener noreferrer"
              className="glass-pill hidden rounded-2xl px-4 py-2.5 text-sm font-semibold text-primary transition hover:-translate-y-0.5 hover:border-primary/20 hover:bg-white/85 sm:inline-flex"
            >
              Написати в Telegram
            </a>
            <a
              href={telegramHeroLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-[9.25rem] items-center justify-center gap-2 rounded-2xl bg-dark px-3 py-3 text-[12px] font-semibold text-white shadow-soft transition hover:-translate-y-0.5 hover:bg-primary sm:w-auto sm:px-4 sm:py-2.5 sm:text-sm"
            >
              <span className="text-left leading-[1.15] sm:text-inherit sm:leading-normal"><span className="block">Почати</span><span className="block sm:inline sm:ml-1">консультацію</span></span>
              <ArrowRight className="h-4 w-4 shrink-0" />
            </a>
          </div>
        </div>
      </header>

      <main>
        <section className="relative">
          <div className="pointer-events-none absolute inset-x-0 top-0 h-44 bg-[radial-gradient(circle_at_18%_28%,rgba(135,206,235,0.22),transparent_24%),radial-gradient(circle_at_82%_18%,rgba(243,116,131,0.15),transparent_20%)]" />
          <div className="relative z-10 mx-auto max-w-7xl px-4 pb-24 pt-8 sm:px-6 lg:px-8 lg:pb-32 lg:pt-12">
            <div className="glass-panel-strong liquid-stroke relative overflow-hidden rounded-[3rem] px-5 py-10 sm:px-8 sm:py-12 lg:grid lg:grid-cols-[1fr_1fr] lg:gap-14 lg:px-10 lg:py-12 xl:grid-cols-[0.96fr_1.04fr]">
              <div className="pointer-events-none absolute -left-12 top-8 h-44 w-44 rounded-full bg-[radial-gradient(circle,rgba(135,206,235,0.24),transparent_70%)] blur-3xl" />
              <div className="pointer-events-none absolute right-0 top-0 h-52 w-52 rounded-full bg-[radial-gradient(circle,rgba(243,116,131,0.18),transparent_70%)] blur-3xl" />
            <div className="relative">
              <Reveal>
                <span className="glass-pill inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-primary">
                  <Sparkles className="h-3.5 w-3.5" />
                  Онлайн-допомога для власників тварин
                </span>
              </Reveal>

              <Reveal delay={0.05} className="relative z-10">
                <h1 className="mt-7 max-w-4xl text-5xl font-extrabold leading-[0.9] tracking-[-0.065em] text-dark sm:text-6xl lg:text-[5.4rem]">
                  Коли за здоров&apos;я улюбленця тривожно,{" "}
                  <span className="bg-[linear-gradient(135deg,#1F5A4F,#F37483)] bg-clip-text text-transparent">відповідь лікаря має бути поруч</span>
                </h1>
              </Reveal>

              <Reveal delay={0.1} className="relative z-10">
                <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600 sm:text-xl">
                  PetBalance допомагає власникам собак і котів швидко отримати онлайн-консультацію ветеринара або фахівця з поведінки, не витрачаючи
                  години на дорогу до клініки.
                </p>
              </Reveal>

              <Reveal delay={0.13} className="relative z-10">
                <div className="mt-7 flex flex-wrap gap-3 text-sm">
                  {heroChips.map((item) => (
                    <span key={item} className="glass-pill rounded-full px-4 py-2 font-medium text-slate-700">
                      {item}
                    </span>
                  ))}
                </div>
              </Reveal>

              <Reveal delay={0.16} className="relative z-10">
                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  <a
                    href={telegramHeroLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 rounded-2xl bg-dark px-6 py-4 text-base font-semibold text-white shadow-glow transition hover:-translate-y-0.5 hover:bg-primary"
                  >
                    <span className="text-left leading-[1.15] sm:text-inherit sm:leading-normal"><span className="block">Почати</span><span className="block sm:inline sm:ml-1">консультацію</span></span>
                    <ArrowRight className="h-4 w-4 shrink-0" />
                  </a>
                  <a
                    href="#experts"
                    className="glass-pill inline-flex items-center justify-center gap-2 rounded-2xl px-6 py-4 text-base font-semibold text-dark transition hover:-translate-y-0.5"
                  >
                    Вибрати спеціаліста
                    <BadgeCheck className="h-4 w-4 text-accent" />
                  </a>
                </div>
              </Reveal>

              <Reveal delay={0.22} className="relative z-10">
                <div className="mt-10 grid gap-3 sm:grid-cols-3">
                  {painHighlights.map((item) => (
                    <div key={item} className="glass-panel rounded-[1.7rem] px-4 py-4 text-sm text-slate-600">
                      {item}
                    </div>
                  ))}
                </div>
              </Reveal>
            </div>

            <Reveal delay={0.12}>
              <div className="relative xl:pr-16">
                <Float className="glass-panel absolute -right-3 -top-5 z-20 hidden rounded-[2rem] p-4 xl:block" distance={16} duration={7.2}>
                  <div className="flex items-center gap-3">
                    <div className="grid h-12 w-12 place-items-center rounded-2xl bg-emerald-100 text-emerald-600">
                      <ShieldCheck className="h-6 w-6" />
                    </div>
                    <div>
                      <div className="font-semibold text-dark">Перевірені фахівці</div>
                      <div className="text-sm text-slate-500">Ветеринарія та поведінка</div>
                    </div>
                  </div>
                </Float>

                <div className="glass-panel-strong liquid-stroke relative rounded-[2.35rem] p-4 sm:p-6">
                  <div className="absolute inset-x-10 top-0 h-32 rounded-full bg-[radial-gradient(circle,rgba(135,206,235,0.42),transparent_70%)] blur-3xl" />
                  <div className="glass-panel relative rounded-[1.9rem] p-4 sm:p-5">
                    <div className="absolute inset-x-0 top-0 h-16 rounded-t-[1.75rem] bg-[linear-gradient(180deg,rgba(135,206,235,0.12),rgba(255,255,255,0))]" />
                    <div className="flex items-center justify-between gap-3 border-b border-slate-100 pb-4">
                      <div className="flex items-center gap-3">
                        <div className="relative h-14 w-14 overflow-hidden rounded-[1.35rem] bg-white/80 shadow-sm">
                          <Image src="/logo.svg" alt="PetBalance" fill sizes="56px" className="object-contain p-1" />
                        </div>
                        <div>
                          <div className="text-sm font-semibold text-dark">Бот PetBalance</div>
                          <div className="text-xs text-sky-700/70">помічник у Telegram</div>
                        </div>
                      </div>
                      <div className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-700">
                        <span className="h-2 w-2 rounded-full bg-emerald-500" />
                        3 хв до відповіді
                      </div>
                    </div>

                    <div className="mt-5">
                      <div className="glass-panel rounded-[1.55rem] p-4">
                        <div className="space-y-2.5">
                          <div className="max-w-[92%] rounded-[1.25rem] rounded-bl-md border border-sky-100 bg-white px-4 py-3 text-sm leading-6 text-slate-600 shadow-sm">
                            <div className="mb-1 text-[11px] font-medium text-slate-400">21:43</div>
                            Доброго вечора. Кіт різко став млявим, відмовляється від їжі та ховається.
                          </div>
                          <div className="ml-auto max-w-[94%] rounded-[1.25rem] rounded-br-md bg-[linear-gradient(180deg,#143b35,#0e2a26)] px-4 py-3 text-sm leading-6 text-white shadow-sm">
                            <div className="mb-1 text-[11px] font-medium text-white/50">21:44</div>
                            Я зараз подивлюся симптоми. Будь ласка, надішліть відео дихання та підкажіть температуру.
                          </div>
                          <div className="max-w-[84%] rounded-[1.25rem] rounded-bl-md border border-rose-100 bg-accent/10 px-4 py-3 text-sm leading-6 text-slate-700">
                            <div className="mb-1 text-[11px] font-medium text-slate-400">21:44</div>
                            Фото, відео, результати аналізів або попередні призначення можна додати одним повідомленням.
                          </div>
                          <div className="pl-2 text-[11px] font-medium uppercase tracking-[0.18em] text-sky-700/55">бот друкує...</div>
                        </div>

                        <div className="glass-panel rounded-[1.25rem] px-4 py-3">
                          <div className="flex items-center justify-between text-sm font-medium text-dark">
                            <span>Картка улюбленця</span>
                            <span className="rounded-full bg-primary/10 px-2 py-1 text-xs text-primary">Кіт, 6 років</span>
                          </div>
                          <div className="mt-3 flex flex-wrap gap-2">
                            <span className="rounded-full bg-slate-100 px-3 py-1 text-xs text-slate-600">Чутливе травлення</span>
                            <span className="rounded-full bg-slate-100 px-3 py-1 text-xs text-slate-600">Фото додані</span>
                            <span className="rounded-full bg-slate-100 px-3 py-1 text-xs text-slate-600">Термінова консультація</span>
                          </div>
                        </div>

                        <div className="glass-panel mt-3 flex items-center gap-2 rounded-[1.25rem] px-3 py-3">
                          <button className="grid h-10 w-10 place-items-center rounded-full bg-slate-100 text-slate-500" type="button" aria-label="Додати файл">
                            <Paperclip className="h-4 w-4" />
                          </button>
                          <div className="flex-1 rounded-full bg-slate-100 px-4 py-2.5 text-sm text-slate-400">Опишіть симптоми або додайте фото...</div>
                          <button className="grid h-10 w-10 place-items-center rounded-full bg-sky-500 text-white shadow-sm" type="button" aria-label="Надіслати">
                            <SendHorizontal className="h-4 w-4" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
            </div>
        </section>

        <section className="py-6">
          <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
            {metrics.map((metric, index) => (
              <Reveal key={metric.label} className="min-w-[220px] flex-1" delay={index * 0.05}>
                <div className="glass-panel liquid-stroke rounded-[1.9rem] px-5 py-5">
                  <div className="text-3xl font-extrabold tracking-[-0.04em] text-dark sm:text-4xl">
                    <AnimatedCounter value={metric.value} suffix={metric.suffix} />
                  </div>
                  <div className="mt-2 text-sm font-semibold text-slate-700">{metric.label}</div>
                  <div className="mt-1 text-sm text-slate-500">{metric.caption}</div>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8" id="problem">
          <div className="grid gap-8 lg:grid-cols-[0.82fr_1.18fr]">
            <Reveal>
              <SectionIntro eyebrow="Коли виникає тривога" title="Сайт має проводити користувача через знайомий емоційний сценарій" description="Власники тварин не шукають красивий каталог. Вони шукають спокій, ясність і швидку дію, коли щось іде не так." />
            </Reveal>

            <div className="grid gap-5 md:grid-cols-3">
              {problemStories.map((item, index) => (
                <Reveal key={item.title} delay={index * 0.08}>
                  <div className="glass-panel liquid-stroke group relative h-full overflow-hidden rounded-[2.1rem] p-6 transition hover:-translate-y-1 hover:shadow-glow">
                    <div className="absolute inset-x-8 top-0 h-24 rounded-full bg-[radial-gradient(circle,rgba(243,116,131,0.22),transparent_68%)] opacity-0 blur-2xl transition group-hover:opacity-100" />
                    <div className="relative">
                      <div className="mb-5 inline-flex rounded-2xl bg-dark p-3 text-white">
                        <Clock3 className="h-5 w-5" />
                      </div>
                      <h3 className="text-xl font-semibold tracking-tight text-dark">{item.title}</h3>
                      <p className="mt-3 text-sm leading-7 text-slate-600">{item.text}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section className="section-sheen mx-auto max-w-7xl rounded-[2.5rem] px-4 py-20 sm:px-6 lg:px-8" id="benefits">
          <div className="grid gap-12 lg:grid-cols-[0.95fr_1.05fr]">
            <Reveal>
              <SectionIntro eyebrow="PetBalance як рішення" title="Преміальний сервіс онлайн-допомоги для власників собак і котів" description="Ми поєднали швидкість месенджера, довіру до перевірених спеціалістів та інтерфейс, який не перевантажує користувача у стресовий момент." />
              <div className="mt-8 flex flex-wrap gap-3">
                {trustBadges.map((badge) => (
                  <span key={badge} className="glass-pill rounded-full px-4 py-2 text-sm font-medium text-slate-600">
                    {badge}
                  </span>
                ))}
              </div>
            </Reveal>

            <div className="grid gap-5 sm:grid-cols-2">
              {solutionCards.map((item, index) => (
                <Reveal key={item.title} delay={index * 0.06}>
                  <div className="glass-panel liquid-stroke h-full rounded-[2rem] p-6">
                    <div className="inline-flex rounded-2xl bg-primary/10 p-3 text-primary">
                      {(() => {
                        const Icon = solutionIcons[index % solutionIcons.length];
                        return <Icon className="h-5 w-5" />;
                      })()}
                    </div>
                    <h3 className="mt-5 text-xl font-semibold tracking-tight text-dark">{item.title}</h3>
                    <p className="mt-3 text-sm leading-7 text-slate-600">{item.text}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8" id="how">
          <Reveal>
            <SectionIntro eyebrow="Як це працює" title="Три прості кроки до онлайн-консультації без хаосу та зайвих дій" description="Лендинг має вести користувача до результату, а не вимагати від нього розбиратися в складній навігації." centered />
          </Reveal>

          <div className="mt-12 grid gap-5 lg:grid-cols-3">
              {steps.map((item, index) => (
                <Reveal key={item.step} delay={index * 0.07}>
                <div className="glass-panel liquid-stroke relative h-full overflow-hidden rounded-[2rem] p-6">
                  <div className="absolute right-5 top-5 text-6xl font-extrabold tracking-[-0.08em] text-primary/10">{item.step}</div>
                  <div className="relative">
                    <div className="mb-6 inline-flex rounded-2xl bg-dark p-3 text-white">
                      {(() => {
                        const Icon = stepIcons[index % stepIcons.length];
                        return <Icon className="h-5 w-5" />;
                      })()}
                    </div>
                    <h3 className="text-xl font-semibold tracking-tight text-dark">{item.title}</h3>
                    <p className="mt-3 text-sm leading-7 text-slate-600">{item.text}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        <section className="section-sheen-accent mx-auto max-w-7xl rounded-[2.5rem] px-4 py-20 sm:px-6 lg:px-8" id="formats">
          <div className="grid gap-10 lg:grid-cols-[0.88fr_1.12fr]">
            <Reveal>
              <SectionIntro eyebrow="Формати консультацій" title="Обирайте формат, який відповідає ситуації, а не навпаки" description="Для когось потрібен швидкий чат, для когось відеорозбір симптомів, а інколи важливо просто терміново зрозуміти, чи їхати до клініки." />

              <div className="glass-panel-dark rounded-[2rem] p-6 text-white">
                <div className="text-sm uppercase tracking-[0.2em] text-white/60">Онлайн з будь-якої точки</div>
                <div className="mt-4 grid gap-4 text-sm text-white/80">
                  <div className="flex items-center gap-3">
                    <MapPin className="h-4 w-4 text-accent" />
                    Україна, Європа, подорожі та тимчасовий переїзд
                  </div>
                  <div className="flex items-center gap-3">
                    <Clock3 className="h-4 w-4 text-accent" />
                    Цілодобово для термінових запитів
                  </div>
                  <div className="flex items-center gap-3">
                    <Camera className="h-4 w-4 text-accent" />
                    Фото, відео та документи прямо у консультації
                  </div>
                </div>
              </div>
            </Reveal>

            <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
              {consultationFormats.map((item, index) => {
                const Icon = formatIcons[index];

                return (
                  <Reveal key={item.title} delay={index * 0.05}>
                    <div className="glass-panel liquid-stroke group h-full rounded-[2rem] p-5 transition hover:-translate-y-1 hover:shadow-glow">
                      <div className="flex items-start justify-between gap-4">
                        <div className="rounded-2xl bg-primary/10 p-3 text-primary">
                          <Icon className="h-5 w-5" />
                        </div>
                        <span className="rounded-full bg-accent/10 px-3 py-1 text-xs font-semibold text-accent">{item.badge}</span>
                      </div>
                      <h3 className="mt-5 text-xl font-semibold tracking-tight text-dark">{item.title}</h3>
                      <p className="mt-3 text-sm leading-7 text-slate-600">{item.description}</p>
                    </div>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <div className="glass-panel-strong liquid-stroke grid gap-10 overflow-hidden rounded-[2.4rem] p-6 lg:grid-cols-[1.08fr_0.92fr] lg:p-8">
            <Reveal>
              <SectionIntro eyebrow="Вигляд сервісу" title="Інтерфейс, який не відволікає від головного: швидко зрозуміти, що робити далі" description="У стресовій ситуації користувачеві потрібні прості сигнали: лікар онлайн, зрозумілий формат відповіді, можливість надіслати матеріали та чіткий наступний крок." />
              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                {productHighlights.map((item) => (
                  <div key={item} className="glass-panel rounded-[1.5rem] px-4 py-4 text-sm leading-6 text-slate-600">
                    {item}
                  </div>
                ))}
              </div>
            </Reveal>

            <Reveal delay={0.08}>
              <div className="glass-panel-dark rounded-[2rem] p-5 text-white">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-sm font-semibold">Консультація з ветеринаром</div>
                    <div className="text-xs text-white/60">Нічний черговий режим</div>
                  </div>
                  <span className="rounded-full border border-white/15 bg-white/10 px-3 py-1 text-xs font-semibold text-emerald-300">лікар онлайн</span>
                </div>

                <div className="mt-5 space-y-3">
                  <div className="max-w-[80%] rounded-[1.25rem] rounded-bl-md bg-white/10 px-4 py-3 text-sm text-white/80">
                    Добрий вечір. Розкажіть, будь ласка, чи були блювання, температура або зміна дихання?
                  </div>
                  <div className="ml-auto max-w-[80%] rounded-[1.25rem] rounded-br-md bg-accent px-4 py-3 text-sm text-white">
                    Є відео дихання та фото ясен. Надсилаю зараз.
                  </div>
                  <div className="max-w-[80%] rounded-[1.25rem] rounded-bl-md bg-white px-4 py-3 text-sm text-slate-700">
                    Дякую. Після перегляду скажу, чи потрібно терміново в клініку, і підкажу, як діяти до візиту.
                  </div>
                </div>

                <div className="mt-6 grid gap-3 sm:grid-cols-2">
                  <div className="rounded-[1.25rem] border border-white/10 bg-white/5 p-4">
                    <div className="text-xs uppercase tracking-[0.18em] text-white/50">Матеріали</div>
                    <div className="mt-3 flex items-center gap-2 text-sm text-white/80">
                      <Camera className="h-4 w-4 text-brandBlue" />
                      Фото та відео додані
                    </div>
                  </div>
                  <div className="rounded-[1.25rem] border border-white/10 bg-white/5 p-4">
                    <div className="text-xs uppercase tracking-[0.18em] text-white/50">Формат</div>
                    <div className="mt-3 flex items-center gap-2 text-sm text-white/80">
                      <Video className="h-4 w-4 text-brandBlue" />
                      Чат зараз, відео за потреби
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        <section className="section-sheen mx-auto max-w-7xl rounded-[2.5rem] px-4 py-20 sm:px-6 lg:px-8" id="experts">
          <Reveal>
            <SectionIntro eyebrow="Фахівці сервісу" title="Лікарі та спеціалісти, яким довіряють здоров'я й поведінку улюбленців" description="На головній сторінці важливо не просто показати список, а дати відчуття, що за сервісом стоять реальні люди з конкретною експертизою." centered />
          </Reveal>

          <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {experts.map((expert, index) => (
              <Reveal key={expert.name} delay={index * 0.06}>
                <article className="glass-panel liquid-stroke group relative overflow-hidden rounded-[2rem] p-5 transition hover:-translate-y-1 hover:shadow-glow">
                  <div className="absolute inset-x-14 top-0 h-28 rounded-full bg-[radial-gradient(circle,rgba(135,206,235,0.24),transparent_72%)] opacity-0 blur-2xl transition group-hover:opacity-100" />
                  <div className="relative">
                    <div className="flex items-center justify-between gap-3">
                      <div className="flex items-center gap-4">
                        <ExpertAvatar expert={expert} />
                        <div>
                          <h3 className="text-lg font-semibold tracking-tight text-dark">{expert.name}</h3>
                          <p className="text-sm text-slate-500">{expert.role}</p>
                        </div>
                      </div>
                      <span className="rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-700">{expert.status}</span>
                    </div>

                    <div className="mt-5 flex items-center gap-2 text-sm text-slate-600">
                      <div className="flex items-center gap-1 text-amber-500">
                        <Star className="h-4 w-4 fill-current" />
                        <span className="font-semibold text-slate-800">{expert.rating}</span>
                      </div>
                      <span className="text-slate-300">•</span>
                      <span>{expert.experience}</span>
                    </div>

                    <div className="mt-5 flex flex-wrap gap-2">
                      <span className="glass-pill rounded-full px-3 py-1 text-xs font-medium text-primary">онлайн</span>
                      <span className="glass-pill rounded-full px-3 py-1 text-xs font-medium text-slate-600">доступний чат</span>
                    </div>

                    <div className="mt-6 flex items-center justify-between gap-4">
                      <a
                        href={createTelegramLink(contacts.telegram, expert.telegramStart || telegramScenarios.experts)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 rounded-2xl bg-dark px-4 py-3 text-sm font-semibold text-white transition hover:bg-primary"
                      >
                        <span className="text-left leading-[1.15] sm:text-inherit sm:leading-normal"><span className="block">Почати</span><span className="block sm:inline sm:ml-1">консультацію</span></span>
                        <ArrowRight className="h-4 w-4 shrink-0" />
                      </a>
                      <a
                        href={telegramExpertsLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm font-semibold text-primary transition hover:text-dark"
                      >
                        Написати зараз
                      </a>
                    </div>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[0.82fr_1.18fr]">
            <Reveal>
              <SectionIntro eyebrow="Сценарії використання" title="Сервіс повинен допомагати у типових ситуаціях, які дійсно болять власникам тварин" description="Користувач має швидко впізнати свій випадок і зрозуміти, що тут йому справді допоможуть." />
            </Reveal>

            <div className="grid gap-5 sm:grid-cols-2">
              {scenarios.map((scenario, index) => (
                <Reveal key={scenario.title} delay={index * 0.07}>
                  <div className="glass-panel liquid-stroke rounded-[2rem] p-6">
                    <div className="inline-flex rounded-2xl bg-accent/10 p-3 text-accent">
                      {index % 2 === 0 ? <Activity className="h-5 w-5" /> : <Brain className="h-5 w-5" />}
                    </div>
                    <h3 className="mt-5 text-xl font-semibold tracking-tight text-dark">{scenario.title}</h3>
                    <p className="mt-3 text-sm leading-7 text-slate-600">{scenario.text}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section className="section-sheen-accent mx-auto max-w-7xl rounded-[2.5rem] py-20">
          <Reveal className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <SectionIntro eyebrow="Відгуки" title="Живі історії власників, які отримали швидку підтримку без зайвого стресу" description="Найкраще продає не обіцянка, а впевненість, що сервіс вже спрацював для таких самих людей." centered />
          </Reveal>

          <div className="mt-12 overflow-hidden">
            <div className="flex w-max animate-marquee gap-5 px-4 hover:[animation-play-state:paused] sm:px-6 lg:px-8">
              {[...testimonials, ...testimonials].map((item, index) => (
                <div key={`${item.author}-${index}`} className="glass-panel liquid-stroke w-[320px] shrink-0 rounded-[2rem] p-6 sm:w-[380px]">
                  <div className="flex gap-1 text-amber-500">
                    {Array.from({ length: 5 }).map((_, starIndex) => (
                      <Star key={starIndex} className="h-4 w-4 fill-current" />
                    ))}
                  </div>
                  <p className="mt-5 text-base leading-8 text-slate-600">{item.quote}</p>
                  <div className="mt-6 text-sm font-semibold text-dark">{item.author}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section-sheen mx-auto max-w-7xl rounded-[2.5rem] px-4 py-20 sm:px-6 lg:px-8" id="faq">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
            <Reveal>
            <SectionIntro eyebrow="Питання й відповіді" title="Відповіді на питання, які найчастіше зупиняють перед першим зверненням" description="Хороший лендинг знімає сумніви ще до того, як користувач вирішив написати." />
            </Reveal>

            <div className="space-y-4">
              {faqItems.map((item, index) => (
                <Reveal key={item.question} delay={index * 0.04}>
                  <details className="glass-panel liquid-stroke group rounded-[1.75rem] p-5">
                    <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-left text-lg font-semibold text-dark">
                      {item.question}
                      <span className="rounded-full bg-primary/10 px-2.5 py-1 text-sm text-primary transition group-open:rotate-45">+</span>
                    </summary>
                    <p className="mt-4 max-w-3xl text-sm leading-7 text-slate-600">{item.answer}</p>
                  </details>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 pb-24 pt-6 sm:px-6 lg:px-8" id="final-cta">
          <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
            <Reveal>
              <div className="glass-panel-dark rounded-[2.35rem] p-8 text-white sm:p-10">
                <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-white/70">
                  <HeartBadge />
                  Завершальний крок
                </span>
                <h2 className="mt-6 text-4xl font-extrabold leading-tight tracking-[-0.05em] sm:text-5xl">
                  Отримайте відповідь лікаря вже зараз, а не після довгих пошуків
                </h2>
                <p className="mt-5 max-w-2xl text-lg leading-8 text-white/72">
                  Почніть із короткого опису ситуації. Ми допоможемо обрати формат консультації та з&apos;єднаємо вас із потрібним спеціалістом.
                </p>

                <div className="mt-8 grid gap-4 sm:grid-cols-2">
                  <div className="rounded-[1.5rem] border border-white/10 bg-white/5 p-5 backdrop-blur-xl">
                    <div className="text-sm font-semibold text-white">Telegram</div>
                    <p className="mt-2 text-sm leading-7 text-white/65">Для швидкого старту консультації, коли хочеться одразу перейти до діалогу.</p>
                    <a
                      href={telegramFinalLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-brandBlue"
                    >
                      Почати чат з лікарем
                      <ArrowRight className="h-4 w-4 shrink-0" />
                    </a>
                  </div>
                  <div className="rounded-[1.5rem] border border-white/10 bg-white/5 p-5 backdrop-blur-xl">
                    <div className="text-sm font-semibold text-white">Терміновий сценарій</div>
                    <p className="mt-2 text-sm leading-7 text-white/65">Підійде, якщо вам зручно відправити готовий запит у месенджер одним натисканням.</p>
                    <a
                      href={telegramUrgentLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-brandBlue"
                    >
                      Отримати допомогу зараз
                      <ArrowRight className="h-4 w-4 shrink-0" />
                    </a>
                  </div>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.08}>
              <TelegramLauncher telegramBaseUrl={contacts.telegram} />
            </Reveal>
          </div>
        </section>
      </main>

      <footer className="mt-6 px-3 pb-4 sm:px-4 lg:px-6">
        <div className="glass-panel liquid-stroke mx-auto flex max-w-7xl flex-col gap-6 rounded-[2rem] px-4 py-8 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
          <div>
            <div className="text-sm font-semibold uppercase tracking-[0.24em]">
              <BrandWordmark uppercase />
            </div>
            <p className="mt-2 max-w-xl text-sm leading-7 text-slate-500">
              Онлайн-консультації ветеринарів та спеціалістів з поведінки тварин. Швидко, зрозуміло, з повагою до тривоги власника.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-4 text-sm text-slate-500">
            <a href={telegramFinalLink} target="_blank" rel="noopener noreferrer" className="transition hover:text-dark">
              Telegram
            </a>
            <a href={`mailto:${contacts.email}`} className="transition hover:text-dark">
              {contacts.email}
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

function BrandWordmark({ uppercase = false }) {
  return (
    <span className={uppercase ? "inline-flex items-baseline gap-[0.04em]" : "inline-flex items-baseline gap-[0.03em]"}>
      <span className="text-accent">Pet</span>
      <span className="bg-[linear-gradient(135deg,#87CEEB,#1F5A4F)] bg-clip-text text-transparent">Balance</span>
    </span>
  );
}

function SectionIntro({ eyebrow, title, description, centered = false }) {
  return (
    <div className={centered ? "mx-auto max-w-3xl text-center" : "max-w-2xl"}>
      <span className="glass-pill inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-primary">
        {eyebrow}
      </span>
      <h2 className="mt-5 text-4xl font-extrabold leading-[1.02] tracking-[-0.055em] text-dark sm:text-[3.25rem]">{title}</h2>
      <p className="mt-5 text-lg leading-8 text-slate-600/95">{description}</p>
    </div>
  );
}

function ExpertAvatar({ expert }) {
  if (!expert.image) {
    return (
      <div className="glass-panel grid h-20 w-20 place-items-center rounded-[1.75rem] text-xl font-bold text-primary">
        {expert.name
          .split(" ")
          .map((chunk) => chunk[0])
          .join("")
          .slice(0, 2)}
      </div>
    );
  }

  return (
    <div className="glass-panel relative h-20 w-20 overflow-hidden rounded-[1.75rem] bg-light">
      <Image src={expert.image} alt={expert.name} fill sizes="80px" className="object-cover" />
    </div>
  );
}

function HeartBadge() {
  return (
    <div className="flex h-5 w-5 items-center justify-center rounded-full bg-accent/15 text-accent">
      <HeartPulse className="h-3.5 w-3.5" />
    </div>
  );
}

