import "../LoginComponents/Login.css";
import { FormInput } from "../LoginComponents/Login";
import { useForm, SubmitHandler } from "react-hook-form";
import Info from "../InfoComponents/Info";
import AlertComponent from "../PageSystemComponents/AlertComponent";
import { useState } from "react";
import { Login } from "@mui/icons-material";
import { Link } from "react-router-dom";
type Genere = "Maschio" | "Femmina" | "Altro";
interface FormInputRegistrazione extends FormInput {
  nome: string;
  cognome: string;
  dataDiNascita: Date;
  genere: Genere;
}
export default function Register(): JSX.Element {
  const [isAlertPresent, setAlertPresent] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormInputRegistrazione>();
  const onSubmit: SubmitHandler<FormInput> = async (data) => {
    await new Promise((resolve) => setTimeout(resolve, 500));
    console.log(data);
    setAlertPresent(!isAlertPresent);
  };
  return (
    <>
      {isAlertPresent && (
        <AlertComponent
          messaggio="Hai effettuato la Registrazione, dato che non ho una pagina di appoggio ed un
        back-end funzionante, la view sarà sempre questa, nel momento in cui
        lavorerò a livello di backend, sarà possibile anche effettuare
        l'accesso alla view successiva"
        />
      )}
      <div className="divForm">
        <div className="divForm">
          <div className="spanTitoloPagina">Registrati al Sito</div>
          <form onSubmit={handleSubmit(onSubmit)}>
            <br />
            <input
              id="nome"
              type="text"
              placeholder=" Nome"
              {...register("nome", {
                required: "Devi Inserire il nome",
                maxLength: {
                  value: 20,
                  message: "Il nome deve essere di massimo 20 caratteri",
                },
                minLength: {
                  value: 2,
                  message: "Il nome deve avere almeno 2 caratteri",
                },
              })}
            />
            {errors.nome && (
              <div className="erroreMostratoNellaDiv ">
                {errors.nome.message}
              </div>
            )}

            <input
              id="cognome"
              type="text"
              placeholder=" Cognome"
              {...register("cognome", {
                required: "Devi Inserire il cognome",
                maxLength: {
                  value: 20,
                  message: "Il cognome deve essere di massimo 20 caratteri",
                },
                minLength: {
                  value: 2,
                  message: "Il cognome deve avere almeno 2 caratteri",
                },
              })}
            />
            {errors.cognome && (
              <div className="erroreMostratoNellaDiv ">
                {errors.cognome.message}
              </div>
            )}
            <br />

            <input
              id="email"
              type="email"
              placeholder="Inserisci la tua E-mail"
              {...register("email", {
                required: "Devi Inserire una email",
                maxLength: {
                  value: 50,
                  message: "La email deve essere di massimo 50 caratteri",
                },
                minLength: {
                  value: 5,
                  message: "La email deve avere almeno 5 caratteri",
                },
              })}
            />

            {errors.email && (
              <div className="erroreMostratoNellaDiv ">
                {errors.email.message}
              </div>
            )}
            <br />
            <input
              id="data di nascita"
              type="date"
              placeholder="Inserisci la tua data di nascita"
              {...register("dataDiNascita", {
                required: "Devi Inserire la data di nascita",
              })}
            />
            {errors.dataDiNascita && (
              <div className="erroreMostratoNellaDiv ">
                {errors.dataDiNascita.message}
              </div>
            )}
            <br />

            <input
              {...register("password", {
                required: "Devi Inserire una password",
                maxLength: {
                  value: 20,
                  message: "La password deve essere di massimo 20 caratteri",
                },
                minLength: {
                  value: 5,
                  message: "La password deve avere almeno 5 caratteri",
                },
              })}
              id="password"
              type="password"
              placeholder="Inserisci la Password"
            />
            {errors.password && (
              <div className="erroreMostratoNellaDiv ">
                {errors.password.message}
              </div>
            )}

            <br />
            <select name="Genere">
              <option value="Maschio">Maschio</option>
              <option value="Femmina">Femmina</option>
              <option value="Altro">Altro</option>
            </select>
            {errors.genere && (
              <div className="erroreMostratoNellaDiv ">
                {errors.genere.message}
              </div>
            )}
            <br />
            <div>
              <h6 className="InfoCredenziali">
                Anche se effettui la registrazione non utilizzerò i tuoi dati
                per scopi personali, la form che vedi serve solo per il progetto
                che ho realizzato, non verranno memorizzati in alcun modo
              </h6>
            </div>
            <button
              disabled={isSubmitting}
              className="buttonLogin"
              type="submit"
            >
              {isSubmitting ? "Registro i dati..." : "Registrati"}
            </button>
          </form>
        </div>
        <div className="divFormSecondaria">
          <label htmlFor="Registrati">
            ✨Hai già un account? Clicca qui.✨
          </label>
          <br />
          <Link to="/login">
            <button className="buttonLogin">
              <Login />
            </button>
          </Link>
        </div>
      </div>
      <Info />
    </>
  );
}
