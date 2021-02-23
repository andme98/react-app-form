import React, {FormEventHandler, useState, useRef} from 'react';
import PropTypes from 'prop-types';
import '../index.css';
import db from '../firebase/config';
import { isTemplateTail } from 'typescript';

type FormElement = React.FormEvent<HTMLFormElement>;

interface IValor {
    valor: string,
    done: boolean
}

const subirData =()=>{

}

function Form (): JSX.Element {

    const [valor, setValor] = useState<string>('');
    const [valores, setvalores] = useState<IValor[]>([]);
    const valorInput = useRef<HTMLInputElement>(null);

    const handleSubmit = (e:FormElement) => {
        e.preventDefault();
        addValor(valor);
        console.log(valores);
        setValor('');
        valorInput.current?.focus();   
        const temp = {
            valor: valor,
        }
        db.collection('valores').add(temp);

        
    }

    const addValor = (valor: string) => {
        const actualValores: IValor[] = [...valores, {valor:valor,done:true}]
        setvalores(actualValores)
    }

    const markValor = (i:number) => {
        const allValores = [...valores];
        allValores[i].done = !allValores[i].done;
        setvalores(allValores); 
    }

    const deleteValor = (i:number) => {
        const allValores = [...valores];
        allValores.splice(i,1);
        setvalores(allValores);
    }

    return(
        <>
            <form onSubmit={handleSubmit}>
                <input ref={valorInput} autoFocus type="text" value={valor} onChange={
                        (e) => {
                            //console.log(e.target.value)
                            setValor(e.target.value)
                        }
                }/>
                <h3>{valor}</h3>
                <button>Guardar</button>
            </form>
            {
                valores.map((v:IValor, i:number) =>{
                    return (
                        <div key={i}>
                            <h2 style={{textDecoration:!v.done? 'line-through':''}} key={i}>{v.valor}</h2>   
                            <button onClick={
                                () => {
                                    markValor(i);
                                }
                            }>{v.done?'✓':'✖'}</button>                                  
                            <button onClick={
                                () => {
                                    deleteValor(i);
                                }
                            }>🗑</button>                                                            
                        </div>
                            
                        
                    )    
                })
            }

            
        </>
    );
}



export default Form; 









