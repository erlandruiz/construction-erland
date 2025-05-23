import {  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectScrollDownButton,
  SelectScrollUpButton,
  SelectSeparator,
  SelectTrigger,
  SelectValue} from '../components/ui/select'


  import {Input} from '../components/ui/input'

  import { Textarea} from "../components/ui/textarea"

  import Button from './Button'
const Form =()=>{
    return(
        <form>
            <div>
                <Input type="fullname" placeholder= "Nombre Completo"/>
                <Input type="email" placeholder= "Correo eléctronico"/>
                <div>
                <Input type="phone" placeholder= "Número telefónico"/>
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
        </form>
    )
}

export default Form;