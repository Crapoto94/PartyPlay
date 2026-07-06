// =====================================================================
//  Bibliothèque de contenu PAR DÉFAUT (réutilisable à la création d'un
//  événement). Agrège le contenu « rétro jeux vidéo » historique pour qu'un
//  admin puisse partir d'une base toute faite plutôt que d'une page blanche.
//  Aucune mécanique narrative ici : juste du contenu d'activités.
// =====================================================================

import { AVATARS } from './avatars.js';
import { DRAW_WORDS } from './draw_words.js';
import { getQuiz } from '../store/quiz.js';
import { getGages } from '../store/gages.js';
import { getSpotlight } from '../store/spotlight.js';
import { getPhotos } from '../store/photos.js';

export const DEFAULT_AVATARS = AVATARS;

export function defaultSettings() {
  return {
    deadlineLabel: 'MINUIT',
    ambianceYoutube: '',
    briefingYoutube: '',
    debriefYoutube: '',
    pacmanYoutube: '',
  };
}

export function defaultContent() {
  return JSON.parse(JSON.stringify({
    quiz: { decks: getQuiz() },
    blindtest: { playlists: {} },
    anecdotes: [],
    gages: getGages(),
    spotlightDefis: getSpotlight(),
    drawWords: DRAW_WORDS,
    photoMissions: getPhotos(),
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
