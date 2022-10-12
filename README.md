# Design System com React + Storybook

## Ferramentas utilizadas
- `React JS`
- [Vite](https://vitejs.dev/)
- `Typescript`
- [Storybook](https://storybook.js.org/docs/react/get-started/install)
- `Tailwind`
- [Radix UI](https://www.radix-ui.com/)
- `Figma`

## Protótipo
A prototipação deste design system foi feita no figma e está disponível no [clicando aqui](https://www.figma.com/file/vVms0ZskRIU6yfCfIvKKF1/Ignite-Lab-Design-System)

## Criação do projeto & Instalação das bibliotecas

1. *Criação do projeto*
Este projeto React foi criado utilizando o Vite.
``` bash
  npm create vite@latest

  react
  typescript
```

2. *Tailwind*
Para configuração do tailwind no projeto [clique aqui](https://tailwindcss.com/docs/guides/vite):
```
  npm install -D tailwindcss postcss autoprefixer

  npx tailwindcss init -p
```

Para utilizar a aplicação condicional de classes Tailwind, iremos utilizar a bib [CLSX](https://www.npmjs.com/package/clsx)
``` bash
  npm install --save clsx
```

3. *Storybook*
Storybook é uma ferramenta para criar documentação de componentes, e possibilita a criação de componentes de maneira isolada.
``` bash
  npx sb init --builder @storybook/builder-vite --use-npm
```

Para rodar o Storybook:
```
  npm run storybook
```

4. *Radix UI*
Radix é uma biblioteca de componentes primitivos não estilizados, que auxilia na criação de componentes personalizados.
Iremos utilizar o primitive `Slot` para possibilitar polimorfismo do component, permitindo selecionar qual tag será utilizada.
``` bash
  npm install @radix-ui/react-slot
```

### Configuração do Tailwind
Para substituir algumas propriedades padrões do Tailwind, usamos o seguinte código.
```cjs title=tailwind.config.cjs
  /** @type {import('tailwindcss').Config} */
  module.exports = {
    content: [
      './src/**/*.tsx',
    ],
    theme: {
      colors: {
        'black': '#000000',

        'gray-900': '#121214',
        'gray-800': '#202024',
        'gray-500': '#7C7C8A',
        'gray-300': '#CACACC',
        'gray-100': '#E1E1E6',

        'cyan-600': '#50C9EA',
        'cyan-500': '#61DAFB',
        'cyan-400': '#72EBFC',
      },
      fontSize: {
        xs: 14,
        sm: 16,
        md: 18,
        lg: 20,
        xl: 24,
        '2xl': 32
      },

      extend: {
        fontFamily: {
          sans: 'Inter, sans-serif'
        }
      },
    },
    plugins: [],
  }
```