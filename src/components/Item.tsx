import '../App.css'

export type Task = {
    id: number;
    description: string;
}

function Item(props: Task) {

    return (
        <>
            <div className='itemBoxContent'>
                <section>
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