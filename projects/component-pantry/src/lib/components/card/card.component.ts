import { CommonModule } from '@angular/common';
import { Component, computed, input } from '@angular/core';
import { CardShadows } from './card';

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
     * Specifies the side padding of the card in pixels. This padding is applied on the left and right sides of the card.
     * The default value is 25 pixels.
     * It determines the spacing between the card's content and its edges.
     */
    sidePadding = input<number>(1);

    cardSize = input<string>('auto');

    /**
     * Generates class names based on card shadow level, if values are provided.
     * Constructs an object suitable for ngClass based on `shadowLevel`.
     * Add if necessary
     * @returns {Object} Object with dynamic class names
     */
    public getClass = computed(() => {
        const shadowLevel = this.shadowLevel();
        return {
            [`card--shadow-${shadowLevel}`]: shadowLevel,
        };
    });
}
