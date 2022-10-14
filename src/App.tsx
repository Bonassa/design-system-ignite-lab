
import { FormEvent, useState } from 'react';

import './styles/global.css';
import Logo from './Logo';
import { Heading } from './components/Heading';
import { Text } from './components/Text';
import { TextInput } from './components/TextInput';

import { Envelope, Lock } from 'phosphor-react';
import { CheckBox } from './components/CheckBox';
import { Button } from './components/Button';

import { CheckedState } from '@radix-ui/react-checkbox';

export function App() {
  const [checked, setChecked] = useState<CheckedState>(false);

  function handleSubmitForm(event: FormEvent<HTMLFormElement>){
    event.preventDefault();
  }

  return (
    <div className='w-screen h-screen bg-gray-900 flex flex-col items-center justify-center'>
      <div className='w-[420px]'>
        <header className='flex flex-col items-center'>
          <Logo />
          <Heading size='lg'>
            Ignite Lab
          </Heading>
          <Text size='lg' className='text-gray-500'>
            Faça login e comece a usar!
          </Text>
        </header>

        <form className='py-10 flex flex-col gap-4' onSubmit={handleSubmitForm}>
          <label htmlFor='email' className='flex flex-col gap-3'>
            <Text className='font-semibold'>Endereço de e-mail</Text>

            <TextInput.Root>
              <TextInput.Icon>
                <Envelope />
              </TextInput.Icon>
              <TextInput.Input id='email' type='email' placeholder='Digite o seu e-mail' />
            </TextInput.Root>
          </label>

          <label htmlFor='password' className='flex flex-col gap-3'>
            <Text className='font-semibold'>Sua senha</Text>

            <TextInput.Root>
              <TextInput.Icon>
                <Lock />
              </TextInput.Icon>
              <TextInput.Input id='password' type='password' placeholder='***************' />
            </TextInput.Root>
          </label>

          <label htmlFor='remember' className='flex flex-row items-center gap-2'>
            <CheckBox id='remember' defaultChecked={false} checked={checked} onCheckedChange={(value) => setChecked(value)} />
            <Text size='sm' className='text-gray-300'>Lembrar de mim por 30 dias</Text>
          </label>

          <Button className='mt-8' type='submit'>
            Entrar na plataforma
          </Button>
        </form>

        <footer className='flex flex-col items-center gap-4'>
          <Text asChild size='sm' className='!text-gray-500 cursor-pointer underline hover:!text-gray-100 transition-colors duration-200'>
            <a>Esqueceu sua senha?</a>
          </Text>
          <Text asChild size='sm' className='flex flex-row gap-1 !text-gray-500'>
            <label>
              Não possui uma conta? 
              <a className='underline cursor-pointer text-cyan-600 hover:text-cyan-400 transition-colors duration-200'>Crie uma agora!</a> 
            </label>
          </Text>
        </footer>
      </div>
    </div>
  )
}