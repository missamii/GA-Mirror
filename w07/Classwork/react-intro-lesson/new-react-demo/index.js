
/**** Part 1 - Getting Started ***/

// var React = require('react');
// var ReactDOM = require('react-dom');
//
// ReactDOM.render(
//   <h1>Hello, world!</h1>,
//   document.getElementById('react-app')
// );




// ---------------------------------------


// * Exercise * Copy the react-boiler directory & create the above hello world example


// ---------------------------------------



/**** Part 2 - Create a custom component and use className ***/

// var React = require('react');
// var ReactDOM = require('react-dom');
//
// var HelloMessage = React.createClass({
//   render: function() {
//     return (
//       <div className="hello-message">
//         <h1>Hello, world! I am React.</h1>
//       </div>
//     );
//   }
// });
//
// ReactDOM.render(
//   <HelloMessage />,
//   document.getElementById('react-app')
// );






// ---------------------------------------


// * Create a custom component called WelcomeHome with the class `welcome-home` that
// * returns at least one html element with a message that welcomes the user back home


// ---------------------------------------




/**** Part 3 - Composing Components ***/
// var React = require('react');
// var ReactDOM = require('react-dom');
//
// var HelloMessage = React.createClass({
//   render: function() {
//     return (
//       <div className="hello-message">
//         <h1>Hello, world!</h1>
//       </div>
//     );
//   }
// });
//
// var Container = React.createClass({
//   render: function() {
//     return (
//       <div className="list-div">
//         <ul>
//         	<li>This</li>
//         	<li>is</li>
//         	<li>a</li>
//         	<li>list</li>
//         </ul>
//       </div>
//     );
//   }
// });
//
// var App = React.createClass({
//   render: function() {
//     return (
//     	<div className="App">
//   			<HelloMessage />
//   			<Container />
//     	</div>
//     );
//   }
// });
//
// ReactDOM.render(
//   <App />,
//   document.getElementById('react-app')
// );





// ---------------------------------------


// * Create two components, Header & Container, that are contained in a single component, App
// * Render App to the DOM


// ---------------------------------------






/**** Part 4.1 - Expressions and Props ---> dynamic --> String interpolation ***/
// var React = require('react');
// var ReactDOM = require('react-dom');
//
// var HelloMessage = React.createClass({
//   render: function() {
//   	var title = 'Hello World';
//     return (
//       <div className="hello-message">
//         <h1>{title}! I am an h1 tag.</h1>
//       </div>
//     );
//   }
// });
//
// ReactDOM.render(
//   <HelloMessage />,
//   document.getElementById('react-app')
// );
//





// ---------------------------------------


// * Create a component that uses a variable with your name & string interpolation to render a message that says, "Hello, my name is _____!"


// ---------------------------------------




/**** Part 4.2 - Expressions and Props ---> dynamic --> render 2 of the same component ***/
// var React = require('react');
// var ReactDOM = require('react-dom');
//
// var HelloMessage = React.createClass({
//   render: function() {
//   	var title = 'Hello World';
//     return (
//       <div className="hello-message">
//         <h1>{title}! I am an h1</h1>
//       </div>
//     );
//   }
// });
//
// var MyCustomSection = React.createClass({
//   render: function() {
//     return (
//       <div className="list">
//       This is the MyCustomSection component.
//       </div>
//     );
//   }
// });
//
// var App = React.createClass({
//   render: function() {
//     return (
//     	<div className="App">
//         <HelloMessage/>
//         <MyCustomSection />
//         <MyCustomSection />
//     	</div>
//     );
//   }
// });
//
// ReactDOM.render(
//   <App />,
//   document.getElementById('react-app')
// );



/**** Part 4.3 - Expressions and Props ---> dynamic --> give props ***/
// var React = require('react');
// var ReactDOM = require('react-dom');
//
// var HelloMessage = React.createClass({
//   render: function() {
//   	var title = 'Hello World';
//     return (
//       <div className="hello-message">
//         <h1>{title}! I am an h1</h1>
//       </div>
//     );
//   }
// });
//
// var MyCustomSection = React.createClass({
//   render: function() {
//     return (
//       <div className="list">
//       This is the MyCustomSection component.
//       </div>
//     );
//   }
// });
//
// var App = React.createClass({
//   render: function() {
//   	var listData1 = ['Apples', 'Bananas', 'Carrots'];
//   	var listData2 = ['Cats', 'Dogs'];
//     return (
//     	<div className="App">
//         <HelloMessage/>
//         <MyCustomSection listData={listData1} />
//         <MyCustomSection listData={listData2} />
//     	</div>
//     );
//   }
// });
//
// ReactDOM.render(
//   <App />,
//   document.getElementById('react-app')
// );





// ---------------------------------------


// * Create a component App that renders two of the same component Container
// * Give each Container a prop called usStates
// * The first Container's array should be east coast states; the second west coast


// ---------------------------------------





/**** Part 4.4 - Expressions and Props ---> dynamic --> Do something with props ***/
// var React = require('react');
// var ReactDOM = require('react-dom');
//
// var HelloMessage = React.createClass({
//   render: function() {
//   	var title = 'Hello World';
//     return (
//       <div className="hello-message">
//         <h1>{title}! I am an h1</h1>
//       </div>
//     );
//   }
// });
//
// var MyCustomSection = React.createClass({
//   renderTheList: function() {
//     var result = [];
//     for (var i = 0; i < this.props.listData.length; i++) {
//       var innerHtml = this.props.listData[i];
//       result.push(<li key={i}>{innerHtml}</li>);
//     }
//     return result;
//   },
//   render: function() {
//   	var itemCount = this.props.listData.length;
//     return (
//       <div className="list">
//       	<p>I have {itemCount} items in my list</p>
//         <ul>
//         	{
//             this.renderTheList()
//         	}
//         </ul>
//       </div>
//     );
//   }
// });
//
// var App = React.createClass({
//   render: function() {
//   	var listData1 = ['Apples', 'Bananas', 'Carrots'];
//   	var listData2 = ['Cats', 'Dogs'];
//     return (
//     	<div className="App">
//         <HelloMessage/>
//         <MyCustomSection listData={listData1} />
//         <MyCustomSection listData={listData2} />
//     	</div>
//     );
//   }
// });
//
// ReactDOM.render(
//   <App />,
//   document.getElementById('react-app')
// );




/*** Part 5 • Props with Styles + loops ***/
// var React = require('react');
// var ReactDOM = require('react-dom');
//
// var MyListComponent = React.createClass({
//   renderTheList: function() {
//     var result = [];
//     for (var i = 0; i < this.props.valList.length; i++) {
//       var innerHtml = this.props.valList[i];
//       result.push(<li key={i}>{innerHtml}</li>);
//     }
//     console.log(result);
//     return result;
//   },
//   render: function(){
//     // return <option>{this.props.value}</option>;
//     return (
//       <ul>
//         {
//           this.renderTheList()
//         }
//       </ul>
//     )
//   }
// });
//
// var MyBigListContainer = React.createClass({
//   render: function(){
//     var myStyles = {
//       border: '1px solid #999',
//       display: 'inline-block',
//       paddingRight: '50px',
//       paddingLeft: '30px',
//       color: 'red'
//     };
//     var valList1 = ['volvo', 'saab', 'mercedes', 'audi'];
//     var valList2 = ['lollipops', 'tacos', 'pizza', 'coffee'];
//     return ( // react div element, via JSX, containing <MyOption> component
//       <div style={myStyles}>
//         <MyListComponent valList={valList1}></MyListComponent>
//         <MyListComponent valList={valList2}></MyListComponent>
//       </div>
//     );
//   }
// });
//
// ReactDOM.render(
//   <MyBigListContainer/>,
//   document.getElementById('react-app')
// );



/**** Part 6 - State and Events --> big counter! ****/
// var React = require('react');
// var ReactDOM = require('react-dom');
//
// var App = React.createClass({
// 	// getInitialState: function() {
// 	// 	return {
// 	// 		counter: 0,
//   //     name: 'liza'
// 	// 	};
// 	// },
// 	// increment: function(event) {
// 	// 	this.setState({
// 	// 		counter: this.state.counter += 1
// 	// 	});
// 	// },
// 	// decrement: function(event) {
//   //   // console.log(event);
//   //   console.log(event.nativeEvent);
// 	// 	this.setState({
// 	// 		counter: this.state.counter -= 1
// 	// 	});
// 	// },
// 	render: function() {
// 		console.log("STATE:", this.state);
// 		return (
// 			<div className="App">
//         <button onClick={this.increment}>+</button>
//   				<h1>{this.state.counter}</h1>
//         <button onClick={this.decrement}>-</button>
// 			</div>
// 		);
// 	}
// });
//
// ReactDOM.render(
//   <App />,
//   document.getElementById('react-app')
// );






/*********************/



/**** Part 7 - Passing callbacks to children from parents through props --> color changer ****/
// var React = require('react');
// var ReactDOM = require('react-dom');
//
// var ColorChanger = React.createClass({
//
//   /**** OPTION 1: ES6 ****/
//   // render: function() {
//   //   return (
//   //     <ul>
//   //       {
//   //         this.props.colors.map((color, i) => {
//   //           return <li key={i}><a onClick={ () => { this.props.onNewColorSelected(color) } }>{color}</a></li>
//   //         })
//   //       }
//   //     </ul>
//   //   );
//   // }
//   /**** END OPTION 1 ****/
//
//   /**** OPTION 2 ****/
//   // render: function() {
//     return (
//       <ul>
//         {
//           this.props.colors.map(function(color, i) {
//             return <li key={i}><a onClick={this.props.onNewColorSelected.bind(null, color)}>{color}</a></li>
//           }.bind(this))
//         }
//       </ul>
//     );
//   }
//   /**** END OPTION 2 ****/
//
//   /**** OPTION 3 ****/
//     render: function() {
//       return (
//         <ul>
//           {
//             this.props.colors.map(function(color, i) {
//               return <li key={i}><a onClick={ function() { this.props.onNewColorSelected(color) }.bind(this) }>{color}</a></li>
//             }.bind(this))
//           }
//         </ul>
//       );
//     }
//   /**** END OPTION 3 ****/
//
// }); // end color changer component
//
//
// var App = React.createClass({
// 	getInitialState: function() {
// 		return {
//       bgColor: 'red'
// 		};
// 	},
//   changeBackgroundColor: function(color) {
//     this.setState({
//       bgColor: color
//     });
//   },
// 	render: function() {
//     const colors = ['red', 'blue', 'yellow', 'green'];
//     const colors2 = ['orange', 'pink'];
//     const colors3 = ['grey', 'purple'];
// 		return (
// 			<div style={{backgroundColor: this.state.bgColor, cursor: 'pointer', color: 'white'}}>
//         <ColorChanger colors={colors} onNewColorSelected={this.changeBackgroundColor} />
//         <br /><br /><br />
//         <ColorChanger colors={colors2} onNewColorSelected={this.changeBackgroundColor} />
//         <br /><br /><br />
//         <ColorChanger colors={colors3} onNewColorSelected={this.changeBackgroundColor} />
// 			</div>
// 		);
// 	}
//
// }); // end App
//
// ReactDOM.render(
//   <App />,
//   document.getElementById('react-app')
// );




/**** Part 8 - Component Lifecycle ***/
// var React = require('react');
// var ReactDOM = require('react-dom');
//
// var App = React.createClass({
//   getInitialState: function() { // 1
//     console.log('getInitialState');
//     return {};
//   },
//
//   componentWillMount: function() { // 2
//     console.log('componentWillMount')
//   },
//
//   componentWillUnmount: function() {
//     console.log('componentWillUnmount')
//   },
//
//   componentWillReceiveProps: function(nextProps) {
//     console.log('componentWillReceiveProps')
//   },
//
//   shouldComponentUpdate: function() {
//     console.log('shouldComponentUpdate');
//     return true;
//   },
//
//   componentWillUpdate: function() {
//     console.log('componentWillUpdate')
//   },
//
//   componentDidUpdate: function() {
//     console.log('componentDidUpdate')
//   },
//
//   render: function() { // 3
//     console.log('render');
//     return <p>Hello</p>;
//   }
// });
//
// ReactDOM.render(
//   <App myprop={9} />,
//   document.getElementById('react-app')
// );





/**** Part 6.1 - State & Events --> big counter changes parent bg color ****/
// child --> state: counter
// parent --> state: bg color
// parent passes child cbfxn as prop
// when button clicked, increase/decrease counter & trigger this.props.cbfxn

// var React = require('react');
// var ReactDOM = require('react-dom');
//
// var Counter = React.createClass({
// 	getInitialState: function() {
// 		return {
// 			counter: 0,
//       name: 'liza'
// 		};
// 	},
// 	increment: function(event) {
//     console.log(event.nativeEvent);
// 		this.setState({
// 			counter: this.state.counter += 1
// 		});
//     this.props.changeParentFxn();
// 	},
// 	decrement: function(event) {
// 		this.setState({
// 			counter: this.state.counter -= 1
// 		});
//     this.props.changeParentFxn();
// 	},
// 	render: function() {
// 		// console.log("STATE:", this.state);
// 		return (
// 			<div className="counter">
//         <button onClick={this.increment}>+</button>
//   				<h1>{this.state.counter}</h1>
//         <button onClick={this.decrement}>-</button>
// 			</div>
// 		);
// 	}
// });
//
// var App = React.createClass({
//   getInitialState: function() {
//     return {
//       bgColor: 'gray'
//     }
//   },
//   changeParentColor: function() {
//     console.log('hello world');
//     const colors = ['red', 'blue', 'green', 'yellow', 'pink', 'purple'];
//     var randColorIndex = Math.floor(Math.random() * colors.length);
//     console.log("randColorIndex", randColorIndex);
//     this.setState({
//       bgColor: colors[randColorIndex]
//     });
//     console.log('APP STATE: ', this.state);
//   },
//   render: function() {
//     return(
//       <div className="app" style={{backgroundColor: this.state.bgColor, color: 'white'}}>
//         <Counter changeParentFxn={this.changeParentColor}/>
//       </div>
//     );
//   }
// });
//
// ReactDOM.render(
//   <App />,
//   document.getElementById('react-app')
// );






//
