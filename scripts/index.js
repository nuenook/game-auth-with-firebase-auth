
const guideList = document.querySelector('.guides')

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

{/* <li>
    <div class="collapsible-header grey lighten-4">Guide title</div>
    <div class="collapsible-body white">Lorem ipsum dolor sit amet.</div>
</li> */}


document.addEventListener('DOMContentLoaded', function() {

    var modals = document.querySelectorAll('.modal');
    M.Modal.init(modals);
  
    var items = document.querySelectorAll('.collapsible');
    M.Collapsible.init(items);
  
  });