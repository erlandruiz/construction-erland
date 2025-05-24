import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectScrollDownButton,
  SelectScrollUpButton,
  SelectSeparator,
  SelectTrigger,
  SelectValue,
} from "../components/ui/select";

import { Input } from "../components/ui/input";

import { Textarea } from "../components/ui/textarea";

import Button from "./Button";
const Form = () => {
  return (
    <form className="flex flex-col">
      <div className="flex flex-col gap-[20px] mb-[20px]">
        <Input type="fullname" placeholder="Nombre Completo" />
        <Input type="email" placeholder="Correo eléctronico" />
        <div className="flex flex-col xl:flex-row gap-[20px]">
          <Input type="phone" placeholder="Número telefónico" />
          <Select>
            <SelectTrigger className="w-full rounded-none h-[54px] fontsecondary outline none">
              <SelectValue placeholder="Seleccione un Servicio"></SelectValue>
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Seleccione un Servicio</SelectLabel>
                <SelectItem value="instalaciones">Instalaciones</SelectItem>
                <SelectItem value="mantenimiento">Mantenimiento</SelectItem>
                <SelectItem value="sistemas">Sistemas</SelectItem>
                <SelectItem value="proyectos">Proyectos</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
      </div>
      <div className="flex flex-col gap-6">
        {/** */}
        <Textarea className="h-[180px] resize-none rounded-none" placeholder="Escriba su  mensaje"/>
        {/** */}
        <Button text="Enviar"/>
      </div>
    </form>
  );
};

export default Form;
