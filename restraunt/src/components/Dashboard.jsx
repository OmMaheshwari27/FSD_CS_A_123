import React, { useEffect, useState } from 'react'

const Dashboard = () => {
    const [recipes, setrecipes] = useState([]);
    const [loading, setloading] = useState(true);
    const [error , seterror]=useState();
    useEffect(() => {
        const url = "https://dummyjson.com/recipes";
        const response = fetch(url);
        response.then((response) => response.json())
            .then((data) => {
                console.log(data.recipes);
                setrecipes(data.recipes);
                setloading(false);
            })
            .catch((err) => {
                console.log("network error", err);
                setloading(false);
                seterror(err.message);
    
            })
    },[])
        
    return (
        <div>
            {loading && <p>loading.......</p>}
            {error && <p>{error}</p>}
            {!loading && !error && (
                <div>
                    <h1>Restraunt menu</h1>
                    <table>
                        <tr>
                            <th>&nbsp;</th>
                            <th>recipe nAME</th>
                            <th>cusine</th>
                            <th>rating</th>
                            <th>price</th>
                            <th>action</th>
                        </tr>
                    </table>
                    {
                        recipes.map((r) => (
                            <tr>
                        <td><img src={r.image} height="70px" weight="120px" alt='loading' /></td>
                                <td>{r.name}</td>
                                <td>{r.cuisine}</td>
                                <td>{r.rating}</td>
                                <td>   &nbsp; $120</td>
                                <td><button>add to cart</button></td>
                            </tr>
                        ))
                    }
                </div>

            )}


        </div>
    )
}

export default Dashboard
