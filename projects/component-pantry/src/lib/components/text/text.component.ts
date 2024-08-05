import { CommonModule } from '@angular/common';
import { Component, input, computed, signal } from '@angular/core';
import { FontWeights, TextTypes } from './text';

@Component({
    selector: 'nctv-text',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './text.component.html',
    styleUrls: ['./text.component.scss'],
})
export class TextComponent {
    /**
     * Specifies the font size of the text. Accepts any valid CSS font-size value.
     * Example values: '1rem', '1.5rem'
     */
    fontSize = input<number>();

    /**
     * Specifies the font weight of the text. Accepts any valid CSS font-weight value.
     * Example values: 'normal', 'bold', '600', etc.
     */
    fontWeight = input<FontWeights>();

    /**
     * Specifies the text color. Accepts any valid CSS color format.
     * Example values: 'red', '#ff0000', 'rgb(255, 0, 0)', etc.
     */
    textColor = input<string>('');

    /**
     * The text content to be displayed. This is the actual text that appears in the component.
     * Default value is 'This is a text'.
     */
    textContent = input<string>('This is a text');

    /**
     * Specifies the type of text with pre-set font-size and font-weight.
     * Expected Values: 'larger', 'large', 'heading', 'paragraph', 'small'.
     */
    textType = input<TextTypes>('paragraph');

    /**
     * Specifies the white-space property of the text. Accepts any valid CSS white-space value.
     * Example values: 'normal', 'nowrap', 'pre', etc.
     * Default value is 'normal'.
     */
    textWrap = input<string>('normal');

    /**
     * Generates class names based on text type and font weight.
     * Constructs an object suitable for ngClass based on `textType` and `fontWeight`.
     * Add more if necessary.
     * @returns {Object} Object with dynamic class names.
     */
    getClass = computed(() => {
        const classes = {
            [`formatted-text--${this.textType()}`]: this.textType(),
            [`formatted-text--${this.fontWeight()}`]: this.fontWeight(),
        };

        return classes;
    });
}
