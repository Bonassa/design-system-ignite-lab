
import { Meta, StoryObj } from '@storybook/react';
import { CheckBox, CheckBoxProps } from './CheckBox';

export default {
  title: 'Components/CheckBox',
  component: CheckBox,
  args: {
    checked: true,
    label: 'Checkbox component'
  },
  argTypes: {}
} as Meta<CheckBoxProps>

export const Default: StoryObj<CheckBoxProps> = {}