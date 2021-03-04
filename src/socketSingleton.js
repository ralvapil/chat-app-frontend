// var SingletonFactory = (function(){
//   function SingletonClass() {
//     const socket = io("http://localhost:5000");

//     socket.on("connect", () => {
//       console.log('connected')
//     });

//     return io
//   }
//   var instance;
//   return {
//       getInstance: function(){
//           if (instance == null) {
//               instance = new SingletonClass();
//               // Hide the constructor so the returned object can't be new'd...
//               instance.constructor = null;
//           }
//           return instance;
//       }
//  };
// })();