import {Props} from "./sample";
import {Click} from "./sample";
import {PreClick} from "./sample";
import {ToggleButton} from "./sample";
import {Example} from "./useEffect";
import {FetchSample} from "./fetch";
import {Todosample} from "./Todosample";

export const PageTwo = () => {
    return(
    <>
    <h1>Aboutです</h1>
    <Props color="red" mess="成功" />
    <Click />
    <PreClick />
    <ToggleButton />
    <Example />
    <FetchSample />
    <Todosample />
    </>
    );
}