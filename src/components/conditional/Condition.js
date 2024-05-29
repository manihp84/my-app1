import React from "react";
// function Item({name, isPacked}) {
//     return <li className="item">
//         {isPacked ? (<p>loader ki html✓</p>) : (<p>page ki html show✕</p>)}
//     </li>
// }
function Item ({name, isPacked}){
    if (isPacked){
        return <li className="Item">{name}✓</li>
    }
    else{
        return <div>✕</div>;
    }
}

export default function PackingList() {
    return (
        <section>
            <h1>sally ride Packing list</h1>
            <ul>
                <Item 
                    isPacked={true}
                    name="sapce suit"
                />
                <Item isPacked={true}
                    name="helmet with golden leaf"
                />
                <Item isPacked={true}
                    name="photo of tam"
                />
                <Item isPacked={true}
                    name="sapce suit"
                />
                <Item isPacked={false}
                    name="photo of rocky"
                />
            </ul>
        </section>
    );
}
