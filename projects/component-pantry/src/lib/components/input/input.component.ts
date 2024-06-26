import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'nctv-input',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './input.component.html',
    styleUrls: ['./input.component.scss'],
})
export class InputComponent {
    /**
     * Identifier for the input element.
     */
    @Input() for: string = 'for';

    /**
     * Text label for the input.
     */
    @Input() label: string = 'Default Label';

    /**
     * Placeholder text for the input.
     */
    @Input() placeholder: string = 'Default Placeholder';

    /**
     * Size of the input element (e.g., small, medium, large).
     */
    @Input() inputSize: string = 'medium';

    /**
     * Indicates whether the input is currently active (focused).
     */
    isActive: boolean = false;

    /**
     * Reference to the wrapper element.
     */
    wrapper: any;

    /**
     * Reference to the select button element (if applicable).
     */
    selectBtn: any;

    /**
     * Dynamically generates class names based on inputSize.
     * @returns {Object} Object with dynamic class names.
     */
    public getClass(): object {
        const classes = {
            [`input--${this.inputSize}`]: this.inputSize, // Apply class based on inputSize
        };

        return classes;
    }
}
