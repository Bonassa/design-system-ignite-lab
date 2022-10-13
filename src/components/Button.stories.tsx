
import { Meta, StoryObj } from '@storybook/react';
import { Button, ButtonProps } from './Button';

export default {
  title: 'Components/Button',
  component: Button,
  args: {
    children: 'Create account',
  },
  argTypes: {
    asChild: {
      table: {
        disable: true
      }
    }
  }
} as Meta<ButtonProps>

export const Default: StoryObj<ButtonProps> = {}

export const WithAnchor: StoryObj<ButtonProps> = {
  args: {
    children: (
      <a>Go to Shop</a>
    ),
    asChild: true
  },
  argTypes: {
    children: {
      table: {
        disable: true
      }
    },
    asChild: {
      table: {
        disable: true
      }
    }
  }
}