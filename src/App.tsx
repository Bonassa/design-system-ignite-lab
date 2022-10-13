
import { useState } from 'react';

import './styles/global.css';
import Logo from './Logo';
import { Heading } from './components/Heading';
import { Text } from './components/Text';
import { TextInput } from './components/TextInput';

import { Envelope, Lock } from 'phosphor-react';
import { CheckBox } from './components/CheckBox';
import { Button } from './components/Button';

export function App() {
  const [checked, setChecked] = useState<boolean>(false);

  return (
    <div className='w-screen h-screen bg-gray-900 flex flex-col items-center justify-center'>
      <div className='w-[420px]'>
        <div className='flex flex-col items-center'>
          <Logo />
          <Heading size='lg'>
            Ignite Lab
          </Heading>
          <Text size='lg' className='text-gray-500'>
            Faça login e comece a usar!
          </Text>
        </div>

        <form className='py-10 flex flex-col gap-4'>
          <div className='flex flex-col gap-3'>
            <Text className='font-semibold'>Endereço de e-mail</Text>

            <TextInput.Root>
              <TextInput.Icon>
                <Envelope />
              </TextInput.Icon>
              <TextInput.Input placeholder='Digite o seu e-mail' />
            </TextInput.Root>
          </div>

          <div className='flex flex-col gap-3'>
            <Text className='font-semibold'>Sua senha</Text>

            <TextInput.Root>
              <TextInput.Icon>
                <Lock />
              </TextInput.Icon>
              <TextInput.Input placeholder='***************' />
            </TextInput.Root>
          </div>

          <CheckBox label='Lembrar de mim por 30 dias' checked={checked} onCheckedChange={setChecked} />

          <Button className='mt-8'>
            Entrar na plataforma
          </Button>
        </form>

        <div className='flex flex-col items-center gap-4'>
          <Text asChild size='sm' className='text-gray-500 cursor-pointer underline'>
            <a>Esqueceu sua senha?</a>
          </Text>
          <div className='flex flex-row gap-1'>
            <Text asChild size='sm' className='text-gray-500'>
              <label>Não possui uma conta?</label>
            </Text>
            <Text asChild size='sm' className='text-cyan-600 underline cursor-pointer'>
              <a>Crie uma agora!</a>
            </Text>
          </div>
        </div>
      </div>
    </div>
  )
}