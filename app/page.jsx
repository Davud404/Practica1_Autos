"use client";
import * as Yup from 'yup';
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { inicio_sesion } from "@/hooks/Autenticacion";
import { estaSesion } from '@/hooks/SessionUtil';
import mensajes from '@/componentes/Mensajes';
import { useRouter } from 'next/navigation';
export default function Home() {
  //router
  const router = useRouter();
  //validaciones
  const validationShema = Yup.object().shape({
    identificador: Yup.string().required("Ingrese un dni"),
    clave: Yup.string().required("Ingrese su clave")
  });

  const formOptions = { resolver: yupResolver(validationShema) };
  const { register, handleSubmit, formState } = useForm(formOptions);
  let { errors } = formState;

  const sendData = (data) => {
    var data = {"funcion":"inicio","identificador": data.identificador, "clave": data.clave};
    inicio_sesion(data).then((info) => {
      console.log(info);
      if (!estaSesion()) {
        //JOption 
        mensajes("Error al iniciar sesión!", info.msg, "error");
      } else {
        //JOption 
        mensajes("Has ingresado al sistema!", "Bienvenido", "success");
        router.push("/autos");
      }

    });
  };

  return (
    <div className="container">
      <section className="vh-100 gradient-custom">
        <div className="container py-5 h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-12 col-md-8 col-lg-6 col-xl-5">
              <div
                className="card bg-dark text-white"
                style={{ WebkitBorderRadius: "1rem" }}
              >
                <div className="card-body p-5 text-center">
                  <form onSubmit={handleSubmit(sendData)}>
                    <div className="mb-md-5 mt-md-4 pb-5">
                      <h2 className="fw-bold mb-2 text-uppercase">
                        Inicio de Sesión
                      </h2>
                      <p className="text-white-50 mb-5">
                        Ingrese su identificador y contraseña
                      </p>

                      <div className="form-outline form-white mb-4">
                        <input
                          {...register('identificador')} name="identificador" id="identificador"
                          className={`form-control ${errors.identificador ? 'is-invalid' : ''}`} />
                        <label className="form-label">Identificador</label>
                        <div className='alert alert-danger invalid-feedback'>
                          {errors.identificador?.message}
                        </div>
                      </div>

                      <div className="form-outline form-white mb-4">
                        <input
                          {...register("clave")}
                          name="clave"
                          type="password"
                          id="clave"
                          className={`form-control ${errors.clave ? "is-invalid" : ""
                            }`}
                        />
                        <label className="form-label">
                          Contraseña
                        </label>
                        <div className="alert alert-danger invalid-feedback">
                          {errors.clave?.message}
                        </div>
                      </div>

                      <p className="small mb-5 pb-lg-2">
                        <a className="text-white-50" href="#!">
                          Olvido su contraseña
                        </a>
                      </p>

                      <button
                        className="btn btn-outline-light btn-lg px-5"
                        type="submit"
                      >
                        Acceder
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}