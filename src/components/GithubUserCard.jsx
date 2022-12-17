
import { createSignal, createResource } from 'solid-js';
import ReposDetails from './ReposDetail';


async function getRepos({ getRepos, reposUrl }) {
    if (!getRepos) return;
    return (await fetch(reposUrl)).json();
}


function GithubUserCard({ user: { name, location, public_repos, created_at, updated_at, repos_url } }) {
    const [repos, loadRepos] = createSignal({ getRepos: false, reposUrl: repos_url });

    const [reposResponse] = createResource(repos, getRepos)
    return <section>
        <h1>{name}</h1>
        <span>Based in {location} and has total {public_repos} reps.</span>
        <p>Profile created : ${created_at}, Last updated done :{updated_at}</p>
        <p>Do you want to get list of repos ? <a href='#' onclick={() => {
            loadRepos({ getRepos: true, reposUrl: repos().reposUrl });
        }}>Yes</a></p>
        {/* <pre>repos:{JSON.stringify(reposResponse(), null, 2)}</pre> */}
        {reposResponse.loading && <h1>Loading Repos Detail please wait ...</h1>}
        {reposResponse() && <ReposDetails repos={reposResponse()} />}
    </section>
}

export default GithubUserCard;