import { moduleMetadata, type Meta, type StoryObj } from '@storybook/angular';
import { CommonModule } from '@angular/common';
import { StepperComponent } from '../lib/components/stepper';
import { ButtonComponent } from '../lib/components/button';
import { CardComponent } from '../lib/components/card';

const meta: Meta<StepperComponent> = {
    title: 'Components/Stepper',
    component: StepperComponent,
    decorators: [
        moduleMetadata({
            imports: [CommonModule, ButtonComponent, CardComponent],
        }),
    ],
    tags: ['autodocs'],
    parameters: {},
    argTypes: {},
};

export default meta;
type Story = StoryObj<StepperComponent>;

export const Basic: Story = {
    args: {
        steps: [{ label: 'Billing Info' }, { label: 'Payment Method' }, { label: 'Checkout' }, { label: 'Success' }],
        currentStep: 0,
    },
    render: (args) => ({
        props: {
            ...args,
            onNext: () => {
                if (args.currentStep < args.steps.length - 1) {
                    args.currentStep += 1;
                    console.log('hello');
                }
            },
            onBack: () => {
                if (args.currentStep > 0) {
                    args.currentStep -= 1;
                }
            },
        },
        template: `
        <nctv-card>
            <nctv-stepper 
                [steps]="steps" 
                [(currentStep)]="currentStep"
                (finished)="onFinish()">
            </nctv-stepper>
            <div style="margin-top: 20px; display: flex;">
                <nctv-button *ngIf="currentStep > 0" label="Back" (click)="currentStep = currentStep - 1" backgroundColor="#091635" textColor="#fff" type="primary" size="normal" iconLeft="fa-arrow-left" style="margin-right: 10px;"> </nctv-button>
                
                <nctv-button *ngIf="currentStep === steps.length - 1" label="Finish" (click)="onFinish()" backgroundColor="#8DCB2C" textColor="#fff" type="primary" size="normal" iconRight="fa-check"> </nctv-button>

                <nctv-button *ngIf="currentStep < steps.length - 1" label="Next" (click)="currentStep = currentStep + 1" backgroundColor="#8DCB2C" textColor="#fff" type="primary" size="normal" iconRight="fa-arrow-right"> </nctv-button>
            </div>
        </nctv-card>
        `,
    }),
};
