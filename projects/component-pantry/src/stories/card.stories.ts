import { moduleMetadata, type Meta, type StoryObj } from '@storybook/angular';
import { CommonModule } from '@angular/common';
import { CardComponent, CARD_SHADOWS, CARD_WIDTH, CARD_HEIGHT } from '../lib/components/card';
import { TextComponent } from '../lib/components/text';
import { ButtonComponent } from '../public-api';

const meta: Meta<CardComponent> = {
    title: 'Components/Card',
    component: CardComponent,
    decorators: [
        moduleMetadata({
            imports: [CommonModule, ButtonComponent, TextComponent],
        }),
    ],
    tags: ['autodocs'],
    parameters: {},
    argTypes: {
        shadowLevel: {
            control: 'select',
            description: 'Used to set shadow level, the higher the value the more prominent the shadow is.',
            options: CARD_SHADOWS,
        },
        backgroundColor: {
            control: 'color',
            description: 'Sets the background color of the card.',
        },
        sidePadding: {
            control: 'number',
            description: 'Sets the padding on all sides of the card in rem units.',
            table: {
                type: { summary: 'number' },
            },
        },
        cardWidth: {
            control: { type: 'text' },
            description:
                'Sets the width of the card. Can be "auto", "fit-content", "full", or a specific value (e.g., "200px", "50%").',
        },
        cardHeight: {
            control: { type: 'text' },
            description:
                'Sets the height of the card. Can be "auto", "fit-content", "full", or a specific value (e.g., "200px", "50%").',
        },
    },
};

export default meta;
type Story = StoryObj<CardComponent>;

export const Basic: Story = {
    args: {
        shadowLevel: 1,
        backgroundColor: '#fff',
        cardWidth: 'auto',
        cardHeight: 'auto',
        sidePadding: 1,
    },
    render: (args) => ({
        props: args,
        template: `
            <nctv-card [shadowLevel]="shadowLevel" [backgroundColor]="backgroundColor" [cardWidth]="cardWidth" [cardHeight]="cardHeight" [sidePadding]="sidePadding">
                <div [style.margin-bottom.px]="'20'">
                    <nctv-text
                    [textType]="'larger'"
                    [textContent]="'Hello World!'">
                    </nctv-text>
                </div>

                <div>
                    <nctv-text
                    [textContent]="'Lorem ipsum keme keme keme 48 years chaka at bakit na ugmas mabaho nang kasi balaj sa na pranella jupang-pang shontis chapter jowabella at ang chaka at nang guash matod kasi nakakalurky na ang neuro na warla nang ugmas wasok nang shonget ang chapter , kemerloo ang shontis ng at ang intonses at nang wasok oblation sa nang 48 years shontis at bakit mahogany bongga.'">
                    </nctv-text>
                </div>
            </nctv-card>
        `,
    }),
};

export const ShadowLevel3: Story = {
    args: {
        shadowLevel: 3,
        backgroundColor: '#fff',
    },
    render: (args) => ({
        props: args,
        template: `
            <nctv-card [shadowLevel]="shadowLevel" [backgroundColor]="backgroundColor">
                <div [style.margin-bottom.px]="'20'">
                    <nctv-text
                    [textType]="'larger'"
                    [textContent]="'Hello World!'">
                    </nctv-text>
                </div>

                <div>
                    <nctv-text
                    [textContent]="'Lorem ipsum keme keme keme 48 years chaka at bakit na ugmas mabaho nang kasi balaj sa na pranella jupang-pang shontis chapter jowabella at ang chaka at nang guash matod kasi nakakalurky na ang neuro na warla nang ugmas wasok nang shonget ang chapter , kemerloo ang shontis ng at ang intonses at nang wasok oblation sa nang 48 years shontis at bakit mahogany bongga.'">
                    </nctv-text>
                </div>
            </nctv-card>
        `,
    }),
};

export const CustomBackground: Story = {
    args: {
        shadowLevel: 5,
        backgroundColor: '#224d32',
    },
    render: (args) => ({
        props: args,
        template: `
            <nctv-card [shadowLevel]="shadowLevel" [backgroundColor]="backgroundColor">
                <div [style.margin-bottom.px]="'20'">
                    <nctv-text
                    [textColor]="'#fff'"
                    [textType]="'larger'"
                    [textContent]="'Hello World!'">
                    </nctv-text>
                </div>

                <div [style.margin-bottom.px]="'20'">
                    <nctv-text
                    [textColor]="'#fff'"
                    [textContent]="'Lorem ipsum keme keme keme 48 years chaka at bakit na ugmas mabaho nang kasi balaj sa na pranella jupang-pang shontis chapter jowabella at ang chaka at nang guash matod kasi nakakalurky na ang neuro na warla nang ugmas wasok nang shonget ang chapter , kemerloo ang shontis ng at ang intonses at nang wasok oblation sa nang 48 years shontis at bakit mahogany bongga.'"
                    [textType]="'paragraph'">
                    </nctv-text>
                </div>


                <nctv-button
                [label]="'Purchase'"
                [textColor]="'#fff'"
                [type]="'success'"
                ></nctv-button>
            </nctv-card>
        `,
    }),
};

export const CustomPaddings: Story = {
    args: {
        shadowLevel: 5,
        backgroundColor: '#fff',
    },
    render: (args) => ({
        props: args,
        template: `
            <nctv-card [shadowLevel]="shadowLevel" [backgroundColor]="backgroundColor" [sidePadding]="4">
                <div [style.margin-bottom.px]="'20'">
                    <nctv-text
                    [textType]="'larger'"
                    [textContent]="'Hello World!'">
                    </nctv-text>
                </div>

                <div>
                    <nctv-text
                    [textContent]="'Lorem ipsum keme keme keme 48 years chaka at bakit na ugmas mabaho nang kasi balaj sa na pranella jupang-pang shontis chapter jowabella at ang chaka at nang guash matod kasi nakakalurky na ang neuro na warla nang ugmas wasok nang shonget ang chapter , kemerloo ang shontis ng at ang intonses at nang wasok oblation sa nang 48 years shontis at bakit mahogany bongga.'"
                    [textType]="'paragraph'">
                    </nctv-text>
                </div>
            </nctv-card>
        `,
    }),
};

export const SpecificHeightCard: Story = {
    args: {
        shadowLevel: 1,
        backgroundColor: '#fff',
        cardWidth: 'auto',
        cardHeight: '200px',
    },
    render: (args) => ({
        props: args,
        template: `
            <nctv-card [shadowLevel]="shadowLevel" [backgroundColor]="backgroundColor" [cardWidth]="cardWidth" [cardHeight]="cardHeight">
                <div style="height: 100%; display: flex; align-items: center; justify-content: center;">
                    <nctv-text [textContent]="'This card is 200px tall'"></nctv-text>
                </div>
            </nctv-card>
        `,
    }),
};
