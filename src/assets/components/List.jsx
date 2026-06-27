import Item from "./Item";

export default function List({children}){
    return (
        <ul className="custom_list">
            {children}
        </ul>
    )
}

List.Item = Item;