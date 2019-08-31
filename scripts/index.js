const guideList = document.querySelector('.guides')
const loggedOutLinks = document.querySelectorAll('.logged-out')
const loggedInLink = document.querySelectorAll('.logged-in')

const setupUI = (user) => {
    if(user) {
        // toggle UI elements
        loggedInLink.forEach(item => item.style.display = 'block')
        loggedOutLinks.forEach(item => item.style.display = 'none')
    } else {
        loggedInLink.forEach(item => item.style.display = 'none')
        loggedOutLinks.forEach(item => item.style.display = 'block')
    }
}


//setting up guides
const setupGuides = (data) => {
    let html = '';
    if(data.length) {
        data.forEach(doc => {
        const guide = doc.data()
        const li = `
            <li>
                <div class="collapsible-header grey lighten-4">${guide.title}</div>
                <div class="collapsible-body white">${guide.content}</div>
            </li>
        `;
        html += li
        });

        guideList.innerHTML = html
    } else {
        guideList.innerHTML = `<h5 class="center-align">login to view guides</h5>`
    }
}

document.addEventListener('DOMContentLoaded', function() {

    var modals = document.querySelectorAll('.modal');
    M.Modal.init(modals);
  
    var items = document.querySelectorAll('.collapsible');
    M.Collapsible.init(items);
  
  });