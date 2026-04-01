// api/lead.js
export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).json({ ok: false, error: 'Method not allowed' });

  try {
    const { name, contact, message, utm = {} } = req.body || {};
    const normalizedName = normalizeText(name, 80);
    const normalizedContact = normalizeText(contact, 120);
    const normalizedMessage = normalizeText(message, 1000);
    const safeUtm = utm && typeof utm === 'object' ? utm : {};

    if (!normalizedName || !normalizedContact) return res.status(400).json({ ok: false, error: 'Missing required fields' });

    const lines = [
      '🐾 <b>Нова заявка Pet Balance</b>',
      `👤 Ім’я: ${escapeHtml(name)}`,
      `☎️ Контакт: ${escapeHtml(contact)}`,
      `📝 Запит: ${escapeHtml(message || '-')}`,
    ];

    const extras = [
      safeUtm.source ? `utm_source: ${escapeHtml(normalizeText(safeUtm.source, 120))}` : '',
      safeUtm.medium ? `utm_medium: ${escapeHtml(normalizeText(safeUtm.medium, 120))}` : '',
      safeUtm.campaign ? `utm_campaign: ${escapeHtml(normalizeText(safeUtm.campaign, 120))}` : '',
      safeUtm.content ? `utm_content: ${escapeHtml(normalizeText(safeUtm.content, 120))}` : '',
      safeUtm.term ? `utm_term: ${escapeHtml(normalizeText(safeUtm.term, 120))}` : '',
      safeUtm.referrer ? `ref: ${escapeHtml(normalizeText(safeUtm.referrer, 300))}` : '',
      safeUtm.page_url ? `url: ${escapeHtml(normalizeText(safeUtm.page_url, 300))}` : '',
    ].filter(Boolean);

    if (extras.length) {
      lines.push('');
      lines.push('🔎 <b>Джерело</b>');
      lines.push(...extras);
    }

    const text = lines.join('\n');

    const token = process.env.TELEGRAM_BOT_TOKEN;
    const chatId = process.env.TELEGRAM_CHAT_ID;
    if (!token || !chatId) return res.status(500).json({ ok: false, error: 'Server not configured' });

    const url = `https://api.telegram.org/bot${token}/sendMessage`;
    const tg = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ chat_id: chatId, text, parse_mode: 'HTML' }),
    });

    if (!tg.ok) {
      const txt = await tg.text().catch(() => '');
      return res.status(500).json({ ok: false, error: `Telegram error: ${tg.status} ${txt}` });
    }

    return res.status(200).json({ ok: true });
  } catch (e) {
    console.error(e);
    return res.status(500).json({ ok: false, error: 'Server error' });
  }
}

function escapeHtml(s = '') {
  return String(s).replace(/[&<>"']/g, m => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[m]));
}

function normalizeText(value, maxLength) {
  return String(value || '').trim().replace(/\s+/g, ' ').slice(0, maxLength);
}
