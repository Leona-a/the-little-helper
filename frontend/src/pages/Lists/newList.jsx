import React, { useState } from "react";
import { toast } from 'react-toastify';
import { getUserToken } from "../../lib/listService";
import { userLoggedIn } from "../../lib/utils";



// This is the list modification function

function NewList({ addList, listCount }) {
    const [listName, setListName] = useState('');

    const createNewList = (name) => {
        if (name.length < 2) {
            toast.error("Please enter a valid list name");

            return false;
        }

        if (listCount > 1 && !userLoggedIn()) {
            toast.info(
                <div>
                    <p className="mb-3">You must be signed in to have more than two lists</p>
                    <p>Click on "Sign in with google"</p>
                </div>, {autoClose: 10000}
            );

            return false;
        }

        return { name, userToken: getUserToken() }
    }
    return (
        <div >
            <input
                className="rounded p-2 my-5 border border-[#DEE1E6] bg-[#F7F8F9] focus:bg-white mr-5"
                value={listName}
                onChange={(e) => setListName(e.target.value)}
                type="text"
                placeholder="Enter new list title"
                name="new_list"
                id="new_list"
            />

            <button
                className="inline-flex justify-center rounded-md border border-transparent bg-[#969696] py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                type="submit"
                onClick={() => addList(createNewList(listName))}
            >
                Create
            </button>
        </div>
    );
}

export default NewList;