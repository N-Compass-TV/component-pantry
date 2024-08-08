type InputSize = 'small' | 'medium' | 'large';
export const AUTOCOMPLETE_INPUT_SIZE: InputSize[] = ['small', 'medium', 'large'];

export interface AutocompleteOption {
    id: string;
    label: string;
    value: string;
}
