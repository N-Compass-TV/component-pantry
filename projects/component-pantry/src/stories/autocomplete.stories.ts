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
        for: {
            control: 'text',
            description: 'Name of the form field (Unique - sets value of id and for label)',
        },
    },
};

export default meta;
type Story = StoryObj<AutocompleteComponent>;

const dummyData = [
    { id: '1', label: 'Lion', value: 'lion' },
    { id: '2', label: 'Tiger', value: 'tiger' },
    { id: '3', label: 'Elephant', value: 'elephant' },
    { id: '4', label: 'Giraffe', value: 'giraffe' },
    { id: '5', label: 'Zebra', value: 'zebra' },
    { id: '6', label: 'Cheetah', value: 'cheetah' },
    { id: '7', label: 'Rhinoceros', value: 'rhinoceros' },
    { id: '8', label: 'Hippopotamus', value: 'hippopotamus' },
    { id: '9', label: 'Gorilla', value: 'gorilla' },
    { id: '10', label: 'Chimpanzee', value: 'chimpanzee' },
    { id: '11', label: 'Leopard', value: 'leopard' },
    { id: '12', label: 'Gazelle', value: 'gazelle' },
    { id: '13', label: 'Hyena', value: 'hyena' },
    { id: '14', label: 'Crocodile', value: 'crocodile' },
    { id: '15', label: 'Ostrich', value: 'ostrich' },
    { id: '16', label: 'Kangaroo', value: 'kangaroo' },
    { id: '17', label: 'Koala', value: 'koala' },
    { id: '18', label: 'Panda', value: 'panda' },
    { id: '19', label: 'Penguin', value: 'penguin' },
    { id: '20', label: 'Sloth', value: 'sloth' },
    { id: '21', label: 'Orangutan', value: 'orangutan' },
    { id: '22', label: 'Polar Bear', value: 'polar_bear' },
    { id: '23', label: 'Grizzly Bear', value: 'grizzly_bear' },
    { id: '24', label: 'Wolf', value: 'wolf' },
    { id: '25', label: 'Fox', value: 'fox' },
    { id: '26', label: 'Jaguar', value: 'jaguar' },
    { id: '27', label: 'Panther', value: 'panther' },
    { id: '28', label: 'Lemur', value: 'lemur' },
    { id: '29', label: 'Meerkat', value: 'meerkat' },
    { id: '30', label: 'Armadillo', value: 'armadillo' },
    { id: '31', label: 'Platypus', value: 'platypus' },
    { id: '32', label: 'Tasmanian Devil', value: 'tasmanian_devil' },
    { id: '33', label: 'Komodo Dragon', value: 'komodo_dragon' },
    { id: '34', label: 'Camel', value: 'camel' },
    { id: '35', label: 'Llama', value: 'llama' },
    { id: '36', label: 'Alpaca', value: 'alpaca' },
    { id: '37', label: 'Bison', value: 'bison' },
    { id: '38', label: 'Moose', value: 'moose' },
    { id: '39', label: 'Elk', value: 'elk' },
    { id: '40', label: 'Warthog', value: 'warthog' },
    { id: '41', label: 'Wildebeest', value: 'wildebeest' },
    { id: '42', label: 'Baboon', value: 'baboon' },
    { id: '43', label: 'Capybara', value: 'capybara' },
    { id: '44', label: 'Tapir', value: 'tapir' },
    { id: '45', label: 'Red Panda', value: 'red_panda' },
];

export const Basic: Story = {
    args: {
        options: dummyData,
        placeholder: 'Search Animal',
        label: 'Country',
        iconLeft:
            'PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDIwIDIwIj48cGF0aCBzdHJva2U9IiM4RENCMkMiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLXdpZHRoPSIxLjUiIGQ9Im0xOSAxOS01LjE5Ny01LjE5N20wIDBBNy41IDcuNSAwIDEgMCAzLjE5NiAzLjE5NmE3LjUgNy41IDAgMCAwIDEwLjYwNyAxMC42MDdaIi8+PC9zdmc+',
        rotating: true,
        for: 'Country',
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
        [for]="for"
        (optionSelected)="onOptionSelected($event)"
        (inputChanged)="onInputChanged($event)"
      ></nctv-autocomplete>
    `,
    }),
};

export const WithCard: Story = {
    args: {
        options: dummyData,
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
      <nctv-card [shadowLevel]="2" [cardWidth]="'100%'">
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
            countryOptions: dummyData,
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
