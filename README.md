# Design System com React + Storybook

## Ferramentas utilizadas
- `React JS`
- [`Vite`](https://vitejs.dev/)
- `Typescript`
- [`Storybook`](https://storybook.js.org/docs/react/get-started/install)
- `Tailwind`
- [`Radix UI`](https://www.radix-ui.com/)
- `Figma`

## Patterns
- Composite Pattern

## Artefatos
- A prototipação deste design system foi feita no figma e está disponível no [clicando aqui](https://www.figma.com/file/vVms0ZskRIU6yfCfIvKKF1/Ignite-Lab-Design-System)

- Para acessar a documentação dos componentes criada utilizando Storybook, [clique aqui](https://bonassa.github.io/design-system-ignite-lab/)

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
``` bash
  npm run storybook
```

- Instalando Addon de Acessibilidade
```
  npm install @storybook/addon-a11y
```

4. *Radix UI*
Radix é uma biblioteca de componentes primitivos não estilizados, que auxilia na criação de componentes personalizados.
Iremos utilizar o primitive `Slot` para possibilitar polimorfismo do component, permitindo selecionar qual tag será utilizada.

Também utilizaremos o componente de `Checkbox` do Radix.
``` bash
  npm install @radix-ui/react-slot

  npm install @radix-ui/react-checkbox
```

5. *Phosphor Icons*
Biblioteca de icones para o react
``` bash
  npm install --save phosphor-react
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

## Transformação de um SVG em um componente React
Usando o site [`transform.tools`](https://transform.tools/) é possível copiar o logo SVG do React lá do Figma, e transformar em um componente React para utilizar na interface

## Execução do projeto
1. Instalação das dependências
``` bash
  npm install

  #ou

  yarn install
```

2. Execução em modo de desenvolvimento
``` bash
  npm run dev
```

## Deploy da documentação no GitHub Pages
1. Instalação do Storybook deployer
``` bash
  npm i @storybook/storybook-deployer --save-dev
```

2. Gerar o build do storybook
``` bash
  npm run build-storybook
```

3. Criar o arquivo `deploy-docs.yml` dentro da página `.github/workflows`
```yml
  name: Deploy Storybook

on:
  push:
    branches:
      - main

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest

    steps:
      - name: Checkout
        uses: actions/checkout@v3

      - name: Setup Node.js
        uses: actions/setup-node@v3
        with:
          node-version: 16

      - name: Install dependencies
        run: npm ci --legacy-peer-deps

      - name: Build Storybook
        run: npm run build-storybook

      - name: Deploy Storybook
        run: npm run deploy-storybook -- --ci --existing-output-dir=storybook-static
        env:
          GH_TOKEN: ${{ github.actor }}:${{ secrets.GITHUB_TOKEN }}
```

4. Adicionar as mudanças ao repositório do GitHub.