import React from "react";
import { Link } from 'react-router-dom';


function ListRow({ list, deleteList }) {
    const { id, name } = list;
    return (
        <div id={`list-id-${id}`} className="rounded p-2 my-5 border">
             <Link className="text-base text-lg text-gray-500 hover:text-gray-900 mr-7" to={`/list/${id}`}>{name}</Link> 
            <button
                type="submit"
                className="inline-flex justify-center rounded-md border border-transparent mr-5 bg-[black] py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            >
                Rename
            </button>
            <button
                className="inline-flex justify-center rounded-md border border-transparent bg-[black] py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                type="submit"
                onClick={() => deleteList(id)}
            >
                Delete
            </button>
        </div>
    );
}

export default ListRow;