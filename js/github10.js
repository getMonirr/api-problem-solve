const loadUserData = async () => {
    try {
        const res = await fetch(`https://api.github.com/users?per_page=10`);
        const data = await res.json();
        setUserData(data);
    } catch (e) {
        console.log(e);
    }
}

const setUserData = (data) => {
    data.forEach(user => {
        displayUserUI(user);
    });
}


const displayUserUI = async(data) => {
    const { login: name, avatar_url: image, id, type,repos_url } = data;

    const followers = await getFollowers(name);

    const userContainer = document.getElementById('user-container');
    const div = document.createElement('div');
    div.innerHTML = `
    <div class="card w-96 bg-base-100 shadow-xl">
    <figure><img class="w-full" src="${image}" alt="Shoes" /></figure>
    <div class="card-body">
      <h2 class="card-title text-4xl">
        ${name}
      </h2>
      <p>If a dog chews shoes whose shoes does he choose?</p>
      <div class="card-actions justify-end">
        <div class="badge badge-outline">Id: ${id}</div> 
        <div class="badge badge-outline">Type: ${type}</div>
      </div>
      <hr class="my-4">
      <h2 class="font-bold text-2xl">Followers</h2>
      <div class="grid grid-cols-2 mx-auto gap-4">
      ${
        followers.map(f => `
        <div class="mx-auto">
      <img class="w-[50px] h-[50px] rounded-full mx-auto mb-2" src="${f.avatar_url}" alt="">
      <h3>Name: ${f.login}</h3>
    </div>
        `).join('')
      }
      </div>
      <div>
      <h3>Repo Link: <a class="text-blue-600" href="${repos_url}">${repos_url}</a></h3>
      </div>
    </div>
  </div>
    `;
    userContainer.appendChild(div);
}

const getFollowers = async(userName) => {
    const res = await fetch(`https://api.github.com/users/${userName}/followers`);
    const data = await res.json();
    return data.slice(0,2);
}

loadUserData();




// const loadUserData = async () => {
//     try {
//         const res = await fetch(`https://api.github.com/users?per_page=10`);
//         const data = await res.json();
//         setUserData(data);
//     } catch (e) {
//         console.log(e);
//     }
// }

// const setUserData = (data) => {
//     data.forEach(user => {
//         displayUserUI(user);
//     });
// }

// const displayUserUI = async (data) => {
//     const { login: name, avatar_url: image, id, type } = data;
//     const followers = await getFollowers(name);
//     const userContainer = document.getElementById('user-container');
//     const div = document.createElement('div');
//     div.innerHTML = `
//     <div class="card w-96 bg-base-100 shadow-xl">
//     <figure><img class="w-full" src="${image}" alt="Shoes" /></figure>
//     <div class="card-body">
//       <h2 class="card-title text-4xl">
//         ${name}
//       </h2>
//       <p>If a dog chews shoes whose shoes does he choose?</p>
//       <div class="card-actions justify-end">
//         <div class="badge badge-outline">Id: ${id}</div> 
//         <div class="badge badge-outline">Type: ${type}</div>
//       </div>
//       <hr class="my-4">
//       <h2 class="font-bold text-2xl">Followers</h2>
//       ${followers.map(follower => `
//         <div>
//           <img class="w-[50px] h-[50px]" src="${follower.avatar_url}" alt="">
//           <h3>Name: ${follower.login}</h3>
//         </div>
//       `).join('')}
//     </div>
//   </div>
//     `;
//     userContainer.appendChild(div);
// }

// const getFollowers = async (userName) => {
//     const res = await fetch(`https://api.github.com/users/${userName}/followers`);
//     const data = await res.json();
//     return data.splice(0, 2);
// }

// loadUserData();
