// autocomplete.component.ts
import { Component, input, output, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { InputComponent } from '../input';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';

interface AutocompleteOption {
    id: string;
    label: string;
    value: string;
}

@Component({
    selector: 'nctv-autocomplete',
    standalone: true,
    imports: [CommonModule, ReactiveFormsModule, InputComponent],
    templateUrl: './autocomplete.component.html',
    styleUrls: ['./autocomplete.component.scss'],
})
export class AutocompleteComponent {
    options = input<AutocompleteOption[]>([]);
    placeholder = input<string>('');
    label = input<string>('');
    for = input<string>('');
    iconLeft = input<string>('');
    iconRight = input<string>(
        'PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI5IiBoZWlnaHQ9IjYiIGZpbGw9Im5vbmUiIHZpZXdCb3g9IjAgMCA5IDYiPjxwYXRoIHN0cm9rZT0iIzhEQ0IyQyIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBzdHJva2Utd2lkdGg9IjEuNSIgZD0ibTEgMSAzLjUgMy41TDggMSIvPjwvc3ZnPg==',
    );
    rotating = input<boolean>(false);

    optionSelected = output<AutocompleteOption>();
    inputChanged = output<string>();

    control = new FormControl('');
    filteredOptions = signal<AutocompleteOption[]>([]);
    showOptions = signal(false);
    isFocused = signal(false);
    isVisible = signal(false);

    constructor() {
        this.control.valueChanges.pipe(debounceTime(300), distinctUntilChanged()).subscribe((value) => {
            this.filterOptions(value || '');
            this.inputChanged.emit(value || '');
        });
    }

    filterOptions(value: string) {
        const filterValue = value.toLowerCase();
        this.filteredOptions.set(
            this.options().filter(
                (option) =>
                    option.label.toLowerCase().includes(filterValue) ||
                    option.value.toLowerCase().includes(filterValue),
            ),
        );
        this.showOptions.set(this.filteredOptions().length > 0 && this.isFocused());
    }

    selectOption(option: AutocompleteOption) {
        this.control.setValue(option.label);
        this.showOptions.set(false);
        this.optionSelected.emit(option);
    }

    onFocus() {
        this.isFocused.set(true);
        this.showOptions.set(true);
        this.isVisible.set(true);
        this.filterOptions(this.control.value || '');
    }

    onBlur() {
        this.isFocused.set(false);
        this.showOptions.set(false);
        setTimeout(() => {
            this.isVisible.set(false);
        }, 300); // Match this to the animation duration
    }
}
