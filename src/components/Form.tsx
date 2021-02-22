import React, {FormEventHandler, useState} from 'react';
import PropTypes from 'prop-types';
import '../index.css';

type FormElement = React.FormEvent<HTMLFormElement>;

interface IValor {
    valor: string,
    done: boolean
}



function Form (): JSX.Element {

    const [valor, setValor] = useState<string>('');
    const [valores, setvalores] = useState<IValor[]>([]);

    const handleSubmit = (e:FormElement) => {
        e.preventDefault();
        addValor(valor);
        console.log(valores);
        setValor('')            
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
                <input autoFocus type="text" value={valor} onChange={
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









