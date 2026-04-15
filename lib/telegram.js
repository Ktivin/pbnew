const DEFAULT_START = "landing";

export const telegramScenarios = {
  general: "landing",
  hero: "hero_start",
  experts: "choose_specialist",
  urgent: "urgent_help",
  secondOpinion: "second_opinion",
  behavior: "behavior_help",
  nutrition: "nutrition_help",
  final: "final_cta",
};

export function createTelegramLink(baseUrl, start = DEFAULT_START) {
  if (!baseUrl) {
    return "#";
  }

  const safeStart = String(start || DEFAULT_START).replace(/[^a-zA-Z0-9_-]/g, "_");

  try {
    const url = new URL(baseUrl);
    url.searchParams.set("start", safeStart);
    return url.toString();
  } catch {
    return `${baseUrl}${baseUrl.includes("?") ? "&" : "?"}start=${safeStart}`;
  }
}
