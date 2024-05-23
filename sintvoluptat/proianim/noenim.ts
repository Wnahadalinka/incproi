interface Address {
  street: string;
  city: string;
  state: string;
  zipCode: string;
  country: string;
}

function createAddress(street: string, city: string, state: string, zipCode: string, country: string): Address {
  return { street, city, state, zipCode, country };
}

// Usage
const address = createAddress('123 Main St', 'Anytown', 'CA', '12345', 'USA');
