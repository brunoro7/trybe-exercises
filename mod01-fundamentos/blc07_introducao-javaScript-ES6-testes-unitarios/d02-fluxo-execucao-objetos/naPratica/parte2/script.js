const order = {
  name: 'Rafael Andrade',
  phoneNumber: '11-98763-1416',
  address: {
    street: 'Rua das Flores',
    number: '389',
    apartment: '701',
  },
  order: {
    pizza: {
      marguerita: {
        amount: 1,
        price: 25,
      },
      pepperoni: {
        amount: 1,
        price: 20,
      }
    },
    drinks: {
      coke: {
        type: 'Coca-Cola Zero',
        price: 10,
        amount: 1,
      }
    },
    delivery: {
      deliveryPerson: 'Ana Silveira',
      price: 5,
    }
  },
  payment: {
    total: 60,
  },
};

const customerInfo = (order) => {
  const userName = order.name;
  const deliveryPerson = order.order.delivery.deliveryPerson;
  const phoneNumber = order.phoneNumber;
  const street = order.address.street;
  const numberHouse = order.address.number;
  const compEnd = order.address.apartment;

  const mensagem = `Olá ${deliveryPerson}, entrega para: ${userName}, Telefone: ${phoneNumber}, ${street}, Nº: ${numberHouse}, AP: ${compEnd}`;

  console.log(mensagem);

}

customerInfo(order);

// const orderModifier = (order) => {
//   // Adicione abaixo as informações necessárias.
//   console.log('oi 2');
// }

// orderModifier(order);