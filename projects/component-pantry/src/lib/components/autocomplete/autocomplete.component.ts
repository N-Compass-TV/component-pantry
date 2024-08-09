// autocomplete.component.ts
import { Component, type ElementRef, input, output, signal, viewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { InputComponent } from '../input';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { AutocompleteOption } from '../autocomplete';

@Component({
    selector: 'nctv-autocomplete',
    standalone: true,
    imports: [CommonModule, ReactiveFormsModule, InputComponent],
    templateUrl: './autocomplete.component.html',
    styleUrls: ['./autocomplete.component.scss'],
})
export class AutocompleteComponent {
    /**
     * List of autocomplete options.
     */
    options = input<AutocompleteOption[]>([]);

    /**
     * Placeholder text for the input field.
     */
    placeholder = input<string>('');

    /**
     * Label for the input field.
     */
    label = input<string>('');

    /**
     * ID for the input field.
     */
    for = input<string>('');

    /**
     * Left icon in the input field.
     */
    iconLeft = input<string>('');

    /**
     * Right icon in the input field.
     */
    iconRight = input<string>(
        'PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI5IiBoZWlnaHQ9IjYiIGZpbGw9Im5vbmUiIHZpZXdCb3g9IjAgMCA5IDYiPjxwYXRoIHN0cm9rZT0iIzhEQ0IyQyIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBzdHJva2Utd2lkdGg9IjEuNSIgZD0ibTEgMSAzLjUgMy41TDggMSIvPjwvc3ZnPg==',
    );

    /**
     * Boolean indicating if the icon should rotate.
     */
    rotating = input<boolean>(false);

    /**
     * Event emitted when an option is selected.
     */
    optionSelected = output<AutocompleteOption>();

    /**
     * Event emitted when the input value changes.
     */
    inputChanged = output<string>();

    /**
     * Form control for the input field.
     */
    control = new FormControl('');

    /**
     * Filtered list of autocomplete options.
     */
    filteredOptions = signal<AutocompleteOption[]>([]);

    /**
     * Boolean indicating if the options should be shown.
     */
    showOptions = signal(false);

    /**
     * Boolean indicating if the input field is focused.
     */
    isFocused = signal(false);

    /**
     * Boolean indicating if the component is visible.
     */
    isVisible = signal(false);

    /**
     * Boolean indicating if there are no search results.
     */
    noResults = signal(false);

    selectedIndex = signal(-1);

    inputElement = viewChild<ElementRef<HTMLInputElement>>('inputElement');

    constructor() {
        this.control.valueChanges.pipe(debounceTime(100), distinctUntilChanged()).subscribe((value) => {
            this.filterOptions(value || '');
            this.inputChanged.emit(value || '');
        });
    }

    /**
     * Filters the options based on the input value.
     * @param value - The current value of the input field.
     */
    filterOptions(value: string) {
        const filterValue = value.toLowerCase();
        this.filteredOptions.set(
            this.options().filter(
                (option) =>
                    option.label.toLowerCase().includes(filterValue) ||
                    option.value.toLowerCase().includes(filterValue),
            ),
        );
        this.noResults.set(this.filteredOptions().length === 0);
        this.showOptions.set((this.filteredOptions().length > 0 || this.noResults()) && this.isFocused());
    }

    /**
     * Selects an option from the autocomplete list.
     * @param option - The selected autocomplete option.
     */
    selectOption(option: AutocompleteOption) {
        this.control.setValue(option.label);
        this.showOptions.set(false);
        this.optionSelected.emit(option);
        this.selectedIndex.set(-1); // Reset the selected index

        // Remove focus from the input
        setTimeout(() => {
            this.inputElement()?.nativeElement.blur();
        });
    }

    scrollToSelectedOption() {
        setTimeout(() => {
            const selectedElement = document.querySelector('.autocomplete__option--selected');
            if (selectedElement) {
                selectedElement.scrollIntoView({ block: 'nearest', inline: 'start' });
            }
        });
    }

    /**
     * Handles focus event on the input field.
     */
    onFocus() {
        this.isFocused.set(true);
        this.showOptions.set(true);
        this.isVisible.set(true);
        this.selectedIndex.set(-1);
        this.filterOptions(this.control.value || '');
    }

    onKeyDown(event: KeyboardEvent) {
        if (this.showOptions()) {
            switch (event.key) {
                case 'ArrowUp':
                    event.preventDefault();
                    this.selectedIndex.update((index) => (index > 0 ? index - 1 : this.filteredOptions().length - 1));
                    this.scrollToSelectedOption();
                    break;
                case 'ArrowDown':
                    event.preventDefault();
                    this.selectedIndex.update((index) => (index < this.filteredOptions().length - 1 ? index + 1 : 0));
                    this.scrollToSelectedOption();
                    break;
                case 'Enter':
                    event.preventDefault();
                    if (this.selectedIndex() >= 0) {
                        this.selectOption(this.filteredOptions()[this.selectedIndex()]);
                    } else {
                        // If no option is selected, blur the input
                        this.inputElement()?.nativeElement.blur();
                    }
                    break;
            }
        }
    }

    /**
     * Handles blur event on the input field.
     */
    onBlur() {
        this.isFocused.set(false);
        this.showOptions.set(false);
        setTimeout(() => {
            this.isVisible.set(false);
        }, 300); // Match this to the animation duration
    }
}
