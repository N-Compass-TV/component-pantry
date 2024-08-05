import type { Meta, StoryObj } from '@storybook/angular';
import { BUTTON_SIZES, BUTTON_TYPES, ButtonComponent, BUTTON_ACTION_TYPES } from '../lib/components/button';

const meta: Meta<ButtonComponent> = {
    title: 'Components/Button',
    component: ButtonComponent,
    tags: ['autodocs'],
    argTypes: {
        backgroundColor: {
            control: 'color',
            description:
                'Used to force set the background color. Note that this does not influence hover and active states unless explicitly configured.',
        },
        disabled: {
            control: 'boolean',
            description: 'Disabled state. Accepts true or false value.',
            table: {
                defaultValue: {
                    summary: '',
                },
            },
        },
        iconLeft: {
            control: 'text',
            description: 'The icon to display on the left side of the label. Expected to be a valid icon reference.',
        },
        iconRight: {
            control: 'text',
            description: 'The icon to display on the right side of the label. Expected to be a valid icon reference.',
        },
        label: {
            control: 'text',
            description:
                'The text to display on the button. This label can be anything from a simple string to complex HTML.',
            table: {
                defaultValue: {
                    summary: 'Click Me',
                },
            },
        },
        size: {
            control: 'select',
            description: `Defines the size of the button. Accepted values are 'sm', 'normal', or 'lg'.`,
            options: BUTTON_SIZES,
            table: {
                defaultValue: { summary: 'normal' },
            },
        },
        textColor: {
            control: 'color',
            description:
                'Used to force set the text color. Note: This does not influence hover and active states unless explicitly configured.',
        },
        buttonStyle: {
            control: 'select',
            description: `Defines the style of the button, which influences its styling. Valid types are 'danger', 'primary', 'secondary', 'success', 'warning'.`,
            options: BUTTON_TYPES,
            table: {
                defaultValue: { summary: 'primary' },
            },
        },
        buttonActionType: {
            control: 'select',
            description: `Defines the type of the button element. Valid types are 'button', 'submit', 'reset'.`,
            options: BUTTON_ACTION_TYPES,
            table: {
                defaultValue: { summary: 'button' },
            },
        },
    },
    args: {},
};

export default meta;
type Story = StoryObj<ButtonComponent>;

export const Primary: Story = {
    args: {
        buttonStyle: 'primary',
        label: 'Primary Button',
        iconLeft:
            'PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxOCIgaGVpZ2h0PSIxNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDE4IDE0Ij48cGF0aCBmaWxsPSIjOERDQjJDIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik00LjUgMTRhNC41IDQuNSAwIDAgMS0xLjQ0LTguNzY1IDQuNSA0LjUgMCAwIDEgOC4zMDItMy4wNDYgMy41IDMuNSAwIDAgMSA0LjUwNCA0LjI3MkE0IDQgMCAwIDEgMTQgMTRINC41Wm01LjI1LTkuMjVhLjc1Ljc1IDAgMCAwLTEuNSAwdjQuNTlMNi4zIDcuMjRhLjc1Ljc1IDAgMSAwLTEuMSAxLjAybDMuMjUgMy41YS43NS43NSAwIDAgMCAxLjEgMGwzLjI1LTMuNWEuNzUuNzUgMCAwIDAtMS4xLTEuMDJsLTEuOTUgMi4xVjQuNzVaIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiLz48L3N2Zz4=',
        iconRight:
            'PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDE2IDE2Ij48cGF0aCBmaWxsPSIjOERDQjJDIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0yLjI1IDBBMi4yNSAyLjI1IDAgMCAwIDAgMi4yNXYxMS41QTIuMjUgMi4yNSAwIDAgMCAyLjI1IDE2aDExLjVBMi4yNSAyLjI1IDAgMCAwIDE2IDEzLjc1VjIuMjVBMi4yNSAyLjI1IDAgMCAwIDEzLjc1IDBIMi4yNVptNC4wMyA2LjI4YS43NS43NSAwIDAgMC0xLjA2LTEuMDZMMi45NyA3LjQ3YS43NS43NSAwIDAgMCAwIDEuMDZsMi4yNSAyLjI1YS43NS43NSAwIDEgMCAxLjA2LTEuMDZMNC41NiA4bDEuNzItMS43MlptNC41LTEuMDZhLjc1Ljc1IDAgMSAwLTEuMDYgMS4wNkwxMS40NCA4IDkuNzIgOS43MmEuNzUuNzUgMCAxIDAgMS4wNiAxLjA2bDIuMjUtMi4yNWEuNzUuNzUgMCAwIDAgMC0xLjA2bC0yLjI1LTIuMjVaIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiLz48L3N2Zz4=',
    },
};

export const Disabled: Story = {
    args: {
        label: 'Not Allowed',
        disabled: true,
    },
};

export const Success: Story = {
    args: {
        textColor: '#fff',
        label: 'Purchase',
        buttonStyle: 'success',
    },
};

export const Danger: Story = {
    args: {
        label: 'Delete',
        buttonStyle: 'danger',
    },
};
