import React, {useState} from 'react'



const SearchForm = ({searchText}) => {
    const [text,setText]  = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()

        searchText(text); 
    }
    return (
        <div >
            <form onSubmit = {handleSubmit}  >
                <input type="text" 
                className="py-2 px-6 rounded-l-lg outline-none" 
                placeholder="Search for News"
                onChange ={(e)=> setText(e.target.value)} 
                />
                <button type="submit" className="bg-red-400 py-2 px-4 text-white rounded-r-lg"> Submit</button>
            </form>
            
        </div>
    )
}

export default SearchForm
