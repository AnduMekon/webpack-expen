console.log('app.js is running');

const app = {
    title: 'Indecision Andualem',
    subtitle: 'Put your life on the hands of a computer',
    options: []
};

const onFormSubmit = (e) => {
    e.preventDefault();
   const myid = e.target.elements.myid.value;
    if (myid){
        app.options.push(myid);
        e.target.elements.myid.value='';
        render();
        }
};

const add = (e) => {
    e.preventDefault();
    const first = e.target.elements.firstnum.value;
    const second = e.target.elements.secondnum.value;
    return first + second
    render();

};
console.log (add);
const sub = () => {

};
const div = () => {

};
const mult = () => {

};
var appRoot = document.getElementById('app');

const render = () => {
    const  templateone = (
        <div>
        <h1>{app.title}</h1>
        <p> {app.options.length > 0  ? 'your options':'no options'} </p>
        <p>{app.options.length}</p>

        <form onSubmit={onFormSubmit}>
        <input type="number" name="firstnum"/>
        <button>first number</button>
        <input type="number" name="secondnum"/>
        <button>second number</button>
        <br/>
        <button onClick={add}>Add</button>
        <br/>
        <button onClick={sub}>subtract</button>
        <br/>
        <button onClick={ div}>divid</button>
        <br/>
        <button onClick={mult}>multiply</button>
        </form>
        </div>


    )

ReactDOM.render(templateone, appRoot);

};
render();


