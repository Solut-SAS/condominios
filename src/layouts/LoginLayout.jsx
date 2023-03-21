import FormRegister from './form/AppForm'
// import AppModal from '../ui/modal/AppModal'

export default function LoginLayout(){
  return (
    <div className="">
      <div className="flex flex-row">
        <div className="basis-3/6">
          <p>chao</p>
          <AppModal 
            buttonTitle='Configurar perfil' 
            modalTitle='Configura tus datos'
            doneAction={() => console.log('Guardar')} >
            <p>Hola</p>
          </AppModal>
        </div>
        <div className="basis-3/6">
          <FormRegister campos="chaooo"/>
        </div>
      </div>
    </div>
  )
}