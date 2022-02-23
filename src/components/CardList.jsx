import "./cardlist.css";

import CardListItem from "./CardListItem";

const CardList = ({ lists, setLists, deleteList }) => {
  // console.log(lists);
  const mappedCardListItem = lists.map((list) => (
    <CardListItem
      title={list.title}
      key={list.id}
      deleteList={deleteList}
      id={list.id}
    />
  ));

  return (
    <section className="cardlist">
      {/* <CardListItem title={list.title} /> */}
      {mappedCardListItem}
    </section>
  );
};

export default CardList;
