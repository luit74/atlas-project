export const SearchField = ({search , setSearch , filter , setFilter , countries , setCountries}) =>{

    const handleInputChange = (e) =>{
        e.preventDefault();
        setSearch(e.target.value)
    }

    const handleSelectChange = (e) =>{
        e.preventDefault();
        setFilter(e.target.value)
    }

    const sortCountries = (value) =>{
        const sortCountry = [... countries].sort((a,b)=>{
            return value === 'asc' 
            ? a.name.common.localeCompare(b.name.common)
            : b.name.common.localeCompare(a.name.common);
        });
        setCountries(sortCountry)
    }

    return <section className="section-searchFilter container">
        <input type="text" placeholder="search" value={search} onChange={handleInputChange} />
        <button onClick={()=>sortCountries("asc")} >Asc</button>
        <button onClick={()=>sortCountries("des")} >Desc</button>
        <div>
            <select className="select-section" value={filter} onChange={handleSelectChange}>
                <option value="all">All</option>
                <option value="Africa">Africa</option>
                <option value="America">America</option>
                <option value="Europe">Europe</option>
                <option value="Asia">Asia</option>
            </select>
        </div>
    </section>
}