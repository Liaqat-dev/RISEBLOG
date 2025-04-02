import {FaSearch} from "react-icons/fa";
import {IoClose} from "react-icons/io5";

// import {useSearch} from "../../context/useSearch.ts";
import {useState} from "react";


function SearchForm() {
    const [query, setQuery] = useState("");
    // const { handleSearch, resetSearch} = useSearch();
    // const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    //     e.preventDefault();
    //     if (!query.trim())
    //         return;
    //     handleSearch(query);
    // }
    const handleReset = () => {
        console.log('handleReset');
        // resetSearch();
        setQuery('')
    }

    return <form className={'relative flex items-center w-fit '}
        // onSubmit={handleSubmit}
    >
        <input className={'bg-white outline-none border-2 border-blue-600 rounded-3xl px-3 py-1'} placeholder={'Search here...'}
               value={query}
               onChange={(e) => {
                   setQuery(e.target.value);
                   // setTimeout(()=>{handleSearch(query)},100);
               }}/>

        <div className={'absolute  right-3 w-fit '}>{
            query.trim() ?
                <IoClose className={'text-secondary  cursor-pointer hover:scale-110'} onClick={() => handleReset()}/>
                : <FaSearch className={'text-secondary cursor-pointer hover:scale-110'} onClick={() => handleReset()}/>}</div>
    </form>
}

export default SearchForm;