import { useParams, Link } from "react-router-dom"

const singleBook = ({books}) => {
    const params = useParams()
    const id = params.id*1
    
    const book = books.find((book) => {
        return book.id === id

        
    })
    if(!book){
        return null
    }

    return (
        <div className="singlebook">
            <h1>{book.title}</h1>
            <hr />
            <h2>{book.author}</h2>
            <hr />
            <h2>{book.available}</h2>
            <Link to='/books'>
                Back to all books
            </Link>
            </div>
    )
}
export default singleBook