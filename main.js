// -----------------OFFERS----------------------------

Array.from(document.getElementsByTagName('input')).forEach((e, i) => {
    e.addEventListener('keyup', (el) => {
        if (e.value.length > 0) {
            document.getElementsByClassName('bi-caret-down-fill')[i].style.transform = "rotate(180deg)";
        } else {
            document.getElementsByClassName('bi-caret-down-fill')[i].style.transform = "rotate(0deg)";
        }
    })
})

// -----------------MENU----------------------------

function openmenu() {
    document.getElementById("navbar").style.right = "0";
}

function closemenu() {
    document.getElementById("navbar").style.right = "-200px";
}

// -----------------REVIEW----------------------------

document.addEventListener('DOMContentLoaded', () => {
  const initialReviews = [
    {
      name: "Amar Singh",
      destination: "Paris, France",
      review: "An absolutely magical city. The Eiffel Tower at night is unforgettable!"
    },
    {
      name: "Sagar Singh",
      destination: "Kyoto, Japan",
      review: "A peaceful escape with beautiful temples and delicious ramen."
    },
    {
      name: "Fatima",
      destination: "Cape Town, South Africa",
      review: "Stunning views from Table Mountain and a vibrant cultural scene."
    }
  ];

  const reviewList = document.getElementById('review-list');

  initialReviews.forEach(({ name, destination, review }) => {
    const li = document.createElement('li');
    li.className = 'review-item';
    li.innerHTML = `
      <strong>${name}</strong> visited <em>${destination}</em><br/>
      <p>${review}</p>
    `;
    reviewList.appendChild(li);
  });
});

document.getElementById('review-form').addEventListener('submit', function (e) {
  e.preventDefault();

  const name = document.getElementById('name').value.trim();
  const destination = document.getElementById('destination').value.trim();
  const reviewText = document.getElementById('review').value.trim();

  if (name && destination && reviewText) {
    const reviewList = document.getElementById('review-list');

    const li = document.createElement('li');
    li.className = 'review-item';
    li.innerHTML = `
      <strong>${name}</strong> visited <em>${destination}</em><br/>
      <p>${reviewText}</p>
    `;

    reviewList.prepend(li);

    // Clear the form
    document.getElementById('review-form').reset();
  }
});
