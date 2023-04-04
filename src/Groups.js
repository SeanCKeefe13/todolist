import React from "react"
import List from "./List"

export default function Groups(props) {

    function onKeyDown(e) {
        if (e.key === "Enter" || e.key === "Escape") {
            e.preventDefault()
            props.setSelectedGroupId(null)
        }
    }


    const groupElements = props.groups.map((group) => {
        return group.id === props.selectedGroupId ? (
            <div className="groupContainer">
                <div className="group">
                    <input
                        key={group.id}
                        onKeyDown={onKeyDown}
                        onChange={(e) => props.changeTitle(e, group.id)}
                    />
                    <button onClick={() => props.setSelectedGroupId(null)}>save</button>
                </div>
                <List />
            </div>
        ) :
            <div className="groupContainer">
                <div className="group">
                    <h3 onClick={() => props.setSelectedGroupId(group.id)}>{group.title}</h3>
                    <button onClick={() => props.deleteGroup(group)}>Delete</button >
                </div>
                <List />
            </div>
    })


    return (
        <div className="toDo">
            <button className="addNewGroupButton" onClick={props.addNewGroup}>Add new Group</button>
            {groupElements}
        </div>
    )
}