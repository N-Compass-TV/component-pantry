import { CommonModule } from '@angular/common';
import { Component, computed, input } from '@angular/core';
import { CardShadows, CardWidth, CardHeight } from './card';

@Component({
    selector: 'nctv-card',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './card.component.html',
    styleUrls: ['./card.component.scss'],
})
export class CardComponent {
    /**
     * Specifies the shadow level of the card. The higher the number, the more pronounced the shadow.
     * The default value is 1, indicating a subtle shadow.
     */
    shadowLevel = input<CardShadows>(1);

    /**
     * Specifies the background color of the card. Accepts any valid CSS color value.
     * The default value is '#ffffff' (white).
     * Example values: 'red', '#ff0000', 'rgb(255, 0, 0)', etc.
     */
    backgroundColor = input<string>('#ffffff');

    /**
     * Specifies the side padding of the card in rem. This padding is applied on all sides of the card.
     * The default value is 1rem.
     * It determines the spacing between the card's content and its edges.
     */
    sidePadding = input<number>(1);

    /**
     * Specifies the width of the card.
     * Possible values are 'auto', 'fit-content', or 'full'.
     * The default value is 'auto'.
     */
    cardWidth = input<CardWidth>('auto');

    /**
     * Specifies the height of the card.
     * Possible values are 'auto', 'fit-content', or 'full'.
     * The default value is 'auto'.
     */
    cardHeight = input<CardHeight>('auto');

    /**
     * Computes the actual width to be applied to the card based on the cardWidth input.
     */
    computedWidth = computed(() => {
        switch (this.cardWidth()) {
            case 'full':
                return '100%';
            case 'fit-content':
                return 'fit-content';
            case 'auto':
                return 'auto';
            default:
                return this.cardWidth(); // Return the specific value
        }
    });

    /**
     * Computes the actual height to be applied to the card based on the cardHeight input.
     */
    computedHeight = computed(() => {
        switch (this.cardHeight()) {
            case 'full':
                return '100%';
            case 'fit-content':
                return 'fit-content';
            case 'auto':
                return 'auto';
            default:
                return this.cardHeight(); // Return the specific value
        }
    });

    /**
     * Generates class names based on card shadow level.
     * Constructs an object suitable for ngClass based on `shadowLevel`.
     * @returns {Object} Object with dynamic class names
     */
    public getClass = computed(() => {
        const shadowLevel = this.shadowLevel();
        return {
            [`card--shadow-${shadowLevel}`]: shadowLevel,
        };
    });
}
