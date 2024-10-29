import React from 'react';
import './cases.scss';
interface Cases{
    id:string;
    click:(event: React.MouseEvent<HTMLDivElement>) => void;
    
}
const Cases :React.FC<Cases>= ({id,click}) => {
  return (
        <div className="da"  data-testid={id} onClick={click} id={id}></div>  
  )
}

export default Cases
