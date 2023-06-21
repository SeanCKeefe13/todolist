import React from "react"
import List from "./List"

export default function Groups(props) {

    function addListItem(group, inputValue) {
        const newListItem = {
            value: inputValue,
        }
        props.onAddListItem(group, newListItem)
    }

    function handleChangeTitle(e, group) {
        const value = e.currentTarget.value
        props.onChangeTitle(group, value)
    }

    function onKeyDown(e) {
        if (e.key === "Enter" || e.key === "Escape") {
            e.preventDefault()
            props.setSelectedGroup(null)
        }
    }

    const groupElements = props.groups.map((group) => {
        return group.selected ? (
            <div className="groupContainer">
                <div className="group">
                    <input
                        value={group.title}
                        onKeyDown={onKeyDown}
                        onChange={(e) => handleChangeTitle(e, group)}
                    />
                    <button onClick={() => props.setSelectedGroup(null)}>save</button>
                </div>
                <List
                    onRemoveListItem={props.onRemoveListItem}
                    group={group}
                    onAddListItem={addListItem}
                />
            </div>
        ) :
            <div className="groupContainer">
                <div className="group">
                    <h3 onClick={() => props.setSelectedGroup(group)}>{group.title}</h3>
                    <button onClick={() => props.deleteGroup(group)}>Delete</button >
                </div>
                <List
                    onRemoveListItem={props.onRemoveListItem}
                    group={group}
                    onAddListItem={addListItem}
                />
            </div>
    })


    return (
        <div className="toDo">
            <button className="addNewGroupButton" onClick={props.addNewGroup}>Add new Group</button>
            {groupElements}
        </div>
    )
}