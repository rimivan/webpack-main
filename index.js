/* import { helloOne } from './src/js/script_1.js'; DINAMICALLY IMPORTED */
import { helloThree } from './src/js/script_3.js'; /* NORMALLY IMPORTED */
import * as React from 'react';
import ReactDOM from 'react-dom';
import ExamplePage from './src/react-components/ExampleContainer';

const scriptOneHook = document.querySelector("#script-anchor");
const scriptTwoHook = document.querySelector("#script-anchor-two");

const callScriptOne = async () => {
    console.log("Async call script#1!");
    const moduleOne = await import(/* webpackChunkName: "script_1" */ './src/js/script_1');
    moduleOne.helloOne();
}

const callScriptTwo = async () => {
    console.log("Async call script#2!");
    const moduleTwo = await import(/* webpackChunkName: "script_2" */ './src/js/script_2');
    moduleTwo.helloTwo();
}

if(scriptOneHook){
    console.log("Hook script #1 found!");
    callScriptOne();
} else{
    console.error("Hook script #1 NOT found!");
}

if(scriptTwoHook){
    console.log("Hook script #2 found!");
    callScriptTwo();
} else{
    console.error("Hook script #2 NOT found!");
}


helloThree();
console.log('Last HELLO - Webpack Starter[from index.js]');

/* START REACT */
ReactDOM.render(ExamplePage(), document.getElementById('example-react-container'));
/* END REACT */