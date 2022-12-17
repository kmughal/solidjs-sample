
import { createEffect, createSignal, createResource } from 'solid-js';
import GithubUserCard from './GithubUserCard';
const getGithubUser = async username => (await fetch(`https://api.github.com/users/${username}`)).json();

function GitHubRepositories() {
    const [reps, setRepos] = createSignal([]);
    const [user, setUser] = createSignal(null);
    let searchUser;
    const [gitHubUserResponse] = createResource(user, getGithubUser);
    createEffect(() => {
        console.log('Username provided: ', gitHubUserResponse())
    })
    return <div>
        <div>
            <label>Github Username:</label>
            <input ref={searchUser} />
            <button onclick={async () => {
                setUser(searchUser.value);
            }}>Find User</button>
            {gitHubUserResponse.loading && <div>Searching for user</div>}
            {gitHubUserResponse() && <GithubUserCard user={gitHubUserResponse()} />}
        </div>
    </div>
}


export default GitHubRepositories;