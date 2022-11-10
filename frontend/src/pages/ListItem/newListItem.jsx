import React, { useState } from "react";
import { toast } from 'react-toastify';

function createNewListItem(listItemName, list) {
  if (listItemName.length < 2) {
    toast.error("Please enter a valid Item");

    return false;
  }

  return {
    id: Math.floor(Math.random() * (99999999 - 3 + 1)) + 3,
    name: listItemName,
    listId: list.id,
    state: 0,
  }
}

// This is the list modification function

function NewListItem({ addListItem, list }) {
  const [listItemName, setListItemName] = useState('');
  return (
    <div >
      <input
        className="rounded p-2 my-5 border border-[#DEE1E6] bg-[#F7F8F9] focus:bg-white mr-5"
        value={listItemName}
        onChange={(e) => setListItemName(e.target.value)}
        type="text"
        placeholder={`Add to ${list.name}`}
        name="new_list"
        id="new_list"
      />

      <button
        className="inline-flex justify-center rounded-md border border-transparent bg-[black] py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
        type="submit"
        onClick={() => {
          addListItem(createNewListItem(listItemName, list));
          setListItemName('');
        }}
      >
        Add
      </button>
    </div>
  );
}

export default NewListItem;