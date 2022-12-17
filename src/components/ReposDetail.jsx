
function ReposDetails({ repos }) {
    return <ol>
        <For each={repos} fallback={() => <h1> No Repos!</h1>}>
            {repo => {
                return <li>
                    <h1>{repo.name} owned by {repo.owner.login}</h1>
                    <p>
                        <a href={repo.owner.url}>{repo.full_name}</a>
                    </p>
                </li>
            }}
        </For>
    </ol>
}

export default ReposDetails;