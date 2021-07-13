const btn = document.querySelector('button')
const input= document.querySelector('input');


btn.addEventListener('click',function() {
    fetch('https://discord.com/api/webhooks/864416979732267039/N9nO2YSjG4EhFkA6z2UGwbXzucBG4bEYWA9JQCFKMnM5GYLKXRV8SaLI-p1m9HWYLqqQ',{
          method: 'post',
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
            },
        body:JSON.stringify({content:input.value})
    }).then(res =>res.json())
    .then(res=>console.log(res)) 
})
