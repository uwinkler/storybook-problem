import { ComponentMeta, ComponentStory } from '@storybook/react'
import React from 'react'
import { MyButton } from './Button'

export default {
  title: 'Example/Button',
  component: MyButton,
  argTypes: {
    backgroundColor: { control: 'color' }
  }
} as ComponentMeta<typeof MyButton>

const Template: ComponentStory<typeof MyButton> = (args) => <MyButton />

export const Primary = Template.bind({})
Primary.args = {
  primary: true,
  label: 'Button'
}
