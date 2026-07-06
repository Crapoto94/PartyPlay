import { readFileSync, writeFileSync } from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { QUESTIONS } from '../data/quiz.js';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const QUIZ_FILE = path.join(__dirname, '..', 'quiz.json');

function defaults() {
  return JSON.parse(JSON.stringify(QUESTIONS));
}

function cleanDeck(arr) {
  if (!Array.isArray(arr)) return [];
  return arr.filter(q => q && q.prompt && Array.isArray(q.choices) && q.choices.length >= 2).map(q => ({
    prompt: String(q.prompt).trim().slice(0, 300),
    choices: (q.choices || ['', '', '', '']).slice(0, 4).map(s => String(s == null ? '' : s).trim().slice(0, 200)),
    answer: typeof q.answer === 'number' ? Math.min(Math.max(0, q.answer), 3) : 0,
    points: typeof q.points === 'number' ? q.points : 50,
    media: q.media || null,
  }));
}

function normalize(data) {
  const d = defaults();
  if (!data || typeof data !== 'object') return d;
  const out = {};
  for (const key of Object.keys(d)) {
    if (data[key] && Array.isArray(data[key])) {
      const cleaned = cleanDeck(data[key]);
      out[key] = cleaned.length ? cleaned : d[key];
    } else {
      out[key] = d[key];
    }
  }
  return out;
}

export function getQuiz() {
  try {
    const data = JSON.parse(readFileSync(QUIZ_FILE, 'utf8'));
    if (data && typeof data === 'object') return normalize(data);
  } catch {}
  return defaults();
}

export function saveQuiz(data) {
  const clean = normalize(data);
  writeFileSync(QUIZ_FILE, JSON.stringify(clean, null, 2));
  return clean;
}
