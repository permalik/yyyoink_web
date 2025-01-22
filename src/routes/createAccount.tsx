import { createFileRoute } from "@tanstack/react-router";
import BaseLayout from "../components/BaseLayout.tsx";
import CreateAccountForm from "../components/CreateAccountForm.tsx";

export const Route = createFileRoute("/createAccount")({
  component: CreateAccountComponent,
});

function CreateAccountComponent() {
  return (
      <>
        <BaseLayout>
          <h1>Get Started</h1>
          <CreateAccountForm/>
        </BaseLayout>
      </>
  );
}
