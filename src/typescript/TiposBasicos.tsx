
export const TiposBasicos = () => {

  const nombre: string | number = "Raquel";
  const edad: number = 35;
  const activo: boolean = true;

  const poderes: string[] = ['Velocidad', 'Volar', 'Desaparecer'];


  return (
    <>
      <h3>Tipos básicos</h3>
      {nombre}, {edad}
      <br/>
      {poderes.join(', ')}
    </>
  )
}
