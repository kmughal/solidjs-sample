import { Switch } from 'solid-js';

function PeopleView({ item: { name, age, married } }) {
    return <div>
        {name} is {age} old and you are
        <Switch>
            <Match when={married}> married.</Match>
            <Match when={!married}> not married.</Match>

        </Switch>

    </div>
}

export default PeopleView;