import React from "react";



export default function List(props){
    const {group, onAddListItem, onRemoveListItem} = props
    const [inputValue, setInputValue] = React.useState('')

    function handleAddListItem(){
        onAddListItem(group, inputValue);
        setInputValue('')
    }
    
      const listItems = group.list.map(item =>{
        return(
            <div className="listItem">
                {item.value}
                <div className="listItemButtons">
                    <button className="deleteListItemButton" onClick={()=> onRemoveListItem(group, item)}>
                        <i class="bi bi-file-excel"></i>
                    </button>
                    <button className="completeListItemButton" onClick={()=> onRemoveListItem(group, item)}>
                        <i class="bi bi-check-circle"></i>
                    </button>
                </div>
            </div>
        )
      })

    return (
        <div className="listContainer">
                <form action="">
                    <input 
                    className="listInput"
                        value={inputValue}
                        onChange={(e)=>{
                            setInputValue(e.currentTarget.value)
                        }} 
                        type="text" 
                    />
                    <button className="listItemSubmitButton" onClick={handleAddListItem}>+</button>
                </form>
                {listItems}
        </div>
    )
}