function Desserts (props) {
    const listItems = props.data.map(dessert =>{
    const itemText = `${dessert.title} - ${dessert.price}`
    return <li key={dessert.id}>{itemText}</li>; 
      });   

    return listItems;
}

export default Desserts;