import { enviar, enviar_auto } from "./Conexion";
import { getToken, save, saveToken } from "./SessionUtil";

export async function inicio_sesion(data) {
  const sesion = await enviar('index.php', data);
  if (sesion && sesion.code === 200 && sesion.jwt) {
    saveToken(sesion.jwt);
    save('id', sesion.external);
    save('user', sesion.usuario);
  }
  return sesion;
}

export async function guardar_auto(data){
  const token = getToken();
  const response = await enviar_auto('index.php', data, token);
  return response;
}