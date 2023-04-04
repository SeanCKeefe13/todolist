import React from "react";



export default function List(props){
    const [list, setList] = React.useState([])
    const [inputValue, setInputValue] = React.useState('')

    function addListItem(e) {
        e.preventDefault()
        const newListItem = {
            key: list.length,
            id: list.length +1,
            value: inputValue,
        }
        setList(prevList => {
            return [newListItem, ...prevList]
        })
        setInputValue('')
      }

      function removeListItem(itemToRemove) {
        setList(prevList => {
          return prevList.filter(item => item.id !== itemToRemove.id)
        })
      }

      const listItems = list.map(item =>{
        return(
            <div className="listItem">
                {item.value}
                <div className="listItemButtons">
                    <button className="deleteListItemButton" onClick={()=> removeListItem(item)}>
                        <i class="bi bi-file-excel"></i>
                    </button>
                    <button className="completeListItemButton" onClick={()=> removeListItem(item)}>
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
                    <button className="listItemSubmitButton" onClick={addListItem}>+</button>
                </form>
                {listItems}
        </div>
    )
}