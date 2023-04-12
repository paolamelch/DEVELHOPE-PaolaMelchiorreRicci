// const order = {};

// if (order && order.customer && order.customer.address && !order.customer.address.city) {
//   console.log('City is required');
// }

const order = {
  customer : {
    address: {
      city: ''
    }
  } 
}

const cityName = order.customer.address?.city;
console.log("city is not defined");
