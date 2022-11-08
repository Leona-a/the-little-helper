import React, { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import { createListItem, deleteListItem as apiDeleteListItem, getListItems, toggleListItem as apiToggleListItem } from "../../lib/listItemService";
import { getListById } from "../../lib/listService";
import ListItemRow from "./listItemRow";
import NewListItem from "./newListItem";

function ListItem() {
  const { id } = useParams();
  const [list, setList] = useState("");
  useEffect(() => {
    async function loadListName() {
      const list = await getListById(id);
      setList(list);
    }

    loadListName();
  }, [id]);

  const [listItems, setListItems] = useState([]);
  useEffect(() => {
    async function loadListItems() {
      const listItems = await getListItems(id);
      setListItems(listItems);
    }

    loadListItems();
  }, [id]);

  const addListItem = async (listItem) => {
    if (listItem) {
      const savedListItems = await createListItem(listItem);

      if (savedListItems) {
        setListItems((listItems) => [...listItems, savedListItems]);
      }
    }
  };


  const deleteListItem = (id) => {
    apiDeleteListItem(id);
    setListItems((listItems) => listItems.filter(listItem => listItem.id !== id));
  };

  const toggleListItem = (id) => {
    const index = listItems.findIndex(listItem => listItem.id === id);

    if (index > -1) {
      console.log('listItems b ', listItems[index].state);
      listItems[index].state = listItems[index].state ? 0 : 1;
      console.log('listItems a ', listItems[index].state);
    }

    setListItems((listItems) => [...listItems]);

    apiToggleListItem(listItems.find(listItem => listItem.id === id));
  };

  return (
    <div className="block flex-none">
      <p className="text-xl center block mt-9">Manage List: {list.name}</p>
      {listItems.length < 1 && <p className="my-9">Use the Textbox below to create Items in your List</p>}

      {listItems.map(listItem => <ListItemRow listItem={listItem} key={listItem.id} deleteListItem={deleteListItem} toggleListItem={toggleListItem} />)}
      <NewListItem addListItem={addListItem} list={list} />
    </div>
  );
}

export default ListItem;  