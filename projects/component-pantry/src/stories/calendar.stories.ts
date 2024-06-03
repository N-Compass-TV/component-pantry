import { moduleMetadata, type Meta, type StoryObj } from '@storybook/angular/';
import { CalendarComponent } from '../lib/components/calendar/calendar.component';
import { CommonModule } from '@angular/common';
import { CardComponent } from '../lib/components/card';

const meta: Meta<CalendarComponent> = {
    title: 'Components/Calendar',
    component: CalendarComponent,
    tags: ['autodocs'],
    decorators: [
        moduleMetadata({
            imports: [CommonModule, CardComponent],
        }),
    ],
    parameters: {},
    argTypes: {},
};

export default meta;
type Story = StoryObj<CalendarComponent>;

export const Basic: Story = {
    args: {
        label: 'Set Installation Date',
        labelInputIcon: `<svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
            d="M11.0833 2.33331H2.91667C2.27233 2.33331 1.75 2.85565 1.75 3.49998V11.6666C1.75 12.311 2.27233 12.8333 2.91667 12.8333H11.0833C11.7277 12.8333 12.25 12.311 12.25 11.6666V3.49998C12.25 2.85565 11.7277 2.33331 11.0833 2.33331Z"
            stroke="#8DCB2C"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
        />
        <path
            d="M9.33301 1.16669V3.50002"
            stroke="#8DCB2C"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
        />
        <path
            d="M4.66699 1.16669V3.50002"
            stroke="#8DCB2C"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
        />
        <path
            d="M1.75 5.83331H12.25"
            stroke="#8DCB2C"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
        />
    </svg>`,
    },
    render: (args) => ({
        props: args,
        template: `<nctv-card [shadowLevel]="shadowLevel">
        <nctv-calendar [label]="label"
        [labelInputIcon]="labelInputIcon"
        ></nctv-calendar>
        </nctv-card>`,
    }),
};
