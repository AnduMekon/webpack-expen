console.log('app.js is running');

// JSX - JavaScript XML 

 const numbers = [55, 11, 200, 190];                           

const app = {
    title: 'Indecision Andualem',
    subtitle: 'Put your life on the hands of a computer',
    options: []
};

const onFormSubmit = (e) => {
    e.preventDefault();
    const option = e.target.elements.option.value;
    if (option){
    app.options.push(option);
    e.target.elements.option.value='';
    render();
    }
};
const onRemoveAll = () => {
    app.options =[];
    render();
};


var appRoot = document.getElementById('app');

const render = () => {
    const template = (
        <div>
         <h1>{app.title}</h1>
         {app.subtitle && <p>{app.subtitle}</p>}
         <p>{app.options.length > 0 ? 'Here are your option123' : 'No option'}</p>
         <p>{app.options.length}</p>
         <button onClick={onRemoveAll}>Remove All</button>
         { 
         }
            <ol>
                <li>Item one</li>
                <li>Item two</li>
            </ol>
            <form onSubmit={onFormSubmit}> 
                <input type="text" name ="option"/>
                <button>Add your comment</button>
            </form>
        
        </div>
    )
    ReactDOM.render(template, appRoot);
};
render();




