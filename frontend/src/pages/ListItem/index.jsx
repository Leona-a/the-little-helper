import React from "react";
import {useParams} from 'react-router-dom';

function ListItem() {
  const { id } = useParams();
  return (
    <div className="block flex-none">
      <p className="text-xl center block mt-9">Manage List {id} : [List name here] - </p>
    </div>
  );
}

export default ListItem;