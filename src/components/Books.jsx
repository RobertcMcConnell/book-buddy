import { useParams } from "react-router-dom"
import { Link } from "react-router-dom"

const Books = ({books}) => {
    //const params = useParams()
    //const id = params.id*1
    
    //console.log(books)
    return(
        <div>

            <h1>Books #{books.length}</h1>
            
            <ul>
               {
                books.map((books)=> {
                    return(
                        <li key={books.id}>
                             <Link to={`/books/${books.id}`}>{books.title}</Link>
                        </li>
                    )
                })
                }
            </ul>
        
        </div>
    )
}

export default Books