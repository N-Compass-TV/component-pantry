import { moduleMetadata, type Meta, type StoryObj } from '@storybook/angular';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { InputComponent } from '../lib/components/input';
import { AutocompleteComponent } from '../lib/components/autocomplete';
import { CardComponent } from '../lib/components/card';

const meta: Meta<AutocompleteComponent> = {
    title: 'Components/Autocomplete',
    component: AutocompleteComponent,
    decorators: [
        moduleMetadata({
            imports: [CommonModule, ReactiveFormsModule, InputComponent, CardComponent],
        }),
    ],
    tags: ['autodocs'],
    parameters: {},
    argTypes: {
        options: {
            control: 'object',
            description: 'Array of option objects for autocomplete',
        },
        placeholder: {
            control: 'text',
            description: 'Placeholder text for the input',
        },
        label: {
            control: 'text',
            description: 'Label for the autocomplete input',
        },
        rotating: {
            control: 'boolean',
            description: 'Enables rotating animation for the right-icon (For dropdown)',
        },
        iconLeft: {
            control: 'text',
            description: 'Base64 encoded SVG for the left icon.',
        },
        iconRight: {
            control: 'text',
            description: 'Base64 encoded SVG for the right icon.',
        },
    },
};

export default meta;
type Story = StoryObj<AutocompleteComponent>;

const dummyDataCountry = [
    { id: 'AF', label: 'Afghanistan', value: 'AF' },
    { id: 'AX', label: 'Åland Islands', value: 'AX' },
    { id: 'AL', label: 'Albania', value: 'AL' },
    { id: 'DZ', label: 'Algeria', value: 'DZ' },
    { id: 'AS', label: 'American Samoa', value: 'AS' },
    { id: 'AD', label: 'Andorra', value: 'AD' },
];

export const Basic: Story = {
    args: {
        options: dummyDataCountry,
        placeholder: 'Search country',
        label: 'Country',
        iconLeft:
            'PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDIwIDIwIj48cGF0aCBzdHJva2U9IiM4RENCMkMiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLXdpZHRoPSIxLjUiIGQ9Im0xOSAxOS01LjE5Ny01LjE5N20wIDBBNy41IDcuNSAwIDEgMCAzLjE5NiAzLjE5NmE3LjUgNy41IDAgMCAwIDEwLjYwNyAxMC42MDdaIi8+PC9zdmc+',
        rotating: true,
    },
    render: (args) => ({
        props: {
            ...args,
            onOptionSelected: (option: any) => console.log('Selected:', option),
            onInputChanged: (value: string) => console.log('Input changed:', value),
        },
        template: `
      <nctv-autocomplete
        [options]="options"
        [placeholder]="placeholder"
        [label]="label"
        [rotating]="rotating"
        [iconLeft]="iconLeft"
        (optionSelected)="onOptionSelected($event)"
        (inputChanged)="onInputChanged($event)"
      ></nctv-autocomplete>
    `,
    }),
};

export const WithCard: Story = {
    args: {
        options: dummyDataCountry,
        placeholder: 'Search country',
        label: 'Country',
    },
    render: (args) => ({
        props: {
            ...args,
            onOptionSelected: (option: any) => console.log('Selected:', option),
            onInputChanged: (value: string) => console.log('Input changed:', value),
        },
        template: `
      <nctv-card [shadowLevel]="2" [cardSize]="'100%'">
        <nctv-autocomplete
          [options]="options"
          [placeholder]="placeholder"
          [label]="label"
          (optionSelected)="onOptionSelected($event)"
          (inputChanged)="onInputChanged($event)"
        ></nctv-autocomplete>
      </nctv-card>
    `,
    }),
};

export const MultipleAutocomplete: Story = {
    args: {},
    render: (args) => ({
        props: {
            ...args,
            countryOptions: dummyDataCountry,
            animalOptions: [
                { id: '1', label: 'Lion', value: 'lion' },
                { id: '2', label: 'Tiger', value: 'tiger' },
                { id: '3', label: 'Elephant', value: 'elephant' },
                { id: '4', label: 'Giraffe', value: 'giraffe' },
                { id: '5', label: 'Zebra', value: 'zebra' },
            ],
            onCountrySelected: (option: any) => console.log('Country selected:', option),
            onAnimalSelected: (option: any) => console.log('Animal selected:', option),
            onCountryInputChanged: (value: string) => console.log('Country input changed:', value),
            onAnimalInputChanged: (value: string) => console.log('Animal input changed:', value),
        },
        template: `
      <nctv-card [shadowLevel]="2">
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 20px;">
          <nctv-autocomplete
            [options]="countryOptions"
            placeholder="Search country"
            label="Country"
            (optionSelected)="onCountrySelected($event)"
            (inputChanged)="onCountryInputChanged($event)"
          ></nctv-autocomplete>

          <nctv-autocomplete
            [options]="animalOptions"
            placeholder="Search animal"
            label="Animal"
            (optionSelected)="onAnimalSelected($event)"
            (inputChanged)="onAnimalInputChanged($event)"
          ></nctv-autocomplete>
        </div>
      </nctv-card>
    `,
    }),
};
