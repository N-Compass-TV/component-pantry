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
        loading: {
            control: 'boolean',
            description: 'Indicates whether the button is in a loading state.',
            table: {
                defaultValue: {
                    summary: 'false',
                },
            },
        },
        loadingLabel: {
            control: 'text',
            description: 'The text to display when the button is in a loading state.',
            table: {
                defaultValue: {
                    summary: 'Loading...',
                },
            },
        },
        loadingLeft: {
            control: 'boolean',
            description: 'Indicates whether to show the loading spinner on the left side.',
            table: {
                defaultValue: {
                    summary: 'false',
                },
            },
        },
        loadingRight: {
            control: 'boolean',
            description: 'Indicates whether to show the loading spinner on the right side.',
            table: {
                defaultValue: {
                    summary: 'false',
                },
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
        iconRight:
            'PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxOCIgaGVpZ2h0PSIxNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDE4IDE0Ij48cGF0aCBmaWxsPSIjOERDQjJDIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik00LjUgMTRhNC41IDQuNSAwIDAgMS0xLjQ0LTguNzY1IDQuNSA0LjUgMCAwIDEgOC4zMDItMy4wNDYgMy41IDMuNSAwIDAgMSA0LjUwNCA0LjI3MkE0IDQgMCAwIDEgMTQgMTRINC41Wm01LjI1LTkuMjVhLjc1Ljc1IDAgMCAwLTEuNSAwdjQuNTlMNi4zIDcuMjRhLjc1Ljc1IDAgMSAwLTEuMSAxLjAybDMuMjUgMy41YS43NS43NSAwIDAgMCAxLjEgMGwzLjI1LTMuNWEuNzUuNzUgMCAwIDAtMS4xLTEuMDJsLTEuOTUgMi4xVjQuNzVaIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiLz48L3N2Zz4=',
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

export const LoadingLeft: Story = {
    args: {
        label: 'Submit',
        loading: true,
        loadingLabel: 'Submitting...',
        loadingLeft: true,
        buttonStyle: 'primary',
    },
};

export const LoadingRight: Story = {
    args: {
        label: 'Submit',
        loading: true,
        loadingLabel: 'Submitting...',
        loadingRight: true,
        buttonStyle: 'primary',
    },
};
