import { moduleMetadata, type Meta, type StoryObj } from '@storybook/angular';
import { CommonModule } from '@angular/common';
import { CardComponent } from '../lib/components/card';
import { INPUT_SIZE, InputComponent } from '../lib/components/input';
import { ReactiveFormsModule } from '@angular/forms';

const meta: Meta<InputComponent> = {
    title: 'Components/Input',
    component: InputComponent,
    decorators: [
        moduleMetadata({
            imports: [CommonModule, ReactiveFormsModule, CardComponent],
        }),
    ],
    tags: ['autodocs'],
    parameters: {},
    argTypes: {
        for: {
            control: 'text',
            description: 'Identifier for the input element.',
            table: {
                defaultValue: {
                    summary: 'for',
                },
            },
        },
        label: {
            control: 'text',
            description: 'Text label for the input.',
            table: {
                defaultValue: {
                    summary: 'Default Label',
                },
            },
        },
        placeholder: {
            control: 'text',
            description: 'Placeholder text for the input.',
            table: {
                defaultValue: {
                    summary: 'Default Placeholder',
                },
            },
        },
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
        inputType: {
            control: 'text',
            description: 'Type of the input element.',
            table: {
                defaultValue: {
                    summary: 'text',
                },
            },
        },
        required: {
            control: 'boolean',
            description: 'Indicates whether the input is required.',
            table: {
                defaultValue: {
                    summary: 'false',
                },
            },
        },
        disabled: {
            control: 'boolean',
            description: 'Disabled state. Accepts true or false value.',
            table: {
                defaultValue: {
                    summary: 'false',
                },
            },
        },
        invalidLabel: {
            control: 'text',
            description: 'Label to display when the input is invalid.',
            table: {
                defaultValue: {
                    summary: 'This field is required*',
                },
            },
        },
        iconLeft: {
            control: 'text',
            description: 'Base64 encoded SVG for the left icon.',
        },
        iconRight: {
            control: 'text',
            description: 'Base64 encoded SVG for the right icon.',
        },

        loadingLeft: {
            control: 'boolean',
            description: 'Indicates whether to show the loading spinner on the left side.',
        },
        loadingRight: {
            control: 'boolean',
            description: 'Indicates whether to show the loading spinner on the right side.',
        },
    },
};

export default meta;
type Story = StoryObj<InputComponent>;

const commonArgs = {
    for: 'for',
    label: 'Input Label',
    placeholder: 'Default Input Placeholder',
    inputSize: 'medium' as const,
    inputType: 'email',
    disabled: false,
    required: false,
    invalidLabel: 'This field is required*',
    loadingLeft: false,
    loadingRight: false,
    iconLeft:
        'PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxOCIgaGVpZ2h0PSIxNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDE4IDE0Ij48cGF0aCBmaWxsPSIjOERDQjJDIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik00LjUgMTRhNC41IDQuNSAwIDAgMS0xLjQ0LTguNzY1IDQuNSA0LjUgMCAwIDEgOC4zMDItMy4wNDYgMy41IDMuNSAwIDAgMSA0LjUwNCA0LjI3MkE0IDQgMCAwIDEgMTQgMTRINC41Wm01LjI1LTkuMjVhLjc1Ljc1IDAgMCAwLTEuNSAwdjQuNTlMNi4zIDcuMjRhLjc1Ljc1IDAgMSAwLTEuMSAxLjAybDMuMjUgMy41YS43NS43NSAwIDAgMCAxLjEgMGwzLjI1LTMuNWEuNzUuNzUgMCAwIDAtMS4xLTEuMDJsLTEuOTUgMi4xVjQuNzVaIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiLz48L3N2Zz4=',
    iconRight: '',
};

export const Basic: Story = {
    args: {
        ...commonArgs,
        disabled: false,
        loadingRight: true,
    },
    render: (args) => ({
        props: args,
        template: `
      <nctv-card>
        <nctv-input
          [for]="for"
          [iconLeft]="iconLeft"
          [iconRight]="iconRight"
          [inputSize]="inputSize"
          [inputType]="inputType"
          [invalidLabel]="invalidLabel"
          [label]="label"
          [loadingLeft]="loadingLeft"
          [loadingRight]="loadingRight"
          [placeholder]="placeholder"
          [required]="required"
          [disabled]="disabled">
        </nctv-input>
      </nctv-card>
    `,
    }),
};

export const LoadingLeft: Story = {
    args: {
        ...commonArgs,
        loadingLeft: true,
        iconLeft: '',
    },
    render: Basic.render,
};

export const LoadingRight: Story = {
    args: {
        ...commonArgs,
        loadingRight: true,
        iconRight: '',
    },
    render: Basic.render,
};

export const IconsNoLoading: Story = {
    args: {
        ...commonArgs,
        iconRight: commonArgs.iconLeft, // Using the same icon for demonstration
    },
    render: Basic.render,
};

export const IconLeftLoadingRight: Story = {
    args: {
        ...commonArgs,
        loadingRight: true,
    },
    render: Basic.render,
};
