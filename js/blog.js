const container = document.getElementById('blog-wrapper');
const data = []; 


//constants
const DATA_LIMIT = 6;

const fetchData = async() => {
    const res = await fetch('./js/data.json')
    const data = await res.json();
    console.log(data);
    return data;
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

const displayData = async() => {
    const resData = await fetchData() ;
    const data = resData?.slice(0, DATA_LIMIT)

    data.forEach(element => {
        createElement(element)
    });    
}

displayData();