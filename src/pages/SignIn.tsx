
import { useState, FormEvent } from "react";
import axios from "axios";

import { Envelope, Lock } from "phosphor-react";
import { CheckedState } from "@radix-ui/react-checkbox";
import { Button } from "../components/Button";
import { CheckBox } from "../components/CheckBox";
import { Heading } from "../components/Heading";
import { TextInput } from "../components/TextInput";
import { Text } from "../components/Text";

import Logo from "../Logo";

export function SignIn(){
  const [checked, setChecked] = useState<CheckedState>(false);
  const [isUserSignIn, setIsUserSignIn] = useState(false);

  function handleSubmitForm(event: FormEvent){
    event.preventDefault();

    axios.post('/sessions', {
      email: 'renanemanoel07@gmail.com',
      password: '123456'
    })

    setIsUserSignIn(true);
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
          {isUserSignIn && (
            <Text>Usuário logado</Text>
          )}
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
  );
}