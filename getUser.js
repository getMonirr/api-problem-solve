
const getUser = async (userName) => {
  const res = await fetch(`https://api.github.com/users/${userName}`)
  const data = await res.json()
  showUser(data);
}
const showUser = user => {
  console.log(user);
  const { avatar_url: image, name, login, created_at: date, bio, public_repos: repo, followers, following, location, twitter_username, html_url } = user;
  const myDate = new Date(date);
  const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun",
    "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
  ];

  const showUserElement = document.getElementById('show-user');
  showUserElement.innerHTML = `
        <div class=" flex  lg:w-1/2 mx-auto mt-12 border-4 p-4 border-violet-600 ">
            <div >
                <img class="rounded-full w-6/12"  src="${image}" alt="Movie"/>
            </div>
            <div class="">
              <div class="flex space-x-36">
                <div>
                    <h2 class="text-2xl font-semibold text-white">${name}</h2>
                    <p class="text-blue-400">${login}</p>
                    <p class="my-4">${bio ? bio : "This profile has no bio"}</p>
                  </div>
                  <div>
                    <p class="text-gray-400">Joined ${myDate.getDay()} ${monthNames[myDate.getMonth()]} ${myDate.getFullYear()}</p>
                  </div>
              </div>
              <div class="flex gap-24 bg-gray-800 p-4 rounded-lg">
                <div>
                    <p>Repos</p>
                    <p class="font-bold text-2xl">${repo}</p>
                </div>
                <div>
                    <p>Followers</p>
                    <p class="font-bold text-2xl">${followers}</p>
                </div>
                <div>
                    <p>Following</p>
                    <p class="font-bold text-2xl">${following}</p>
                </div>
              </div>
              <div class="grid grid-cols-2 gap-4 my-4">
                <div class="space-x-4"><svg class="inline" xmlns="http://www.w3.org/2000/svg" fill="white" width="24" height="24" viewBox="0 0 24 24"><path d="M12 0c-4.198 0-8 3.403-8 7.602 0 4.198 3.469 9.21 8 16.398 4.531-7.188 8-12.2 8-16.398 0-4.199-3.801-7.602-8-7.602zm0 11c-1.657 0-3-1.343-3-3s1.343-3 3-3 3 1.343 3 3-1.343 3-3 3z"/></svg> <span>${location ? location : 'not available'}</span></div>
                <div class="space-x-4"><svg class="inline" xmlns="http://www.w3.org/2000/svg" fill = "white"width="24" height="24" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/></svg> <span>${twitter_username ? twitter_username : 'not available'}</span></div>
                <div class="flex items-center justify-center"><svg fill="white" class="inline m-2 w-[50px]" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M6.188 8.719c.439-.439.926-.801 1.444-1.087 2.887-1.591 6.589-.745 8.445 2.069l-2.246 2.245c-.644-1.469-2.243-2.305-3.834-1.949-.599.134-1.168.433-1.633.898l-4.304 4.306c-1.307 1.307-1.307 3.433 0 4.74 1.307 1.307 3.433 1.307 4.74 0l1.327-1.327c1.207.479 2.501.67 3.779.575l-2.929 2.929c-2.511 2.511-6.582 2.511-9.093 0s-2.511-6.582 0-9.093l4.304-4.306zm6.836-6.836l-2.929 2.929c1.277-.096 2.572.096 3.779.574l1.326-1.326c1.307-1.307 3.433-1.307 4.74 0 1.307 1.307 1.307 3.433 0 4.74l-4.305 4.305c-1.311 1.311-3.44 1.3-4.74 0-.303-.303-.564-.68-.727-1.051l-2.246 2.245c.236.358.481.667.796.982.812.812 1.846 1.417 3.036 1.704 1.542.371 3.194.166 4.613-.617.518-.286 1.005-.648 1.444-1.087l4.304-4.305c2.512-2.511 2.512-6.582.001-9.093-2.511-2.51-6.581-2.51-9.092 0z"/></svg> <span>${html_url}</span></div>
                <div class="space-x-4"><svg class="inline" fill="white" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M16 2c3.309 0 6 2.691 6 6s-2.691 6-6 6-6-2.691-6-6 2.691-6 6-6zm0-2c-4.418 0-8 3.582-8 8s3.582 8 8 8 8-3.582 8-8-3.582-8-8-8zm-5.405 16.4l-1.472 1.6h-3.123v2h-2v2h-2v-2.179l5.903-5.976c-.404-.559-.754-1.158-1.038-1.795l-6.865 6.95v5h6v-2h2v-2h2l2.451-2.663c-.655-.249-1.276-.562-1.856-.937zm7.405-11.4c.551 0 1 .449 1 1s-.449 1-1 1-1-.449-1-1 .449-1 1-1zm0-1c-1.104 0-2 .896-2 2s.896 2 2 2 2-.896 2-2-.896-2-2-2z"/></svg> <span>${login}</span></div>
              </div>
            </div>
          </div>
    `
}
getUser('getahsaan');

document.getElementById('search-btn').addEventListener('click', () => {
  const searchField = document.getElementById('search-field').value;
  getUser(searchField);
})
