"use client";
import Menu from "@/componentes/menu";
import Link from "next/link";
import * as Yup from 'yup';
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { useRouter } from 'next/navigation';
import { getId } from "@/hooks/SessionUtil";
import { guardar_auto } from "@/hooks/Autenticacion";
import mensajes from "@/componentes/Mensajes";

export default function Agregar_Auto() {
    const router = useRouter();
    //validaciones
    const validationShema = Yup.object().shape({
        descripcion: Yup.string().required("Ingrese una descripcion"),
        subtotal: Yup.string().required("Ingrese su clave"),
        iva: Yup.string().required("Ingrese un valor"),
        total: Yup.string().required("Ingrese un valor"),
        descuento: Yup.string().required("Ingrese un valor"),
        placa: Yup.string().required("Ingrese una placa"),
        chasis: Yup.string().required("Ingrese un chasis único"),
        foto: Yup.string().required("Ingrese la dirección de la imagen"),
        user: Yup.string().required("Seleccione un usuario"),
        marca: Yup.string().required("Seleccione una marca"),
    });

    const formOptions = { resolver: yupResolver(validationShema) };
    const { register, handleSubmit, formState } = useForm(formOptions);
    let { errors } = formState;

    const sendData = (data) => {
        var data = {
            "descripcion": data.descripcion,
            "subtotal": data.subtotal,
            "iva": data.iva,
            "total": data.total,
            "descuento": data.descuento,
            "placa": data.placa,
            "chasis": data.chasis,
            "foto": data.foto,
            "user": getId(),
            "marca": data.marca,
            "funcion": "guardarAuto"
        };

        guardar_auto(dato).then((info) => {
            console.log(info);
            mensajes("Auto agregado correctamente", "OK", "success");
            router.push("/autos");
        })
    };

    return (
        <div className="row">
            <Menu></Menu>
            <div className="container-fluid" style={{ margin: "1%" }}>
                <div style={{ maxWidth: '600px', margin: 'auto', border: '2px solid black', padding: '20px', borderRadius: '5px' }}>
                    <form onSubmit={handleSubmit(sendData)} style={{ display: 'flex', flexDirection: 'column' }}>
                        <div>
                            <div className="form-outline form-white mb-4">
                                <label className="form-label">Descripción</label>
                                <input
                                    {...register('descripcion')} name="descripcion" id="descripcion"
                                    className={`form-control ${errors.descripcion ? 'is-invalid' : ''}`} />
                                <div className='alert alert-danger invalid-feedback'>
                                    {errors.descripcion?.message}
                                </div>
                            </div>

                            <div className="form-outline form-white mb-4">
                                <label className="form-label">Subtotal</label>
                                <input
                                    {...register('subtotal')} name="subtotal" id="subtotal"
                                    className={`form-control ${errors.subtotal ? 'is-invalid' : ''}`} />
                                <div className='alert alert-danger invalid-feedback'>
                                    {errors.subtotal?.message}
                                </div>
                            </div>

                            <div className="form-outline form-white mb-4">
                                <label className="form-label">Iva</label>
                                <input
                                    {...register('iva')} name="iva" id="iva"
                                    className={`form-control ${errors.iva ? 'is-invalid' : ''}`} />
                                <div className='alert alert-danger invalid-feedback'>
                                    {errors.iva?.message}
                                </div>
                            </div>

                            <div className="form-outline form-white mb-4">
                                <label className="form-label">Total</label>
                                <input
                                    {...register('total')} name="total" id="total"
                                    className={`form-control ${errors.total ? 'is-invalid' : ''}`} />
                                <div className='alert alert-danger invalid-feedback'>
                                    {errors.total?.message}
                                </div>
                            </div>

                            <div className="form-outline form-white mb-4">
                                <label className="form-label">Descuento</label>
                                <input
                                    {...register('descuento')} name="descuento" id="descuento"
                                    className={`form-control ${errors.descuento ? 'is-invalid' : ''}`} />
                                <div className='alert alert-danger invalid-feedback'>
                                    {errors.descuento?.message}
                                </div>
                            </div>

                            <div className="form-outline form-white mb-4">
                                <label className="form-label">Placa</label>
                                <input
                                    {...register('placa')} name="placa" id="placa"
                                    className={`form-control ${errors.placa ? 'is-invalid' : ''}`} />
                                <div className='alert alert-danger invalid-feedback'>
                                    {errors.placa?.message}
                                </div>
                            </div>

                            <div className="form-outline form-white mb-4">
                                <label className="form-label">Chasis</label>
                                <input
                                    {...register('chasis')} name="chasis" id="chasis"
                                    className={`form-control ${errors.chasis ? 'is-invalid' : ''}`} />
                                <div className='alert alert-danger invalid-feedback'>
                                    {errors.chasis?.message}
                                </div>
                            </div>

                            <div className="form-outline form-white mb-4">
                                <label className="form-label">Foto</label>
                                <input
                                    {...register('foto')} name="foto" id="foto"
                                    className={`form-control ${errors.foto ? 'is-invalid' : ''}`} />
                                <div className='alert alert-danger invalid-feedback'>
                                    {errors.foto?.message}
                                </div>
                            </div>

                            <div className="form-outline form-white mb-4">
                                <label className="form-label">Marca</label>
                                <input
                                    {...register('marca')} name="marca" id="marca"
                                    className={`form-control ${errors.marca ? 'is-invalid' : ''}`} />
                                <div className='alert alert-danger invalid-feedback'>
                                    {errors.marca?.message}
                                </div>
                            </div>
                            <button type="submit" className="btn btn-primary" >Agregar</button>

                        </div>

                    </form>
                    <Link href="/autos" className="btn btn-danger">Volver</Link>
                </div>
            </div>
        </div>

    )
}