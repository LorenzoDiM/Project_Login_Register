import { Login } from "@mui/icons-material";
import Info from "../InfoComponents/Info";
import AlertComponent from "../PageSystemComponents/AlertComponent";
import "./Login.css";
import { useForm, SubmitHandler } from "react-hook-form";
import { useState } from "react";
import { Link } from "react-router-dom";

export interface FormInput {
  email: string;
  password: string;
}
export default function LoginComponent(): JSX.Element {
  const [isAlertPresent, setAlertPresent] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormInput>();
  const onSubmit: SubmitHandler<FormInput> = async (data) => {
    await new Promise((resolve) => setTimeout(resolve, 500));
    console.log(data);
    setAlertPresent(!isAlertPresent);
  };
  return (
    <>
      {isAlertPresent && (
        <AlertComponent
          messaggio="Hai effettuato il login, dato che non ho una pagina di appoggio ed un
        back-end funzionante, la view sarà sempre questa, nel momento in cui
        lavorerò a livello di backend, sarà possibile anche effettuare
        l'accesso alla view successiva"
        />
      )}
      <div className="divForm">
        <div className="spanTitoloPagina">Accedi al Sito</div>
        <div className="divForm">
          <form onSubmit={handleSubmit(onSubmit)}>
            <input
              id="email"
              type="email"
              placeholder="Inserisci la tua E-mail"
              {...register("email", {
                required: "L'email è necessaria",
                maxLength: {
                  value: 30,
                  message: "L'email deve essere inferiore ai 30 caratteri",
                },
                minLength: {
                  value: 10,
                  message: "L'email deve essere di almeno 10 caratteri",
                },
                pattern: /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/,
              })}
            />
            {errors.email && (
              <div className="erroreMostratoNellaDiv">
                {errors.email.message}
              </div>
            )}
            <br />

            <input
              type="password"
              id="password"
              placeholder="Inserisci la Password"
              {...register("password", {
                required: "Devi inserire la password",
                maxLength: {
                  value: 20,
                  message: "La Password deve avere meno di 20 caratteri",
                },
                minLength: {
                  value: 8,
                  message: "La Password deve essere di almeno 8 caratteri",
                },
                pattern: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
              })}
            />

            {errors.password && (
              <div className="erroreMostratoNellaDiv">
                {errors.password.message}
              </div>
            )}
            <br />
            <button
              disabled={isSubmitting}
              className="buttonLogin"
              type="submit"
            >
              {isSubmitting ? "Invio i dati..." : <Login />}
            </button>
          </form>
        </div>
        <div className="divFormSecondaria">
          <label htmlFor="Registrati">✨Non sei Registrato? Clicca qui✨</label>
          <br />
          <Link to="/register">
            <button className="buttonLogin">Registrati</button>
          </Link>
        </div>
      </div>
      <Info />
    </>
  );
}
