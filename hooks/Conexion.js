let URL = "https://computacion.unl.edu.ec/pdml/practica1/";
export function url_api() {
  return URL;
}

export async function obtener(recurso) {
  const response = await fetch(URL + recurso);
  return await response.json();
}

export async function enviar(recurso, data) {
  const headers = {
    "Accept": "application/json",
  };

  const response = await fetch(URL + recurso, {
    method: "POST",
    headers: headers,
    body: JSON.stringify(data),
  });

  const responseData = await response.json();

  return responseData;
}

export async function obtener_autos(recurso, token){
  const headers = {
    "Accept": "application/json",
    "Content-type":"application/json",
    "TOKEN-KEY": token,
  }
  const response = await fetch(URL + recurso, {
    cache:'no-store',
    method: "GET",
    headers: headers,
  });
  const responseData = await response.json();
  return responseData;
}

export async function enviar_auto(recurso, data, token) {
  if(token==""){
    console.log("no hay token xd");
  }else{
    const headers = {
      "Accept": "application/json",
      "Content-type":"application/json",
      "TOKEN-KEY": token,
    };
  
    const response = await fetch(URL + recurso, {
      method: "POST",
      headers: headers,
      body: JSON.stringify(data),
    });
  
    const responseData = await response.json();
    return responseData;
  }
}