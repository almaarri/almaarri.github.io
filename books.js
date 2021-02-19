let startingData = 
[{
  id: 1,
  authorFirst: 'Thomas', 
  authorLast: 'Barfield', 
  title: 'Afghanistan: A History', 
  year: 2012, 
  publisher: 'Penguin'
}, {
  id: 2,
  authorFirst: 'Lewis', 
  authorLast: 'Dupree', 
  title: 'Afghanistan', 
  year: 1979, 
  publisher: 'Oxford University Press'
}, {
  id: 3,
  authorFirst: 'Carter', 
  authorLast: 'Malkasian', 
  title: 'War Comes to Garmser', 
  year: 2013, 
  publisher: 'Penguin'
}];

class Books {
	constructor() {
    this.list = document.querySelector('.list-items');
    this.render();

    // event listener for creating new item
    document.querySelector('.btn-add-item').addEventListener('click', this.create.bind(this));
    
    //event listener to update an item
    //document.querySelector('.btn-update').addEventListener('click', this.update.bind(this));


    // event listener to delete and update items
    document.addEventListener('click', event => {
        if (event.target.classList.contains('btn-delete')) {
          this.remove(event);
        }
      if (event.target.classList.contains('btn-edit')) {
        self.renderEditForm(event);
      }
      });

    
      
} //constructor

  // step to render edit form
  renderEditForm(event) {
    let id = event.target.getAttribute('data-id');

    document.querySelector('.edit-popup').classList.remove('hide');
    document.querySelector('.edit-popup').classList.add('show');
    document.querySelector('.btn-update').setAttribute('data-id', id);

    mockData.forEach(item => {
      if (item.id === id) {
        document.querySelector('.edit-item').value = item.title;
      }
    });
}//edit form

     // render function
  render() {
    this.list.innerHTML = '';

    startingData.forEach(item => {
      this.createDomElements(item.id);
      this.li.insertAdjacentHTML('afterbegin', item.authorLast+", "+item.authorFirst+". "+"<i>"+item.title+". "+"</i>"+item.publisher+": "+item.year+".");
      this.list.appendChild(this.li);
    });
  }

   // Create DOM Elements function
    createDomElements(id) {
    this.li = document.createElement('li');
    this.edit = document.createElement('button');
    this.delete = document.createElement('button');

    this.edit.classList.add('btn-edit');
    this.delete.classList.add('btn-delete');

    this.delete.setAttribute('data-id', id);
    this.edit.setAttribute('data-id', id);

    this.edit.innerHTML = 'Edit';
    this.delete.innerHTML = 'Delete';

    this.li.appendChild(this.delete);
    this.li.appendChild(this.edit);
  }

    // Creating new item step
    create() {
        let todoItem = document.querySelector('.item').value;
    
        let newItem = {
          id: Date.now().toString(),
          title: todoItem,
          done: false,
          date: new Date()
        };
    
        startingData.push(newItem);
    
        document.querySelector('.item').value = '';
        this.render();
      } //create

      // Delete item
    remove(event) {
    let id = event.target.getAttribute('data-id');

    startingData = startingData.filter(item => {
      if (item.id != id) {
        return item;
      }
    });
    console.log(startingData);

    this.render();
  }//remove

    //update
    update(event) {
        let id = event.target.getAttribute('data-id');
        let itemTobeUpdated = document.querySelector('.edit-item').value;
    
        mockData = mockData.map(item => {
          if (item.id === id) {
            item['title'] = itemTobeUpdated;
          }document
    
          return item;
        });
    
        document.querySelector('.edit-popup').classList.remove('show');
        document.querySelector('.edit-popup').classList.add('hide');
    
        this.render();
      }
    }

let books = new Books();

