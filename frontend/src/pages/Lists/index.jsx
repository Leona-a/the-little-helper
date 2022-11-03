import React, { useEffect } from "react";
import { useState } from "react";
import { getLists, deleteList as deleteFromAPI, createList } from "../../lib/listService";
import ListRow from "./listRow";
import NewList from "./newList";

/*This function maps lists features to List components */

function Lists() {
  const [lists, setLists] = useState([]);
  useEffect(() => {
    async function loadLists() {
      setLists(await getLists());
    }

    Lists.length || loadLists();
  }, []);

  const addList = async (item) => {
    if(item) {
      const savedList = await createList(item);

      if(savedList) {
        setLists((lists) => [...lists, savedList]);
      }
    }
  };

  const deleteList = (id) => {
    deleteFromAPI(id);
    setLists((lists) => lists.filter(list => list.id !== id));
  };
  
  return (
    <div className="block flex-none">
      <p className="text-xl center block mt-9">My Lists</p>
      {lists.map(list => <ListRow list={list} key={list.id} deleteList={deleteList} />)}
      <NewList addList={addList} />
    </div>
  );
}

export default Lists;