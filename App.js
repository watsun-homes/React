import {useState} from "react";
import {Props} from "./sample";
import {Click} from "./sample";
import {PreClick} from "./sample";
import {ToggleButton} from "./sample";
import {Example} from "./useEffect";
import {FetchSample} from "./fetch";
import {TabSample} from "./Tab";
import {Todosample} from "./Todosample";
import {Site} from "./Site";


function App() {
  return (
    <>
    <Props color="red" mess="成功" />
    <Click />
    <PreClick />
    <ToggleButton />
    <Example />
    <FetchSample />
    <TabSample />
    <Todosample />
    <Site />
    </>
  );
}

export default App;
