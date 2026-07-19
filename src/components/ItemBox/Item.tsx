import './ItemBar.css'
import ItemBar from './ItemBar';

export type Task = {
    id: number;
    description: string;
    done: boolean;
}

interface ItemProps {
    id: number;
    description: string;
    done: boolean;
    onDelete: (id: number) => void;
}

function Item(props: ItemProps) {

    return (
        <>
            <div className='itemBoxContent'>
                <section>

                    <ItemBar
                    id={props.id}
                    done={props.done}
                    description={props.description}
                    onDelete={props.onDelete}/>
                    
                    <h2>Task #{props.id + 1}</h2>
                </section>
                <section>
                    <h2>{props.description}</h2>
                </section>
            </div>
        </>
    )
}

export default Item