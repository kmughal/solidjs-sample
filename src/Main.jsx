import { createEffect, createSignal } from 'solid-js';

import GitHubRepositories from './components/GitHubRepositories';
import InputPeople from './components/InputPeople';
import People from './components/People';

const [people, addNewRecord] = createSignal([]);

function Main() {
  createEffect(() => console.log("Records:", JSON.stringify(people)));
  return <div>
    <h1>Solid JS Sample Code</h1>
    <GitHubRepositories />
    <InputPeople addNewRecord={addNewRecord} people={people} />
    <People people={people} />
  </div>
}


export default Main;