const data = [
    {
        name: 'Okwe Brain',
        age: 32,
        gender: 'Male',
        lookingfor: 'Female',
        location: 'Usen',
        image: './image/person3.jpg'
    },
    {
        name: 'Tosin Jessica',
        age: 28,
        gender: 'Female',
        lookingfor: 'Male',
        location: 'Osogbo',
        image: './image/person1.jpg'
    },
    {
        name: 'Ola Felix',
        age: 30,
        gender: 'Male',
        lookingfor: 'Female',
        location: 'Lagos',
        image: './image/person4.jpg'
    },
]


const profiles = profileItertor(data);

// Call first profile
nextProfile();

// Create event
document.getElementById('next').addEventListener('click', nextProfile);

function nextProfile() {
    const currentProfile = profiles.next().value;
    if(currentProfile !== undefined) {
        document.getElementById('profileDisplay').innerHTML = `
        <ul class="list-group">
        <li class="list-group-item">Name: ${currentProfile.name}</li>
        <li class="list-group-item">Age: ${currentProfile.age}</li>
        <li class="list-group-item">Location: ${currentProfile.location}</li>
        <li class="list-group-item">Preference: ${currentProfile.gender} looking for ${currentProfile.lookingfor}</li>
        </ul>
     `;

     document.getElementById('imageDisplay').innerHTML = `<img src="${currentProfile.image}">`
    } else {
        // NO more profile
        window.location.reload()
    }
}

function profileItertor(profiles) {
    let nextIndex = 0;

    return {
        next: function() {
            return nextIndex < profiles.length ?
            {value: profiles[nextIndex++], done: false} :
            {done:true}
        }
    };

}
