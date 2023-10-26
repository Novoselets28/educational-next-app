'use client'
import { useRouter } from "next/navigation";
import { signIn } from "next-auth/react"
import { useState, type FormEventHandler } from "react";
import TextField from "@mui/material/TextField";
import { Box, Button } from "@mui/material";
import { FormContainer } from "../styles/FormStyle";

const SignInForm = () => {
    const router = useRouter();
    const [signInError, setSignInError] = useState<string | null>(null);

    const handleSubmit: FormEventHandler<HTMLFormElement> = async (event) => {
        event.preventDefault();

        const formData = new FormData(event.currentTarget);

        const res = await signIn("credentials", {
            email: formData.get("email"),
            password: formData.get("password"),
            redirect: false,
          });
      
          if (res && !res.error) {
            router.push("/profile");
          } else {
            setSignInError('Oops, incorrect email or password. Please try again.');
          }
        };

    return (
        <FormContainer onSubmit={handleSubmit}>
            <TextField
                type="email"
                name="email"
                label="Email"
                variant="outlined"
                required
            />
            <TextField
                type="password"
                name="password"
                label="Password"
                variant="outlined"
                required
            />
            <Button type="submit" variant="contained" color="primary">
                Sign In
            </Button>
            {signInError && <Box mt={2} color="error.main">{signInError}</Box>}
        </FormContainer>
    )
}

export {SignInForm};