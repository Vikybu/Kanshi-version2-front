<script lang="ts">
    import Label from "$lib/components/atom/Label.svelte";
    import Button from "$lib/components/atom/button.svelte";

    let lastname = $state("");
    let firstname = $state("");
    let registrationNumber =$state(0);
    let password = $state("");

    async function createUsers(){
        const dataUsers = {
            lastname, 
            firstname,
            registrationNumber,
            password
        }

        const response = await fetch ("https://localhost:7195/api/Users", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(dataUsers)
        });

        if (!response.ok) {
            console.error("Erreur lors de l'envoi");
            return;
        }

        const result = await response.json();

        console.log("Réponse du serveur :", result);
    }

</script>

<h1>Ma page</h1>

<Label type="string" label="Nom" bind:textInput={lastname} />
<Label type="string" label="Prénom" bind:textInput={firstname} />
<Label type="number" label="Numéro de matricule" bind:textInput={registrationNumber} />
<Label type="string" label="Mot de passe" bind:textInput={password} />
<br>
<Button labelButton="Valider" onclick={createUsers} />
