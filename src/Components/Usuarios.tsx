import { useEffect, useState } from "react";
import { reqResApi } from '../api/reqRes';
import { ReqResListado, Usuario } from '../interfaces/reqRes';

export const Usuarios = () => {

  const [usuarios, setUsuarios] = useState<Usuario[]>([])

  useEffect(() => {
    reqResApi.get<ReqResListado>('/users')
      .then( resp => {
        console.log( resp.data.data[0].last_name )

      })
      .catch(console.log)
  }, [])

  return (
    <>
      <h3>Usuarios:</h3>
      <table className="table">
        <thead>
          <tr>
            <th>Avatar</th>
            <th>Nombre</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody></tbody>
      </table>
    </>
  );
};
