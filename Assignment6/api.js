document.getElementById('searchBtn').addEventListener('click', function() {
    const username = document.getElementById('username').value;
    const profileContainer = document.getElementById('profile');
    
    // Clear previous profile
    profileContainer.innerHTML = '';

    if (username) {
        fetch(`https://api.github.com/users/${username}`)
            .then(response => response.json())
            .then(data => {
                if (data.message === "Not Found") {
                    profileContainer.innerHTML = `<div class="alert alert-danger" role="alert">User not found!</div>`;
                } else {
                    profileContainer.innerHTML = `
                        <div class="card">
                            <div class="card-body">
                                <div class="row">
                                    <div class="col-md-3">
                                        <img src="${data.avatar_url}" class="img-fluid rounded-circle profileimg" alt="Profile Picture">
                                    </div>
                                    <div class="col-md-9">
                                        <h3>${data.name || data.login}</h3>
                                        <ul class="list-group mt-3">
                                            <li class="list-group-item">
                                            <span>${data.followers}&nbsp;&nbsp;<strong>Followers</strong></span>
                                            <span>${data.following}&nbsp;&nbsp;<strong>Following</strong></span>
                                            <span>${data.public_repos}&nbsp;&nbsp;<strong>Repos</strong></span>
                                            </li>
                                        </ul>
                                        <div class="d-flex flex-row mb-3">
                                            <div class="p-1">
                                            <a class="btn btn-primary" href="${data.html_url}" role="button">
                                            </a>
                                    </div>
                                    </div>
                                </div>
                            </div>
                        </div>`;
                }
            })
            .catch(error => {
                profileContainer.innerHTML = `<div class="alert alert-danger" role="alert">Error fetching data!</div>`;
                console.error('Error:', error);
            });
    } else {
        profileContainer.innerHTML = `<div class="alert alert-warning" role="alert">Please enter a username!</div>`;
    }
});
