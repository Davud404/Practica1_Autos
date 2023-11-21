"use client";
import Menu from "@/componentes/menu";
import Link from "next/link";
import * as Yup from 'yup';
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { useRouter } from 'next/navigation';
import { getId, getToken } from "@/hooks/SessionUtil";
import { guardar_auto } from "@/hooks/Autenticacion";
import mensajes from "@/componentes/Mensajes";
import { obtener, obtener_autos } from "@/hooks/Conexion";
import { useEffect, useState } from "react";

export default function Modificar_Auto({ params }) {
    const [respuesta, setRespuesta] = useState({});

    useEffect(() => {
        const fetchData = async () => {
            const external = params.external;
            const token = getToken();
            const id = getId();
            const response = await obtener_autos('index.php?funcion=listar_auto_user&external=' + id, token);
            const autoEncontrado = response.datos.find(auto => auto.external === external);

            if (autoEncontrado) {
                setRespuesta(autoEncontrado);
            }
        };

        fetchData();
    }, []);
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
    });


    const formOptions = { resolver: yupResolver(validationShema) };
    const { register, handleSubmit, formState } = useForm(formOptions);
    let { errors } = formState;

    const sendData = (data) => {
        console.log(data);
        var dato = {
            "funcion": "modificarAuto",
            "descripcion": data.descripcion,
            "subtotal": data.subtotal,
            "iva": data.iva,
            "total": data.total,
            "descuento": data.descuento,
            "placa": data.placa,
            "chasis": data.chasis,
            "foto": data.foto,
            "external": params,
            "marca": data.marca,
        };
        guardar_auto(dato).then((info) => {
            mensajes("Auto modificado correctamente", "OK", "success");
            router.push("/autos");
        });
    };

    const [marcas, setMarcas] = useState([]);

    useEffect(() => {
        const obtenerMarcas = async () => {
            const respuesta = await obtener('index.php?funcion=marcas');
            const marcas = respuesta && respuesta.datos ? respuesta.datos : [];
            setMarcas(marcas);
        };

        obtenerMarcas();
    }, []);
    return (
        <div className="row">
            <Menu></Menu>
            <div className="container-fluid" style={{ margin: "1%" }}>
                <div style={{ maxWidth: '600px', margin: 'auto', border: '2px solid black', padding: '20px', borderRadius: '5px' }}>
                    <form onSubmit={handleSubmit(sendData)}>
                        <div>
                            <div className="form-outline form-white mb-4">
                                <label className="form-label">Descripción</label>
                                <input
                                    {...register('descripcion')} name="descripcion" id="descripcion"
                                    defaultValue={respuesta.descripcion || ''}
                                    className={`form-control ${errors.descripcion ? 'is-invalid' : ''}`} />
                                <div className='alert alert-danger invalid-feedback'>
                                    {errors.descripcion?.message}
                                </div>
                            </div>

                            <div className="form-outline form-white mb-4">
                                <label className="form-label">Subtotal</label>
                                <input
                                    {...register('subtotal')} name="subtotal" id="subtotal"
                                    defaultValue={respuesta.subtotal || ''}
                                    className={`form-control ${errors.subtotal ? 'is-invalid' : ''}`} />
                                <div className='alert alert-danger invalid-feedback'>
                                    {errors.subtotal?.message}
                                </div>
                            </div>

                            <div className="form-outline form-white mb-4">
                                <label className="form-label">Iva</label>
                                <input
                                    {...register('iva')} name="iva" id="iva"
                                    defaultValue={respuesta.iva || ''}
                                    className={`form-control ${errors.iva ? 'is-invalid' : ''}`} />
                                <div className='alert alert-danger invalid-feedback'>
                                    {errors.iva?.message}
                                </div>
                            </div>

                            <div className="form-outline form-white mb-4">
                                <label className="form-label">Total</label>
                                <input
                                    {...register('total')} name="total" id="total"
                                    defaultValue={respuesta.total || ''}
                                    className={`form-control ${errors.total ? 'is-invalid' : ''}`} />
                                <div className='alert alert-danger invalid-feedback'>
                                    {errors.total?.message}
                                </div>
                            </div>

                            <div className="form-outline form-white mb-4">
                                <label className="form-label">Descuento</label>
                                <input
                                    {...register('descuento')} name="descuento" id="descuento"
                                    defaultValue={respuesta.descuento || ''}
                                    className={`form-control ${errors.descuento ? 'is-invalid' : ''}`} />
                                <div className='alert alert-danger invalid-feedback'>
                                    {errors.descuento?.message}
                                </div>
                            </div>

                            <div className="form-outline form-white mb-4">
                                <label className="form-label">Placa</label>
                                <input
                                    {...register('placa')} name="placa" id="placa"
                                    defaultValue={respuesta.placa || ''}
                                    className={`form-control ${errors.placa ? 'is-invalid' : ''}`} />
                                <div className='alert alert-danger invalid-feedback'>
                                    {errors.placa?.message}
                                </div>
                            </div>

                            <div className="form-outline form-white mb-4">
                                <label className="form-label">Chasis</label>
                                <input
                                    {...register('chasis')} name="chasis" id="chasis"
                                    defaultValue={respuesta.chasis || ''}
                                    className={`form-control ${errors.chasis ? 'is-invalid' : ''}`} />
                                <div className='alert alert-danger invalid-feedback'>
                                    {errors.chasis?.message}
                                </div>
                            </div>

                            <div className="form-outline form-white mb-4">
                                <label className="form-label">Foto</label>
                                <input
                                    {...register('foto')} name="foto" id="foto"
                                    defaultValue={respuesta.foto || ''}
                                    className={`form-control ${errors.foto ? 'is-invalid' : ''}`} />
                                <div className='alert alert-danger invalid-feedback'>
                                    {errors.foto?.message}
                                </div>
                            </div>

                            <div className="form-outline form-white mb-4">
                                <label className="form-label">Marca</label>
                                <div>
                                    <select id="marca" {...register('marca')} >
                                        {marcas.map((dato, index) => (
                                            <option key={index} value={dato.external} selected={respuesta.marca_external}>
                                                {dato.nombre}
                                            </option>
                                        ))}
                                    </select>
                                </div>
                            </div>
                            <button type="submit" className="btn btn-primary">Modificar</button>

                        </div>

                    </form>
                    <Link href="/autos" className="btn btn-danger">Volver</Link>
                </div>
            </div>
        </div>

    )
}