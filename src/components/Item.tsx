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
                    <h2>Task #{props.id}</h2>
                </section>
                <section>
                    <h2>{props.description}   item content as if it was important to be read or seen</h2>
                </section>
            </div>
        </>
    )
}

export default Item