
export async function login(
    registrationNumber: string,
    password: string
) {
    const response = await fetch("/api/auth/login", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            registrationNumber,
            password
        })
    });

    const data = await response.json();

    if (!response.ok) {
        throw new Error(data.message || "Erreur lors de la connexion");
    }

    return data;
}
