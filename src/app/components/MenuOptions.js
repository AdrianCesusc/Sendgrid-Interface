
'use client'

import { useState } from 'react';

export default function MenuOptions(props) {


return(
    <div>
        <div  className="flex itens-center gap-3 mt-6 hover:shadow-md  shadow-blue-500" >
             <div>{props.Icon}</div>   
             <span className="text-sm text-zinc-500 mt-1 houver:text-shadow-xl ">{props.texto}</span>
             <span className= "mt-1 m text-zinc-400 ">{props.arrow}</span> 
        </div>       
    </div>
   )
}