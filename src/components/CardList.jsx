import "./cardlist.css";

import CardListItem from "./CardListItem";

const CardList = ({ lists, deleteList }) => {
  const mappedCardListItem = lists.map((list) => (
    <CardListItem
      title={list.title}
      key={list.id}
      deleteList={deleteList}
      id={list.id}
    />
  ));

  return <section className="cardlist">{mappedCardListItem}</section>;
};

export default CardList;
