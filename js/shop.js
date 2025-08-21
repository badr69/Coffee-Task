// On récupère le container (même ID que dans le HTML)
const coffeeContainer = document.getElementById('coffee-container');

// Fetch pour récupérer les données du fichier JSON
fetch('data.json')
  .then(response => response.json())
  .then(coffees => {
    console.log("Données JSON :", coffees); // Debug

    coffees.forEach(coffee => {
      const card = `
        <div class="pricing-column col-lg-4 col-md-6 mb-4">
          <div class="card">
            <div class="card-header"><h3>${coffee.name}</h3></div>
            <div class="card-body">
              <p>${coffee.description}</p>
              <p>${coffee.price}</p>
              <button class="btn btn-lg btn-dark w-100" type="button">Buy it now</button>
            </div>
          </div>
        </div>
      `;
      coffeeContainer.insertAdjacentHTML("beforeend", card);
    });
  })
  .catch(error => console.error('Erreur fetch:', error));
