document.getElementById('advice-btn').addEventListener('click', async () => {
    const res = await fetch(`https://api.adviceslip.com/advice`);
    const data = await res.json();
    showAdvice(data.slip);
})

const showAdvice = (data) => {
    const { advice, id } = data;
    // console.log(data);
    const adviceCont = document.getElementById('advice-container');
    adviceCont.innerText = '';
    const div = document.createElement('div');
    div.innerHTML = `
    <h4 class=" text-xs card-title justify-center text-green-400"># ${id}</h4>
    <p class="text-xl font-bold">${advice}</p>
    <hr class="mt-4">
    `;
    adviceCont.appendChild(div);
}