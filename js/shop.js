// On récupère le container
const coffeeContainer = document.getElementById('coffee-container');

// Fonction asynchrone pour récupérer les données
async function loadCoffees() {
  try {
    const response = await fetch('data.json');
    const coffees = await response.json();
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

  } catch (error) {
    console.error('Erreur fetch:', error);
    coffeeContainer.innerHTML = "<p>Impossible de charger les cafés.</p>";
  }
}

// Appel de la fonction
loadCoffees();

