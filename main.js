document.addEventListener('DOMContentLoaded',function() {
        
    const endpoint = 'https://api.github.com/users/claudiomaesi';   
    const nameElement = document.querySelector('#name');
    const loginElement = document.querySelector('#login');
    const avatarElement = document.querySelector('#avatar');
    const followingElement = document.querySelector('#following');
    const followersElement = document.querySelector('#followers');
    const reposElement = document.querySelector('#public_repos');
    const html_urlElement = document.querySelector('#html_url');
    
    fetch(endpoint).
    then(function(resposta){
        return resposta.json();                
    }).
    then(function(json) {
        nameElement.innerText = json.name;
        loginElement.innerText = json.login;
        avatarElement.src = json.avatar_url;
        followingElement.innerText = json.following;
        followersElement.innerText = json.followers;
        reposElement.innerText = json.public_repos;
        html_urlElement.href = json.html_url;
    })
    // .catch(function(erro) {
    //     alert('Ocorreu um erro, tente mais tarde.');
    // })
})