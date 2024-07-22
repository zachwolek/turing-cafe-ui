import './Card.css'

export const Card = ({date, id, name, number, time}) => {
    return(
        <div className='card' id={id} key={id}>
            <h2>{date}</h2>
            <p>{name}</p>
            <p>{number}</p>
            <p>{time}</p>
        </div>
    )
}