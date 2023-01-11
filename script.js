const button = document.querySelector('.btn')
const sidebar = document.querySelector('.sidebar')

button.addEventListener('click', function() {
    sidebar.classList.toggle('is-hidden')
  })

//   let trafficlight = 'red'

//   if(trafficlight === 'red'){
//      alert('stop')
//   }else if(trafficlight === 'yellow'){
//      alert('ready')
//   }else if(trafficlight === 'green'){
//     alert('you are ready to  go')
//   }