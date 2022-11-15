import React, { useEffect, useState } from "react";
import { MdScreenShare } from 'react-icons/md';
import { useParams } from 'react-router-dom';
import { createListItem, deleteListItem as apiDeleteListItem, getListItems, toggleListItem as apiToggleListItem } from "../../lib/listItemService";
import { getListById } from "../../lib/listService";
import ListItemRow from "./listItemRow";
import NewListItem from "./newListItem";
import ReactTooltip from 'react-tooltip';
import { userLoggedIn } from "../../lib/utils";
import Button from 'react-bootstrap/Button';
import Dropdown from 'react-bootstrap/Dropdown';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BsFillShareFill } from 'react-icons/bs';
import { BsTwitter } from 'react-icons/bs';
import { AiFillMail } from 'react-icons/ai';
import {FaWhatsappSquare} from 'react-icons/fa';

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

  const formatListForEmail = (listItems) => encodeURIComponent(
    listItems.map(
      (item, index) => `${index + 1}) ${item.name}`
    ).join("\n")
  );

  return (
    <div className="block flex-none">
        <div className="flex items-center mt-9 ">
        <p className="flex-none text-xl center grow block">Manage List: {list.name}</p>
        {userLoggedIn()
         ? <Dropdown>
         <Dropdown.Toggle variant="success" id="dropdown-basic" menuVariant='green'>
         <BsFillShareFill />
         </Dropdown.Toggle>
         <Dropdown.Menu>
         <Dropdown.Item href={`mailto:?subject=Checkout%20My%20List: ${list.name}&body=${formatListForEmail(listItems)}`} >
         <AiFillMail /></Dropdown.Item>
         <Dropdown.Item href={`https://twitter.com/intent/tweet?text=${list.name}&text=${formatListForEmail(listItems)}`}>
         <BsTwitter /></Dropdown.Item>
         <Dropdown.Item href={`https://api.whatsapp.com/send?text=${list.name}${formatListForEmail(listItems)}`}>
         <FaWhatsappSquare/></Dropdown.Item>
         </Dropdown.Menu>
         </Dropdown>
          : <a
            data-tip="Send as Email"
            href={`mailto:?subject=Checkout%20My%20List: ${list.name}&body=${formatListForEmail(listItems)}`}
            className="flex-none text-[#969696] hover:text-black align-middle text-3xl ml-9">
            <MdScreenShare />
          </a>
        }
      </div>
      {listItems.length < 1 && <p className="my-9">Use the Textbox below to create Items in your List</p>}

      {listItems.map(listItem => <ListItemRow listItem={listItem} key={listItem.id} deleteListItem={deleteListItem} toggleListItem={toggleListItem} />)}
      <NewListItem addListItem={addListItem} list={list} />
      <ReactTooltip />
    </div>
  );
}

export default ListItem;  