
// const trash = document.getElementsByClassName("fa-trash");
const deleteButton = document.getElementsByClassName('delete')
const checkmark = document.getElementsByClassName('checkmark')
const xMark = document.getElementsByClassName('xMark')

Array.from(checkmark).forEach(function (element) {
  element.addEventListener('click', function () {
    const taskSpan = this.closest('li').childNodes[3]//span on same line
    const task = this.closest('li').childNodes[3].innerText//username node
    // console.log(task)
    fetch('messages', {
      method: 'put',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        'task': task
      })
    })
      .then(response => {
        if (response.ok) return response.json()
      })
      .then(data => {
        console.log(data)
        taskSpan.classList.add('strikethrough')
        // window.location.reload(true)
      })
  });
});

/////////////////////////////////////NOW NEED TO REMOVE STRIKETHROUGH/////////////////////////////
Array.from(xMark).forEach(function (element) {
  element.addEventListener('click', function () {
    const taskSpan = this.closest('li').childNodes[3]//span on same line
    const task = this.closest('li').childNodes[3].innerText//username node
    console.log(task)
    fetch('messages', {
      method: 'put',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        'task': task
      })
    })
      .then(response => {
        if (response.ok) return response.json()
      })
      .then(data => {
        console.log(data)
        taskSpan.classList.remove('strikethrough')
        // window.location.reload(true)
      })
  });
});


Array.from(deleteButton).forEach(function (element) {
  element.addEventListener('click', function () {
    const task = this.closest('li').childNodes[3].innerText//text of to do item node
    fetch('messages', {
      method: 'delete',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        'task': task
      })
    }).then(function (response) {
      window.location.reload()
    })
  });
});
