export const generateId = () => '_' + Math.random().toString(36).substr(2, 9);

export const  rowData = {
    columns: {
      'todo': {
        id: 'todo',
        title: 'To Do',
        tasks: [
          { id: generateId(), title: 'Task 1', description: 'Description for Task 1' ,dueDate:"2024-07-17" ,priority:"Low" ,status:"todo"},
          { id: generateId(), title: 'Task 2', description: 'Description for Task 2' ,dueDate:"2024-07-17" ,priority:"Low" ,status:"todo"},
        ],
      }, 
      'inprogress': {
        id: 'inprogress',
        title: 'In Progress',
        tasks: [
          { id: generateId(), title: 'Task 3', description: 'Description for Task 3',dueDate:"2024-07-17" ,priority:"Medium" ,status:"inprogress"},
        ],
      },
      'inreview': {
        id: 'inreview',
        title: 'In Review',
        tasks: [
          { id: generateId(), title: 'Task 4', description: 'Description for Task' ,dueDate:"2024-07-17" ,priority:"Medium" ,status:"inreview"},
        ],
      },
      'done': {
        id: 'done',
        title: 'Done',
        tasks: [],
      },
    },
    columnOrder: ['todo', 'inprogress', 'inreview', 'done'],
  };