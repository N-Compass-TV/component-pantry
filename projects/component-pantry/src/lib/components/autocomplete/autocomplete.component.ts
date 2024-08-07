import { Component, input, output } from '@angular/core';
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

    optionSelected = output<AutocompleteOption>();
    inputChanged = output<string>();

    control = new FormControl('');
    filteredOptions: AutocompleteOption[] = [];
    showOptions = false;

    constructor() {
        this.control.valueChanges.pipe(debounceTime(300), distinctUntilChanged()).subscribe((value) => {
            this.filterOptions(value || '');
            this.inputChanged.emit(value || '');
        });
    }

    filterOptions(value: string) {
        const filterValue = value.toLowerCase();
        this.filteredOptions = this.options().filter(
            (option) =>
                option.label.toLowerCase().includes(filterValue) || option.value.toLowerCase().includes(filterValue),
        );
        this.showOptions = this.filteredOptions.length > 0;
    }

    selectOption(option: AutocompleteOption) {
        this.control.setValue(option.label);
        this.showOptions = false;
        this.optionSelected.emit(option);

        console.log(option);
    }
}
