// document.addEventListener('keydown', function (e) {
//     const keyDiv = document.querySelector('.key');
  
//     // Display the pressed key and its keycode


//     keyDiv.textContent = `Key: ${e.key}, KeyCode: ${e.keyCode}`;
//   });
  

const insert = document.getElementById('insert')
window.addEventListener('keydown',(e)=>{
  insert.innerHTML = `
  <div class = 'color'>
  <table>
  <tr>
    <th>Key</th>
    <th>Key Code</th>
    <th>code</th>
  </tr>
  <tr>
    <td>${e.key ===" " ? 'Space' : e.key}</td>
    <td>${e.keyCode}</td>
    <td>${e.code}</td>
  </tr>

</table>
  
  </div>`
})