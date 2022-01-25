import { memo } from "react";

// Senza memo()
// const ListItem = ({ data }) => {
//     return (
//         <ul>
//             {data.map(item => (
//                 <img src={item.img} alt={item.img} key={item.img} />
//             ))}
//         </ul>
//     )
// }

const ListItem = memo(({ data }) => {
    return (
        <ul>
            {data.map(item => (
                <img src={item.img} alt={item.img} key={item.img} />
            ))}
        </ul>
    )
})

export default ListItem;

// OPPURE => export default memo(ListItem);
// quindi senza wrappare il componente