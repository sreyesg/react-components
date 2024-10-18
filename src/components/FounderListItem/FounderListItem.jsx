const  FounderListItem = ({name, title, credential}) => {
    console.log(name)
    return (
        <li>
            <h2>Hello I am {name} the {title}</h2>
            <p>{credential}</p>
        </li>
    )
}

export default FounderListItem