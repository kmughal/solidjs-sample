function InputPeople({ people, addNewRecord }) {
    let inputName, inputAge, inputMarried, inputUnMarried;

    return <div>
        <div>
            <label>Name:</label>
            <input ref={inputName} />
        </div>
        <div>
            <label>Age:</label>
            <input ref={inputAge} />
        </div>
        <div>
            <label>Material Status:</label>
            <input ref={inputMarried} type='radio' name='material-status' value='Married' /> Married
            <input ref={inputUnMarried} type='radio' name='material-status' value='Not Married' /> Not Married
        </div>
        <div>
            <button onClick={() => {
                const newRecord = { name: inputName.value, age: inputAge.value, married: !inputUnMarried.checked }
                addNewRecord([...people(), newRecord])
            }}>Save</button>
            <button>Cancel</button>
        </div>
    </div>
}


export default InputPeople;