
function ItemBar() {
    return (
        <>
        <div className="itemBarBox">
            <section className="header">
                <div>
                    <input type="checkbox" className="checkbox"/>
                    <label htmlFor="">Already Done</label>
                </div>
                <div>
                    <button>Edit</button>
                    <button>Delete</button>
                </div>
            </section>
            
        </div>
        </>
    )
}

export default ItemBar