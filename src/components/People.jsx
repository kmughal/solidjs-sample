import { For } from 'solid-js';

function People({ people }) {
    return <For each={people()} fallback={<div>Empty Items</div>}>
        {item => <PeopleView item={item} />}
    </For>
}


export default People;