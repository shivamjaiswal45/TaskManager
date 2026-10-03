import React, { useEffect, useState } from 'react'
import Animate from './components/Animate'
import Notification from './components/Notification'
import Header from './components/Header'
import StatsGrid from './components/StatsGrid'
import Input from './components/Input'
import TodoList from './components/TodoList'
import ClearButton from './components/ClearButton'
import { playSound } from './components/PlaySound';

// const playSound = (data) => ();


const App = () => {
  const STORAGE_KEY = "todos";


  const [todos, setTodos] = useState([])
  //useStateSnippet
  const [input, setInput] = useState('')
  const [notification, setNotification] = useState(null)
  const [editingId, setEditingId] = useState(null)
  const [editText, setEditText] = useState("")
  const [hasLoaded, setHasLoaded] = useState(false)

  // console.log("my todos = ", todos)



  //get from localStorage
  useEffect(() => {
    try {
      const savedTodos = localStorage.getItem(STORAGE_KEY);
      if (savedTodos) {
        setTodos(JSON.parse(savedTodos));
      }
    } catch (error) {
      console.error("Error loading todos from localStorage:", error);
    } finally {
      setHasLoaded(true);
    }
  }, []);



  //save to localStorage
  useEffect(() => {
    if (!hasLoaded) return;
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(todos));
      
    } catch (error) {
      console.error("Error saving todos to localStorage:", error);
      
    } 
  }, [todos, hasLoaded]);

  //show notification
  const showNotification = (message, type = "success") => {
    setNotification({ message, type });
    setTimeout(() => {
      setNotification(null)
    }, 3000);
  };

 
  // add todo
  const handleAddTodo = () => {
    if (!input.trim()) return;

    const newTodo = {
      id: Date.now(),
      text: input.trim(),
      completed: false,
      createdAt: new Date().toISOString(),
    };
    setTodos([newTodo, ...todos]);
    setInput("");
    playSound("add");
    showNotification("✨ Task added Successfully!","success")
  };

// toggle todo
const toggleTodo = (id) => {
  setTodos(
    todos.map((todo) =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    )
  );
  const todo = todos.find((t) => t.id === id);
  if (!todo.completed){
    playSound("complete");
    showNotification("✅ Task status updated!", "success");
  }
};

    //key press down {add}
    const handleKeyPress = (e) => {
      if (e.key === "Enter") {
        handleAddTodo();
      }
    }
// edit key press
const handleEditKeyPress = (e, id) => {
  if (e.key === "Enter") {
    saveEdit(id);
  } else if (e.key === "Escape") {
    cancelEdit();
  }
}



    // start edit
    const startEditing = (id, text) => {
      setEditingId(id);
      setEditText(text);
    }

    //update todo
    const saveEdit = (id) => {
      if (!editText.trim()) return;
      setTodos(
        todos.map((todo) =>
          todo.id === id ? { ...todo, text: editText}: todo));
      setEditingId(null);
      setEditText("");
      playSound("update");
      showNotification("✏️ Task updated!", "success");
    }
    //cancel edit
    const cancelEdit = () => {
      setEditingId(null);
      setEditText("");
    } 



      //delete todo
      const deleteTodo = (id) => {
        setTodos(todos.filter((todo) => todo.id !== id));
        playSound("delete");
        showNotification("🗑️ Task deleted!", "info");
      }

      //clear completed todos
      const clearCompleted = () => {
        setTodos(todos.filter((todo) => !todo.completed));
        playSound("delete");
        showNotification("🧹 Completed tasks cleared!", "info");
      }
const activeTodos = todos.filter((todo) => !todo.completed).length;
const completedTodos = todos.filter((todo) => todo.completed).length;
const progress = todos.length > 0 ? (completedTodos / todos.length) * 100 : 0;


      return (
        <>
          <div className='min-h-screen bg-gradient-to-br from-indigo-950 via-purple-950 to-pink-950 p-3 sm:p-6 relative overflow-hidden'>
            <Animate />

            <Notification notification={notification} onClose={() => setNotification(null)} />

            <div className='max-w-3xl mx-auto relative z-10'>
              <Header activeTodos={activeTodos} completedTodos={completedTodos} progress={progress} totalTodos={todos.length} />

              <StatsGrid activeTodos={activeTodos} completedTodos={completedTodos} totalTodos={todos.length}/>

              <Input value={input} onChange={(e) => setInput(e.target.value)} onAdd={handleAddTodo} onKeyPress={handleKeyPress} />

              <TodoList todos={todos} onDelete={deleteTodo} onStartEdit={startEditing} onSaveEdit={saveEdit} onCancelEdit={cancelEdit} editingId={editingId}
              editText={editText}
              onEditTextChange={(e) => setEditText(e.target.value)}
              onEditKeyPress={handleEditKeyPress}
              onToggle={toggleTodo}
              />

              <ClearButton 
              completedTodos= {completedTodos} 
              onClick={clearCompleted} />


            </div>
            <style>{`
        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px) translateX(0px); }
          50% { transform: translateY(-20px) translateX(10px); }
        }
        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        .animate-shimmer {
          animation: shimmer 2s infinite;
        }
      `}</style>


          </div>
        </>
      )
    }

    export default App

















// import React from 'react'
// import Animate from './components/Animate'
// import Notification from './components/Notification'
// import Header from './components/Header'
// import StatsGrid from './components/StatsGrid'
// import Input from './components/Input'
// import TodoList from './components/TodoList'
// import ClearButton from './components/ClearButton'
// const App = () => {
//   const dummyTodos = [
//     {
//       id: 1,
//       text: "Learn React",
//       completed: false,
//     },
//     {
//       id: 2,
//       text: "Build Todo App",
//       completed: true,
//     },
//     {
//       id: 3,
//       text: "Learn Tailwind",
//       completed: false,
//     },
//   ];

//   return (
//     <div className='min-h-screen bg-gradient-to-br from-indigo-950 via-purple-950 to-pink-950 p-3 sm:p-6 relative overflow-hidden'>
//       <Animate />

//       <Notification
//         notification={null}
//         onClose={() => {}}
//       />

//       <div className='max-w-3xl mx-auto relative z-10'>
//         <Header />

//         <StatsGrid />

//         <Input
//           value=""
//           onChange={() => {}}
//           onAdd={() => {}}
//           onKeyPress={() => {}}
//         />

//         <TodoList
//           todos={dummyTodos}
//           editingId={null}
//           editText=""
//           onToggle={() => {}}
//           onStartEdit={() => {}}
//           onSaveEdit={() => {}}
//           onCancelEdit={() => {}}
//           onDelete={() => {}}
//           onEditTextChange={() => {}}
//           onEditKeyPress={() => {}}
//         />

//         <ClearButton
//           completedTodos={1}
//           onClick={() => {}}
//         />
//       </div>
//     </div>
//   )
// }

// export default App
