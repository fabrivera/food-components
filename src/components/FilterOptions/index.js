export default function FilterOptions(props) {
    const {listDisplay, setListDisplay} = props.list

    const handleClick = () => {
        if (listDisplay === "food-list-card") {
            setListDisplay('food-list-card-sm')
        } else {
            setListDisplay('food-list-card')
        }
    }

    return <div className="filter-options">
        <button onClick={handleClick}>Cambiar</button>
    </div>
}