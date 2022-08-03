import { ComponentStory, ComponentMeta } from '@storybook/react';

import Card from '@/components/Card';

export default {
  title: 'Card',
  component: Card,
} as ComponentMeta<typeof Card>;

const Template: ComponentStory<typeof Card> = args => <Card {...args} />;

//👇 Each story then reuses that template
export const Primary = Template.bind({});
Primary.args = { content: 'Button', msg: 'Primary' };

export const Secondary = Template.bind({});
Secondary.args = { ...Primary.args, msg: 'Secondary' };

export const Tertiary = Template.bind({});
Tertiary.args = { ...Primary.args, msg: 'Tertiary' };
