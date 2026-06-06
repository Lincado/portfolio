import { Typography } from "./typography";

export default function Certificados() {
  return (
    <>
     <Typography elementType="h1" className="ml-20 mt-36 mb-36 text-secondary text-6xl font-semibold" >/certificados</Typography>
    <div className="ml-20 mask-origin-border border rounded-2xl border-primary w-80 h-56 p-5 text-center flex flex-col items-center gap-2.5"  >
      <span className="text-muted">nome do certificado</span>
      <div className="bg-white w-56 h-32 rounded-2xl"></div>
    </div>
    </>
   
  );
}
