
import { json } from "@sveltejs/kit";
import type { RequestHandler } from "./$types";
import { API_URL } from "$env/static/private";
import { dev } from "$app/environment";

export const POST: RequestHandler = async ({ request, cookies, fetch }) => {
    try {
        const { registrationNumber, password } = await request.json();

        const response = await fetch(`${API_URL}/api/auth/login`, {
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
            return json(
                { message: data.message || "Erreur lors de la connexion" },
                { status: response.status }
            );
        }

        cookies.set("kanshi_token", data.token, {
            httpOnly: true,
            secure: !dev,
            sameSite: "lax",
            path: "/",
            maxAge: 60 * 60 * 2
        });

        return json({
            user: {
                id: data.id,
                firstname: data.firstname,
                lastname: data.lastname,
                registrationNumber: data.registrationNumber,
                role: data.role
            }
        });

    } catch (error) {
        console.error("Erreur pendant la connexion à l'API :", error);

        return json(
            { message: "Impossible de contacter le serveur d'authentification." },
            { status: 500 }
        );
    }
};
