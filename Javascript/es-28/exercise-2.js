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

for( [city] in order){
  console.log('city is defined');
}