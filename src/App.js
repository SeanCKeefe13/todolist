import React from 'react';
import Groups from './Groups';


function App() {
  const [groups, setGroups] = React.useState([])


  function addNewGroup() {
    const newGroup = {
      title: 'Untitled Group',
      list: [],
      selected: true,
    }
    setGroups(prevGroups => [newGroup, ...prevGroups])
  }

  function handleSelectedGroup(selectedGroup) {
    setGroups(prevGroups => {
      return prevGroups.map(group => {
        return group === selectedGroup ? { ...group, selected: true } : { ...group, selected: false }
      })
    })
  }

  function deleteGroup(groupToRemove) {
    console.log("delete Group")
    setGroups(prevGroups => {
      return prevGroups.filter(group => group !== groupToRemove)
    })
  }

  function handleTitleChange(groupToUpdate, newTitle) {
    console.log("title change")
    setGroups(prevGroups => {
      return prevGroups.map(group => {
        return group === groupToUpdate ? { ...group, title: newTitle } : group
      })
    })
  }

  function handleAddListItem(groupToUpdate, newListItem) {
    console.log("add list item", groupToUpdate, newListItem)
    setGroups(prevGroups => {
      return prevGroups.map(group => {
        return group === groupToUpdate ? {
          ...group,
          list: [newListItem, ...group.list]
        } : group
      })
    })
  }

  function handleRemoveListItem(groupToUpdate, itemToRemove) {
    console.log("remove list item")
    setGroups(prevGroups => {
      return prevGroups.map(group => {
        return group === groupToUpdate ? {
          ...group,
          list: group.list.filter(item => item !== itemToRemove)
        } : group
      })
    })
  }

  return (
    <div className="App">
      <Groups
        deleteGroup={deleteGroup}
        setSelectedGroup={handleSelectedGroup}
        addNewGroup={addNewGroup}
        onChangeTitle={handleTitleChange}
        onAddListItem={handleAddListItem}
        onRemoveListItem={handleRemoveListItem}
        groups={groups}
      />
    </div>
  );
}

export default App;
