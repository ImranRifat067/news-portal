const selectCategory = async () => {
    const response = await fetch(' https://openapi.programming-hero.com/api/news/categories') ;
    const data = await response.json();
    const allCategory = data.data.news_category;
    
    const categoryContainer = document.getElementById('category-container');
    const selectCategory = document.getElementById('select-category');
    allCategory.forEach(item => {
        // console.log(item);
        const div = document.createElement('div');
        div.innerHTML = `<button class="btn">${item.category_name}</button>`;
        categoryContainer.appendChild(div);

        const option = document.createElement('option');
        option.innerText = item.category_name;
        selectCategory.appendChild(option);
    });
}

const loadNews = async() => {
    const response = await fetch('https://openapi.programming-hero.com/api/news/category/01');
    const data = await response.json();
    const newsCard = data.data
    // console.log(newsCard);

    const cardContainer = document.getElementById('card-container');
    newsCard.forEach(items =>{
        console.log(items);
        // console.log(items.rating.number);
        const div = document.createElement('div');
        div.innerHTML = `
        <div id="card-container" class="space-y-4">
        <div class="flex gap-4 bg-gray-100 py-4  rounded-lg ">
            <div class="w-[444px] pl-4">
                <img class="max-w-full" src="${items.
                    image_url}" alt="">
            </div>
            <div class="pr-8 space-y-4 w-10/12">
                <h3 class="text-2xl font-bold">${items.title}</h3>
                <p>${items.details}</p>
                <div class="flex justify-between items-center mt-3">
                    <div class="flex gap-2 items-center">
                        <div class="w-12">
                            <img class="max-w-full rounded-full" src="${items.author.img}" alt="">
                        </div>
                        <div>
                            <p>${items.author.name}</p>
                        <p class="text-sm text-[#718797]">${items.author.published_date}</p>
                        </div>
                    </div>
                    <div class="flex gap-2 items-center">
                        <i class="fa-solid fa-eye font-light text-2xl opacity-80"></i>
                        <p class="font-bold text-lg"><span>${items.total_view}</span> M</p>
                    </div>
                    <div>${items.rating.number}</div>
                    <div>
                        <button class="text-2xl text-[#5D5FEF]"><i class="fa-solid fa-arrow-right"></i></button>
                    </div>
                </div>
            </div>
        </div>
        
    </div>

        `
        cardContainer.appendChild(div);

    })
}

loadNews();
selectCategory();