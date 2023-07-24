let input = prompt("What would you like to do?");
const todos = ['Collect Eggs','Clean Box'];
while(input !== 'quit' && input !=='q'){
    if(input === 'list'){
        console.log("************")
        for(let i =0;i<todos.length; i++){
            console.log('${i}:${todos[i]}');
          }
          console.log('**********')
    } else if(input === 'new'){
        const newtodo=prompt('Ok, What the new todo:');
        todos.push(newtodo);
        console.log('${newtodo} added to the list');
    }
    else if(input === 'delete'){
        const index =prompt('ok,Enter an index to delete:');
        console.log(index)
    }
    input = prompt("What would you like to do?")
}
console.log("Ok Quit the app!")
