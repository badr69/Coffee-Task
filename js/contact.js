const formContact = document.getElementById("form-contact");

// Fonction pour échapper les caractères spéciaux (sanitize)
function sanitize(input) {
    const div = document.createElement('div');
    div.textContent = input;
    return div.innerHTML;
}

formContact.addEventListener("submit", function(e) {
    e.preventDefault();

    const emailInput = document.getElementById("Email");
    const titreInput = document.getElementById("titre");
    const descInput = document.getElementById("tex-area-contact");

    let isValid = true;

    // Reset classes
    [emailInput, titreInput, descInput].forEach(el => el.classList.remove("is-invalid"));

    // On sanitize les valeurs
    const email = sanitize(emailInput.value.trim());
    const titre = sanitize(titreInput.value.trim());
    const description = sanitize(descInput.value.trim());

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !emailRegex.test(email)) {
        emailInput.classList.add("is-invalid");
        isValid = false;
    }

    // Titre validation
    if (!titre || titre.length < 3) {
        titreInput.classList.add("is-invalid");
        isValid = false;
    }

    // Description validation
    if (!description || description.length < 10) {
        descInput.classList.add("is-invalid");
        isValid = false;
    }

    if (isValid) {
        // Récupérer le tableau existant ou créer un nouveau
        const messages = JSON.parse(localStorage.getItem('messages')) || [];

        // Ajouter le nouveau message
        messages.push({ email, titre, description });

        // Stocker dans localStorage
        localStorage.setItem('messages', JSON.stringify(messages));

        formContact.reset();
        alert("Formulaire envoyé et stocké avec succès !");
    } else {
        const firstInvalid = document.querySelector(".is-invalid");
        firstInvalid.scrollIntoView({ behavior: "smooth" });
    }
});
