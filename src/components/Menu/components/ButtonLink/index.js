import React from 'react';

function Buttonlink(props)
{
    // props => { ClassName: "o q alguem passar", href: "/" }
    console.log(props);
    return (
        <a href={props.href} className={props.className}> 
            {props.children}
        </a>
    );
}

export default Buttonlink;