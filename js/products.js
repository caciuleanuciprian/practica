// //Get the button:
mybutton = document.getElementById("myBtn");

// // When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}

// // When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

//sort items by price

document.querySelector('#sort-asc').onclick = mySort;
document.querySelector('#sort-desc').onclick = mySortDesc;
document.querySelector('#sort-default').onclick = mySortDefault;

function mySort() {
    let nav = document.querySelector('.small-container-items');
    for (let i = 0; i < nav.children.length; i++) {
        for (let j = i; j < nav.children.length; j++) {
            if (+nav.children[i].getAttribute('data-price') > +nav.children[j].getAttribute('data-price')) {
                replacedNode = nav.replaceChild(nav.children[j], nav.children[i]);
                insertAfter(replacedNode, nav.children[i]);
            }
        }
    }
}

function mySortDesc() {
    let nav = document.querySelector('.small-container-items');
    for (let i = 0; i < nav.children.length; i++) {
        for (let j = i; j < nav.children.length; j++) {
            if (+nav.children[i].getAttribute('data-price') < +nav.children[j].getAttribute('data-price')) {
                replacedNode = nav.replaceChild(nav.children[j], nav.children[i]);
                insertAfter(replacedNode, nav.children[i]);
            }
        }
    }
}

function mySortDefault() {
    let nav = document.querySelector('.small-container-items');
    for (let i = 0; i < nav.children.length; i++) {
        for (let j = i; j < nav.children.length; j++) {
            if (+nav.children[i].getAttribute('default-order') > +nav.children[j].getAttribute('default-order')) {
                replacedNode = nav.replaceChild(nav.children[j], nav.children[i]);
                insertAfter(replacedNode, nav.children[i]);
            }
        }
    }
}

function insertAfter(elem, refElem) {
    return refElem.parentNode.insertBefore(elem, refElem.nextSibling);
}

document.querySelector('#all').onclick = function(){filter('all');}
document.querySelector('#shirt').onclick = function(){ filter('shirt');}
document.querySelector('#cap').onclick = function(){ filter('cap');}
document.querySelector('#accessory').onclick = function(){ filter('accessory');}

function filter(typefilter) {
    console.log(typefilter);
    const filterBox = document.querySelectorAll('.item');
    filterBox.forEach(elem => {
        elem.classList.remove('hide');
        if (!elem.classList.contains(typefilter) && typefilter !== 'all') {
            elem.classList.add('hide');
        }
    });
}

