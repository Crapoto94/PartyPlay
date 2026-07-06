// =====================================================================
//  Bibliothèque de contenu PAR DÉFAUT (réutilisable à la création d'un
//  événement). Agrège le contenu « rétro jeux vidéo » historique pour qu'un
//  admin puisse partir d'une base toute faite plutôt que d'une page blanche.
//  Aucune mécanique narrative ici : juste du contenu d'activités.
// =====================================================================

import { AVATARS } from './avatars.js';
import { QUESTIONS } from './quiz.js';
import { GAGES } from './gages.js';
import { SPOTLIGHT_DEFIS } from './spotlight.js';
import { DRAW_WORDS } from './draw_words.js';
import { PHOTO_MISSIONS } from './photos.js';

// Avatars génériques disponibles pour tout événement (indépendants du thème).
export const DEFAULT_AVATARS = AVATARS;

// Réglages par défaut d'un événement neuf.
export function defaultSettings() {
  return {
    deadlineLabel: 'MINUIT',
    ambianceYoutube: '',
    briefingYoutube: '',
    debriefYoutube: '',
    pacmanYoutube: '',
  };
}

// Contenu d'activités par défaut (copie profonde — l'admin l'éditera ensuite).
export function defaultContent() {
  return JSON.parse(JSON.stringify({
    quiz: { decks: QUESTIONS },
    blindtest: { playlists: {} },
    // Anecdotes « Breaking News » : VIDE par défaut — le maître de jeu ajoute
    // ses propres vidéos (lien YouTube ou upload) depuis sa console.
    anecdotes: [],
    gages: GAGES,
    spotlightDefis: SPOTLIGHT_DEFIS,
    drawWords: DRAW_WORDS,
    photoMissions: PHOTO_MISSIONS,
    ttcq: { themes: [] },
  }));
}

// Contenu d'activités VIDE (événement parti de zéro).
export function emptyContent() {
  return {
    quiz: { decks: {} },
    blindtest: { playlists: {} },
    anecdotes: [],
    gages: [],
    spotlightDefis: [],
    drawWords: [],
    photoMissions: {},
    ttcq: { themes: [] },
  };
}

// Toutes les activités du catalogue, activées par défaut.
export function defaultActivities() {
  return {
    quiz: true, blindtest: true, anecdotes: true, gages: true, photo: true,
    spotlight: true, draw: true, arcade: true, collab: true,
  };
}
