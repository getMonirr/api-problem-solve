const person = {
    found: 2,
    message: "Found 2 persons",
    result: [
      {
        name: {
          common: "John",
          fullName: ["John", "Doe"]
        },
        age: 32,
        isMale: false,
        address: {
          street: "13/A St Joseph",
          house: 10,
        },
      },
      {
        name: {
          common: "Humayoun",
          fullName: ["Humayoun", "Kabir"]
        },
        age: 33,
        isMale: false,
        address: {
          street: "13/A St Lucia",
          house: 11,
        },
      },
      {
        name: {
          common: "Humayoun",
          fullName: ["Humayoun", "Kabir"]
        },
        age: 33,
        isMale: false,
        address: {
          street: "13/A St Lucia",
          house: 11,
        },
      },
    ]
  };

const getUserData = (person) => {
    person.result.forEach(user => {
        displayUserUI(user);
    })
}

const displayUserUI = (user) => {
    const {name,age,address} = user;
    const {street,house} = address;

    const userContainer = document.getElementById('user-container');
    const div = document.createElement('div');
    div.innerHTML = `
    <div class="border border-slate-500/50 m-4 rounded-lg">
    <h2 class="bg-gray-900 p-4 rounded-t-lg">Person Name: ${name.common} </h2>
    <p class="px-4 py-2">Age: ${age} </p>
    <p class="px-4 py-2">Street: ${street}, House: ${house} </p>
  </div>
    `;
    userContainer.appendChild(div);
    
}
getUserData(person)