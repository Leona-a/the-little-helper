import React, { useEffect } from "react";
import { useState } from "react";
import { getLists } from "../../lib/listService";
import ListRow from "./listRow";
import NewList from "./newList";

function Lists() {
  const [lists, setLists] = useState([]);
  useEffect(() => {
    async function loadLists() {
      setLists(await getLists());
    }

    Lists.length || loadLists();
  }, []);

  const addList = (item) => {
    setLists((lists) => [...lists, item]);
  };

  const deleteList = (id) => {
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