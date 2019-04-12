const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

let menu_items = document.querySelectorAll('a')
 menu_items.forEach((element, index)=>{
   element.innerHTML = siteContent['nav'][`nav-item-${index+1}`]
   element.style.color = 'green'
  })

 let h1_selector = document.querySelector('h1');
 h1_selector.innerHTML = siteContent['cta']['h1'];

 let top_logo = document.getElementById("cta-img");
 top_logo.setAttribute('src', siteContent["cta"]["img-src"]);

 let button_text = document.querySelector('button');
 button_text.innerHTML = siteContent['cta']['button'];

 let h4_elements = document.querySelectorAll('h4');

 let p_elements = document.querySelectorAll('p')

 let my_source_array = Object.entries(siteContent["main-content"]);

//  for (let j = 0; j < my_source_array.length ; j++) {
//   for (let i = 0; i < my_source_array.length ; i++) {
//       if (my_source_array[i][0].substring(my_source_array[i][0].length - 3) === "-h4") {
//         h4_elements[i].innerHTML = my_source_array[i][1];
//     } else {
//       p_elements[i].innerHTML = my_source_array[i][1];
//     }
//  }
// }  

 h4_elements[0].innerHTML = siteContent['main-content']['features-h4']
 p_elements[0].innerHTML = siteContent['main-content']['features-content']

 h4_elements[1].innerHTML = siteContent['main-content']['about-h4']
 p_elements[1].innerHTML = siteContent['main-content']['about-content']

 let middle_img = document.getElementById('middle-img')
 middle_img.setAttribute('src' , siteContent['main-content']['middle-img-src'])

 h4_elements[2].innerHTML = siteContent['main-content']['services-h4']
 p_elements[2].innerHTML = siteContent['main-content']['services-content']

 h4_elements[3].innerHTML = siteContent['main-content']['product-h4']
 p_elements[3].innerHTML = siteContent['main-content']['product-content']

 h4_elements[4].innerHTML = siteContent['main-content']['vision-h4']
 p_elements[4].innerHTML = siteContent['main-content']['vision-content']

const contact_header = document.querySelector('.contact h4');


contact_header.innerHTML = siteContent["contact"]["contact-h4"];



p_elements[5].innerHTML = siteContent['contact']['address']


p_elements[6].innerHTML = siteContent['contact']['phone']


p_elements[7].innerHTML = siteContent['contact']['email']

const copyright = document.querySelector('footer')

copyright.innerHTML = siteContent['footer']['copyright'];

//.apend
const add_item = document.querySelector('nav')
const a_element = document.createElement('a')
a_element.innerHTML = 'Protfolio'
add_item.append(a_element)
a_element.style.color = 'green'

//.prepend
const pre_a = document.createElement('a')
pre_a.innerHTML = 'Clients'
add_item.prepend(pre_a);
pre_a.style.color = 'green'
