import { moduleMetadata, type Meta, type StoryObj } from '@storybook/angular';
import { CommonModule } from '@angular/common';
import { ORIENTATION, SHOW_STEPS, StepperComponent } from '../lib/components/stepper';
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
    argTypes: {
        orientation: {
            control: 'select',
            description: 'Used to select orientation.',
            options: ORIENTATION,
            table: {
                defaultValue: {
                    summary: 'horizontal',
                },
            },
        },
        showSteps: {
            control: 'select',
            description: 'Used to show the steps.',
            options: SHOW_STEPS,
            table: {
                defaultValue: {
                    summary: '',
                },
            },
        },
        clickable: {
            control: 'select',
            description: 'Used to make the steps clickable to go to a specific step.',
            options: SHOW_STEPS,
            table: {
                defaultValue: {
                    summary: '',
                },
            },
        },
    },
};

export default meta;
type Story = StoryObj<StepperComponent>;

export const Basic: Story = {
    args: {
        orientation: 'vertical',
        clickable: true,
        showSteps: true,
        steps: [
            { label: 'Create Screen', completed: true },
            { label: 'Choose Template', completed: false },
            { label: 'Assign Playlist', completed: false },
            { label: 'Assign Host', completed: true },
            { label: 'Assign Dealer', completed: true },
        ],
        currentStep: 0,
    },
    render: (args) => ({
        props: {
            ...args,
            onNext: () => {
                if (args.currentStep < args.steps.length - 1) {
                    args.currentStep += 1;
                }
            },
            onBack: () => {
                if (args.currentStep > 0) {
                    args.currentStep -= 1;
                }
            },
        },
        template: `
        <ng-container>
            <div *ngIf="orientation === 'vertical'; else horizontalOrientation" style="height: 500px;">
                <nctv-card [cardSize]="'fit-content'" [backgroundColor]="'#091635'">
                    <div style="display: flex; gap: 10px; height: 100%; flex-direction: column; align-items:center;">
                        <svg width="198" height="33" viewBox="0 0 198 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M3.64256 11.7726V22.3679C3.64256 22.3679 3.64256 23.676 2.2037 23.676C0.764832 23.676 0.764832 22.3679 0.764832 22.3679V10.0722C0.764832 8.76411 1.68047 8.6333 2.2037 8.6333H13.1914C15.1535 8.6333 17.3772 10.7262 17.3772 12.6883V22.3679C17.3772 22.3679 17.3772 23.676 15.9383 23.676C14.4994 23.676 14.3686 22.3679 14.3686 22.3679V13.2115C14.3686 12.9499 13.8454 11.7726 12.5374 11.7726H3.64256Z" fill="white"/>
                            <path d="M25.0293 17.9205C25.8601 17.9205 26.5336 17.247 26.5336 16.4162C26.5336 15.5855 25.8601 14.912 25.0293 14.912C24.1985 14.912 23.525 15.5855 23.525 16.4162C23.525 17.247 24.1985 17.9205 25.0293 17.9205Z" fill="white"/>
                            <path d="M94.1602 8.6333C92.5905 8.6333 91.4133 9.59254 91.0209 10.0722C91.0013 10.0526 90.9814 10.0325 90.9609 10.0119L90.9607 10.0116C90.4354 9.48149 89.5949 8.6333 86.5735 8.6333H81.6028C79.6407 8.6333 77.4171 10.7262 77.4171 12.6883V15.0445L79.1583 15.4563C79.9639 15.6468 79.9639 16.7933 79.1583 16.9838L77.4171 17.3956V22.3679C77.4171 22.3679 77.4171 23.676 78.8559 23.676C80.2948 23.676 80.4256 22.3679 80.4256 22.3679V13.2115C80.4256 12.9499 80.9488 11.7726 82.2569 11.7726H86.5735C86.5735 11.7726 88.5094 11.7726 88.928 12.2959C89.3465 12.8191 89.4507 13.0807 89.4512 13.8655C89.4517 14.6504 89.4512 22.3679 89.4512 22.3679C89.4512 22.3679 89.582 23.676 91.0209 23.676C92.3289 23.676 92.4597 22.3679 92.4597 22.3679V13.8655C92.4597 13.2115 92.5481 12.6517 92.9829 12.2959C93.002 12.2802 93.0206 12.2648 93.0389 12.2495C93.3619 11.9805 93.6114 11.7726 95.4683 11.7726H99.9157C101.224 11.7726 101.747 12.9499 101.747 13.2115V22.3679C101.747 22.3679 101.878 23.676 103.317 23.676C104.755 23.676 104.755 22.3679 104.755 22.3679V12.6883C104.755 10.7262 102.532 8.6333 100.57 8.6333H94.1602Z" fill="white"/>
                            <path d="M34.7743 13.6039C34.7743 11.4374 36.7433 11.4761 38.1339 11.5035C38.2085 11.505 38.2814 11.5064 38.3523 11.5075C38.4757 11.5093 38.5919 11.511 38.6985 11.511H47.9857C47.9857 11.511 49.4246 11.3864 49.4246 10.0722C49.4246 8.75791 47.9857 8.6333 47.9857 8.6333H36.4907C34.3819 8.6333 31.8966 10.0722 31.8966 13.7347V18.4437C31.8966 22.1063 34.3819 23.5452 36.4907 23.5452H47.9857C47.9857 23.5452 49.4246 23.4206 49.4246 22.1063C49.4246 20.792 47.9857 20.6674 47.9857 20.6674H38.6985C38.5919 20.6674 38.4757 20.6692 38.3523 20.671C38.2814 20.6721 38.2085 20.6735 38.1339 20.675C36.7433 20.7024 34.7743 20.7411 34.7743 18.5745V13.6039Z" fill="white"/>
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M107.502 30.0855V12.6883C107.502 10.203 109.988 8.6333 111.688 8.6333H121.237C122.676 8.6333 125.292 10.3338 125.292 12.6883V19.0978C125.292 19.4902 124.795 23.676 120.348 23.676H110.38V30.0855C110.38 30.0855 110.249 31.1319 108.941 31.1319C107.633 31.1319 107.502 30.0855 107.502 30.0855ZM120.452 20.6674H110.38V13.6039C110.38 11.9034 111.95 11.511 112.865 11.511H120.714C121.237 11.511 122.414 12.2959 122.414 13.4731V18.7054C122.414 19.2286 122.153 20.6674 120.452 20.6674Z" fill="white"/>
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M128.693 11.511C128.693 11.511 127.385 11.3802 127.385 10.0722C127.385 8.76411 128.693 8.6333 128.693 8.6333H140.465C143.343 8.6333 145.174 11.511 145.174 13.0807V18.967C145.174 20.7982 143.605 23.676 140.727 23.676H131.701C128.562 23.676 127.385 20.7982 127.385 18.967C127.385 17.1357 128.562 14.1271 131.701 14.1271H142.166V13.3423C142.166 12.4267 141.25 11.511 140.465 11.511H128.693ZM132.355 17.0049H142.166V19.0978C142.166 19.8826 141.25 20.7982 140.596 20.7982H132.355C130.786 20.7982 130.393 19.4902 130.393 18.8362C130.393 18.1821 130.786 17.0049 132.355 17.0049Z" fill="white"/>
                            <path d="M163.749 8.6333H152.107C149.36 8.6333 147.529 10.6901 147.529 13.004C147.529 13.556 147.633 14.1007 147.829 14.6102C148.497 16.8703 150.963 17.6318 151.976 17.6318H160.61C162.048 17.6318 162.571 18.5317 162.571 19.1744C162.571 19.8172 161.918 20.7171 160.61 20.7171H149.36C149.36 20.7171 147.791 20.8456 147.791 22.1311C147.791 23.4166 149.36 23.5452 149.36 23.5452H161.002C163.749 23.5452 165.58 21.4884 165.58 19.1744C165.58 18.6224 165.476 18.0778 165.28 17.5683C164.612 15.3081 162.146 14.5466 161.133 14.5466H152.5C151.061 14.5466 150.538 13.6468 150.538 13.004C150.538 12.3613 151.192 11.4614 152.5 11.4614H163.749C163.749 11.4614 165.319 11.3329 165.319 10.0474C165.319 8.76185 163.749 8.6333 163.749 8.6333Z" fill="white"/>
                            <path d="M172.251 8.6333H183.893C183.893 8.6333 185.463 8.76185 185.463 10.0474C185.463 11.3329 183.893 11.4614 183.893 11.4614H172.644C171.336 11.4614 170.682 12.3613 170.682 13.004C170.682 13.6468 171.205 14.5466 172.644 14.5466H181.277C182.29 14.5466 184.756 15.3081 185.424 17.5683C185.62 18.0778 185.724 18.6224 185.724 19.1744C185.724 21.4884 183.893 23.5452 181.146 23.5452H169.504C169.504 23.5452 167.935 23.4166 167.935 22.1311C167.935 20.8456 169.504 20.7171 169.504 20.7171H180.754C182.062 20.7171 182.715 19.8172 182.715 19.1744C182.715 18.5317 182.193 17.6318 180.754 17.6318H172.12C171.107 17.6318 168.642 16.8703 167.973 14.6102C167.777 14.1007 167.673 13.556 167.673 13.004C167.673 10.6901 169.504 8.6333 172.251 8.6333Z" fill="white"/>
                            <path d="M191.96 18.4563V17.7897H188.34V18.4563H189.805V24.0684H190.503V18.4563H191.96Z" fill="white"/>
                            <path d="M195.219 24.0684L197.235 17.7897H196.499L194.82 23.2036L193.141 17.7897H192.397L194.413 24.0684H195.219Z" fill="white"/>
                            <path d="M66.6285 11.8047C66.8157 11.69 67.0306 11.9042 66.9167 12.0918L65.644 14.9119L65.5132 15.1735C65.5132 15.1735 65.4469 15.2865 65.3898 15.4094L63.4203 19.8825C63.3278 20.0816 62.8994 20.022 62.8906 19.8026L62.7663 16.4815C62.7663 16.4815 62.7663 16.3507 62.6355 16.2199C62.5047 16.0891 62.2431 16.0891 62.2431 16.0891L59.0468 16.0043C58.8273 15.9991 58.7628 15.6111 58.9603 15.5152L63.5739 13.2771C63.6252 13.2522 63.6989 13.2134 63.7669 13.1769C63.8605 13.1266 63.9435 13.0806 63.9435 13.0806L64.2052 12.9498L66.6285 11.8047Z" fill="#8DCB2C"/>
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M62.9437 0.160042C62.892 -0.0533475 62.5885 -0.0533475 62.5368 0.160042L61.6801 3.6987C58.9326 3.90762 56.4348 5.00995 54.4766 6.71586L52.1325 5.47869C51.9445 5.37944 51.7442 5.58912 51.854 5.77032L53.2036 7.99811C51.5311 9.94596 50.4516 12.4178 50.2451 15.1337L46.7064 15.9904C46.493 16.0421 46.493 16.3456 46.7064 16.3973L50.2632 17.2584C50.5114 19.9174 51.5973 22.3332 53.2545 24.239L52.029 26.6735C51.9338 26.8626 52.1499 27.0562 52.3296 26.9427L54.5596 25.534C56.4928 27.1885 58.9398 28.2598 61.6283 28.4754L62.5368 32.2277C62.5885 32.441 62.892 32.441 62.9437 32.2277L63.8567 28.4564C66.4887 28.1997 68.88 27.1218 70.7712 25.4824L73.0828 26.9427C73.2625 27.0562 73.4786 26.8626 73.3834 26.6735L72.1057 24.1353C73.6886 22.274 74.7325 19.9403 74.9963 17.3753L79.0357 16.3973C79.249 16.3456 79.249 16.0421 79.0357 15.9904L75.0164 15.0173C74.7922 12.392 73.7518 9.99973 72.15 8.09526L73.5584 5.77032C73.6682 5.58912 73.4679 5.37944 73.2799 5.47869L70.8475 6.76248C68.9322 5.07471 66.4928 3.96765 63.8048 3.71684L62.9437 0.160042ZM71.6611 15.9583C71.6611 20.8707 67.6787 24.8531 62.7663 24.8531C57.8539 24.8531 53.8715 20.8707 53.8715 15.9583C53.8715 11.0459 57.8539 7.0635 62.7663 7.0635C67.6787 7.0635 71.6611 11.0459 71.6611 15.9583Z" fill="#8DCB2C"/>
                        </svg>

                        <div style="height: 100%;">
                            <nctv-stepper
                                [clickable]="clickable"
                                [steps]="steps"
                                [showSteps]="showSteps"
                                [(currentStep)]="currentStep"
                                (finished)="onFinish()"
                                [orientation]="orientation">
                            </nctv-stepper>
                        </div>

                    </div>
                </nctv-card>
            </div>


            <ng-template #horizontalOrientation>
                <nctv-card>
                    <div style="display: flex; gap: 10px; flex-direction: column;">
                        <nctv-stepper
                            [clickable]="clickable"
                            [steps]="steps"
                            [showSteps]="showSteps"
                            [(currentStep)]="currentStep"
                            (finished)="onFinish()"
                            [orientation]="orientation">
                        </nctv-stepper>
                    </div>
                </nctv-card>
            </ng-template>

            <a href="https://host-installation-demo.vercel.app/">***Stepper usage demo***</a>
        </ng-container>
        `,
    }),
};

export const Horizontal: Story = {
    args: {
        orientation: 'horizontal',
        showSteps: false,
        steps: [
            { label: 'Create Screen', completed: false },
            { label: 'Choose Template', completed: true },
            { label: 'Assign Playlist', completed: false },
        ],
        currentStep: 0,
    },
    render: (args) => ({
        props: {
            ...args,
            onNext: () => {
                if (args.currentStep < args.steps.length - 1) {
                    args.currentStep += 1;
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
            <div style="display: flex; gap: 10px; flex-direction: column;">
            <nctv-stepper
                [steps]="steps"
                [showSteps]="showSteps"
                [(currentStep)]="currentStep"
                (finished)="onFinish()"
                [orientation]="orientation">
            </nctv-stepper>

            </div>
        </nctv-card>
        `,
    }),
};

export const Vertical: Story = {
    args: {
        orientation: 'vertical',
        showSteps: true,
        steps: [
            { label: 'Create Screen', completed: false },
            { label: 'Choose Template', completed: true },
            { label: 'Assign Playlist', completed: false },
        ],
        currentStep: 0,
    },
    render: (args) => ({
        props: {
            ...args,
            onNext: () => {
                if (args.currentStep < args.steps.length - 1) {
                    args.currentStep += 1;
                }
            },
            onBack: () => {
                if (args.currentStep > 0) {
                    args.currentStep -= 1;
                }
            },
        },
        template: `
        <div style="height: 500px;">
        <nctv-card [cardSize]="'fit-content'" [backgroundColor]="'#091635'">
            <div style="display: flex; gap: 10px; height: 100%; flex-direction: column; align-items:center;">
                

                <div style="height: 100%;">
                    <nctv-stepper
                        [steps]="steps"
                        [showSteps]="showSteps"
                        [(currentStep)]="currentStep"
                        (finished)="onFinish()"
                        [orientation]="orientation">
                    </nctv-stepper>
                </div>
            </div>
        </nctv-card>
    </div>
        `,
    }),
};
