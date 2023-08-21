import Form from "./Form";
import { PackingList } from "./PackingList";
import { useState } from "react";
import Stats from "./Stats";

export function FormAndPackingList() {
  const [items, setItems] = useState([]);

  function handleAddItems(item) {
    setItems((items) => [...items, item]);
  }

  function handleDeleteItem(id) {
    setItems((items) => items.filter((item) => item.id !== id));
  }

  function handleToggleItem(id) {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  }

  function handleClearList() {
    const confirmed = window.confirm(
      "Are you sure you want to clear the list?"
    );
    if (confirmed) setItems([]);
  }

  return (
    <div>
      <div className="row p-0 mb-4">
        <div className="col-md-12">
          <Form onAddItems={handleAddItems} />
        </div>
      </div>

      <div className="row p-0 ">
        <div className="col-12">
          <PackingList
            items={items}
            onDeleteItem={handleDeleteItem}
            onToggleItem={handleToggleItem}
            onClearList={handleClearList}
          />
        </div>
      </div>
      <div className="col-lg-12 col-md-12 col-sm-12">
        <Stats items={items} />
      </div>
    </div>
  );
}
