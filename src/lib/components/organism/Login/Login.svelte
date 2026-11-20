<script lang="ts">
    import Password from "$lib/components/molecule/Password.svelte";
    import Button from "$lib/components/atom/Button/Button.svelte";
    import RegistrationNumber from "$lib/components/molecule/RegistrationNumber.svelte";
    import { login } from "$lib/services/auth";
    import { goto } from "$app/navigation";

    import "./login.css";

    let registrationNumber = $state("");
    let password = $state("");
    let errorMessage = $state("");
    let loading = $state(false);

    let selectedInput = $state<"registrationNumber" | "password">("registrationNumber");

    async function handleLogin() {
        errorMessage = "";
        loading = true;

        try {
            const data = await login(registrationNumber, password);

            console.log("Connexion réussie :", data);

            await goto("/");

        } catch (error) {
            console.error("Erreur de connexion :", error);

            errorMessage = error instanceof Error
                ? error.message
                : "Une erreur est survenue.";

        } finally {
            loading = false;
        }
    }

    function addNumber(number:string){
        if (selectedInput === "registrationNumber") {
            registrationNumber += number;
        } else {
            password += number;
        }
    }

    function deleteNumber() {
    if (selectedInput === "registrationNumber") {
        registrationNumber = registrationNumber.slice(0, -1);
    } else {
        password = password.slice(0, -1);
    }
}

</script>

<div class="login-global">
    <div class="login-card">

        <div class="login-form">
            <RegistrationNumber bind:value={registrationNumber} onfocus={() => selectedInput = "registrationNumber"} />
            <Password bind:value={password} onfocus={() => selectedInput = "password"}/>

            <div class="login-actions">
                <Button
                    text="Se connecter"
                    variant="primary"
                    type="submit"
                    color="var(--text-primary)"
                    textColor="var(--text-secondary)"
                    fontSize="var(--m)"
                    onclick={handleLogin}
                />
                {#if errorMessage}
                    <p class="error-message">{errorMessage}</p>
                {/if}
            </div>
        </div>

        <div class="login-keypad">
            {#each ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"] as number}
                <Button
                    text={number}
                    variant="primary"
                    color="var(--text-primary)"
                    textColor="var(--text-secondary)"
                    fontSize="var(--m)"
                    onclick={() => addNumber(number)}
                />
            {/each}
            <Button
                    text="<-"
                    variant="primary"
                    type="submit"
                    color="var(--text-primary)"
                    textColor="var(--text-secondary)"  
                    fontSize="var(--m)"
                    onclick={() => deleteNumber()}
                />
        </div>

    </div>
</div>