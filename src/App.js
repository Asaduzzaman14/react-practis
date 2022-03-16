// import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react'

function App() {
  return (
    <div className="App">
      {/* <Countrer></Countrer> */}
      {/* <ExternalUser></ExternalUser> */}
      <AllUser></AllUser>
    </div>
  );
}

// //  test
// function AllUser() {
//   const [users, setUsers] = useState([])
//   useEffect(() => {
//     fetch('https://jsonplaceholder.typicode.com/users')
//       .then(res => res.json())
//       .then(data => setUsers(data))
//   }, [])

//   return (
//     <div>
//       <h3>Api Fetch with React</h3>
//       <p>{users.length}  user</p>
//       {
//         users.map(user => <Userr name={user.name}></Userr>)
//       }

//     </div >
//   )
// }

// function Userr(props) {
//   return (
//     <div>
//       <h3>{props.name}</h3>
//     </div>
//   )

// }







// 
function ExternalUser() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(data => setUsers(data))
  }, [])

  return (
    <div>
      <h2>External User</h2>
      <p>{users.length}</p>
      {users.map(user => <User name={user.name}></User>)}
    </div >
  )
}
function User(props) {
  return (
    <div>
      <h4>name: {props.name}</h4>
    </div>
  )

}






//  state change

function Countrer() {

  const [count, setCount] = useState(0)

  const incressCount = () => setCount(count + 1)
  const decressCount = () => setCount(count - 1)


  return (
    <div>
      <h2>Count:{count}</h2>
      <button onClick={incressCount}>Incress</button>
      <button onClick={decressCount}>Decress</button>
    </div>
  )
}



// const products = [
//   { name: 'laptop', price: 98000 },
//   { name: 'Phone', price: 25000 },
//   { name: 'watch', price: 7500 },
//   { name: 'watch', price: 2500 },
// ]

// // <div className="App">
// {
//   products.map(product => <Product name={product.name} price={product.price} ></Product>)
// }


// {/* <Product name={'laptop'} price={42500}></Product>
// <Product name={'Phone'} price={92500}></Product>
// <Product name={'Watch'} price={9500}></Product> */}
// </div>

// function Product(props) {
//   return (
//     <div className='product'>
//       <h3>Name: {props.name}</h3>
//       <p>Price: {props.price}</p>
//     </div>
//   )
// }



export default App;
