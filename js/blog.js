const container = document.getElementById('blog-wrapper');
const loadButton = document.getElementById('load');
const filterWrapper = document.getElementById('filter');
const filterButtons = document.querySelectorAll('.blog__filter-button');

let DATA_LENGTH = 0;
let DATA_LIMIT = 6;
let chosenFilter = 'Barchasi';


const fetchData = async() => {
    const res = await fetch('./js/data.json')
    const data = await res.json();
    return data;
}

const filterData = async() => {   
    const resData = await fetchData() ;
    let filteredData = [];
    console.log(resData, chosenFilter);
    
    if(chosenFilter === "Barchasi"){
        filteredData = [...resData]
    } else{
        filteredData = [...resData.filter(data => data.type == chosenFilter)];
    }
    
    DATA_LENGTH = filteredData?.length;
    const data = filteredData?.slice(0, DATA_LIMIT)
    return data
}

const createDOMElement = tegName => {
    return document.createElement(tegName)
}

const createElement = (item) => {
    //create element
    const blogItem = createDOMElement('div');
    const title = createDOMElement('h3');
    const image = createDOMElement('img');
    const imageWrapper = createDOMElement('div');
    const desc = createDOMElement('p');
    const type = createDOMElement('span');
    const views = createDOMElement('span');
    const viewsWrapper = createDOMElement('div');
    const eyeImage = createDOMElement('img');
    const date = createDOMElement('span');
    const blogDateAndViewsWrapper = createDOMElement('div')
    
    //add attribute
    blogItem.setAttribute('id', item?.id)
    blogItem.setAttribute('class', 'blog__item');
    title.setAttribute('class', 'blog__title');
    desc.setAttribute('class', 'blog__desc');
    image.setAttribute('class', 'blog__image');
    imageWrapper.setAttribute('class', 'blog__image-wrapper');
    type.setAttribute('class', 'blog__type');
    views.setAttribute('class', 'blog__views');
    viewsWrapper.setAttribute('class', 'blog__views-wrapper');
    eyeImage.setAttribute('class', 'blog__views-icon')
    date.setAttribute('class', 'blog__date');
    blogDateAndViewsWrapper.setAttribute('class', 'blog__header-wrapper');
    
    
    //add content
    title.textContent = item?.title;
    image.setAttribute('src', item?.image);
    desc.textContent = item?.description;
    type.textContent = item?.type;
    views.textContent = item?.views;
    // viewsWrapper.innerHTML= ` 
    // <svg>
    //   <use xlink:href="${svg}"></use>
    // </svg>
    // <span class="blog__views">${item?.views}</span>`
    eyeImage.setAttribute('src',  '../assets/images/eye.svg');
    date.textContent = item?.date;
    
    //append childs
    blogItem.appendChild(type);
    imageWrapper.appendChild(image)
    blogItem.appendChild(imageWrapper);
    blogDateAndViewsWrapper.appendChild(date);
    viewsWrapper.appendChild(eyeImage);
    viewsWrapper.appendChild(views);
    blogDateAndViewsWrapper.appendChild(viewsWrapper);
    blogItem.appendChild(blogDateAndViewsWrapper);
    blogItem.appendChild(title);
    blogItem.appendChild(desc);
    
    //appended by container
    container.appendChild(blogItem);
    
    //hover styles
    if(blogItem.hover){
        image.styles.transform.scale = 1.1
    }
    
    
}

const createNotFoundContent = () => {
    container.innerHTML = "Kechirasiz, ma'lumot topilmadi :(";
    container.classList.add('blog__empty');
}

const displayData = async() => {
    container.innerHTML = null; 
    const data = await filterData();
    console.log(data); 
    if(data.length){
        container.classList.remove('blog__empty');
        data.forEach(element => {
            createElement(element);
        });    
    } else{
        createNotFoundContent();
    }
    if(DATA_LIMIT > 6){
        window.scrollTo({
            top: loadButton.offsetTop,
            behavior: 'smooth' // Optional smooth scrolling animation
          });
    }
}


loadButton.addEventListener('click', () => {
    if(DATA_LIMIT >= DATA_LENGTH){
        DATA_LIMIT = 3;
        loadButton.textContent = "Ko'proq ko'rish" ;  
        displayData();
    } else{
        DATA_LIMIT = DATA_LIMIT+=3;
        displayData();    
        if(DATA_LIMIT>=DATA_LENGTH)
        loadButton.textContent = "Kamroq ko'rish" ;   
    }
})

// Filters

const removeActiveClasses = () => {
    filterButtons.forEach(button => {
        button.classList.remove('active')
    })
}

const addActiveClass = () => {
    filterButtons.forEach(button => {
        if(button.id === chosenFilter){
            button.classList.add('active')
        } 
    })
}

filterButtons.forEach(button => {
    button.addEventListener('click', (e) => {
        if(chosenFilter !== e.target?.id){
            chosenFilter = e.target?.id;
            displayData(); 
        } 
        removeActiveClasses()
        addActiveClass();
        
    })
})

addActiveClass();
displayData();

targetElement.scrollIntoView({ behavior: 'smooth' });