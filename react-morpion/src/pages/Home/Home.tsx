import React from 'react'
import Cases from '../../components/cases/Cases'
import './home.scss'
const Home :React.FC= () => {
    const divs = document.querySelectorAll('.da');
let joueurO : number=0;
let joueurX: number=0;
const  check =(ca:string)=> {
    const a  = document.getElementById('a')!.innerHTML  ;
    const b  = document.getElementById('b')!.innerHTML ;
    const c  = document.getElementById('c')!.innerHTML ;
    const d  = document.getElementById('d')!.innerHTML  ;
    const e  = document.getElementById('e')!.innerHTML ;
    const f  = document.getElementById('f')!.innerHTML ;
    const g  = document.getElementById('g')!.innerHTML  ;
    const h  = document.getElementById('h')!.innerHTML  ;
    const i  = document.getElementById('i')!.innerHTML ;

    if((a== ca && b== ca && c== ca) || 
    (d== ca && e== ca && f== ca)||
    (g== ca && h== ca && i == ca)||
    (a== ca && e== ca && i== ca)||
    (c== ca && e== ca && g==ca)||

    (a== ca && d== ca && g==ca)||
    (b== ca && e== ca && h==ca)||
    (c== ca && f== ca && i==ca)){
        alert("le joueur "+ jr +"a gagner ")
        divs.forEach(div => {
            div.innerHTML=""
        })
        if(jr =="X"){
            joueurX +=1;
        }else{
            joueurO +=1;
        }
        document.getElementById('scoreX')!.innerHTML =`${joueurX }`;
        document.getElementById('scoreO')!.innerHTML =`${joueurO }`;
    }
}


let jr = "X" ;
const handleClick = (event: React.MouseEvent<HTMLDivElement>)=>{  
    const target = event.target as HTMLDivElement; 
    target.innerHTML = jr;
    check(jr)
    if(target.innerHTML=="X"){
        jr  = "O"
    }else{
        jr="X"
    }
}
  return (
    <div className="container">
    <Cases click={handleClick} id="a"/>
    <Cases click={handleClick} id="b"/>
    <Cases click={handleClick} id="c"/>
    <Cases click={handleClick} id="d"/>
    <Cases click={handleClick} id="e"/>
    <Cases click={handleClick} id="f"/>
    <Cases click={handleClick} id="g"/>
    <Cases click={handleClick} id="h"/>
    <Cases click={handleClick} id="i"/>
    Nombre de victoire de O<div id="scoreO"> </div>
    Nombre de victoire de X<div id="scoreX"> </div>
    </div>
  )
}

export default Home
