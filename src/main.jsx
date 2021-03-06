import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { MainApp } from './09-useContext/MainApp';
// import { CallbackHooks } from './06-memos/CallbackHooks';
// import { CounterApp } from './01-useState/CounterApp';
// import { CounterWithCustomHook } from './01-useState/CounterWithCustomHook';
// import { FocusScreen } from './04-useRef/FocusScreen';
// import { FormaSimple } from './02-useEffect/FormaSimple';
// import { FormWithCustomHook } from './02-useEffect/FormWithCustomHook';
// import { HooksApp } from './HooksApp';
// import { Layout } from './05-useLayoutEffect/Layout';
// import { MemoHook } from './06-memos/MemoHook';
// import { Memorize } from './06-memos/Memorize';
// import { MultipleCustomHook } from './03-examples/MultipleCustomHook';
// import { Padre } from './07-tarea-memo/07-tarea-memo/Padre';
// import { SimpleForm } from './02-useEffect/simpleForm';
// import './08-useReducer/intro-reducer'
// import { TodoApp } from './08-useReducer/TodoApp';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
  <BrowserRouter>
    <MainApp />
  </BrowserRouter>
  // </React.StrictMode>
);
