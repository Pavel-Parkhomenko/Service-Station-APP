import React from 'react';
import Footer from './compsPage/Footer';
import Header from './compsPage/Header';
import Menu from './compsPage/Menu';
import Main from './compsPage/Main';

import { useRoutes } from './components/routes'

function App() {
  const routes = useRoutes()
  return (
    <>
      {/* <Header/> */}
      {routes}
      {/* <Main/> */}
      {/* <Authentication/> */}
      {/* <Footer/> */}
    </>
  )
}

export default App;


// import React from 'react';
// import useHttp from './hooks/httpHook';

// import Footer from './compsPage/Footer';
// import Header from './compsPage/Header';
// import Menu from './compsPage/Menu';
// import './App.css'

// import { useRoutes } from './components/routes'

// function App() {

//   const routes = useRoutes()
//   return (
//     <>
//       <Header />
//       {routes}
//     </>
//   )

//   // const [data, setData] = useState('');

//   // const { loading, request, error, clearError } = useHttp();

//   // async function call() {
//   //   const answ = await request('/mark/add', 'POST', { name: data })
//   //   console.log(answ);
//   // }

//   // async function callGet(){
//   //   const answ = await request('/mark/findall');
//   //   console.log(answ);
//   // }

//   // function inpChange(event) {
//   //   setData(event.target.value)
//   // }

//   // return (
//   //   <div>
//   //     <input onChange={inpChange} type="text" value={data}></input>
//   //     <button onClick={call}>add data</button>
//   //     <button onClick={callGet}>show data</button>
//   //     <p>{data}</p>
//   //   </div>
//   // )
// }

// export default App;