document.getElementById('search-btn').addEventListener('click', async () => {
    const searchText = document.getElementById('search-input').value;
    try {
        const res = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${searchText}`);
        const data = await res.json();
        showDisplayUI(data[0]);

    } catch (e) {
        if(e) {
            document.getElementById('warning').classList.remove('hidden');
        }
    }
})

const showDisplayUI = (data) => {

    document.getElementById('warning').classList.add('hidden');

    const showContainer = document.getElementById('show-container');
    showContainer.innerHTML = '';
    const { word, phonetic, meanings, sourceUrls, phonetics
    } = data;
    console.log(data);
    const div = document.createElement('div');
    div.innerHTML = `
    <div class="w-[550px] mx-auto my-10 border-primary border-4 p-8">
        <div class="flex justify-between items-center">
          <div>
            <h1 class="text-4xl">${word}</h1>
            <h3>${phonetic ? phonetic : "not found"} </h3>
          </div>
          <button onclick="playAudio()" class="btn btn-primary rounded-full text-4xl text-white p-4">
          <audio id="myAudio">
            <source src="${phonetics[2]?.audio}" type="audio/mpeg">
            </audio>
            <svg height="" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path fill="white" d="M73 39c-14.8-9.1-33.4-9.4-48.5-.9S0 62.6 0 80V432c0 17.4 9.4 33.4 24.5 41.9s33.7 8.1 48.5-.9L361 297c14.3-8.7 23-24.2 23-41s-8.7-32.2-23-41L73 39z"/></svg>
          </button>
        </div>
        <div class="flex justify-center items-center gap-4 mt-4">
          <h3 class="inline-block">Noun: </h3>
          <hr class="w-96 mt-1">
        </div>
        <h3 class="mt-8 mb-2">Meaning</h3>
        <ul class="indent-4 list-disc list-inside">
          ${meanings[0].definitions.map((d => `<li>${d.definition}</li>`)).join('')}
        </ul>
        <h3 class="mt-8 mb-2 ">Synonyms <span class="indent-4 text-secondary">${meanings[0]?.synonyms.length !== 0 ? meanings[0]?.synonyms.map(s => s).join(', ') : 'not found'}</span></h3>
        <div class="flex justify-center items-center gap-4 mt-4">
          <h3 class="inline-block">Verb: </h3>
          <hr class="w-96 mt-1">
        </div>
        <h3 class="mt-8 mb-2">Meaning</h3>
        <ul class="indent-4 list-disc list-inside">
        ${meanings[1]?.definitions.map((d => `<li>${d?.definition}</li><p class="indent-12 text-gray-500">${d.example ? d.example : 'not found'}</p>`)).join('')}
        </ul>
        <hr class="my-4">
        <p class="my-4">Source : <span><a href="${sourceUrls[0]}">${sourceUrls[0]}</a></span></p>
      </div>
    `;
    showContainer.appendChild(div);
}

const playAudio = () => {
    const audioFile = document.getElementById('myAudio');
    audioFile.play();
    console.log("object");
}