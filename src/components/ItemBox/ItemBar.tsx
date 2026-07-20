
interface ItemProps {
    id: number;
    description: string;
    done: boolean;
    onDelete: (id: number) => void;
    onEdit: (id: number) => void;
}

function ItemBar(props: ItemProps) {
    return (
        <>
        <div className="itemBarBox">
            <section className="header">
                <div>
                    <input type="checkbox" className="checkbox"/>
                    <label htmlFor="">Already Done</label>
                </div>
                <div>
                    <button onClick={
                        () => {props.onEdit(props.id)}
                    }>Edit</button>
                    <button onClick={
                        () => {props.onDelete(props.id)}
                        }>Delete</button>
                </div>
            </section>
            
        </div>
        </>
    )
}

export default ItemBar