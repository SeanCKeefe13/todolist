import React from 'react';
import Groups from './Groups';


function App() {
  const [groups, setGroups] = React.useState([])
  const [selectedGroup, setSelectedGroup] = React.useState()

  function addNewGroup() {
    const newGroup = {
      title: 'Untitled Group',
      list: [],
    }
    setGroups(prevGroups => [newGroup, ...prevGroups])
    setSelectedGroup(newGroup)
  }

  function selectGroup(group) {
    setSelectedGroup(group)
  }

  function deleteGroup(groupToRemove) {
    setGroups(prevGroups => {
      return prevGroups.filter(group => group !== groupToRemove)
    })
  }

  function handleTitleChange(groupToUpdate, newTitle) {
    setGroups(prevGroups => {
      return prevGroups.map(group => {
        return group === groupToUpdate ? { ...group, title: newTitle } : group
      })
    })
  }

  function handleAddListItem(groupToUpdate, newListItem) {
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
        setSelectedGroup={selectGroup}
        selectedGroup={selectedGroup}
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
