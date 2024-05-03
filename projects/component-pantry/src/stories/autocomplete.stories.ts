import { moduleMetadata, type Meta, type StoryObj } from '@storybook/angular';
import { CommonModule } from '@angular/common';
import { CardComponent } from '../lib/components/card';
import { AutocompleteComponent, INPUT_SIZE } from '../lib/components/autocomplete';

const meta: Meta<AutocompleteComponent> = {
    title: 'Components/Autocomplete',
    component: AutocompleteComponent,
    decorators: [
        moduleMetadata({
            imports: [CommonModule, CardComponent],
        }),
    ],
    tags: ['autodocs'],
    parameters: {},
    argTypes: {
        inputSize: {
            control: 'select',
            description: 'Used to set input size.',
            options: INPUT_SIZE,
            table: {
                defaultValue: {
                    summary: 'medium',
                },
            },
        },
    },
};

const dummyDataCountry = [
    { id: 'abc123', name: 'Afghanistan', code: 'AF' },
    { id: 'def456', name: 'Åland Islands', code: 'AX' },
    { id: 'ghi789', name: 'Albania', code: 'AL' },
    { id: 'jkl012', name: 'Algeria', code: 'DZ' },
    { id: 'mno345', name: 'American Samoa', code: 'AS' },
    { id: 'pqr678', name: 'AndorrA', code: 'AD' },
];

export default meta;
type Story = StoryObj<AutocompleteComponent>;

export const Basic: Story = {
    args: {
        inputSize: 'medium',
        label: 'Autocomplete Field (Dynamic)',
        title: 'Autocomplete Dropdown (Dynamic)',
        placeholder: 'Autocomplete Field Placeholder (Dynamic)',
        autocompleteData: dummyDataCountry,
    },
    render: (args) => ({
        props: args,
        template: `
            <nctv-card [shadowLevel]="shadowLevel">
                <nctv-autocomplete [inputSize]="inputSize" [title]="title" [label]="label" [placeholder]="placeholder" [autocompleteData]="autocompleteData">
                </nctv-autocomplete>           
            </nctv-card>
        `,
    }),
};

export const MultipleAutocomplete: Story = {
    args: {
        inputSize: 'medium',
        label: 'Autocomplete Field (Dynamic)',
        title: 'Autocomplete Dropdown (Dynamic)',
        placeholder: 'Autocomplete Field Placeholder (Dynamic)',

        autocompleteData: dummyDataCountry,
    },
    render: (args) => ({
        props: args,
        template: `
            <nctv-card [shadowLevel]="shadowLevel">
              <div style="display: flex; gap: 20px;">
                <nctv-autocomplete [inputSize]="inputSize" style="width: 100%;" [title]="title" [label]="label" [placeholder]="placeholder" [autocompleteData]="autocompleteData">
                </nctv-autocomplete>

                <nctv-autocomplete [inputSize]="inputSize" style="width: 100%;" [title]="'Select animal (Static)'" [label]="'Second autocomplete (Static)'" [placeholder]="'Select animal (Static)'" [autocompleteData]="[{id: '1', name: 'Lion', species: 'Panthera leo'}, {id: '2', name: 'Tiger', species: 'Panthera tigris'}, {id: '3', name: 'Elephant', species: 'Loxodonta'}, {id: '4', name: 'Giraffe', species: 'Giraffa camelopardalis'}, {id: '5', name: 'Zebra', species: 'Equus zebra'}]">
                </nctv-autocomplete>
              </div>
            </nctv-card>
        `,
    }),
};