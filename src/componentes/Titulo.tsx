interface TituloProps {
  titulo: string;
}

function Titulo({ titulo }: TituloProps) {
  return (
    <h1
      style={{
        color: "var(--color-roxo)",
        fontWeight: 600,
        fontStyle: "italic",
        textAlign: "center",
        marginBottom: "60px",
      }}
    >
      {titulo}
    </h1>
  );
}
export default Titulo;
