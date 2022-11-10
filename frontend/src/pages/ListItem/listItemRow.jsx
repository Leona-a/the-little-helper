import React from "react";


function ListItemRow({ listItem, deleteListItem, toggleListItem }) {
    const { id, name } = listItem;
    const isDone = listItem.state > 0;
    const stateClass = isDone ? 'line-through text-gray-500' : '';

    return (
        <div id={`listItem-id-${id}`} className="rounded p-2 my-5 border flex items-center">
            <div className={`${stateClass} grow`}>{name}</div>
            <div className="flex-none">
                <button
                    type="submit"
                    className="w-[80px] inline-flex justify-center rounded-md border border-transparent bg-[#294d4a] py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 ml-9 mr-5"
                    onClick={() => toggleListItem(id)}
                >
                    {
                        isDone
                            ? <span>Restore</span>
                            : <span>Done</span>
                    }
                </button>
                <button
                    className="w-[80px] inline-flex justify-center rounded-md border border-transparent bg-[#b66610] py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                    type="submit"
                    onClick={() => deleteListItem(id)}
                >
                    Delete
                </button>
            </div>
        </div>
    );
}

export default ListItemRow;