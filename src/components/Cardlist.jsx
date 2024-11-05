import Card from "./Card";
import { useEffect, useState } from "react";

function Cardlist(btn) {
const [coffeeList, steCoffeeList] = useState([]);

useEffect(() => {
    fetch('https://raw.githubusercontent.com/devchallenges-io/web-project-ideas/main/front-end-projects/data/simple-coffee-listing-data.json')
        .then(response => response.json())
        .then(data => steCoffeeList(data))
        .catch(error => console.error('Erro ao buscar dados:', error));
},[]);

const list = btn == 1 ? coffeeList : coffeeList.filter(coffee => coffee.available);

    return(
        <div className="grid xl:grid-cols-3 xl:gap-16 lg:grid-cols-2 lg:gap-10 sm:grid-cols-1">
            {coffeeList.map(coffee => (
                <Card key={coffee.id} coffee={coffee}></Card>
            ))}
        </div>
    );

};

export default Cardlist;