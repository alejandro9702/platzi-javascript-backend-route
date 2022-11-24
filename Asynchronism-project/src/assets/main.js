const API = 'https://youtube-v31.p.rapidapi.com/search?channelId=UCRs1pHnES3QDdh43xbjOmzw&part=snippet%2Cid&order=date&maxResults=50'

const content = null || document.getElementById('content');
const options = {
    method: 'GET', headers: {
        'X-RapidAPI-Key': 'f0e4cb4288mshc73387e6a7c75e2p169215jsn4a133b9b387a',
        'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
    }
};

// fetch(API, options)
//     .then(response => response.json())
//     .then(response => console.log(response))
//     .catch(err => console.error(err));

async function fetchData(urlApi) {
    const response = await fetch(urlApi, options);
    return await response.json();
}


(async () => {
    console.log("lest do it")
    try {
        const videos = await fetchData(API)
        console.log(videos.items[0].snippet.thumbnails.high.url)

        let view = `
         ${videos.items.map(video => `
         <div class="group relative">
                <div
                        class="w-full bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:aspect-none">
                    <img src="${video.snippet.thumbnails.high.url}" alt="${video.snippet.description}" class="w-full">
                </div>
                <div class="mt-4 flex justify-between">
                    <h3 class="text-sm text-gray-700">
                        <span aria-hidden="true" class="absolute inset-0"></span>
                        ${video.snippet.title}
                    </h3>
                </div>
            </div>
         `).slice(0, 6).join('')}
         
        `;
        content.innerHTML = view;

    } catch (error) {
        console.log(error);
    }
})();

