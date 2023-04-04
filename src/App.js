import React from 'react';
import Groups from './Groups';


function App() {
  const [groups, setGroups] = React.useState([])
  const [selectedGroupId, setSelectedGroupId] = React.useState()

  function addNewGroup() {
    const newGroup = {
      title: 'Untitled Group',
      id: groups.length,
    }
    setGroups(prevGroups => [newGroup, ...prevGroups])
    setSelectedGroupId(newGroup.id)
  }

  function selectGroup(id) {
    setSelectedGroupId(id)
  }

  function deleteGroup(groupToRemove) {
    setGroups(prevGroups => {
      return prevGroups.filter(group => group !== groupToRemove)
    })
  }

  function handleGroupChange(e, groupId) {
    e.preventDefault();
    setGroups(prevGroups => {
      const groupToChange = prevGroups.find((group) => group.id === groupId)
      groupToChange.title = e.target.value
      return prevGroups
    })
  }

  return (
    <div className="App">
      <Groups
        deleteGroup={deleteGroup}
        setSelectedGroupId={selectGroup}
        selectedGroupId={selectedGroupId}
        addNewGroup={addNewGroup}
        changeTitle={handleGroupChange}
        groups={groups}
      />
    </div>
  );
}

export default App;
