import popupS from "popups";
import React, { useEffect } from "react";
import { useState } from "react";
import { getLists, deleteList as deleteFromAPI, createList, renameList as renameFromAPI } from "../../lib/listService";
import ListRow from "./listRow";
import NewList from "./newList";

/*This function maps lists features to List components */

function Lists() {
  const [lists, setLists] = useState([]);
  useEffect(() => {
    async function loadLists() {
      setLists(await getLists());
    }

    lists.length || loadLists();
  }, [lists.length]);

  const addList = async (item) => {
    if (item) {
      const savedList = await createList(item);

      if (savedList) {
        setLists((lists) => [...lists, savedList]);
      }
    }
  };

  const deleteList = (id) => {
    deleteFromAPI(id);
    setLists((lists) => lists.filter(list => list.id !== id));
  };

  const renameList = (id) => {
    popupS.prompt({
      content: 'Enter the new title of your list:',
      onSubmit: function (val) {
        if(!val) return false;
        const list = {
          id: id,
          name: val,
        }

        renameFromAPI(list);
        setLists((lists) => {
          const index = lists.findIndex((element) => element.id === id);
          lists[index].name = val;

          return [...lists];
        });
      }
    });
  }



  return (
    <div className="block flex-none">
      <p className="text-xl center block mt-9">My Lists</p>
      {lists.length < 1 && <p className="my-9">Use the Textbox below to create a new List</p>}


      {lists.map(list => <ListRow list={list} key={list.id} deleteList={deleteList} renameList={renameList} />)}

      {lists.map(list => <ListRow list={list} key={list.id} deleteList={deleteList} />)}

      <NewList addList={addList} listCount={lists.length} />
    </div>
  );
}

export default Lists;