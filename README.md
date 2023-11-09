# Checklist do react-redux

**Antes de começar**
- [ ] pensar como será o *formato* do seu estado global
- [ ] pensar quais actions serão necessárias na sua aplicação

**Instalação:**
- [ ] npm create vite@latest;
- [ ] npm install –save redux react-redux;
- [ ] npm install –save @redux-devtools/extension

**Criar dentro do diretório `src`:**
- [ ] diretório `redux`

**Criar dentro do diretório `redux`:**
- [ ] Diretório actions.
- [ ] Diretório reducers.
- [ ] Arquivo index.ts.

**Criar dentro do diretório `actions`:**
- [ ] arquivo `index.js`.

**Criar dentro do diretório `reducers`:**
- [ ] arquivo `index.js`.

**Criar dentro do arquivo `redux/index.ts`:**
- [ ] Importar o createStore.
- [ ] Configurar o Redux DevTools.
- [ ] Importar o rootReducer.
- [ ] Criar e exportar a store.

exemplo:

```js
import { legacy_createStore as createStore } from 'redux';
import { composeWithDevTools } from '@redux-devtools/extension';
import rootReducer from './reducers';

const store = createStore(rootReducer, composeWithDevTools());

export default store;
````

**Dentro do arquivo `redux/reducers/index.ts`:**
- [ ] Criar estado inicial.
- [ ] Criar função reducer com switch retornando apenas a opção default.
- [ ] Criar rootReducer usando o combineReducers.
- [ ] Exportar rootReducer.

Exemplo:

```js
Copiar
import { combineReducers } from 'redux';

type ActionType = {
  type: string,
};

const INITIAL_STATE = {};

const exampleReducer = (state = INITIAL_STATE, action: ActionType) => {
  switch (action.type) {
    default:
      return state;
  }
};

const rootReducer = combineReducers({ exampleReducer });

export default rootReducer;
```


**No arquivo `./src/main.tsx`**
- [ ] Importar a store.
- [ ] Importar o Provider para fornecer os estados a todos os componentes encapsulados pelo <App />.

Exemplo:
```js
// Na importação
import { Provider } from 'react-redux';
import store from './redux'
```
```js
// No render
 <Provider store={ store } >
   <App />
 </Provider>
```

**No arquivo `redux/actions/index.ts:`**
- [ ] Criar e exportar os actionTypes.
Exemplo:

```js
// ACTIONS TYPES
export const ADD_EMAIL = 'ADD_EMAIL';
```

 - [ ] Criar e export os actions creators necessários.
Exemplo:

```js
// ACTIONS CREATORS
export const addEmail = (email) => ({
  type: ADD_EMAIL,
  email,
})

```

Nos `reducers`:
- [ ] Criar os casos para cada action criada, retornando o devido estado atualizado.
Nos componentes que irão ler o estado:
- [ ] Importar o hook useSelector da biblioteca react-redux.
Exemplo:

```js
// No import
import { useSelector } from 'react-redux';
```

```js
// No componente
const rootState = useSelector((state: RootState) => state);
```

**Nos componentes que modificarão o estado:**
- [ ] Importar o hook useDispatch da biblioteca react-redux.
Exemplo:

```js
// No import
import { useDispatch } from 'react-redux';
```

```js
// No componente
const dispatch = useDispatch();
```
