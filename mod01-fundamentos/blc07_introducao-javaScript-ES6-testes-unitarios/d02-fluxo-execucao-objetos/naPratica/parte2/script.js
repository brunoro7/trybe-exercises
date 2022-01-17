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

  const mensagemUser1 = `Olá ${deliveryPerson}, entrega para: ${userName}, Telefone: ${phoneNumber}, ${street}, Nº: ${numberHouse}, AP: ${compEnd}.`;

  console.log(mensagemUser1);
  return mensagemUser1
}

customerInfo(order);

const orderModifier = (order) => {
  let userName2 = order.name;
  userName2 = 'Luiz Silva';
  let paymentUser2 = order.payment;
  paymentUser2 = '50';

  const mensagemUser2 = `Olá ${userName2}, o total do seu pedido de marguerita, pepperoni e Coca-Cola Zero é ${paymentUser2}.`;

  console.log(mensagemUser2);
  return mensagemUser2
}

orderModifier(order);