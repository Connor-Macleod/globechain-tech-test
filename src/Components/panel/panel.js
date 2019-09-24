import React from 'react';


export default function Panel(props) {
    const {title, children, footer} = props;

    return (
        <div className="panel">
            {
                title&&(<div><h1>{  title }</h1></div>)
            }
            {
                children&&(<div>{ children }</div>)
            }
            {
                footer&&(<div>{ footer }</div>)
            }

        </div>
    )
}