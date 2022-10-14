
import * as Checkbox from '@radix-ui/react-checkbox';
import { Check } from 'phosphor-react'

export interface CheckBoxProps extends Checkbox.CheckboxProps {}

export function CheckBox(props : CheckBoxProps){
  return(
    <Checkbox.Root 
      {...props}
      className='flex items-center justify-center h-6 w-6 rounded bg-gray-800'
    >
      <Checkbox.Indicator>
        <Check weight='bold' size={20} className='text-cyan-500' />
      </Checkbox.Indicator>
    </Checkbox.Root>
  )
}