import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { addNewHobby, setActiveHobby } from "../../actions/hobby";
import HobbyList from "../HobbyList/HobbyList";
const randomNumber = () => {
  return 1000 + Math.trunc(Math.random() * 9000);
};
function HomePage() {
  const hobbyList = useSelector((state) => state.hobby.list);
  const activeId = useSelector((state) => state.hobby.activeId);
  const dispatch = useDispatch();

  const handleAddHobbyClick = () => {
    const newId = randomNumber();
    const newHobby = {
      id: newId,
      title: `Hobby ${newId}`,
    };

    const action = addNewHobby(newHobby);
    dispatch(action);
  };

  const handleHobbyClick = (hobby) => {
    const action = setActiveHobby(hobby);
    dispatch(action);
  };
  return (
    <div style={{ marginTop: "200px" }}>
      <h1>REDUX HOOK - Home Page</h1>
      <button onClick={handleAddHobbyClick}>Random hobby</button>
      <HobbyList
        hobbyList={hobbyList}
        activeId={activeId}
        onHobbyClick={handleHobbyClick}
      />
    </div>
  );
}

export default HomePage;
