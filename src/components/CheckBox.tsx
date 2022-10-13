
import * as Checkbox from '@radix-ui/react-checkbox';
import { Check } from 'phosphor-react'
import { Text } from './Text';

export interface CheckBoxProps {
  checked: boolean;
  onCheckedChange: (checked: boolean) => void;
  label: string;
}

export function CheckBox({ checked = false, label, onCheckedChange } : CheckBoxProps){
  return(
    <div className='flex flex-row items-center gap-2'>
      <Checkbox.Root 
        checked={checked}
        onCheckedChange={onCheckedChange}
        className='flex items-center justify-center h-6 w-6 rounded bg-gray-800'
      >
        <Checkbox.Indicator>
          <Check weight='bold' size={20} className='text-cyan-500' />
        </Checkbox.Indicator>
      </Checkbox.Root>
      <Text asChild size='sm'>
        <label>
          { label }
        </label>
      </Text>
    </div>
  )
}