import Header from "./components/Header.jsx";
import SocialBar from "./components/SocialBar.jsx";
import {
  ArrowRight,
  BadgeCheck,
  Bot,
  CalendarRange,
  CheckCircle2,
  HeartPulse,
  MessageCircle,
  PawPrint,
  ShieldCheck,
  Star,
  Stethoscope,
  Users,
} from "lucide-react";

const TELEGRAM_URL = "https://t.me/petbalance";

const colors = {
  primary: "#1F5A4F",
  accent: "#F37483",
  text: "#111827",
  brandBlue: "#87CEEB",
};

const categories = [
  {
    title: "Health and well-being",
    text: "Questions about symptoms, recovery, treatment plans, and daily care.",
    icon: HeartPulse,
  },
  {
    title: "Behavior and anxiety",
    text: "Support with stress, adaptation, habits, and calm communication with pets.",
    icon: Users,
  },
  {
    title: "Nutrition and weight",
    text: "Food choices, feeding routines, and gentle correction of daily habits.",
    icon: Stethoscope,
  },
  {
    title: "Urgent questions",
    text: "When someone needs to quickly understand the next step before an offline visit.",
    icon: CalendarRange,
  },
];

const experts = [
  {
    name: "Maria",
    role: "Veterinary doctor",
    focus: "Therapy, recovery support, and treatment guidance",
  },
  {
    name: "Oleksandr",
    role: "Dog behavior specialist",
    focus: "Training, walking routines, and behavior correction",
  },
  {
    name: "Yuliia",
    role: "Nutrition specialist",
    focus: "Ration planning, feeding support, and weight correction",
  },
];

const testimonials = [
  "The flow felt simple. We opened Telegram, answered a few questions, and kept going there.",
  "Helpful when we were stressed and did not know which specialist we needed first.",
  "Fast, calm, and clear. It felt more natural than filling out a full website form.",
];

const faqs = [
  {
    q: "How does booking work?",
    a: "The user opens Telegram, answers a few bot questions, and then continues through the matching or booking flow there.",
  },
  {
    q: "Do people need to know which expert to choose?",
    a: "No. The bot helps narrow the request and directs the user toward the right next step.",
  },
  {
    q: "Can this work for people outside one city or country?",
    a: "Yes. The landing is built around online communication, so the Telegram entry point still makes sense for wider coverage.",
  },
  {
    q: "Does this replace an offline clinic visit?",
    a: "No. It helps with orientation and next steps, but urgent offline care is still important when needed.",
  },
];

const Section = ({ id, className = "", children }) => (
  <section id={id} className={`w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 ${className}`}>
    {children}
  </section>
);

const Badge = ({ children }) => (
  <span
    className="inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs font-semibold"
    style={{
      color: colors.primary,
      borderColor: `${colors.primary}22`,
      background: `${colors.primary}10`,
    }}
  >
    {children}
  </span>
);

const TelegramButton = ({ className = "", children = "Open Telegram" }) => (
  <a
    href={TELEGRAM_URL}
    target="_blank"
    rel="noopener noreferrer"
    className={`inline-flex items-center justify-center gap-2 rounded-2xl px-5 py-3 font-semibold shadow-sm transition hover:shadow-md ${className}`}
    style={{
      background: `linear-gradient(135deg, ${colors.accent}, ${colors.primary})`,
      color: "#fff",
    }}
  >
    <MessageCircle size={18} />
    <span>{children}</span>
  </a>
);

const SecondaryButton = ({ href, children }) => (
  <a
    href={href}
    className="inline-flex items-center justify-center rounded-2xl border bg-white px-5 py-3 font-semibold transition hover:shadow-sm"
    style={{
      color: colors.text,
      borderColor: `${colors.primary}22`,
    }}
  >
    {children}
  </a>
);

const InfoCard = ({ icon: Icon, title, text }) => (
  <div
    className="rounded-2xl border bg-white/90 p-5 backdrop-blur"
    style={{ borderColor: `${colors.primary}18` }}
  >
    <div className="flex items-center gap-3">
      <div
        className="rounded-xl p-2"
        style={{ background: `${colors.primary}10`, color: colors.primary }}
      >
        <Icon size={18} />
      </div>
      <h3 className="font-semibold" style={{ color: colors.text }}>
        {title}
      </h3>
    </div>
    <p className="mt-3 text-sm leading-6 text-zinc-600">{text}</p>
  </div>
);

const StepCard = ({ number, title, text }) => (
  <div
    className="relative rounded-2xl border bg-white p-6"
    style={{ borderColor: `${colors.primary}18` }}
  >
    <div
      className="absolute -top-3 left-5 rounded-full px-3 py-1 text-xs font-semibold"
      style={{ background: `${colors.accent}18`, color: colors.accent }}
    >
      Step {number}
    </div>
    <h3 className="mt-3 text-lg font-semibold" style={{ color: colors.text }}>
      {title}
    </h3>
    <p className="mt-2 text-sm leading-6 text-zinc-600">{text}</p>
  </div>
);

const FaqItem = ({ q, a }) => (
  <details
    className="rounded-2xl border bg-white p-5"
    style={{ borderColor: `${colors.primary}18` }}
  >
    <summary className="cursor-pointer list-none font-semibold" style={{ color: colors.text }}>
      {q}
    </summary>
    <p className="mt-3 text-sm leading-6 text-zinc-600">{a}</p>
  </details>
);

export default function LandingTelegram() {
  return (
    <div
      className="min-h-screen"
      style={{
        background: `radial-gradient(1100px 520px at 100% -10%, ${colors.accent}14 0%, transparent 60%),
                     radial-gradient(900px 480px at -10% 0%, ${colors.brandBlue}18 0%, transparent 60%),
                     #faf9fb`,
      }}
    >
      <Header />
      <SocialBar />

      <Section className="pt-14 pb-12">
        <div className="grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <Badge>
              <PawPrint size={14} />
              Telegram-first pet support
            </Badge>
            <h1
              className="mt-5 max-w-3xl text-4xl font-extrabold leading-tight sm:text-5xl"
              style={{ color: colors.text }}
            >
              Online help for pet owners with one simple next step:
              <span style={{ color: colors.accent }}> open Telegram</span>
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-7 text-zinc-700">
              The bot asks a few short questions, helps structure the request, and guides people to
              the right specialist flow without a long website form.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <TelegramButton>Go to Telegram</TelegramButton>
              <SecondaryButton href="#how">How it works</SecondaryButton>
            </div>
            <div className="mt-7 flex flex-wrap gap-5 text-sm text-zinc-600">
              <span className="inline-flex items-center gap-2">
                <BadgeCheck size={16} />
                One clear action
              </span>
              <span className="inline-flex items-center gap-2">
                <Bot size={16} />
                Guided by bot
              </span>
              <span className="inline-flex items-center gap-2">
                <ShieldCheck size={16} />
                Familiar messenger flow
              </span>
            </div>
          </div>

          <div className="relative">
            <div
              className="rounded-[2rem] border p-4 shadow-sm"
              style={{
                borderColor: `${colors.primary}18`,
                background: "linear-gradient(180deg, rgba(255,255,255,0.96), rgba(242,250,253,0.96))",
              }}
            >
              <div
                className="mx-auto max-w-sm rounded-[2rem] border p-4"
                style={{ borderColor: `${colors.primary}18`, background: "#fff" }}
              >
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-sm font-semibold" style={{ color: colors.text }}>
                      Pet Balance Bot
                    </div>
                    <div className="text-xs text-zinc-500">Telegram conversation preview</div>
                  </div>
                  <div
                    className="rounded-full px-3 py-1 text-xs font-semibold"
                    style={{ background: `${colors.primary}10`, color: colors.primary }}
                  >
                    online
                  </div>
                </div>

                <div className="mt-5 space-y-3">
                  <div className="max-w-[80%] rounded-2xl bg-zinc-100 px-4 py-3 text-sm text-zinc-700">
                    Tell us what happened with your pet.
                  </div>
                  <div
                    className="ml-auto max-w-[80%] rounded-2xl px-4 py-3 text-sm text-white"
                    style={{ background: `linear-gradient(135deg, ${colors.accent}, ${colors.primary})` }}
                  >
                    I need help understanding the next step and who to contact.
                  </div>
                  <div className="max-w-[80%] rounded-2xl bg-zinc-100 px-4 py-3 text-sm text-zinc-700">
                    Got it. I will ask a few short questions and guide you further.
                  </div>
                </div>

                <div className="mt-5 rounded-2xl border p-4" style={{ borderColor: `${colors.primary}18` }}>
                  <div className="flex items-center justify-between text-sm">
                    <span style={{ color: colors.text }}>Next step</span>
                    <ArrowRight size={16} style={{ color: colors.accent }} />
                  </div>
                  <p className="mt-2 text-sm text-zinc-600">
                    Open Telegram, answer a few prompts, and continue to the booking flow.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      <Section className="py-8">
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          <InfoCard
            icon={MessageCircle}
            title="One clear action"
            text="The landing explains the value and sends people straight into Telegram."
          />
          <InfoCard
            icon={Bot}
            title="Bot-guided flow"
            text="People do not need to guess who to contact first. The bot helps route the request."
          />
          <InfoCard
            icon={Users}
            title="Different directions"
            text="Health, behavior, nutrition, urgent questions, and other common pet-owner needs."
          />
          <InfoCard
            icon={ShieldCheck}
            title="Comfort and trust"
            text="The whole flow stays in a familiar messenger, which lowers friction for first contact."
          />
        </div>
      </Section>

      <Section id="how" className="py-14">
        <div className="max-w-2xl">
          <Badge>How it works</Badge>
          <h2 className="mt-4 text-3xl font-bold" style={{ color: colors.text }}>
            Three simple steps from landing page to Telegram booking flow
          </h2>
          <p className="mt-3 text-zinc-700">
            The page should not make users think too much. It should make the next step obvious.
          </p>
        </div>
        <div className="mt-8 grid gap-4 md:grid-cols-3">
          <StepCard
            number="1"
            title="Open Telegram"
            text="A strong button takes people directly into the messenger instead of a long website form."
          />
          <StepCard
            number="2"
            title="Answer bot questions"
            text="The bot collects the basic context and helps identify the right direction."
          />
          <StepCard
            number="3"
            title="Continue to booking"
            text="The user moves forward inside Telegram, where the rest of the communication already happens."
          />
        </div>
      </Section>

      <Section id="directions" className="py-14">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div className="max-w-2xl">
            <Badge>Directions</Badge>
            <h2 className="mt-4 text-3xl font-bold" style={{ color: colors.text }}>
              Common requests the landing should make feel familiar
            </h2>
          </div>
          <TelegramButton className="hidden sm:inline-flex">Ask in Telegram</TelegramButton>
        </div>
        <div className="mt-8 grid gap-4 md:grid-cols-2">
          {categories.map(({ icon, title, text }) => (
            <InfoCard key={title} icon={icon} title={title} text={text} />
          ))}
        </div>
      </Section>

      <Section id="experts" className="py-14">
        <div className="max-w-2xl">
          <Badge>Specialists</Badge>
          <h2 className="mt-4 text-3xl font-bold" style={{ color: colors.text }}>
            A short trust block instead of a heavy directory
          </h2>
          <p className="mt-3 text-zinc-700">
            Users only need enough confidence to click through. The deeper logic can stay in Telegram.
          </p>
        </div>
        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {experts.map((expert) => (
            <article
              key={expert.name}
              className="rounded-2xl border bg-white p-5"
              style={{ borderColor: `${colors.primary}18` }}
            >
              <div
                className="flex h-14 w-14 items-center justify-center rounded-2xl text-lg font-bold"
                style={{
                  background: `linear-gradient(135deg, ${colors.accent}20, ${colors.primary}18)`,
                  color: colors.primary,
                }}
              >
                {expert.name.slice(0, 1)}
              </div>
              <h3 className="mt-4 text-lg font-semibold" style={{ color: colors.text }}>
                {expert.name}
              </h3>
              <p className="mt-1 text-sm text-zinc-700">{expert.role}</p>
              <p className="mt-3 text-sm leading-6 text-zinc-600">{expert.focus}</p>
              <a
                href={TELEGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 inline-flex items-center gap-2 text-sm font-semibold"
                style={{ color: colors.accent }}
              >
                Continue in Telegram <ArrowRight size={16} />
              </a>
            </article>
          ))}
        </div>
      </Section>

      <Section className="py-14">
        <div
          className="rounded-3xl border p-6 md:p-10"
          style={{
            borderColor: `${colors.primary}18`,
            background: "linear-gradient(135deg, rgba(255,255,255,0.98), rgba(242,250,253,0.98))",
          }}
        >
          <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
            <div>
              <Badge>Why Telegram</Badge>
              <h2 className="mt-4 text-3xl font-bold" style={{ color: colors.text }}>
                The landing should explain why this route is easier
              </h2>
              <div className="mt-5 space-y-3 text-sm text-zinc-700">
                <div className="flex items-start gap-3">
                  <CheckCircle2 size={18} style={{ color: colors.primary }} className="mt-0.5" />
                  <span>No separate site form to fill out before the real conversation starts.</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 size={18} style={{ color: colors.primary }} className="mt-0.5" />
                  <span>The bot helps people understand where to go even if they are stressed or unsure.</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 size={18} style={{ color: colors.primary }} className="mt-0.5" />
                  <span>Everything continues in the messenger where users already feel comfortable.</span>
                </div>
              </div>
            </div>

            <div className="grid gap-4 md:grid-cols-3">
              {testimonials.map((item, index) => (
                <div
                  key={index}
                  className="rounded-2xl border bg-white p-5"
                  style={{ borderColor: `${colors.primary}18` }}
                >
                  <div className="mb-3 flex gap-1 text-amber-500">
                    <Star size={16} fill="currentColor" />
                    <Star size={16} fill="currentColor" />
                    <Star size={16} fill="currentColor" />
                    <Star size={16} fill="currentColor" />
                    <Star size={16} fill="currentColor" />
                  </div>
                  <p className="text-sm leading-6 text-zinc-600">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      <Section id="faq" className="py-14">
        <div className="max-w-3xl">
          <Badge>FAQ</Badge>
          <h2 className="mt-4 text-3xl font-bold" style={{ color: colors.text }}>
            The last objections should be answered before the click
          </h2>
          <div className="mt-8 grid gap-3">
            {faqs.map((item) => (
              <FaqItem key={item.q} q={item.q} a={item.a} />
            ))}
          </div>
        </div>
      </Section>

      <Section id="telegram" className="pb-16 pt-8">
        <div
          className="rounded-3xl border p-8 text-center md:p-12"
          style={{
            borderColor: `${colors.primary}18`,
            background: `linear-gradient(135deg, ${colors.accent}12, ${colors.brandBlue}16, #ffffff)`,
          }}
        >
          <Badge>Final step</Badge>
          <h2 className="mt-4 text-3xl font-bold" style={{ color: colors.text }}>
            Open Telegram and let the bot guide the next step
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-zinc-700">
            The landing already did its job if the user understands the value, trusts the flow,
            and sees Telegram as the easiest next action.
          </p>
          <div className="mt-7">
            <TelegramButton className="min-w-[220px]">Open Telegram</TelegramButton>
          </div>
        </div>
      </Section>

      <footer className="border-t" style={{ borderColor: `${colors.primary}14` }}>
        <Section className="flex flex-col gap-4 py-8 text-sm text-zinc-600 md:flex-row md:items-center md:justify-between">
          <div className="flex items-center gap-2">
            <PawPrint size={16} className="opacity-70" />
            <span>© {new Date().getFullYear()} Pet Balance</span>
          </div>
          <div className="flex flex-wrap items-center gap-5">
            <a href={TELEGRAM_URL} target="_blank" rel="noopener noreferrer" className="hover:opacity-80">
              Telegram
            </a>
            <a href="/#faq" className="hover:opacity-80">
              Privacy Policy
            </a>
            <a href="/#faq" className="hover:opacity-80">
              Terms
            </a>
          </div>
        </Section>
      </footer>
    </div>
  );
}
