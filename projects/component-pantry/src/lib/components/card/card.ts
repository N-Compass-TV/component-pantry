/**
 * Defines the possible shadow levels for a card.
 */
export type CardShadows = 1 | 2 | 3 | 4 | 5;
export const CARD_SHADOWS: CardShadows[] = [1, 2, 3, 4, 5];

/**
 * Defines the possible width options for a card.
 */
export type CardWidth = 'auto' | 'fit-content' | 'full' | string;
export const CARD_WIDTH: CardWidth[] = ['auto', 'fit-content', 'full'];

/**
 * Defines the possible height options for a card.
 */
export type CardHeight = 'auto' | 'fit-content' | 'full' | string;
export const CARD_HEIGHT: CardHeight[] = ['auto', 'fit-content', 'full'];
